import { AlertCircle, CheckCircle2 } from "lucide-react";
import type { STClassification } from "@/app/api/actions";

interface STClassificationCardProps {
	classification: STClassification;
	fiscalCnae: number | null;
	fiscalCnaeDescription: string | null;
}

const decreeStyles = {
	"32900/2018": {
		border: "border-blue-200/80 dark:border-blue-800/40",
		background:
			"bg-linear-to-br from-blue-50 via-blue-50/80 to-teal-50/50 dark:from-blue-950/20 dark:via-blue-950/10 dark:to-teal-950/10",
		iconBackground: "bg-blue-100 dark:bg-blue-900/30",
		icon: "text-blue-600 dark:text-blue-400",
		text: "text-blue-600 dark:text-blue-400",
		badge:
			"bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
	},
	"29560/2008": {
		border: "border-emerald-200/80 dark:border-emerald-800/40",
		background:
			"bg-linear-to-br from-emerald-50 via-emerald-50/80 to-teal-50/50 dark:from-emerald-950/20 dark:via-emerald-950/10 dark:to-teal-950/10",
		iconBackground: "bg-emerald-100 dark:bg-emerald-900/30",
		icon: "text-emerald-600 dark:text-emerald-400",
		text: "text-emerald-600 dark:text-emerald-400",
		badge:
			"bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300",
	},
	"31270/2013": {
		border: "border-violet-200/80 dark:border-violet-800/40",
		background:
			"bg-linear-to-br from-violet-50 via-violet-50/80 to-teal-50/50 dark:from-violet-950/20 dark:via-violet-950/10 dark:to-teal-950/10",
		iconBackground: "bg-violet-100 dark:bg-violet-900/30",
		icon: "text-violet-600 dark:text-violet-400",
		text: "text-violet-600 dark:text-violet-400",
		badge:
			"bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300",
	},
} as const;

const defaultStyles = {
	border: "border-amber-200/80 dark:border-amber-800/40",
	background:
		"bg-linear-to-br from-amber-50 via-amber-50/80 to-orange-50/50 dark:from-amber-950/20 dark:via-amber-950/10 dark:to-orange-950/10",
	iconBackground: "bg-amber-100 dark:bg-amber-900/30",
	icon: "text-amber-600 dark:text-amber-400",
	text: "text-amber-600 dark:text-amber-400",
	badge:
		"bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
};

export function STClassificationCard({
	classification,
	fiscalCnae,
	fiscalCnaeDescription,
}: STClassificationCardProps) {
	const isClassified = classification.classified && classification.matchedCnae;

	if (!isClassified) {
		return (
			<div
				className={`animate-slide-up delay-75 rounded-2xl border ${defaultStyles.border} ${defaultStyles.background} p-5 sm:p-6 shadow-sm`}
			>
				<div className="flex items-center gap-2.5 mb-3">
					<div
						className={`flex items-center justify-center w-7 h-7 rounded-lg ${defaultStyles.iconBackground}`}
					>
						<AlertCircle
							className={`w-4 h-4 ${defaultStyles.icon}`}
						/>
					</div>

					<h2
						className={`text-xs font-semibold uppercase tracking-wider ${defaultStyles.text}`}
					>
						CNAE não enquadrado
					</h2>
				</div>

				<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
					O CNAE principal{" "}
					<span
						className={`inline-flex items-center px-2 py-0.5 rounded-lg font-mono font-semibold text-xs ${defaultStyles.badge}`}
					>
						{fiscalCnae ?? "—"}
					</span>{" "}
					— {fiscalCnaeDescription ?? "—"} não consta na lista de
					substituição tributária do Decreto nº{" "}
					{classification.degree}.
				</p>
			</div>
		);
	}

	const styles = decreeStyles[classification.degree as keyof typeof decreeStyles] ?? defaultStyles;

	return (
		<div
			className={`animate-slide-up delay-75 rounded-2xl border ${styles.border} ${styles.background} p-5 sm:p-6 shadow-sm`}
		>
			<div className="flex items-center gap-2.5 mb-3">
				<div
					className={`flex items-center justify-center w-7 h-7 rounded-lg ${styles.iconBackground}`}
				>
					<CheckCircle2 className={`w-4 h-4 ${styles.icon}`} />
				</div>

				<h2
					className={`text-xs font-semibold uppercase tracking-wider ${styles.text}`}
				>
					Enquadramento ST
				</h2>
			</div>

			<p className="font-bold text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed">
				Empresa enquadrada no Decreto nº {classification.degree}.
			</p>

			<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
				CNAE principal{" "}
				<span
					className={`inline-flex items-center px-2 py-0.5 rounded-lg font-mono font-semibold text-xs ${styles.badge}`}
				>
					{classification.matchedCnae && classification.matchedCnae.code}
				</span>{" "}
				— {classification.matchedCnae && classification.matchedCnae.description}
			</p>
		</div>
	);
}
