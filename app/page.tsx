import SearchCompany from "@/app/components/SearchCompany";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-start min-h-screen w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
			<SearchCompany />
			<footer className="mt-auto pt-12 w-full text-center">
				<p className="text-xs text-zinc-300 dark:text-zinc-600">
					Dados fornecidos pela{" "}
					<a
						href="https://brasilapi.com.br"
						target="_blank"
						rel="noopener noreferrer"
						className="underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-600 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
					>
						Brasil API
					</a>
				</p>
			</footer>
		</div>
	);
}
