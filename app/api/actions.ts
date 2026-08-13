"use server";

import { searchCompanyByCnpj, type ApiSuccess } from "@/app/api/query";
import { CNAE, type Cnae } from "@/app/assets/cnae";

export interface STClassification {
	classified: boolean;
	annex: string;
	matchedCnae: Cnae | null;
	degree?: string;
	type?: string;
}

export interface SearchState {
	status: "idle" | "loading" | "success" | "error";
	data: ApiSuccess["data"] | null;
	classification: STClassification | null;
	message: string;
}

function findSTClassification(cnaeFiscal: number | null, filter = ""): STClassification {
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

	if (filter && cnae.type !== filter) {
		return {
			classified: false,
			annex: "",
			matchedCnae: null,
		};
	}

	const annex =
		cnae.group === "Atacado"
			? "Comércio Atacadista"
			: cnae.group === "Varejo" ?
				"Comércio Varejista" : "Outra Atividade Econômica";

	return {
		classified: true,
		annex,
		matchedCnae: cnae,
		degree: cnae.decree,
		type: cnae.type,
	};
}

export async function searchCompany(
	_prevState: SearchState,
	formData: FormData
): Promise<SearchState> {
	const rawCnpj = formData.get("cnpj");
	const rawFilter = formData.get("filter-type");
	const cnpj = typeof rawCnpj === "string" ? rawCnpj : "";
	const filter = typeof rawFilter === "string" ? rawFilter : "";

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

	const classification = findSTClassification(result.data.cnae_fiscal, filter);

	return {
		status: "success",
		data: result.data,
		classification,
		message: result.message,
	};
}
