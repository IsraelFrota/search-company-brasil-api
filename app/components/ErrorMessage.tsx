import { AlertTriangle } from "lucide-react";

export function ErrorMessage({ message }: { message: string }) {
	return (
		<div
			role="alert"
			className="animate-fade-in flex items-start gap-3 p-4 sm:p-5 border border-red-200/80 dark:border-red-900/40 rounded-2xl bg-linear-to-br from-red-50 to-red-50/50 dark:from-red-950/20 dark:to-red-950/10"
		>
			<div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 shrink-0">
				<AlertTriangle className="w-4 h-4 text-red-500 dark:text-red-400" />
			</div>
			<p className="text-sm text-red-600 dark:text-red-400 pt-1">{message}</p>
		</div>
	);
}
