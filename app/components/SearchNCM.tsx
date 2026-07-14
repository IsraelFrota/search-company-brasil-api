"use client";

import { useState, useMemo } from "react";
import { useActionState } from "react";
import { Search, Filter, Hash, FileText, Calendar, X } from "lucide-react";

import { type SearchState, getAllNCM } from "@/app/api/ncm/actions";

import { ErrorMessage } from "./ErrorMessage";
import { LoadingSkeleton } from "./LoadingSkeleton";

const initialState: SearchState = {
	status: "idle",
	data: null,
	message: "",
};

const PAGE_SIZE = 50;

export default function SearchNCM() {
	const [state, formAction, isPending] = useActionState<SearchState, FormData>(
		getAllNCM,
		initialState
	);

	const [search, setSearch] = useState("");
	const [page, setPage] = useState(0);

	const filtered = useMemo(() => {
		if (!state.data) return [];
		if (!search.trim()) return state.data;

		const term = search.toLowerCase();
		return state.data.filter(
			(ncm) =>
				ncm.codigo.toLowerCase().includes(term) ||
				ncm.descricao.toLowerCase().includes(term)
		);
	}, [state.data, search]);

	const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
	const paged = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

	return (
		<div className="w-full">
			<div className="animate-scale-in card-base rounded-2xl p-5 sm:p-8 mb-6 shadow-sm">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6 mb-5">
					<div className="flex items-center gap-3 sm:gap-4">
						<div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-400/20 dark:shadow-amber-400/10 shrink-0">
							<Hash className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
						</div>
						<div>
							<h1 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
								Consulta NCM
							</h1>
							<p className="mt-0.5 text-xs sm:text-sm text-zinc-400 dark:text-zinc-500">
								Nomenclatura Comum do Mercosul
							</p>
						</div>
					</div>

					<form action={formAction} className="shrink-0">
						<button
							type="submit"
							disabled={isPending || state.status === "success"}
							className="px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 dark:text-zinc-900 rounded-xl hover:from-zinc-800 hover:to-zinc-600 dark:hover:from-zinc-200 dark:hover:to-zinc-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-px active:translate-y-0 cursor-pointer whitespace-nowrap"
						>
							{isPending ? (
								<span className="flex items-center gap-2">
									<span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white dark:border-zinc-900/30 dark:border-t-zinc-900 rounded-full animate-spin" />
									Carregando
								</span>
							) : state.status === "success" ? (
								"Dados carregados"
							) : (
								"Carregar NCMs"
							)}
						</button>
					</form>
				</div>

				{isPending && <LoadingSkeleton />}

				{!isPending && state.status === "idle" && (
					<div className="flex flex-col items-center justify-center py-12 text-center">
						<div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 mb-3">
							<FileText className="w-6 h-6" />
						</div>
						<p className="text-sm text-zinc-400 dark:text-zinc-500">
							Clique no botão acima para carregar a lista de NCMs
						</p>
					</div>
				)}

				{!isPending && state.status === "error" && (
					<ErrorMessage message={state.message} />
				)}

				{!isPending && state.status === "success" && state.data && (
					<div className="animate-fade-in">
						<div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
							<div className="relative flex-1">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300 dark:text-zinc-600 pointer-events-none" />
								<input
									type="text"
									value={search}
									onChange={(e) => {
										setSearch(e.target.value);
										setPage(0);
									}}
									placeholder="Buscar por código ou descrição..."
									className="w-full pl-9 pr-9 py-2.5 text-sm border border-zinc-200 dark:border-zinc-700/50 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 focus:ring-2 focus:ring-amber-400/20 dark:focus:ring-amber-300/20 focus:border-amber-400 dark:focus:border-amber-400/50 transition-all duration-200"
								/>
								{search && (
									<button
										type="button"
										onClick={() => {
											setSearch("");
											setPage(0);
										}}
										className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-300 dark:text-zinc-600 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors cursor-pointer"
									>
										<X className="w-4 h-4" />
									</button>
								)}
							</div>

							<div className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
								<Filter className="w-3.5 h-3.5" />
								<span>
									{filtered.length} de {state.data.length}
								</span>
							</div>
						</div>

						<div className="border border-zinc-200 dark:border-zinc-700/50 rounded-xl overflow-hidden">
							<div className="hidden sm:grid sm:grid-cols-[140px_1fr_120px] gap-2 px-4 py-2.5 bg-zinc-100 dark:bg-zinc-800/80 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
								<span>Código</span>
								<span>Descrição</span>
								<span className="text-right">Período</span>
							</div>

							<div className="divide-y divide-zinc-100 dark:divide-zinc-800 max-h-125 overflow-y-auto">
								{paged.length === 0 && (
									<div className="px-4 py-8 text-center text-sm text-zinc-400 dark:text-zinc-500">
										Nenhum resultado para &ldquo;{search}&rdquo;
									</div>
								)}
								{paged.map((ncm, i) => (
									<div
										key={`${ncm.codigo}-${i}`}
										className="grid grid-cols-1 sm:grid-cols-[140px_1fr_120px] gap-1 sm:gap-2 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors"
									>
										<span className="font-mono text-sm font-semibold text-amber-600 dark:text-amber-400">
											{ncm.codigo}
										</span>
										<span className="text-sm text-zinc-600 dark:text-zinc-300 leading-snug">
											{ncm.descricao}
										</span>
										<span className="flex items-center justify-start sm:justify-end gap-1.5 text-xs text-zinc-400 dark:text-zinc-500">
											<Calendar className="w-3 h-3 hidden sm:block" />
											<span>{ncm.data_inicio || "—"}</span>
										</span>
									</div>
								))}
							</div>
						</div>

						{totalPages > 1 && (
							<div className="flex items-center justify-between mt-4">
								<button
									type="button"
									onClick={() => setPage((p) => Math.max(0, p - 1))}
									disabled={page === 0}
									className="px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
								>
									Anterior
								</button>
								<span className="text-xs text-zinc-400 dark:text-zinc-500">
									Página {page + 1} de {totalPages}
								</span>
								<button
									type="button"
									onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
									disabled={page >= totalPages - 1}
									className="px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
								>
									Próxima
								</button>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
