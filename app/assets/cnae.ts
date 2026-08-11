export interface Cnae {
	item: string;
	code: number;
	description: string;
	group: "Atacado" | "Varejo" | "Outro";
	flag?: boolean;
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
	{
		item: "1",
		code: 2751100,
		description: "Fabricação de fogões, refrigeradores e máquinas de lavar e secar para uso doméstico, peças e acessórios",
		group: "Outro",
		flag: true,
	},
	{
		item: "2",
		code: 2759701,
		description: "Fabricação de aparelhos elétricos de uso pessoal, peças e acessórios",
		group: "Outro",
		flag: true,
	},
	{
		item: "3",
		code: 2759799,
		description: "Fabricação de outros aparelhos eletrodomésticos não especificados anteriormente, peças e acessórios",
		group: "Outro",
		flag: true,
	},
	{
		item: "6",
		code: 3101200,
		description: "Fabricação de móveis com predominância de madeira",
		group: "Outro",
		flag: true,
	},
	{
		item: "7",
		code: 3102100,
		description: "Fabricação de móveis com predominância de metal",
		group: "Outro",
		flag: true,
	},
	{
		item: "8",
		code: 3103900,
		description: "Fabricação de móveis de outros materiais, exceto madeira e metal",
		group: "Outro",
		flag: true,
	},
	{
		item: "9",
		code: 4649401,
		description: "Comércio atacadista de equipamentos elétricos de uso pessoal e doméstico; Comércio atacadista de ar-condicionado para residências",
		group: "Atacado",
		flag: true,
	},
	{
		item: "10",
		code: 4649402,
		description: "Comércio atacadista de aparelhos eletrônicos de uso pessoal e doméstico",
		group: "Atacado",
		flag: true,
	},
	{
		item: "11",
		code: 4649404,
		description: "Comércio atacadista de móveis e artigos de colchoaria",
		group: "Atacado",
		flag: true,
	},
	{
		item: "12",
		code: 4649499,
		description: "Comércio atacadista de utensílios domésticos",
		group: "Atacado",
		flag: true,
	},
	{
		item: "14",
		code: 3104700,
		description: "Fabricação de colchões",
		group: "Outro",
		flag: true,
	},
	{
		item: "I",
		code: 4753900,
		description: "Comércio varejista especializado de eletrodomésticos e equipamentos de áudio e vídeo",
		group: "Varejo",
		flag: true,
	},
	{
		item: "II",
		code: 475401,
		description: "Comércio varejista de móveis",
		group: "Varejo",
		flag: true,
	},
	{
		item: "III",
		code: 4757100,
		description: "Comércio varejista especializado de peças e acessórios para aparelhos eletroeletrônicos para uso doméstico, exceto informática e comunicação",
		group: "Varejo",
		flag: true,
	},
	{
		item: "IV",
		code: 4759899,
		description: "Comércio varejista de utensílios domésticos",
		group: "Varejo",
		flag: true,
	},
];
