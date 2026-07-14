const FETCH_TIMEOUT_MS = 10_000;

interface NCMResultSuccess {
	success: true;
	status: number;
	data: unknown[];
	message: string;
}

interface NCMResultError {
	success: false;
	status: number;
	message: string;
}

type NCMResult = NCMResultSuccess | NCMResultError;

export async function findAllNCM(): Promise<NCMResult> {
	try {
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

		const response = await fetch(
			"https://brasilapi.com.br/api/ncm/v1",
			{
				headers: {
					"User-Agent": "search-company/0.1.0",
					Accept: "application/json",
				},
				signal: controller.signal,
			}
		);

		clearTimeout(timeout);

		if (!response.ok) {
			return {
				success: false,
				status: response.status,
				message: `Erro na consulta. Tente novamente.`,
			};
		}

		const data = await response.json();

		return {
			success: true,
			status: 200,
			data,
			message: "Consulta realizada com sucesso",
		};
	} catch (err) {
		const message =
			err instanceof Error ? err.message : "Erro interno do servidor";
		return {
			success: false,
			status: 500,
			message,
		};
	}
}