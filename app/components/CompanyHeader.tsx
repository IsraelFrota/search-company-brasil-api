import { useState, useCallback } from "react";
import { Search, Building2 } from "lucide-react";
import { maskCnpj } from "@/app/lib/utils";

interface CompanyHeaderProps {
	formAction: (formData: FormData) => void;
	isPending: boolean;
}

export function CompanyHeader({ formAction, isPending }: CompanyHeaderProps) {
	const [cnpjValue, setCnpjValue] = useState("");
	const [filter, setFilter] = useState("");

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const input = e.target;
			const cursorPos = input.selectionStart ?? 0;
			const prevLength = cnpjValue.length;
			const masked = maskCnpj(input.value);
			setCnpjValue(masked);
			requestAnimationFrame(() => {
				const newCursorPos = cursorPos + (masked.length - prevLength);
				input.setSelectionRange(newCursorPos, newCursorPos);
			});
		},
		[cnpjValue]
	);

	return (
		<div className="animate-scale-in card-base rounded-2xl p-5 sm:p-8 mb-6 sm:mb-10 shadow-sm">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6">
				<div className="flex items-center gap-3 sm:gap-4">
					<div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-400/20 dark:shadow-amber-400/10 shrink-0">
						<Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
					</div>
					<div>
						<h1 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
							Consulta de empresa por CNPJ
						</h1>
						<p className="mt-0.5 text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
							Verifique os dados de cadastro e a classificação ST
						</p>
					</div>
				</div>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						formAction(new FormData(e.currentTarget));
					}}
					className="flex gap-2 shrink-0 w-full sm:w-auto"
					aria-busy={isPending}
				>
					<div className="relative flex-1 sm:flex-none">
						<label htmlFor="cnpj" className="sr-only">
							CNPJ
						</label>
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300 dark:text-zinc-600 pointer-events-none" aria-hidden="true" />
						<input
							id="cnpj"
							type="text"
							name="cnpj"
							value={cnpjValue}
							placeholder="00.000.000/0000-00"
							maxLength={18}
							required
							autoComplete="off"
							aria-label="CNPJ"
							aria-required="true"
							onChange={handleChange}
							className="w-full sm:w-52 pl-9 pr-4 py-2.5 text-sm border border-zinc-200 dark:border-zinc-700/50 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus:ring-2 focus:ring-amber-400/20 dark:focus:ring-amber-300/20 focus:border-amber-400 dark:focus:border-amber-400/50 transition-all duration-200"
						/>
					</div>
					<div className="relative flex-1 sm:flex-none">
						<label htmlFor="filter-type" className="sr-only">
							Segmento
						</label>
						<select
							name="filter-type"
							id="filter-type"
							value={filter}
							onChange={(e) => setFilter(e.target.value)}
							className="w-full sm:w-44 pl-3 pr-8 py-2.5 text-sm border border-zinc-200 dark:border-zinc-700/50 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus:ring-2 focus:ring-amber-400/20 dark:focus:ring-amber-300/20 focus:border-amber-400 dark:focus:border-amber-400/50 transition-all duration-200 appearance-none cursor-pointer bg-no-repeat bg-[right_0.75rem_center] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23a1a1aa%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')]"
						>
							<option value="">Todos os segmentos</option>
							<option value="Móveis">Móveis</option>
							<option value="Alimentos">Alimentos</option>
							<option value="Material de Construção">Material de Construção</option>
						</select>
					</div>
					<button
						type="submit"
						disabled={isPending}
						aria-busy={isPending}
						className="px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 dark:text-zinc-900 rounded-xl hover:from-zinc-800 hover:to-zinc-600 dark:hover:from-zinc-200 dark:hover:to-zinc-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-px active:translate-y-0 cursor-pointer whitespace-nowrap"
					>
						{isPending ? (
							<span className="flex items-center gap-2">
								<span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white dark:border-zinc-900/30 dark:border-t-zinc-900 rounded-full animate-spin" />
								Consultando
							</span>
						) : (
							"Consultar"
						)}
					</button>
				</form>
			</div>
		</div>
	);
}
