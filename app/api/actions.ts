"use server";

import { searchCompanyByCnpj, type ApiSuccess } from "@/app/api/query";
import { CNAE, type Cnae } from "@/app/assets/cnae";

export interface STClassification {
	classified: boolean;
	annex: string;
	matchedCnae: Cnae | null;
	flag?: string;
}

export interface SearchState {
	status: "idle" | "loading" | "success" | "error";
	data: ApiSuccess["data"] | null;
	classification: STClassification | null;
	message: string;
}

function findSTClassification(cnaeFiscal: number | null): STClassification {
	if (cnaeFiscal == null) {
		return {
			classified: false,
			annex: "",
			matchedCnae: null,
		};
	}

	const cnae = CNAE.find((c) => c.code === cnaeFiscal);

	if (!cnae) {
		return {
			classified: false,
			annex: "",
			matchedCnae: null,
		};
	}

	const annex =
		cnae.group === "Atacado"
			? "Anexo I (Comércio Atacadista)"
			: "Anexo II (Comércio Varejista)";

	return {
		classified: true,
		annex,
		matchedCnae: cnae,
		flag: cnae.flag,
	};
}

export async function searchCompany(
	_prevState: SearchState,
	formData: FormData
): Promise<SearchState> {
	const raw = formData.get("cnpj");
	const cnpj = typeof raw === "string" ? raw : "";

	if (cnpj.trim().length === 0) {
		return {
			status: "error",
			data: null,
			classification: null,
			message: "Forneça um CNPJ.",
		};
	}

	const result = await searchCompanyByCnpj(cnpj);

	if (!result.success) {
		return {
			status: "error",
			data: null,
			classification: null,
			message: result.message,
		};
	}

	const classification = findSTClassification(result.data.cnae_fiscal);

	return {
		status: "success",
		data: result.data,
		classification,
		message: result.message,
	};
}
