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
  lead: "Hay algo que cambia cuando alguien muere.",
  blocks: [
    {
      lines: [
        "No es solo su ausencia.",
        "Es la forma en que sigues relacionada/o con esa persona.",
      ],
    },
    {
      lines: [
        [
          { text: "Porque, aunque ya no esté físicamente, " },
          { text: "el amor no desaparece", bold: true },
          { text: ", y por tanto el vínculo tampoco." },
        ],
      ],
    },
    {
      lines: [
        "Sigue presente de otras maneras.",
        "En las que aún te acompaña.",
        "Y, sin embargo, casi nadie sabe qué hacer con eso.",
      ],
    },
    {
      lines: [
        [
          { text: "Renacencia", bold: true },
          {
            text:
              " nace como un espacio para entender qué ocurre con ese vínculo y cómo aprender a vivir con él",
          },
        ],
        "en esta nueva forma.",
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
    title: "Terapia grupal",
    icon: "group",
    description:
      "Un espacio contenido para transitar el duelo en comunidad, con escucha, preguntas y acompañamiento respetuoso.",
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
      "Carlos Vega, Musicoterapeuta. Se desempeñó brevemente en periodismo antes de abocarse de lleno a la divulgación presencial a través de más de 500 conferencias impartidas por Latinoamérica y Europa. En sus más de 25 años de trayectoria acompañó procesos de conocimiento interior, creando espacios de reflexión y estudios sobre el sentido de la vida y la muerte.",
  },
  {
    name: "Lorena Leiro",
    image: "/assets/lore-bn.png",
    alt: "Lorena Leiro en retrato en blanco y negro",
    objectPosition: "50% 28%",
    description:
      "Lorena Leiro. Es psicóloga sanitaria y terapeuta Gestalt, con más de 18 años de experiencia en salud mental, tanto en práctica clínica como en proyectos de cooperación internacional en América Latina. Su enfoque es humanista e integrador, con especial atención a los procesos emocionales, relacionales y vitales. Tiene formación especializada en EMDR Nivel I y II (trauma), sistémica, duelo y apego.",
  },
] as const;

export const instagramUrl = "https://www.instagram.com/renacencia.vida/";
export const seminarUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeQD0BumxsIx6WassCzSXblOKnxpFqFtPdajQ9xngSkXkAS9Q/viewform";
