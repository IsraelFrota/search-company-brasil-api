export function Field({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-zinc-300 dark:text-zinc-600">
				{label}
			</span>
			<span className="text-sm text-zinc-700 dark:text-zinc-200 leading-snug">
				{children}
			</span>
		</div>
	);
}
