export interface Cnae {
	item: string;
	code: number;
	description: string;
	group: "Atacado" | "Varejo" | "Outro";
	decree: "31270/2013" | "32900/2018" | "29560/2008";
	type: string;
}

export const CNAE: Cnae[] = [
	{
		item: "I",
		code: 4623108,
		description:
			"Comércio atacadista de matérias-primas agrícolas com atividade de fracionamento e acondicionamento associada",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "II",
		code: 4623199,
		description:
			"Comércio atacadista de matérias-primas agrícolas não especificadas anteriormente",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "III",
		code: 4632001,
		description: "Comércio atacadista de cereais e leguminosas beneficiados",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "IV",
		code: 4637107,
		description:
			"Comércio atacadista de chocolates, confeitos, balas, bombons e semelhantes",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "V",
		code: 4639701,
		description: "Comércio atacadista de produtos alimentícios em geral",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "VI",
		code: 4639702,
		description:
			"Comércio atacadista de produtos alimentícios em geral, com atividade de fracionamento e acondicionamento associada",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "VII",
		code: 4646002,
		description: "Comércio atacadista de produtos de higiene pessoal",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "VIII",
		code: 4647801,
		description: "Comércio atacadista de artigos de escritório e de papelaria",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "IX",
		code: 4649408,
		description:
			"Comércio atacadista de produtos de higiene, limpeza e conservação domiciliar",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "X",
		code: 4635499,
		description:
			"Comércio atacadista de bebidas não especificadas anteriormente",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XI",
		code: 4637102,
		description: "Comércio atacadista de açúcar",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XII",
		code: 4637199,
		description:
			"Comércio atacadista especializado em outros produtos alimentícios não especificados anteriormente",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XIII",
		code: 4644301,
		description: "Comércio atacadista de medicamentos e drogas de uso humano",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XIV",
		code: 4632003,
		description: "Comércio atacadista de cereais e leguminosas beneficiadas",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XV",
		code: 4691500,
		description:
			"Comércio atacadista de mercadorias em geral, com predominância de produtos alimentícios",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XVI",
		code: 4693100,
		description:
			"Comércio atacadista de mercadorias em geral, sem predominância de alimentos ou de insumos agropecuário",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XVII",
		code: 3240099,
		description:
			"Fabricação de brinquedos de qualquer material, mecanizados ou não",
		group: "Outro",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XVIII",
		code: 4649499,
		description:
			"Comércio atacadista de brinquedos de qualquer material",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XIX",
		code: 8020000,
		description:
			"Atividade de monitoramento de sistemas de segurança",
		group: "Outro",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XX",
		code: 4646001,
		description:
			"Comércio atacadista de cosméticos e produtos de perfumaria",
		group: "Atacado",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "I",
		code: 4711301,
		description:
			"Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios – hipermercados",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "II",
		code: 4711302,
		description:
			"Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios – supermercados",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "III",
		code: 4712100,
		description:
			"Comércio varejista de mercadorias em geral, com predominância de produtos alimentícios - minimercados, mercearias e armazéns",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "IV",
		code: 4721103,
		description: "Comércio varejista de laticínios e frios",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "V",
		code: 4721104,
		description: "Comércio varejista de doces, balas, bombons e semelhantes",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "VI",
		code: 4729699,
		description:
			"Comércio varejista de produtos alimentícios em geral ou especializado em produtos alimentícios não especificados anteriormente",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "VII",
		code: 4761003,
		description: "Comércio varejista de artigos de papelaria",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "VIII",
		code: 4789005,
		description: "Comércio varejista de produtos saneantes domissanitários",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "IX",
		code: 4771701,
		description:
			"Comércio varejista de produtos farmacêuticos sem manipulação de fórmula",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "X",
		code: 4771702,
		description:
			"Comércio varejista de produtos farmacêuticos com manipulação de fórmulas",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XI",
		code: 4771703,
		description: "Comércio varejista de produtos farmacêuticos homeopáticos",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XII",
		code: 4772500,
		description: "Comércio varejista de cosméticos, produtos de perfumaria e de higiene pessoal",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "XIII",
		code: 4763601,
		description: "Comércio varejista de brinquedos e artigos recreativos",
		group: "Varejo",
		decree: "29560/2008",
		type: "Alimentos"
	},
	{
		item: "1",
		code: 2751100,
		description: "Fabricação de fogões, refrigeradores e máquinas de lavar e secar para uso doméstico, peças e acessórios",
		group: "Outro",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "2",
		code: 2759701,
		description: "Fabricação de aparelhos elétricos de uso pessoal, peças e acessórios",
		group: "Outro",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "3",
		code: 2759799,
		description: "Fabricação de outros aparelhos eletrodomésticos não especificados anteriormente, peças e acessórios",
		group: "Outro",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "6",
		code: 3101200,
		description: "Fabricação de móveis com predominância de madeira",
		group: "Outro",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "7",
		code: 3102100,
		description: "Fabricação de móveis com predominância de metal",
		group: "Outro",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "8",
		code: 3103900,
		description: "Fabricação de móveis de outros materiais, exceto madeira e metal",
		group: "Outro",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "9",
		code: 4649401,
		description: "Comércio atacadista de equipamentos elétricos de uso pessoal e doméstico; Comércio atacadista de ar-condicionado para residências",
		group: "Atacado",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "10",
		code: 4649402,
		description: "Comércio atacadista de aparelhos eletrônicos de uso pessoal e doméstico",
		group: "Atacado",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "11",
		code: 4649404,
		description: "Comércio atacadista de móveis e artigos de colchoaria",
		group: "Atacado",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "12",
		code: 4649499,
		description: "Comércio atacadista de utensílios domésticos",
		group: "Atacado",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "14",
		code: 3104700,
		description: "Fabricação de colchões",
		group: "Outro",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "I",
		code: 4753900,
		description: "Comércio varejista especializado de eletrodomésticos e equipamentos de áudio e vídeo",
		group: "Varejo",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "II",
		code: 4754701,
		description: "Comércio varejista de móveis",
		group: "Varejo",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "III",
		code: 4757100,
		description: "Comércio varejista especializado de peças e acessórios para aparelhos eletroeletrônicos para uso doméstico, exceto informática e comunicação",
		group: "Varejo",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "IV",
		code: 4759899,
		description: "Comércio varejista de utensílios domésticos",
		group: "Varejo",
		decree: "32900/2018",
		type: "Móveis"
	},
	{
		item: "1",
		code: 2311700,
		description: "Fabricação de vidro plano e de segurança",
		group: "Outro",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "2",
		code: 2319200,
		description: "Fabricação de artigos de vidro",
		group: "Outro",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "3",
		code: 2330301,
		description: "Fabricação de estruturas pré-moldadas de concreto armado, em série e sob encomenda",
		group: "Outro",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "4",
		code: 2342701,
		description: "Fabricação de azulejos e pisos",
		group: "Outro",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "5",
		code: 2342702,
		description: "Fabricação de artefatos de cerâmica e barro cozido para uso na construção, exceto azulejos e pisos",
		group: "Outro",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "6",
		code: 2349499,
		description: "Fabricação de produtos cerâmicos não-refratários não especificado anteriormente",
		group: "Outro",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "7",
		code: 2392300,
		description: "Fabricação de cal e gesso",
		group: "Outro",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "8",
		code: 4649406,
		description: "Comércio atacadista de lustres, luminárias e abajures",
		group: "Atacado",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "9",
		code: 4672900,
		description: "Comércio atacadista de ferragens e ferramentas",
		group: "Atacado",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "10",
		code: 4673700,
		description: "Comércio atacadista de material elétrico",
		group: "Atacado",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "11",
		code: 4679601,
		description: "Comércio atacadista de tintas, vernizes e similares",
		group: "Atacado",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "12",
		code: 4679603,
		description: "Comércio atacadista de vidros, espelhos e vitrais",
		group: "Atacado",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "13",
		code: 4679604,
		description: "Comércio atacadista especializado de materiais de construção não especificados anteriormente",
		group: "Atacado",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "14",
		code: 4679699,
		description: "Comércio atacadista de materiais de construção em geral",
		group: "Atacado",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "15",
		code: 4671100,
		description: "Comércio atacadista de madeira e produtos derivados",
		group: "Atacado",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "1",
		code: 4741500,
		description: "Comércio varejista de tintas e materiais para pintura",
		group: "Varejo",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "2",
		code: 4742300,
		description: "Comércio varejista de material elétrico",
		group: "Varejo",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "3",
		code: 4743100,
		description: "Comércio varejista de vidros",
		group: "Varejo",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "4",
		code: 4744001,
		description: "Comércio varejista de ferragens e ferramentas",
		group: "Varejo",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "5",
		code: 4744003,
		description: "Comércio varejista de materiais hidráulicos",
		group: "Varejo",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "6",
		code: 4744005,
		description: "Comércio varejista de materiais de construção não especificados anteriormente",
		group: "Varejo",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "7",
		code: 4744099,
		description: "Comércio varejista de materiais de construção em geral",
		group: "Varejo",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "8",
		code: 4754703,
		description: "Comércio varejista de artigos de iluminação",
		group: "Varejo",
		decree: "31270/2013",
		type: "Material de Construção"
	},
	{
		item: "9",
		code: 4744002,
		description: "Comércio varejista de madeira e artefatos",
		group: "Varejo",
		decree: "31270/2013",
		type: "Material de Construção"
	},
];
