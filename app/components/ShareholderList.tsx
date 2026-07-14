import { Users } from "lucide-react";
import type { Shareholder } from "@/app/api/query";

export function ShareholderList({ qsa }: { qsa: Shareholder[] }) {
	if (qsa.length === 0) return null;

	return (
		<div className="animate-slide-up delay-225 rounded-2xl card-base p-5 sm:p-6 shadow-sm">
			<div className="flex items-center gap-2.5 mb-4">
				<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-50 dark:bg-orange-950/30">
					<Users className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
				</div>
				<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
					Quadro Societário
				</h2>
				<span className="ml-auto text-xs text-zinc-300 dark:text-zinc-600 font-medium">
					{qsa.length} {qsa.length === 1 ? "sócio" : "sócios"}
				</span>
			</div>
			<ul className="space-y-0.5">
				{qsa.map((socio) => (
					<li
						key={`${socio.cnpj_cpf_do_socio}-${socio.nome_socio}`}
						className="py-2.5 flex items-baseline justify-between gap-4 text-sm rounded-xl px-2.5 -mx-2.5 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors duration-150"
					>
						<span className="text-zinc-700 dark:text-zinc-300 font-medium">
							{socio.nome_socio}
						</span>
						<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 shrink-0">
							{socio.qualificacao_socio}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
