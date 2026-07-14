import { Building2, BarChart3 } from "lucide-react";
import type { Render } from "@/app/types";

interface NavigationProps {
	state: Render;
	handler: React.Dispatch<React.SetStateAction<Render>>;
}

export default function Navigation({ state, handler }: NavigationProps) {
	return (
		<aside className="sticky top-0 flex flex-col items-center w-20 h-screen border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
			<div className="flex flex-col justify-center items-center gap-3 py-8">
				<button
					type="button"
					className={`relative flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-200 group ${
						state === "Company"
							? "bg-amber-100 dark:bg-amber-900/30 shadow-sm"
							: "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
					}`}
					aria-label="Empresa"
					aria-current={state === "Company" ? "page" : undefined}
					onClick={() => handler("Company")}
				>
					{state === "Company" && (
						<span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-amber-500 dark:bg-amber-400 rounded-r-full" />
					)}
					<div
						className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 ${
							state === "Company"
								? "bg-amber-200 dark:bg-amber-800/50 text-amber-700 dark:text-amber-300 shadow-inner"
								: "bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800"
						}`}
					>
						<Building2 className="w-5 h-5" />
					</div>
					<span
						className={`text-[10px] font-semibold uppercase tracking-wider transition-colors ${
							state === "Company"
								? "text-amber-700 dark:text-amber-300"
								: "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
						}`}
					>
						Empresa
					</span>
				</button>

				<button
					type="button"
					className={`relative flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all duration-200 group ${
						state === "NCM"
							? "bg-amber-100 dark:bg-amber-900/30 shadow-sm"
							: "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
					}`}
					aria-label="NCM"
					aria-current={state === "NCM" ? "page" : undefined}
					onClick={() => handler("NCM")}
				>
					{state === "NCM" && (
						<span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-amber-500 dark:bg-amber-400 rounded-r-full" />
					)}
					<div
						className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 ${
							state === "NCM"
								? "bg-amber-200 dark:bg-amber-800/50 text-amber-700 dark:text-amber-300 shadow-inner"
								: "bg-zinc-100/50 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800"
						}`}
					>
						<BarChart3 className="w-5 h-5" />
					</div>
					<span
						className={`text-[10px] font-semibold uppercase tracking-wider transition-colors ${
							state === "NCM"
								? "text-amber-700 dark:text-amber-300"
								: "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
						}`}
					>
						NCM
					</span>
				</button>
			</div>
		</aside>
	);
}
