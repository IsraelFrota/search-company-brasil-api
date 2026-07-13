import { Building, MapPin, Phone } from "lucide-react";
import type { CompanyData as CompanyDataRecord } from "@/app/api/query";
import { formatCnpj, formatCurrency, formatDate, formatPhone } from "@/app/lib/utils";
import { Field } from "./Field";

export function CompanyData({ data }: { data: CompanyDataRecord }) {
	return (
		<div className="animate-slide-up rounded-2xl card-base p-5 sm:p-6 shadow-sm">
			<div className="flex items-center gap-2.5 mb-5 sm:mb-6">
				<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/30">
					<Building className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
				</div>
				<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
					Dados da Empresa
				</h2>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 sm:gap-y-5">
				<div className="sm:col-span-2">
					<Field label="Razão Social">{data.razao_social}</Field>
				</div>
				<Field label="Nome Fantasia">{data.nome_fantasia || "—"}</Field>
				<Field label="CNPJ">
					<span className="font-mono">{formatCnpj(data.cnpj)}</span>
				</Field>
				<Field label="Natureza Jurídica">{data.natureza_juridica}</Field>
				<Field label="Porte">{data.porte}</Field>
				<Field label="Capital Social">
					{formatCurrency(data.capital_social)}
				</Field>
				<Field label="Situação Cadastral">
					<span
						className={
							data.situacao_cadastral === 2
								? "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
								: "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
						}
					>
						{data.descricao_situacao_cadastral}
					</span>
				</Field>
				<Field label="Início Atividade">
					{formatDate(data.data_inicio_atividade)}
				</Field>
				<Field label="MEI">
					{data.opcao_pelo_mei === null
						? "Não informado"
						: data.opcao_pelo_mei
							? "Sim"
							: "Não"}
				</Field>
				<Field label="Simples Nacional">
					{data.opcao_pelo_simples === null
						? "Não informado"
						: data.opcao_pelo_simples
							? "Sim"
							: "Não"}
				</Field>
			</div>

			<div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/80">
				<div className="flex items-start gap-2.5">
					<div className="flex items-center justify-center w-6 h-6 rounded-md bg-zinc-50 dark:bg-zinc-800 shrink-0 mt-0.5">
						<MapPin className="w-3 h-3 text-orange-400 dark:text-orange-500" />
					</div>
					<Field label="Endereço">
						{data.descricao_tipo_de_logradouro} {data.logradouro}, {data.numero}
						{data.complemento ? ` - ${data.complemento}` : ""} - {data.bairro},{" "}
						{data.municipio} - {data.uf}, {data.cep}
					</Field>
				</div>
			</div>

			{(data.ddd_telefone_1 || data.email) && (
				<div className="mt-4">
					<div className="flex items-start gap-2.5">
						<div className="flex items-center justify-center w-6 h-6 rounded-md bg-zinc-50 dark:bg-zinc-800 shrink-0 mt-0.5">
							<Phone className="w-3 h-3 text-orange-400 dark:text-orange-500" />
						</div>
						<Field label="Contato">
							{[data.ddd_telefone_1, data.email].filter(Boolean).map(formatPhone).join(" · ")}
						</Field>
					</div>
				</div>
			)}
		</div>
	);
}
