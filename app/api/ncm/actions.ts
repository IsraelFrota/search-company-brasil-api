import { findAllNCM } from "./query";

interface Ncm {
	codigo: string;
	descricao: string;
	data_inicio: string;
	data_fim: string;
}

export interface SearchState {
	status: "idle" | "loading" | "success" | "error";
	data: Ncm[] | null;
	message: string;
}

export async function getAllNCM(
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_prevState: SearchState,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	_formData: FormData,
): Promise<SearchState> {
	const result = await findAllNCM();

	if (!result.success) {
		return {
			status: "error",
			data: null,
			message: result.message,
		};
	}

	return {
		status: "success",
		data: result.data as Ncm[],
		message: result.message,
	};
}