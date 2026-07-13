import { Search, FileText, Users, BarChart3 } from "lucide-react";

const features = [
	{
		icon: FileText,
		title: "Dados Cadastrais",
		description: "Razão social, endereço, capital social, atividade econômica",
	},
	{
		icon: BarChart3,
		title: "Classificação ST",
		description: "Verificação do enquadramento no Decreto nº 29.560/2008",
	},
	{
		icon: Users,
		title: "Quadro de Sócios",
		description: "Lista completa de sócios, administradores e participações",
	},
];

export function EmptyState() {
	return (
		<div className="animate-fade-in space-y-6">
			<div className="flex flex-col items-center text-center py-8 sm:py-12">
				<div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 mb-5 shadow-sm">
					<Search className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />
				</div>
				<p className="text-sm text-zinc-400 dark:text-zinc-500 max-w-sm leading-relaxed">
					Digite um CNPJ no campo acima para consultar os dados de qualquer
					empresa registrada no Brasil.
				</p>
			</div>

			<div className="grid gap-4 sm:grid-cols-3">
				{features.map((feature) => (
					<div
						key={feature.title}
						className="rounded-2xl card-base p-5 sm:p-6 shadow-sm"
					>
						<div className="flex items-center gap-2.5 mb-3">
							<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/30">
								<feature.icon className="w-4 h-4 text-amber-500 dark:text-amber-400" />
							</div>
							<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
								{feature.title}
							</h2>
						</div>
						<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
