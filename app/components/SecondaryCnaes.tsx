import { Layers } from "lucide-react";
import type { CnaeSecundario } from "@/app/api/query";

export function SecondaryCnaes({ cnaes }: { cnaes: CnaeSecundario[] }) {
	if (cnaes.length === 0) return null;

	return (
		<div className="animate-slide-up delay-150 rounded-2xl card-base p-5 sm:p-6 shadow-sm">
			<div className="flex items-center gap-2.5 mb-4">
				<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-50 dark:bg-orange-950/30">
					<Layers className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
				</div>
				<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
					CNAEs Secundários
				</h2>
				<span className="ml-auto text-xs text-zinc-300 dark:text-zinc-600 font-medium">
					{cnaes.length} {cnaes.length === 1 ? "item" : "itens"}
				</span>
			</div>
			<ul className="space-y-0.5">
				{cnaes.map((cnae) => (
					<li
						key={cnae.codigo}
						className="py-2.5 flex items-baseline gap-3 text-sm rounded-xl px-2.5 -mx-2.5 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors duration-150"
					>
						<span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 font-mono text-zinc-500 dark:text-zinc-400 text-xs font-medium shrink-0">
							{cnae.codigo}
						</span>
						<span className="text-zinc-600 dark:text-zinc-400 leading-snug">
							{cnae.descricao}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
