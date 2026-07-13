# Search Company

Aplicação web para consulta de dados de empresas brasileiras a partir do CNPJ, com classificação automática de enquadramento na Substituição Tributária de ICMS do Estado do Ceará (Decreto nº 29.560/2008).

## Funcionalidades

- **Consulta por CNPJ** — busca os dados completos de qualquer empresa ativa no Brasil via [Brasil API](https://brasilapi.com.br)
- **Validação de CNPJ** — verificação dos dígitos verificadores antes de consultar a API
- **Máscara de entrada** — formatação automática do CNPJ durante a digitação (`XX.XXX.XXX/XXXX-XX`)
- **Classificação ST** — cruza o CNAE fiscal principal da empresa com a lista de CNAEs sujeitos à Substituição Tributária de ICMS (Decreto nº 29.560/2008 — Anexo I/II)
- **Regime Tributário** — indica se a empresa é optante pelo Simples Nacional ou Regime Normal
- **Dados da Empresa** — razão social, nome fantasia, endereço, contato, capital social, situação cadastral e mais
- **CNAEs Secundários** — listagem completa das atividades secundárias registradas
- **Quadro Societário** — lista de sócios com respectivas qualificações
- **Dark Mode** — suporte completo a modo escuro via `prefers-color-scheme`
- **Responsividade** — layout adaptável de mobile a desktop

## Tecnologias

| Camada | Tecnologia | Versão |
|--------|-----------|--------|
| Framework | [Next.js](https://nextjs.org/) (App Router + Turbopack) | 16.2.10 |
| UI | [React](https://react.dev/) | 19.2.4 |
| Estilo | [Tailwind CSS](https://tailwindcss.com/) (CSS-first, v4) | ^4 |
| Ícones | [Lucide React](https://lucide.dev/) | ^1.24.0 |
| Linguagem | [TypeScript](https://www.typescriptlang.org/) | ^5 |
| Formatação | [Prettier](https://prettier.io/) | ^3.9.5 |
| Linting | [ESLint](https://eslint.org/) + `eslint-config-next` | ^9 |

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado: LTS)
- npm, yarn ou pnpm

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/search-company.git
cd search-company

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa o ESLint |

## Estrutura do Projeto

```
search-company/
├── app/
│   ├── globals.css             # Estilos globais, tema CSS, animações
│   ├── layout.tsx              # Layout raiz (fontes, metadata)
│   ├── page.tsx                # Página principal
│   ├── api/
│   │   ├── actions.ts          # Server Action (busca + classificação)
│   │   └── query.ts            # Consulta à Brasil API + validação
│   ├── assets/
│   │   └── cnae.ts             # Base de dados de CNAEs (26 itens)
│   ├── components/
│   │   ├── SearchCompany.tsx   # Orquestrador principal (client)
│   │   ├── CompanyHeader.tsx   # Formulário de busca
│   │   ├── CompanyData.tsx     # Card de dados da empresa
│   │   ├── STClassificationCard.tsx  # Card de classificação ST
│   │   ├── TaxRegimeCard.tsx   # Card de regime tributário
│   │   ├── SecondaryCnaes.tsx  # Lista de CNAEs secundários
│   │   ├── ShareholderList.tsx  # Lista de sócios (QSA)
│   │   ├── Field.tsx           # Componente reutilizável de campo
│   │   ├── LoadingSkeleton.tsx  # Skeleton de carregamento
│   │   └── ErrorMessage.tsx    # Exibição de erros
│   └── lib/
│       └── utils.ts            # Funções utilitárias (formatação)
├── public/
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── .prettierrc
```

## Arquitetura

### Fluxo de uma consulta

```
Formulário (Client)
  → Server Action: searchCompany()
    → searchCompanyByCnpj()
      → Validação de dígitos verificadores
      → Fetch: brasilapi.com.br/api/cnpj/v1/{cnpj}
    → findSTClassification()
      → Cruza CNAE fiscal com base local (26 CNAEs)
    → Retorna SearchState ao componente
```

### Server Actions

A aplicação utiliza **React Server Actions** (`"use server"`) para o fluxo de busca, eliminando a necessidade de criar rotas de API intermediárias. A Server Action:

1. Recebe o `FormData` do formulário
2. Valida o CNPJ (dígitos verificadores)
3. Consulta a Brasil API com timeout de 10 segundos
4. Classifica o CNAE contra a base local
5. Retorna o estado atualizado ao componente client

### Classificação ST

O sistema verifica se o CNAE fiscal principal da empresa consta na lista de atividades sujeitas à Substituição Tributária de ICMS do Estado do Ceará:

- **Anexo I** — Comércio Atacadista (16 CNAEs)
- **Anexo II** — Comércio Varejista (10 CNAEs)

## Componentes

| Componente | Descrição |
|------------|-----------|
| `SearchCompany` | Orquestrador principal, gerencia o estado via `useActionState` |
| `CompanyHeader` | Formulário de busca com ícone, input com máscara e botão |
| `CompanyData` | Exibe dados cadastrais, endereço e contato |
| `STClassificationCard` | Mostra resultado da classificação ST (enquadrado/não enquadrado) |
| `TaxRegimeCard` | Indica regime tributário (Simples Nacional / Regime Normal) |
| `SecondaryCnaes` | Lista paginável de CNAEs secundários |
| `ShareholderList` | Lista de sócios com qualificação |
| `Field` | Campo reutilizável (label + valor) |
| `LoadingSkeleton` | Esqueleto de carregamento com animação shimmer |
| `ErrorMessage` | Alerta de erro estilizado |

## Estilização

- **Tailwind CSS v4** — configuração CSS-first via `@theme inline` no `globals.css`
- **Glassmorphism** — cards com `backdrop-blur` e backgrounds semi-transparentes
- **Gradientes** — mesh de radial-gradients no fundo e gradientes nos cards de status
- **Animações** — `fadeIn`, `slideUp`, `scaleIn`, `shimmer` com easing `cubic-bezier`
- **Dark Mode** — via variáveis CSS + media query `prefers-color-scheme: dark`
- **Responsividade** — breakpoints `sm`, `md`, `lg` com grid adaptativo

## API Utilizada

[Brasil API](https://brasilapi.com.br) — endpoint `GET /api/cnpj/v1/{cnpj}`

Dados retornados incluem: razão social, CNPJ, CNAE, endereço, sócios, situação cadastral, regime tributário, entre outros.

## Licença

Este projeto é de uso privado.
