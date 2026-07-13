import { FileText, Building2, HelpCircle } from "lucide-react";

export function TaxRegimeCard({
	simplesNacional,
}: {
	simplesNacional: boolean | null;
}) {
	return (
		<div className="animate-slide-up delay-75 rounded-2xl card-base p-5 sm:p-6 shadow-sm">
			<div className="flex items-center gap-2.5 mb-3">
				{simplesNacional === true ? (
					<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-50 dark:bg-amber-950/30">
						<FileText className="w-4 h-4 text-amber-500 dark:text-amber-400" />
					</div>
				) : simplesNacional === false ? (
					<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-orange-50 dark:bg-orange-950/30">
						<Building2 className="w-4 h-4 text-orange-500 dark:text-orange-400" />
					</div>
				) : (
					<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-50 dark:bg-zinc-800">
						<HelpCircle className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
					</div>
				)}
				<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
					Regime Tributário
				</h2>
			</div>
			{simplesNacional === true ? (
				<>
					<p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
						Simples Nacional
					</p>
					<p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
						Empresa optou pelo Simples Nacional. Trata-se de um regime
						tributário simplificado, baseado na faixa de receita.
					</p>
				</>
			) : simplesNacional === false ? (
				<>
					<p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
						Regime Normal (Lucro Presumido ou Lucro Real)
					</p>
					<p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
						Empresa fora do Simples Nacional. Pode estar enquadrada no Lucro
						Presumido ou no Lucro Real.
					</p>
				</>
			) : (
				<p className="text-sm text-zinc-400 dark:text-zinc-500">
					Não informado
				</p>
			)}
		</div>
	);
}
