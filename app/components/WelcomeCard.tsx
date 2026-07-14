import { Search, Building2, BarChart3, ArrowRight } from "lucide-react";

interface WelcomeCardProps {
	onSelect: (render: "Company" | "NCM") => void;
}

export function WelcomeCard({ onSelect }: WelcomeCardProps) {
	return (
		<div className="animate-scale-in flex flex-col items-center text-center max-w-lg">
			<div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-400/20 dark:shadow-amber-400/10 mb-6">
				<Search className="w-7 h-7 text-white" />
			</div>

			<h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">
				Seja bem vindo!
			</h1>
			<p className="text-sm text-zinc-400 dark:text-zinc-500 mb-8 leading-relaxed">
				Escolha uma opção abaixo para começar a consulta.
			</p>

			<div className="flex flex-col sm:flex-row gap-3 w-full">
				<button
					type="button"
					onClick={() => onSelect("Company")}
					className="flex items-center gap-3 px-5 py-4 rounded-2xl card-base shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
				>
					<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40 transition-colors">
						<Building2 className="w-5 h-5" />
					</div>
					<div className="flex-1 text-left">
						<p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
							Empresa
						</p>
						<p className="text-xs text-zinc-400 dark:text-zinc-500">
							Consulta por CNPJ
						</p>
					</div>
					<ArrowRight className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-amber-500 dark:group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
				</button>

				<button
					type="button"
					onClick={() => onSelect("NCM")}
					className="flex items-center gap-3 px-5 py-4 rounded-2xl card-base shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
				>
					<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
						<BarChart3 className="w-5 h-5" />
					</div>
					<div className="flex-1 text-left">
						<p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
							NCM
						</p>
						<p className="text-xs text-zinc-400 dark:text-zinc-500">
							Classificação fiscal
						</p>
					</div>
					<ArrowRight className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all" />
				</button>
			</div>
		</div>
	);
}
