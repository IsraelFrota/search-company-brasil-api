import { CheckCircle2, AlertCircle } from "lucide-react";
import type { STClassification } from "@/app/api/actions";

interface STClassificationCardProps {
	classification: STClassification;
	fiscalCnae: number | null;
	fiscalCnaeDescription: string | null;
}

export function STClassificationCard({
	classification,
	fiscalCnae,
	fiscalCnaeDescription,
}: STClassificationCardProps) {
	if (classification.classified && classification.matchedCnae && classification.flag === "D32900/2008") {
		return (
			<div className="animate-slide-up delay-75 rounded-2xl border border-blue-200/80 dark:border-blue-800/40 bg-linear-to-br from-blue-50 via-blue-50/80 to-teal-50/50 dark:from-blue-950/20 dark:via-blue-950/10 dark:to-teal-950/10 p-5 sm:p-6 shadow-sm">
				<div className="flex items-center gap-2.5 mb-3">
					<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/30">
						<CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
					</div>
					<h2 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
						Enquadramento ST
					</h2>
				</div>
				<p className="font-bold text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed">
					Empresa enquadrada no Decreto nº 32.900/2008 do Anexo I.
				</p>
				<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
					CNAE principal{" "}
					<span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 font-mono font-semibold text-blue-700 dark:text-blue-300 text-xs">
						{classification.matchedCnae.code}
					</span>{" "}
					— {classification.matchedCnae.description}
				</p>
			</div>
		);
	}

	if (classification.classified && classification.matchedCnae && classification.flag === "D29560/2008") {
		return (
			<div className="animate-slide-up delay-75 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40 bg-linear-to-br from-emerald-50 via-emerald-50/80 to-teal-50/50 dark:from-emerald-950/20 dark:via-emerald-950/10 dark:to-teal-950/10 p-5 sm:p-6 shadow-sm">
				<div className="flex items-center gap-2.5 mb-3">
					<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
						<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
					</div>
					<h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
						Enquadramento ST
					</h2>
				</div>
				<p className="font-bold text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed">
					Empresa enquadrada no Decreto nº 29.560/2008 do {classification.annex}.
				</p>
				<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
					CNAE principal{" "}
					<span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 font-mono font-semibold text-emerald-700 dark:text-emerald-300 text-xs">
						{classification.matchedCnae.code}
					</span>{" "}
					— {classification.matchedCnae.description}
				</p>
			</div>
		);
	}

	if (classification.classified && classification.matchedCnae && classification.flag === "D31270/2013") {
		return (
			<div className="animate-slide-up delay-75 rounded-2xl border border-violet-200/80 dark:border-violet-800/40 bg-linear-to-br from-violet-50 via-violet-50/80 to-teal-50/50 dark:from-violet-950/20 dark:via-violet-950/10 dark:to-teal-950/10 p-5 sm:p-6 shadow-sm">
				<div className="flex items-center gap-2.5 mb-3">
					<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-violet-100 dark:bg-violet-900/30">
						<CheckCircle2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
					</div>
					<h2 className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
						Enquadramento ST
					</h2>
				</div>
				<p className="font-bold text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed">
					Empresa enquadrada no Decreto nº 31.270/2013 do {classification.annex}.
				</p>
				<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
					CNAE principal{" "}
					<span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-violet-100 dark:bg-violet-900/30 font-mono font-semibold text-violet-700 dark:text-violet-300 text-xs">
						{classification.matchedCnae.code}
					</span>{" "}
					— {classification.matchedCnae.description}
				</p>
			</div>
		);
	}

	return (
		<div className="animate-slide-up delay-75 rounded-2xl border border-amber-200/80 dark:border-amber-800/40 bg-linear-to-br from-amber-50 via-amber-50/80 to-orange-50/50 dark:from-amber-950/20 dark:via-amber-950/10 dark:to-orange-950/10 p-5 sm:p-6 shadow-sm">
			<div className="flex items-center gap-2.5 mb-3">
				<div className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-900/30">
					<AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
				</div>
				<h2 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
					CNAE não enquadrado
				</h2>
			</div>
			<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
				O CNAE principal{" "}
				<span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/30 font-mono font-semibold text-amber-700 dark:text-amber-300 text-xs">
					{fiscalCnae ?? "—"}
				</span>{" "}
				— {fiscalCnaeDescription ?? "—"} não consta na lista de substituição tributária
				do Decreto nº 29.560/2008.
			</p>
		</div>
	);
}
