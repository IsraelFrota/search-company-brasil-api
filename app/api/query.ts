import { z } from "zod";

const ShareholderSchema = z
	.object({
		pais: z.string().nullable(),
		nome_socio: z.string(),
		codigo_pais: z.number().nullable(),
		faixa_etaria: z.string(),
		cnpj_cpf_do_socio: z.string(),
		qualificacao_socio: z.string(),
		codigo_faixa_etaria: z.number(),
		data_entrada_sociedade: z.string(),
		identificador_de_socio: z.number(),
		cpf_representante_legal: z.string(),
		nome_representante_legal: z.string(),
		codigo_qualificacao_socio: z.number(),
		qualificacao_representante_legal: z.string(),
		codigo_qualificacao_representante_legal: z.number(),
	})
	.passthrough();

export type Shareholder = z.infer<typeof ShareholderSchema>;

const CnaeSecundarioSchema = z
	.object({
		codigo: z.number(),
		descricao: z.string(),
	})
	.passthrough();

export type CnaeSecundario = z.infer<typeof CnaeSecundarioSchema>;

const CompanyDataSchema = z
	.object({
		uf: z.string().nullable(),
		cep: z.string().nullable(),
		qsa: z.array(ShareholderSchema),
		cnpj: z.string().nullable(),
		pais: z.string().nullable(),
		email: z.string().nullable(),
		porte: z.string().nullable(),
		bairro: z.string().nullable(),
		numero: z.string().nullable(),
		ddd_fax: z.string().nullable().transform((v) => v ?? ""),
		municipio: z.string().nullable(),
		logradouro: z.string().nullable(),
		cnae_fiscal: z.number().nullable(),
		codigo_pais: z.number().nullable(),
		complemento: z.string().nullable(),
		codigo_porte: z.number().nullable(),
		razao_social: z.string().nullable(),
		nome_fantasia: z.string().nullable(),
		capital_social: z.number().nullable(),
		ddd_telefone_1: z.string().nullable().transform((v) => v ?? ""),
		ddd_telefone_2: z.string().nullable().transform((v) => v ?? ""),
		opcao_pelo_mei: z.boolean().nullable(),
		descricao_porte: z.string().optional().default(""),
		codigo_municipio: z.number().nullable(),
		cnaes_secundarios: z.array(CnaeSecundarioSchema),
		natureza_juridica: z.string().nullable(),
		situacao_especial: z.string().nullable().transform((v) => v ?? ""),
		opcao_pelo_simples: z.boolean().nullable(),
		situacao_cadastral: z.number().nullable(),
		data_opcao_pelo_mei: z.string().nullable(),
		data_exclusao_do_mei: z.string().nullable(),
		cnae_fiscal_descricao: z.string().nullable(),
		codigo_municipio_ibge: z.number().nullable(),
		data_inicio_atividade: z.string().nullable(),
		data_situacao_especial: z.string().nullable(),
		data_opcao_pelo_simples: z.string().nullable(),
		data_situacao_cadastral: z.string().nullable(),
		nome_cidade_no_exterior: z.string().nullable(),
		codigo_natureza_juridica: z.number().nullable(),
		data_exclusao_do_simples: z.string().nullable(),
		motivo_situacao_cadastral: z.number().nullable(),
		ente_federativo_responsavel: z.string().nullable(),
		identificador_matriz_filial: z.number().nullable(),
		qualificacao_do_responsavel: z.number().nullable(),
		descricao_situacao_cadastral: z.string().nullable(),
		descricao_tipo_de_logradouro: z.string().nullable(),
		descricao_motivo_situacao_cadastral: z.string().nullable(),
		descricao_identificador_matriz_filial: z.string().nullable(),
	})
	.passthrough();

export type CompanyData = z.infer<typeof CompanyDataSchema>;

export interface ApiSuccess {
	success: true;
	status: number;
	data: CompanyData;
	message: string;
}

export interface ApiError {
	success: false;
	status: number;
	message: string;
}

const FETCH_TIMEOUT_MS = 10_000;
const CACHE_MAX_ENTRIES = 200;
const CACHE_TTL_MS = 30 * 60 * 1000;

interface CacheEntry {
	value: ApiSuccess;
	expiresAt: number;
}

const cache = new Map<string, CacheEntry>();

function cacheGet(key: string): ApiSuccess | undefined {
	const entry = cache.get(key);
	if (!entry) return undefined;
	if (Date.now() > entry.expiresAt) {
		cache.delete(key);
		return undefined;
	}
	return entry.value;
}

function cacheSet(key: string, value: ApiSuccess): void {
	if (cache.size >= CACHE_MAX_ENTRIES) {
		const oldestKey = cache.keys().next().value;
		if (oldestKey !== undefined) cache.delete(oldestKey);
	}
	cache.set(key, {
		value,
		expiresAt: Date.now() + CACHE_TTL_MS,
	});
}

function sanitizeCnpj(cnpj: string): string {
	return cnpj.replace(/\D/g, "").slice(0, 14);
}

function isValidCnpj(digits: string): boolean {
	if (digits.length !== 14) return false;

	if (new Set(digits).size === 1) return false;

	const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

	const sum1 = digits
		.slice(0, 12)
		.split("")
		.reduce((acc, d, i) => acc + Number(d) * weights1[i], 0);
	const remainder1 = sum1 % 11;
	const check1 = remainder1 < 2 ? 0 : 11 - remainder1;
	if (Number(digits[12]) !== check1) return false;

	const sum2 = digits
		.slice(0, 13)
		.split("")
		.reduce((acc, d, i) => acc + Number(d) * weights2[i], 0);
	const remainder2 = sum2 % 11;
	const check2 = remainder2 < 2 ? 0 : 11 - remainder2;
	return Number(digits[13]) === check2;
}

export async function searchCompanyByCnpj(
	cnpj: string
): Promise<ApiSuccess | ApiError> {
	const sanitized = sanitizeCnpj(cnpj);

	if (!isValidCnpj(sanitized)) {
		return {
			success: false,
			status: 400,
			message: "CNPJ inválido. Falha na verificação dos dígitos verificadores.",
		};
	}

	const cached = cacheGet(sanitized);
	if (cached) {
		return { ...cached };
	}

	try {
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

		const response = await fetch(
			`https://brasilapi.com.br/api/cnpj/v1/${sanitized}`,
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

		const raw = await response.json();
		const parsed = CompanyDataSchema.safeParse(raw);

		if (!parsed.success) {
			return {
				success: false,
				status: 500,
				message: "Resposta da API inválida. Tente novamente.",
			};
		}

		const result = {
			success: true as const,
			status: 200,
			data: parsed.data,
			message: "Consulta realizada com sucesso",
		};

		cacheSet(sanitized, result);

		return { ...result };
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
