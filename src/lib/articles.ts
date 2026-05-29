export type Category = "Política" | "Sociedad" | "Emprendimiento" | "Estrategia" | "Pensamiento";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string; // ISO
  readingTime: number; // minutes
  featured?: boolean;
  hero?: string; // tailwind bg utilities
  tags: string[];
  body: { type: "p" | "h2" | "h3" | "quote"; text: string }[];
}

export const articles: Article[] = [
  {
    slug: "umbrales-de-la-democracia",
    title: "Los umbrales de la democracia: ¿hacia dónde camina el contrato social?",
    excerpt:
      "En una era de polarización algorítmica, los pilares de la convivencia se tambalean. Una mirada a la erosión de las instituciones y la urgencia de una nueva pedagogía civil.",
    category: "Política",
    date: "2025-05-12",
    readingTime: 12,
    featured: true,
    tags: ["democracia", "instituciones", "polarización"],
    body: [
      { type: "p", text: "La democracia se mide menos por sus rituales que por la salud silenciosa de los acuerdos que la sostienen. Hoy, esos acuerdos crujen." },
      { type: "p", text: "Cuando el ciudadano deja de creer que las reglas son las mismas para todos, no abandona la república con un portazo: lo hace en silencio, votando con desinterés, con cinismo, con migraciones internas hacia lo privado." },
      { type: "h2", text: "El algoritmo y la plaza pública" },
      { type: "p", text: "Las plataformas digitales han fragmentado la conversación común. Cada usuario habita una realidad curada por su propio sesgo, multiplicada por la lógica del engagement. Ya no discutimos los mismos hechos." },
      { type: "quote", text: "La polarización no es un accidente: es un modelo de negocio que externalizó sus costos sobre la democracia." },
      { type: "p", text: "Necesitamos, con urgencia, una pedagogía civil que vuelva a enseñar el arte difícil de disentir sin destruir. No para imponer consensos artificiales, sino para recuperar la idea —tan antigua y tan moderna— de que el otro existe." },
      { type: "h2", text: "Reconstruir, no restaurar" },
      { type: "p", text: "No se trata de volver a un pasado idealizado. Se trata de imaginar instituciones a la altura del siglo que habitamos: más transparentes, más cercanas, más capaces de rendir cuentas en tiempo real." },
      { type: "p", text: "El contrato social que viene no se firmará en papel. Se escribirá, día a día, en la calidad de nuestras conversaciones públicas." },
    ],
  },
  {
    slug: "transformacion-digital-empresa",
    title: "Transformación digital: el desafío de la empresa de hoy",
    excerpt:
      "La tecnología es la parte fácil. El verdadero desafío es cultural: dejar de gerenciar desde la nostalgia y empezar a liderar desde la curiosidad.",
    category: "Estrategia",
    date: "2025-04-28",
    readingTime: 8,
    tags: ["transformación", "liderazgo", "cultura"],
    body: [
      { type: "p", text: "La mayoría de los proyectos de transformación digital fracasan no por la tecnología, sino por la incapacidad de la organización para reescribir sus propias narrativas internas." },
      { type: "h2", text: "El liderazgo como traducción" },
      { type: "p", text: "El líder contemporáneo no es quien tiene todas las respuestas; es quien sabe formular las preguntas correctas y traducir incertidumbre en aprendizaje colectivo." },
      { type: "quote", text: "Digitalizar procesos rotos solo produce errores más rápidos." },
      { type: "p", text: "La verdadera transformación empieza cuando la organización acepta que el viejo modelo ya no explica el mundo —y que el nuevo todavía está por escribirse, con su gente dentro." },
    ],
  },
  {
    slug: "soledad-hiperconectividad",
    title: "La soledad en la era de la hiperconectividad",
    excerpt:
      "Nunca estuvimos tan acompañados ni tan solos. Una reflexión sobre los vínculos que la pantalla simula y los que la vida exige.",
    category: "Sociedad",
    date: "2025-04-15",
    readingTime: 9,
    tags: ["sociedad", "tecnología", "vínculos"],
    body: [
      { type: "p", text: "La paradoja contemporánea: cuanto más conectados estamos, más reportamos sentirnos solos. Algo no cuadra en la ecuación del progreso." },
      { type: "p", text: "Los vínculos digitales nos dan la sensación de presencia sin el costo del compromiso. Pero la amistad, la familia, la comunidad, son ejercicios de fricción tolerada." },
      { type: "quote", text: "La soledad moderna no es ausencia de gente: es ausencia de tiempo compartido sin pantalla intermedia." },
    ],
  },
  {
    slug: "todos-somos-marca",
    title: "Todos somos marca",
    excerpt:
      "Aunque no lo queramos, todos somos marca, y eso conlleva una responsabilidad mayor: cada interacción suma o resta a nuestra reputación.",
    category: "Estrategia",
    date: "2025-04-02",
    readingTime: 7,
    tags: ["marca personal", "reputación"],
    body: [
      { type: "p", text: "La marca personal no es un proyecto opcional: es la consecuencia inevitable de existir en un mundo conectado." },
      { type: "p", text: "Lo que se proyecta en una conversación, en una publicación o en un silencio, va construyendo —día a día— el activo más volátil y más valioso que tenemos: la reputación." },
    ],
  },
  {
    slug: "agonia-de-las-dictaduras",
    title: "Agonía de las dictaduras: el caso Venezuela",
    excerpt:
      "Las dictaduras no caen: agonizan. Un análisis sobre los mecanismos del poder absoluto cuando se queda sin futuro y solo le queda el presente.",
    category: "Política",
    date: "2025-03-18",
    readingTime: 14,
    tags: ["venezuela", "autoritarismo", "transición"],
    body: [
      { type: "p", text: "Las dictaduras del siglo XXI han aprendido a sobrevivir más allá de su legitimidad. Sustituyen la convicción por el miedo, y la institución por la red de complicidades." },
      { type: "p", text: "Pero ni el miedo ni la complicidad son eternos. Llega un momento en que el régimen se mantiene en pie solo por inercia." },
      { type: "quote", text: "Cuando el poder solo se sostiene por el cálculo de quienes lo rodean, ha dejado de ser poder: es ya una forma de espera." },
    ],
  },
  {
    slug: "brecha-saber-saber-hacer",
    title: "La brecha entre saber y saber hacer",
    excerpt:
      "Hay un abismo entre la información disponible y la sabiduría aplicada. Sobre la urgencia de cerrar la distancia entre el diagnóstico y la acción.",
    category: "Pensamiento",
    date: "2025-03-04",
    readingTime: 6,
    tags: ["educación", "acción"],
    body: [
      { type: "p", text: "Vivimos en la era de la sobreinformación y, paradójicamente, de la subdecisión. Sabemos mucho y resolvemos poco." },
      { type: "p", text: "La diferencia entre saber y saber hacer es, casi siempre, una cuestión de carácter: la disposición de poner el cuerpo en aquello que la mente ya entendió." },
    ],
  },
  {
    slug: "los-amos-del-mundo",
    title: "Los amos del mundo",
    excerpt:
      "Quien controla los datos, controla el relato. Y quien controla el relato, redibuja en silencio las fronteras del poder global.",
    category: "Política",
    date: "2025-02-20",
    readingTime: 11,
    tags: ["geopolítica", "tecnología", "poder"],
    body: [
      { type: "p", text: "El siglo XX inventó las multinacionales. El XXI inventó algo más extraño: empresas más poderosas que la mayoría de los Estados, sin pasaporte, sin frontera, sin contrapeso." },
    ],
  },
  {
    slug: "era-de-la-velocidad",
    title: "La era de la velocidad: te mueves o claudicas",
    excerpt:
      "El cambio dejó de ser un evento para convertirse en clima. Lo que diferencia hoy a las organizaciones no es su tamaño, sino su cadencia.",
    category: "Emprendimiento",
    date: "2025-02-05",
    readingTime: 8,
    tags: ["innovación", "agilidad"],
    body: [
      { type: "p", text: "Lo que antes se medía en décadas hoy se mide en trimestres. Lo que antes era ventaja competitiva, hoy es boleto de entrada." },
      { type: "p", text: "La velocidad sin propósito es agitación. Pero el propósito sin velocidad, en este mercado, es nostalgia." },
    ],
  },
];

export const categories: Category[] = ["Política", "Sociedad", "Emprendimiento", "Estrategia", "Pensamiento"];

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" });
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelated(slug: string, n = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, n);
  return articles.filter((a) => a.slug !== slug && a.category === current.category).slice(0, n).concat(
    articles.filter((a) => a.slug !== slug && a.category !== current.category).slice(0, n)
  ).slice(0, n);
}
