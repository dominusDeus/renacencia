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
  lead: "Algo muy fuerte sucede cuando alguien querido muere.",
  blocks: [
    {
      lines: [
        "El dolor suele ser tan intenso que nos centramos en su ausencia",
        "y dejamos de ver lo más importante: El vínculo no desapareció.",
      ],
    },
    {
      lines: [
        "Porque, aunque ya no esté físicamente,",
        "si el amor permanece, la relación continúa.",
      ],
    },
    {
      lines: [
        "En Renacencia exploramos de muchas maneras",
        "qué es lo que ocurre con ese vínculo",
        "y cómo aprender a vivirlo en esta nueva forma.",
      ],
    },
    {
      lines: [[{ text: "¿Te gustaría profundizar en esto?", bold: true }]],
    },
  ],
} as const satisfies {
  readonly kicker: string;
  readonly lead: string;
  readonly blocks: readonly HeroBlock[];
};

export const activities = [
  {
    title: "Terapia grupal",
    icon: "group",
    description:
      "Reuniones pensadas para abrir conversación, sostener procesos y acercarnos a la experiencia del duelo grupalmente con profundidad y cuidado.",
  },
  {
    title: "Seminarios",
    icon: "seminar",
    description:
      "Encuentros para profundizar en la relación entre vida, muerte y vínculo, desde una mirada clara y sensible.",
  },
  {
    title: "Talleres",
    icon: "workshop",
    description:
      "Experiencias breves y cuidadas para abrir conversación, elaborar sentido y darle lugar a lo que permanece.",
  },
] as const satisfies readonly {
  readonly title: string;
  readonly icon: "group" | "seminar" | "workshop";
  readonly description: string;
}[];

export const people = [
  {
    name: "Carlos Vega",
    image: "/assets/charly-bn.png",
    alt: "Carlos Vega en retrato en blanco y negro",
    objectPosition: "50% 22%",
    description:
      "Musicoterapeuta, divulgador y escritor. Se desempeñó brevemente en periodismo antes de dedicarse de lleno a la divulgación del desarrollo interior con alrededor de 500 conferencias impartidas en distintos puntos de Latinoamérica y Europa. En sus más de 20 años de trayectoria acompañó procesos de conocimiento interior, creando espacios de reflexión acerca del sentido de la vida y la muerte.",
  },
  {
    name: "Lorena Leiro",
    image: "/assets/lore-bn.png",
    alt: "Lorena Leiro en retrato en blanco y negro",
    objectPosition: "50% 28%",
    description:
      "Es psicóloga sanitaria y terapeuta Gestalt, con más de 18 años de experiencia en salud mental, tanto en práctica clínica como en proyectos de cooperación internacional en América Latina. Su enfoque es humanista e integrador, con especial atención a los procesos emocionales, relacionales y vitales. Cuenta con formación especializada en EMDR Nivel I y II (trauma), sistémica, duelo y apego.",
  },
] as const;

export const instagramUrl = "https://www.instagram.com/renacencia.vida/";
export const seminarUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeQD0BumxsIx6WassCzSXblOKnxpFqFtPdajQ9xngSkXkAS9Q/viewform";
