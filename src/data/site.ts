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

export interface HeroProject {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  role: "dominant" | "secondary";
  tone?: "magenta" | "cyan" | "yellow";
  aspectRatio?: string;
  objectPosition?: string;
}

export const heroProjects: [HeroProject, HeroProject, HeroProject] = [
  {
    id: "aura",
    title: "Aura",
    category: "Personalização de espaços",
    image: "/portfolio/aura-glow-bar.jpg",
    alt: "Projeto de personalização interior Aura",
    role: "dominant",
    tone: "cyan",
    aspectRatio: "4 / 3",
    objectPosition: "center",
  },
  {
    id: "holy-moly",
    title: "Holy Moly",
    category: "Fachada e identidade visual",
    image: "/portfolio/holy-moly-fachada.jpg",
    alt: "Fachada personalizada Holy Moly",
    role: "secondary",
    tone: "magenta",
    aspectRatio: "4 / 3",
    objectPosition: "center",
  },
  {
    id: "hasse",
    title: "Hasse",
    category: "Stand e sinalética",
    image: "/portfolio/hasse-sinaletica-stand-01.jpg",
    alt: "Stand e sinalética personalizada Hasse",
    role: "secondary",
    tone: "yellow",
    aspectRatio: "4 / 3",
    objectPosition: "center",
  },
];

export type Service = {
  slug: string;
  title: string;
  text: string;
  image: string;
  sublabel?: string;
  src?: string;
  tone: "magenta" | "cyan" | "yellow" | "neutral";
};

export const services: Service[] = [
  {
    slug: "logotipos-3d",
    title: "Logotipos 3D",
    text: "Soluções tridimensionais para dar mais presença e impacto à identidade de uma marca ou espaço.",
    image: "Logotipo e relevo 3D",
    sublabel: "Aplicação de identidade visual em parede",
    src: "/portfolio/holy-moly-logotipo-parede.jpg",
    tone: "cyan",
  },
  {
    slug: "design",
    title: "Design",
    text: "Desenvolvimento visual e peças gráficas adaptadas às necessidades de cada projeto.",
    image: "Design e comunicação visual",
    sublabel: "Comunicação gráfica aplicada ao espaço",
    src: "/portfolio/aura-sinaletica-frase.jpg",
    tone: "magenta",
  },
  {
    slug: "impressao",
    title: "Impressão",
    text: "Soluções de impressão para diferentes aplicações, formatos e suportes.",
    image: "Impressão & suportes gráficos",
    sublabel: "Produção gráfica para comunicação e sinalética",
    src: "/portfolio/hasse-sinaletica-stand-02.jpg",
    tone: "cyan",
  },
  {
    slug: "decoracao-de-montras",
    title: "Decoração de Montras",
    text: "Comunicação visual e personalização para transformar montras em pontos de contacto com a marca.",
    image: "Decoração de montras",
    sublabel: "Aplicação gráfica em vidro",
    src: "/portfolio/aura-vinil-vidro.jpg",
    tone: "magenta",
  },
  {
    slug: "decoracao-de-interiores",
    title: "Decoração de Interiores",
    text: "Aplicações visuais para dar identidade a espaços comerciais, profissionais ou institucionais.",
    image: "Decoração de interiores",
    sublabel: "Personalização gráfica e identidade de espaços",
    src: "/portfolio/aura-espaco-interior.jpg",
    tone: "cyan",
  },
  {
    slug: "decoracao-de-viaturas",
    title: "Decoração de Viaturas",
    text: "Personalização gráfica de viaturas para transformar cada deslocação numa oportunidade de comunicação.",
    image: "Personalização de viaturas",
    sublabel: "Decoração gráfica e comunicação móvel",
    tone: "yellow",
  },
  {
    slug: "brindes",
    title: "Brindes",
    text: "Artigos personalizados para empresas, marcas, equipas e eventos.",
    image: "Brindes e artigos personalizados",
    sublabel: "Personalização para marcas, empresas e eventos",
    tone: "neutral",
  },
  {
    slug: "estampagem",
    title: "Estampagem",
    text: "Personalização de vestuário e outros artigos de forma adaptada a cada projeto.",
    image: "Personalização de vestuário",
    sublabel: "Estampagem e personalização têxtil",
    tone: "magenta",
  },
];

export const portfolioCategories = [
  "Todos",
  "Interiores",
  "Expositores",
  "Sinalética",
  "Montras",
  "Fachadas",
  "Identidade Visual",
] as const;

export type PortfolioItem = {
  id: string;
  category: Exclude<(typeof portfolioCategories)[number], "Todos">;
  image: string;
  sublabel?: string;
  src?: string;
  ratio: string;
  tone: "magenta" | "cyan" | "yellow" | "neutral";
  featured?: boolean;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "p-aura-glow-bar",
    category: "Interiores",
    image: "Aura — Glow Bar",
    sublabel: "Personalização e identidade visual aplicada ao espaço",
    src: "/portfolio/aura-glow-bar.jpg",
    ratio: "16 / 9",
    tone: "cyan",
    featured: true,
  },
  {
    id: "p-aura-espaco-interior",
    category: "Interiores",
    image: "Aura — Espaço Interior",
    sublabel: "Decoração e identidade visual de espaço comercial",
    src: "/portfolio/aura-espaco-interior.jpg",
    ratio: "4 / 3",
    tone: "magenta",
    featured: true,
  },
  {
    id: "p-aura-balcao-logo",
    category: "Identidade Visual",
    image: "Aura — Balcão",
    sublabel: "Aplicação de identidade visual em balcão",
    src: "/portfolio/aura-balcao-logo.jpg",
    ratio: "4 / 3",
    tone: "cyan",
  },
  {
    id: "p-aura-expositor-pedestal",
    category: "Expositores",
    image: "Aura — Expositor Pedestal",
    sublabel: "Expositor personalizado para apresentação de produto",
    src: "/portfolio/aura-expositor-pedestal.jpg",
    ratio: "3 / 4",
    tone: "yellow",
  },
  {
    id: "p-aura-expositor-produtos",
    category: "Expositores",
    image: "Aura — Expositor de Produtos",
    sublabel: "Expositor integrado no espaço comercial",
    src: "/portfolio/aura-expositor-produtos-01.jpg",
    ratio: "4 / 5",
    tone: "magenta",
  },
  {
    id: "p-aura-parede-produtos",
    category: "Interiores",
    image: "Aura — Parede de Produtos",
    sublabel: "Comunicação e exposição de produto em parede",
    src: "/portfolio/aura-parede-produtos.jpg",
    ratio: "4 / 3",
    tone: "cyan",
  },
  {
    id: "p-aura-sinaletica-frase",
    category: "Sinalética",
    image: "Aura — Sinalética",
    sublabel: "Mensagem gráfica aplicada ao espaço",
    src: "/portfolio/aura-sinaletica-frase.jpg",
    ratio: "4 / 3",
    tone: "magenta",
  },
  {
    id: "p-aura-sinaletica-mesa",
    category: "Sinalética",
    image: "Aura — Sinalética de Mesa",
    sublabel: "Peça de sinalética e comunicação personalizada",
    src: "/portfolio/aura-sinaletica-mesa.jpg",
    ratio: "3 / 4",
    tone: "yellow",
  },
  {
    id: "p-aura-vinil-vidro",
    category: "Montras",
    image: "Aura — Vinil em Vidro",
    sublabel: "Aplicação de vinil e identidade visual em vidro",
    src: "/portfolio/aura-vinil-vidro.jpg",
    ratio: "4 / 3",
    tone: "cyan",
    featured: true,
  },
  {
    id: "p-hasse-expositor-interior-01",
    category: "Expositores",
    image: "Hasse — Expositor Interior",
    sublabel: "Expositor personalizado integrado no espaço",
    src: "/portfolio/hasse-expositor-interior-01.jpg",
    ratio: "4 / 3",
    tone: "yellow",
    featured: true,
  },
  {
    id: "p-hasse-expositor-interior-02",
    category: "Expositores",
    image: "Hasse — Expositor Interior",
    sublabel: "Desenvolvimento de solução de exposição personalizada",
    src: "/portfolio/hasse-expositor-interior-02.jpg",
    ratio: "4 / 3",
    tone: "cyan",
  },
  {
    id: "p-hasse-sinaletica-stand-01",
    category: "Sinalética",
    image: "Hasse — Stand",
    sublabel: "Comunicação visual e sinalética de stand",
    src: "/portfolio/hasse-sinaletica-stand-01.jpg",
    ratio: "3 / 4",
    tone: "magenta",
  },
  {
    id: "p-hasse-sinaletica-stand-02",
    category: "Sinalética",
    image: "Hasse — Sinalética",
    sublabel: "Produção gráfica aplicada a stand",
    src: "/portfolio/hasse-sinaletica-stand-02.jpg",
    ratio: "3 / 4",
    tone: "cyan",
  },
  {
    id: "p-holy-moly-fachada",
    category: "Fachadas",
    image: "Holy Moly — Fachada",
    sublabel: "Identificação e comunicação visual exterior",
    src: "/portfolio/holy-moly-fachada.jpg",
    ratio: "16 / 9",
    tone: "magenta",
    featured: true,
  },
  {
    id: "p-holy-moly-logotipo-parede",
    category: "Identidade Visual",
    image: "Holy Moly — Logotipo",
    sublabel: "Aplicação da identidade visual em parede",
    src: "/portfolio/holy-moly-logotipo-parede.jpg",
    ratio: "4 / 3",
    tone: "cyan",
    featured: true,
  },
  {
    id: "p-holy-moly-balcao",
    category: "Identidade Visual",
    image: "Holy Moly — Balcão",
    sublabel: "Personalização e identidade visual aplicada ao balcão",
    src: "/portfolio/holy-moly-balcao.jpg",
    ratio: "4 / 3",
    tone: "yellow",
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
  emailGeneral: "geral@vinilart.pt",
  emailGeneralUrl: "mailto:geral@vinilart.pt",

  emailSupport: "suporte@vinilart.pt",
  emailSupportUrl: "mailto:suporte@vinilart.pt",

  phone: "+351 913 447 705",
  phoneUrl: "tel:+351913447705",

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
