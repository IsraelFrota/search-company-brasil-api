export interface Cnae {
	item: string;
	code: number;
	description: string;
	group: "Atacado" | "Varejo";
}

export const CNAE: Cnae[] = [
	{
		item: "I",
		code: 4623108,
		description:
			"Comércio atacadista de matérias-primas agrícolas com atividade de fracionamento e acondicionamento associada",
		group: "Atacado",
	},
	{
		item: "II",
		code: 4623199,
		description:
			"Comércio atacadista de matérias-primas agrícolas não especificadas anteriormente",
		group: "Atacado",
	},
	{
		item: "III",
		code: 4632001,
		description: "Comércio atacadista de cereais e leguminosas beneficiados",
		group: "Atacado",
	},
	{
		item: "IV",
		code: 4637107,
		description:
			"Comércio atacadista de chocolates, confeitos, balas, bombons e semelhantes",
		group: "Atacado",
	},
	{
		item: "V",
		code: 4639701,
		description: "Comércio atacadista de produtos alimentícios em geral",
		group: "Atacado",
	},
	{
		item: "VI",
		code: 4639702,
		description:
			"Comércio atacadista de produtos alimentícios em geral, com atividade de fracionamento e acondicionamento associada",
		group: "Atacado",
	},
	{
		item: "VII",
		code: 4646002,
		description: "Comércio atacadista de produtos de higiene pessoal",
		group: "Atacado",
	},
	{
		item: "VIII",
		code: 4647801,
		description: "Comércio atacadista de artigos de escritório e de papelaria",
		group: "Atacado",
	},
	{
		item: "IX",
		code: 4649408,
		description:
			"Comércio atacadista de produtos de higiene, limpeza e conservação domiciliar",
		group: "Atacado",
	},
	{
		item: "X",
		code: 4635499,
		description:
			"Comércio atacadista de bebidas não especificadas anteriormente",
		group: "Atacado",
	},
	{
		item: "XI",
		code: 4637102,
		description: "Comércio atacadista de açúcar",
		group: "Atacado",
	},
	{
		item: "XII",
		code: 4637199,
		description:
			"Comércio atacadista especializado em outros produtos alimentícios não especificados anteriormente",
		group: "Atacado",
	},
	{
		item: "XIII",
		code: 4644301,
		description: "Comércio atacadista de medicamentos e drogas de uso humano",
		group: "Atacado",
	},
	{
		item: "XIV",
		code: 4632003,
		description: "Comércio atacadista de cereais e leguminosas beneficiadas",
		group: "Atacado",
	},
	{
		item: "XV",
		code: 4691500,
		description:
			"Comércio atacadista de mercadorias em geral, com predominância de produtos alimentícios",
		group: "Atacado",
	},
	{
		item: "XVI",
		code: 4693100,
		description:
			"Comércio atacadista de mercadorias em geral, sem predominância de alimentos ou de insumos agropecuário",
		group: "Atacado",
	},
	{
		item: "I",
		code: 4711301,
		description:
			"Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios – hipermercados",
		group: "Varejo",
	},
	{
		item: "II",
		code: 4711302,
		description:
			"Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios – supermercados",
		group: "Varejo",
	},
	{
		item: "III",
		code: 4712100,
		description:
			"Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - minimercados, mercearias e armazéns",
		group: "Varejo",
	},
	{
		item: "IV",
		code: 4721103,
		description: "Comércio varejista de laticínios e frios",
		group: "Varejo",
	},
	{
		item: "V",
		code: 4721104,
		description: "Comércio varejista de doces, balas, bombons e semelhantes",
		group: "Varejo",
	},
	{
		item: "VI",
		code: 4729699,
		description:
			"Comércio varejista de produtos alimentícios em geral ou especializado em produtos alimentícios não especificados anteriormente",
		group: "Varejo",
	},
	{
		item: "VII",
		code: 4761003,
		description: "Comércio varejista de artigos de papelaria",
		group: "Varejo",
	},
	{
		item: "VIII",
		code: 4789005,
		description: "Comércio varejista de produtos saneantes domissanitários",
		group: "Varejo",
	},
	{
		item: "IX",
		code: 4771701,
		description:
			"Comércio varejista de produtos farmacêuticos sem manipulação de fórmula",
		group: "Varejo",
	},
	{
		item: "X",
		code: 4771702,
		description:
			"Comércio varejista de produtos farmacêuticos com manipulação de fórmulas",
		group: "Varejo",
	},
	{
		item: "XI",
		code: 4771703,
		description: "Comércio varejista de produtos farmacêuticos homeopáticos",
		group: "Varejo",
	},
];
