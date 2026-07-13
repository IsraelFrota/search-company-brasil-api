export function LoadingSkeleton() {
	return (
		<div role="status" aria-live="polite" className="space-y-4 sm:space-y-5 animate-fade-in">
			<span className="sr-only">Carregando dados da empresa...</span>
			<div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
				<div className="rounded-2xl card-base p-5 sm:p-6 shadow-sm">
					<div className="h-3 w-28 animate-shimmer rounded-lg mb-5" />
					<div className="space-y-3">
						<div className="h-3 w-full animate-shimmer rounded-lg" />
						<div className="h-3 w-4/5 animate-shimmer rounded-lg" />
					</div>
				</div>
				<div className="rounded-2xl card-base p-5 sm:p-6 shadow-sm">
					<div className="h-3 w-28 animate-shimmer rounded-lg mb-5" />
					<div className="space-y-3">
						<div className="h-3 w-full animate-shimmer rounded-lg" />
						<div className="h-3 w-4/5 animate-shimmer rounded-lg" />
					</div>
				</div>
			</div>
			<div className="rounded-2xl card-base p-5 sm:p-6 shadow-sm">
				<div className="h-3 w-32 animate-shimmer rounded-lg mb-6" />
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4 sm:gap-y-5">
					{Array.from({ length: 8 }).map((_, i) => (
						<div key={i} className="flex flex-col gap-2.5">
							<div className="h-2.5 w-16 animate-shimmer rounded-lg" />
							<div className="h-4 w-full animate-shimmer rounded-lg" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
