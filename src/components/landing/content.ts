export type HeroSegment = {
  readonly text: string;
  readonly bold?: boolean;
};

/** One visual line: plain string or inline segments (bold = semantic emphasis). */
export type HeroLine = string | readonly HeroSegment[];

export type HeroBlock = {
  readonly lines: readonly HeroLine[];
};

export const heroContent = {
  kicker: "vida, muerte y duelo",
  lead: "Lo que te enseñaron sobre la muerte te está limitando.",
  blocks: [
    {
      lines: [
        "Crecimos con una idea heredada: la muerte es el fin, y la pérdida una herida que hay que superar y dejar atrás.",
      ],
    },
    {
      lines: [
        "Pero esa programación es precisamente lo que nos impide transitar los duelos con libertad y vivir con más plenitud.",
      ],
    },
    {
      lines: [
        "En Renacencia cuestionamos esas creencias desde la raíz. Exploramos la muerte como transformación, el vínculo como algo que no se interrumpe, y el duelo como uno de los mayores catalizadores de consciencia que existen.",
      ],
    },
    {
      lines: [
        "No buscamos solo tu consuelo — buscamos ampliar tu consciencia.",
      ],
    },
    {
      lines: [
        "El 13 de mayo de 2026 (19hs) estaremos dando un seminario gratuito para abordar todo esto y mucho más. Te esperamos.",
      ],
    },
  ],
} as const satisfies {
  readonly kicker: string;
  readonly lead: string;
  readonly blocks: readonly HeroBlock[];
};

export const activities = [
  {
    title: "Seminarios",
    icon: "seminar",
    description:
      "Para entender más a fondo nuestra experiencia humana y cómo transitar tanto los momentos agradables como los difíciles desde una visión más consciente.",
  },
  {
    title: "Talleres",
    icon: "workshop",
    description:
      "Experiencias vivenciales para trabajar tus propios procesos con guía y profundidad.",
  },
  {
    title: "Terapia grupal",
    icon: "group",
    description:
      "Un espacio sostenido para acompañar duelos junto a otros, con cuidado y presencia.",
  },
] as const satisfies readonly {
  readonly title: string;
  readonly icon: "group" | "seminar" | "workshop";
  readonly description: string;
}[];

export const people = [
  {
    name: "Carlos Vega",
    image: "/assets/charly.jpeg",
    alt: "Carlos Vega en retrato en blanco y negro",
    objectPosition: "50% 22%",
    description:
      "Musicoterapeuta, divulgador y escritor. Se desempeñó brevemente en periodismo antes de dedicarse de lleno a la divulgación del desarrollo interior con alrededor de 500 conferencias impartidas en distintos puntos de Latinoamérica y Europa. En sus más de 20 años de trayectoria acompañó procesos de conocimiento interior, creando espacios de reflexión acerca del sentido de la vida y la muerte.",
  },
  {
    name: "Lorena Leiro",
    image: "/assets/lore.jpeg",
    alt: "Lorena Leiro en retrato en blanco y negro",
    objectPosition: "50% 28%",
    description:
      "Es psicóloga sanitaria y terapeuta Gestalt, con más de 18 años de experiencia en salud mental, tanto en práctica clínica como en proyectos de cooperación internacional en América Latina. Su enfoque es humanista e integrador, con especial atención a los procesos emocionales, relacionales y vitales. Cuenta con formación especializada en EMDR Nivel I y II (trauma), sistémica, duelo y apego.",
  },
] as const;

export const instagramUrl = "https://www.instagram.com/renacencia.vida/";
export const seminarUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeQD0BumxsIx6WassCzSXblOKnxpFqFtPdajQ9xngSkXkAS9Q/viewform";
