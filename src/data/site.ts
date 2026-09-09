export const SPORT_STORE_URL = "#vinilart-sport";

export const nav = [
  {
    label: "Início",
    to: "/" as const,
  },
  {
    label: "Serviços",
    to: "/servicos" as const,
  },
  {
    label: "Portefólio",
    to: "/portfolio" as const,
  },
  {
    label: "Sobre",
    to: "/sobre" as const,
  },
  {
    label: "VinilArt Sport",
    to: "/#vinilart-sport" as const,
    accent: true,
  },
  {
    label: "Contactos",
    to: "/contactos" as const,
  },
];

export type Service = {
  slug: string;
  title: string;
  text: string;
  image: string;
  tone: "magenta" | "cyan" | "yellow" | "neutral";
};

export const services: Service[] = [
  {
    slug: "logotipos-3d",
    title: "Logotipos 3D",
    text: "Soluções tridimensionais para dar mais presença e impacto à identidade de uma marca ou espaço.",
    image: "Logotipo tridimensional aplicado em parede ou fachada",
    tone: "yellow",
  },
  {
    slug: "design",
    title: "Design",
    text: "Desenvolvimento visual e peças gráficas adaptadas às necessidades de cada projeto.",
    image: "Processo de desenvolvimento gráfico em estúdio",
    tone: "magenta",
  },
  {
    slug: "impressao",
    title: "Impressão",
    text: "Soluções de impressão para diferentes aplicações, formatos e suportes.",
    image: "Impressão de grande formato em produção",
    tone: "cyan",
  },
  {
    slug: "decoracao-de-montras",
    title: "Decoração de Montras",
    text: "Comunicação visual e personalização para transformar montras em pontos de contacto com a marca.",
    image: "Montra decorada com aplicação de vinil",
    tone: "magenta",
  },
  {
    slug: "decoracao-de-interiores",
    title: "Decoração de Interiores",
    text: "Aplicações visuais para dar identidade a espaços comerciais, profissionais ou institucionais.",
    image: "Parede interior com aplicação gráfica",
    tone: "cyan",
  },
  {
    slug: "decoracao-de-viaturas",
    title: "Decoração de Viaturas",
    text: "Personalização gráfica de viaturas para transformar cada deslocação numa oportunidade de comunicação.",
    image: "Aplicação de vinil em viatura",
    tone: "yellow",
  },
  {
    slug: "brindes",
    title: "Brindes",
    text: "Artigos personalizados para empresas, marcas, equipas e eventos.",
    image: "Artigos promocionais personalizados",
    tone: "neutral",
  },
  {
    slug: "estampagem",
    title: "Estampagem",
    text: "Personalização de vestuário e outros artigos de forma adaptada a cada projeto.",
    image: "Estampagem de vestuário em produção",
    tone: "magenta",
  },
];

export const portfolioCategories = [
  "Todos",
  "Viaturas",
  "Montras",
  "Interiores",
  "Estampagem",
  "Logotipos 3D",
  "Impressão",
  "Brindes",
] as const;

export type PortfolioItem = {
  id: string;
  category: Exclude<
    (typeof portfolioCategories)[number],
    "Todos"
  >;
  image: string;
  ratio: string;
  tone: "magenta" | "cyan" | "yellow" | "neutral";
};

export const portfolio: PortfolioItem[] = [
  {
    id: "p01",
    category: "Viaturas",
    image: "Viatura personalizada — vista lateral",
    ratio: "4 / 5",
    tone: "cyan",
  },
  {
    id: "p02",
    category: "Montras",
    image: "Montra comercial decorada",
    ratio: "4 / 3",
    tone: "magenta",
  },
  {
    id: "p03",
    category: "Logotipos 3D",
    image: "Logotipo 3D em receção",
    ratio: "1 / 1",
    tone: "yellow",
  },
  {
    id: "p04",
    category: "Interiores",
    image: "Espaço interior com aplicação gráfica",
    ratio: "16 / 10",
    tone: "cyan",
  },
  {
    id: "p05",
    category: "Estampagem",
    image: "Vestuário personalizado",
    ratio: "4 / 5",
    tone: "magenta",
  },
  {
    id: "p06",
    category: "Impressão",
    image: "Impressão de grande formato",
    ratio: "4 / 3",
    tone: "neutral",
  },
  {
    id: "p07",
    category: "Brindes",
    image: "Conjunto de brindes personalizados",
    ratio: "1 / 1",
    tone: "yellow",
  },
  {
    id: "p08",
    category: "Viaturas",
    image: "Frota de viaturas personalizada",
    ratio: "16 / 10",
    tone: "magenta",
  },
  {
    id: "p09",
    category: "Montras",
    image: "Vinil de corte em vidro",
    ratio: "1 / 1",
    tone: "cyan",
  },
  {
    id: "p10",
    category: "Interiores",
    image: "Sinalética interior",
    ratio: "4 / 5",
    tone: "yellow",
  },
  {
    id: "p11",
    category: "Estampagem",
    image: "Equipamento desportivo estampado",
    ratio: "4 / 3",
    tone: "cyan",
  },
  {
    id: "p12",
    category: "Logotipos 3D",
    image: "Letras tridimensionais em fachada",
    ratio: "16 / 10",
    tone: "magenta",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Ideia",
    text: "Percebemos o objetivo, contexto e resultado pretendido.",
  },
  {
    n: "02",
    title: "Criação",
    text: "Desenvolvemos a solução visual mais adequada ao projeto.",
  },
  {
    n: "03",
    title: "Produção",
    text: "Preparamos e executamos o trabalho com atenção ao detalhe.",
  },
  {
    n: "04",
    title: "Aplicação",
    text: "Levamos a solução final ao espaço, produto ou suporte definido.",
  },
];

export const sportServices = [
  "Equipamentos & Caneleiras à tua medida",
  "Bandeiras & Artigos para Adeptos",
  "Estampagem",
  "Impressão",
];

export const contact = {
  street: "Rua São Luís 7A",
  city: "Oeiras",
  zip: "2780-036 Portugal",

  instagram: "@vinilart.pt",
  instagramUrl: "https://www.instagram.com/vinilart.pt/",

  instagramSport: "@vinilartsport",
  instagramSportUrl: "https://www.instagram.com/vinilartsport/",
};

export const mapEmbedUrl =
  "https://www.google.com/maps?q=Rua+S%C3%A3o+Lu%C3%ADs+7A,+2780-036+Oeiras,+Portugal&z=16&output=embed";
