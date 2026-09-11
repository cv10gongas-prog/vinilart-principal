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
    id: "urban-obras",
    title: "Urban Obras",
    category: "Logótipo e letras em relevo 3D",
    image: "/portfolio/urban-obras-letras-3d.png",
    alt: "Aplicação de logótipo e letras em relevo 3D Urban Obras",
    role: "dominant",
    tone: "cyan",
    aspectRatio: "4 / 3",
    objectPosition: "center",
  },
  {
    id: "jardins-de-oeiras",
    title: "Jardins de Oeiras",
    category: "Personalização de viatura",
    image: "/portfolio/carrinha-jardins-de-oeiras.jpg",
    alt: "Decoração gráfica de viatura comercial Jardins de Oeiras",
    role: "secondary",
    tone: "yellow",
    aspectRatio: "4 / 3",
    objectPosition: "center 25%",
  },
  {
    id: "explicandum",
    title: "Explicandum",
    category: "Decoração de montra e fachada",
    image: "/portfolio/explicandum-fachada-montra.jpg",
    alt: "Decoração de montra e comunicação exterior Explicandum",
    role: "secondary",
    tone: "magenta",
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
    src: "/portfolio/urban-obras-letras-3d.png",
    tone: "cyan",
  },
  {
    slug: "design",
    title: "Design",
    text: "Desenvolvimento visual e peças gráficas adaptadas às necessidades de cada projeto.",
    image: "Identificação corporativa",
    sublabel: "Placa de identificação corporativa",
    src: "/portfolio/chateaubiz-placa-acrilico.png",
    tone: "magenta",
  },
  {
    slug: "impressao",
    title: "Impressão",
    text: "Soluções de impressão para diferentes aplicações, formatos e suportes.",
    image: "Impressão & suportes gráficos",
    sublabel: "Soluções de impressão para comunicação e suportes diversos",
    tone: "cyan",
  },
  {
    slug: "decoracao-de-montras",
    title: "Decoração de Montras",
    text: "Comunicação visual e personalização para transformar montras em pontos de contacto com a marca.",
    image: "Decoração de montras",
    sublabel: "Decoração de montra e comunicação exterior",
    src: "/portfolio/explicandum-fachada-montra.jpg",
    tone: "magenta",
  },
  {
    slug: "decoracao-de-interiores",
    title: "Decoração de Interiores",
    text: "Aplicações visuais para dar identidade a espaços comerciais, profissionais ou institucionais.",
    image: "Decoração gráfica de parede",
    sublabel: "Decoração gráfica de parede interior",
    src: "/portfolio/simply-fit-mural-ginasio.jpg",
    tone: "cyan",
  },
  {
    slug: "decoracao-de-viaturas",
    title: "Decoração de Viaturas",
    text: "Personalização gráfica de viaturas para transformar cada deslocação numa oportunidade de comunicação.",
    image: "Personalização de viaturas",
    sublabel: "Personalização gráfica de viatura comercial",
    src: "/portfolio/carrinha-jardins-de-oeiras.jpg",
    tone: "yellow",
  },
  {
    slug: "brindes",
    title: "Brindes",
    text: "Artigos personalizados para empresas, marcas, equipas e eventos.",
    image: "Brindes e artigos personalizados",
    sublabel: "Brindes personalizados",
    src: "/portfolio/newway-kit-brindes.png",
    tone: "neutral",
  },
  {
    slug: "estampagem",
    title: "Estampagem",
    text: "Personalização de vestuário e outros artigos de forma adaptada a cada projeto.",
    image: "Personalização de vestuário",
    sublabel: "Personalização de vestuário",
    src: "/portfolio/house-shine-tshirts.jpg",
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
  "Sinalética",
  "Brindes",
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
  // --- Logotipos 3D & Reclamos ---
  {
    id: "p-urban-obras",
    category: "Logotipos 3D",
    image: "Urban Obras",
    sublabel: "Aplicação de logotipo em relevo 3D",
    src: "/portfolio/urban-obras-letras-3d.png",
    ratio: "4 / 3",
    tone: "cyan",
    featured: true,
  },
  {
    id: "p-be-you",
    category: "Logotipos 3D",
    image: "BE YOU Moda e Body Spa",
    sublabel: "Aplicação de logotipo em relevo 3D",
    src: "/portfolio/be-you-spa-letras-3d.png",
    ratio: "3 / 4",
    tone: "magenta",
  },
  {
    id: "p-vizuals",
    category: "Logotipos 3D",
    image: "Vizuals [Male Care]",
    sublabel: "Identificação de marca em suporte de parede",
    src: "/portfolio/vizuals-male-care-reclamo.png",
    ratio: "3 / 4",
    tone: "yellow",
  },
  {
    id: "p-chateaubiz",
    category: "Logotipos 3D",
    image: "ChâteauBIZ Group",
    sublabel: "Placa de identificação corporativa",
    src: "/portfolio/chateaubiz-placa-acrilico.png",
    ratio: "3 / 4",
    tone: "cyan",
  },

  // --- Montras & Fachadas ---
  {
    id: "p-explicandum",
    category: "Montras",
    image: "Explicandum Oeiras/Estoril",
    sublabel: "Decoração de montra e comunicação exterior",
    src: "/portfolio/explicandum-fachada-montra.jpg",
    ratio: "4 / 3",
    tone: "cyan",
    featured: true,
  },
  {
    id: "p-barbershop",
    category: "Montras",
    image: "Exclusive Barbershop",
    sublabel: "Decoração de montra e comunicação exterior",
    src: "/portfolio/exclusive-barbershop-montra.jpg",
    ratio: "4 / 5",
    tone: "magenta",
  },
  {
    id: "p-mellert",
    category: "Montras",
    image: "Mellert Kitchen",
    sublabel: "Comunicação exterior e decoração de montra",
    src: "/portfolio/mellert-kitchen-montra.jpg",
    ratio: "3 / 4",
    tone: "yellow",
  },
  {
    id: "p-max-finance",
    category: "Montras",
    image: "MAX Finance",
    sublabel: "Decoração de montra exterior",
    src: "/portfolio/max-finance-montra-integral.jpg",
    ratio: "3 / 4",
    tone: "cyan",
  },
  {
    id: "p-vet-queijas",
    category: "Montras",
    image: "Clínica Veterinária de Queijas",
    sublabel: "Decoração de montra e comunicação exterior",
    src: "/portfolio/clinica-veterinaria-queijas.jpg",
    ratio: "3 / 4",
    tone: "yellow",
    featured: true,
  },
  {
    id: "p-simply-fit-facade",
    category: "Montras",
    image: "Simply Fit",
    sublabel: "Comunicação exterior e identificação de fachada",
    src: "/portfolio/simply-fit-fachada.jpg",
    ratio: "3 / 4",
    tone: "cyan",
  },
  {
    id: "p-farmacia-pombalina",
    category: "Montras",
    image: "Farmácia Pombalina",
    sublabel: "Decoração de montra e comunicação exterior de fachada",
    src: "/portfolio/farmacia-pombalina-fachada.jpg",
    ratio: "4 / 3",
    tone: "cyan",
  },

  // --- Viaturas ---
  {
    id: "p-jardins-oeiras",
    category: "Viaturas",
    image: "Jardins de Oeiras",
    sublabel: "Personalização gráfica de viatura comercial",
    src: "/portfolio/carrinha-jardins-de-oeiras.jpg",
    ratio: "3 / 4",
    tone: "yellow",
  },
  {
    id: "p-resenha-lateral",
    category: "Viaturas",
    image: "Associação Resenha WP89 F.C",
    sublabel: "Personalização gráfica lateral de viatura",
    src: "/portfolio/carrinha-resenha-lateral.png",
    ratio: "3 / 4",
    tone: "cyan",
    featured: true,
  },
  {
    id: "p-resenha-traseira",
    category: "Viaturas",
    image: "Resenha F.C — Traseira",
    sublabel: "Personalização gráfica traseira de viatura",
    src: "/portfolio/carrinha-resenha-traseira.png",
    ratio: "3 / 4",
    tone: "magenta",
  },

  // --- Interiores & Murais ---
  {
    id: "p-simply-fit-mural",
    category: "Interiores",
    image: "Simply Fit — Ginásio",
    sublabel: "Decoração gráfica de parede interior",
    src: "/portfolio/simply-fit-mural-ginasio.jpg",
    ratio: "4 / 3",
    tone: "cyan",
    featured: true,
  },
  {
    id: "p-arqbrundi",
    category: "Interiores",
    image: "ARQBRUNDI",
    sublabel: "Aplicação de identidade visual em divisórias de vidro",
    src: "/portfolio/arqbrundi-interiores.jpg",
    ratio: "4 / 5",
    tone: "cyan",
  },
  {
    id: "p-gaming-room",
    category: "Interiores",
    image: "Espaço Gaming",
    sublabel: "Decoração gráfica de parede",
    src: "/portfolio/espaco-gaming-mural-parede.jpg",
    ratio: "4 / 3",
    tone: "magenta",
  },
  {
    id: "p-torrie",
    category: "Interiores",
    image: "Torrié Cafetaria",
    sublabel: "Decoração gráfica de parede em espaço comercial",
    src: "/portfolio/torrie-mural-cafetaria.png",
    ratio: "16 / 9",
    tone: "yellow",
  },
  {
    id: "p-beyond-infinity",
    category: "Interiores",
    image: "Beyond Infinity",
    sublabel: "Aplicação de identidade visual em parede",
    src: "/portfolio/beyond-infinity-lettering.jpg",
    ratio: "1 / 1",
    tone: "neutral",
  },
  {
    id: "p-o-rocha",
    category: "Interiores",
    image: "O Rocha Restaurante",
    sublabel: "Aplicação gráfica de logotipo em balcão",
    src: "/portfolio/o-rocha-lettering-restaurante.png",
    ratio: "16 / 9",
    tone: "yellow",
  },

  // --- Sinalética & Equipamentos ---
  {
    id: "p-sinaletica-linhas",
    category: "Sinalética",
    image: "Sinalética de Pavimento",
    sublabel: "Aplicação gráfica direcional em espaço interior",
    src: "/portfolio/sinaletica-interior-linhas.jpg",
    ratio: "4 / 5",
    tone: "yellow",
  },
  {
    id: "p-strix-birdtrack",
    category: "Sinalética",
    image: "STRIX Birdtrack",
    sublabel: "Aplicação gráfica em equipamento técnico",
    src: "/portfolio/strix-birdtrack-equipamento.png",
    ratio: "3 / 4",
    tone: "cyan",
    featured: true,
  },
  {
    id: "p-birdtrack-paineis",
    category: "Sinalética",
    image: "Birdtrack — Painéis",
    sublabel: "Identificação gráfica em painéis de equipamento",
    src: "/portfolio/birdtrack-paineis-inox.jpg",
    ratio: "4 / 3",
    tone: "yellow",
  },

  // --- Estampagem ---
  {
    id: "p-house-shine",
    category: "Estampagem",
    image: "House Shine",
    sublabel: "Personalização de vestuário",
    src: "/portfolio/house-shine-tshirts.jpg",
    ratio: "3 / 4",
    tone: "magenta",
    featured: true,
  },

  // --- Brindes & Merchandising ---
  {
    id: "p-newway-kit",
    category: "Brindes",
    image: "Newway Pilates & Fisioterapia",
    sublabel: "Brindes personalizados",
    src: "/portfolio/newway-kit-brindes.png",
    ratio: "3 / 4",
    tone: "cyan",
  },
  {
    id: "p-lanyards-oeiras",
    category: "Brindes",
    image: "Vigararia de Oeiras",
    sublabel: "Lanyards personalizados com medalhão",
    src: "/portfolio/lanyards-vigararia-oeiras.jpg",
    ratio: "3 / 4",
    tone: "yellow",
  },
  {
    id: "p-lanyards-tourtailors",
    category: "Brindes",
    image: "TourTailors",
    sublabel: "Lanyards personalizados com medalhão",
    src: "/portfolio/lanyards-tourtailors.jpg",
    ratio: "3 / 4",
    tone: "cyan",
  },
  {
    id: "p-newway-lanyard",
    category: "Brindes",
    image: "Newway Lanyard",
    sublabel: "Lanyard personalizado",
    src: "/portfolio/newway-lanyard-badge.png",
    ratio: "3 / 4",
    tone: "neutral",
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
