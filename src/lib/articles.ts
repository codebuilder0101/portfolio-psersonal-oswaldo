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
    slug: "todos-somos-marca",
    title: "Todos somos marca",
    excerpt:
      "Aunque no lo queramos, todos somos marca, así nos perciben y así percibimos, ser visibles o no queda a vuestra decisión, quizás, esta idea se asocie a la autopromoción vacía o al influencer sin contenido que mencioné en mi artículo anterior, pero no es así, esto es otra cosa, hablo de una estrategia de posicionamiento con propósito, de una marca personal construida sobre la base de la experiencia, credibilidad y trayectoria.",
    category: "Estrategia",
    date: "2025-05-20",
    readingTime: 4,
    featured: true,
    tags: ["marca personal", "reputación", "posicionamiento"],
    body: [
      {
        type: "p",
        text: "Aunque no lo queramos, todos somos marca, así nos perciben y así percibimos, ser visibles o no queda a vuestra decisión, quizás, esta idea se asocie a la autopromoción vacía o al influencer sin contenido que mencioné en mi artículo anterior, pero no es así, esto es otra cosa, hablo de una estrategia de posicionamiento con propósito, de una marca personal construida sobre la base de la experiencia, credibilidad y trayectoria.",
      },
    ],
  },
  {
    slug: "dinamicas-actuales-decadencia-o-evolucion",
    title: "Dinámicas actuales: decadencia o evolución",
    excerpt:
      "La historia sigue un ciclo de nacimiento, desarrollo y decadencia” así opinaba el filósofo italiano Giambattista Vico, sobran evidencias históricas de momentos de esplendor y estabilidad seguidos de crisis y transformación, algo así como que no avanzamos en línea recta, solo transitamos en espirales, cambiando de formas, pero repitiendo patrones. Es probable que hoy estemos transitando uno de esos espirales en los que el mundo parece desmoronarse, Winston Churchill decía “cuanto más atrás puedas mirar, más adelante verás”.",
    category: "Pensamiento",
    date: "2025-05-06",
    readingTime: 4,
    tags: ["historia", "ciclos", "sociedad"],
    body: [
      {
        type: "p",
        text: "La historia sigue un ciclo de nacimiento, desarrollo y decadencia” así opinaba el filósofo italiano Giambattista Vico, sobran evidencias históricas de momentos de esplendor y estabilidad seguidos de crisis y transformación, algo así como que no avanzamos en línea recta, solo transitamos en espirales, cambiando de formas, pero repitiendo patrones. Es probable que hoy estemos transitando uno de esos espirales en los que el mundo parece desmoronarse, Winston Churchill decía “cuanto más atrás puedas mirar, más adelante verás”.",
      },
    ],
  },
  {
    slug: "transformacion-digital-empresa",
    title: "Transformación digital: el desafío de la empresa de hoy",
    excerpt:
      "Actualmente muchas pequeñas y medianas empresas aún dependen de métodos anticuados para gestionar sus operaciones, no es sorpresa, encontrar oficinas donde el inventario se controla desde hojas de cálculo de excel, el mantenimiento de equipos se registra en papel, el análisis de facturas se realiza de forma manual e igualmente sucede con los pedidos de clientes, entre otras tantas cosas, pero esta forma de trabajar, aunque parezca inofensiva, tiene un costo muy alto.",
    category: "Estrategia",
    date: "2025-04-22",
    readingTime: 4,
    tags: ["transformación", "pymes", "tecnología"],
    body: [
      {
        type: "p",
        text: "Actualmente muchas pequeñas y medianas empresas aún dependen de métodos anticuados para gestionar sus operaciones, no es sorpresa, encontrar oficinas donde el inventario se controla desde hojas de cálculo de excel, el mantenimiento de equipos se registra en papel, el análisis de facturas se realiza de forma manual e igualmente sucede con los pedidos de clientes, entre otras tantas cosas, pero esta forma de trabajar, aunque parezca inofensiva, tiene un costo muy alto.",
      },
    ],
  },
  {
    slug: "agonia-de-las-dictaduras",
    title: "Agonía de las dictaduras: caso Venezuela",
    excerpt:
      "La historia conserva grandes ejemplos del ascenso y caída de regímenes autoritarios, por más sólidos que parezcan, llevan en sí mismos su propia ruina. Al aferrarse al poder, recurren a abusos cada vez mayores, acelerando su colapso. Venezuela no será la excepción.",
    category: "Política",
    date: "2025-04-08",
    readingTime: 3,
    tags: ["venezuela", "autoritarismo", "poder"],
    body: [
      {
        type: "p",
        text: "La historia conserva grandes ejemplos del ascenso y caída de regímenes autoritarios, por más sólidos que parezcan, llevan en sí mismos su propia ruina. Al aferrarse al poder, recurren a abusos cada vez mayores, acelerando su colapso. Venezuela no será la excepción.",
      },
    ],
  },
  {
    slug: "brecha-saber-saber-hacer",
    title: 'La brecha entre "saber" y "saber hacer"',
    excerpt:
      "El genio Leonardo Da Vinci destacó la importancia de la acción sobre el conocimiento y lo dejó plasmado en la frase: “No es el saber lo que es más importante, sino el saber hacer” poderosa sentencia que aplica a cualquier gestión, ya que la posibilidad de un resultado exitoso se sustenta en el equilibrio entre el conocimiento teórico y la capacidad de aplicarlo en la práctica, si bien la inteligencia y el dominio de conceptos son fundamentales, estos por sí solos no garantizan el éxito de la gestión.",
    category: "Pensamiento",
    date: "2025-03-25",
    readingTime: 4,
    tags: ["conocimiento", "acción", "gestión"],
    body: [
      {
        type: "p",
        text: "El genio Leonardo Da Vinci destacó la importancia de la acción sobre el conocimiento y lo dejó plasmado en la frase: “No es el saber lo que es más importante, sino el saber hacer” poderosa sentencia que aplica a cualquier gestión, ya que la posibilidad de un resultado exitoso se sustenta en el equilibrio entre el conocimiento teórico y la capacidad de aplicarlo en la práctica, si bien la inteligencia y el dominio de conceptos son fundamentales, estos por sí solos no garantizan el éxito de la gestión.",
      },
    ],
  },
  {
    slug: "mision-trump-ii",
    title: "Misión: Trump II",
    excerpt:
      "La “Misión: Trump II” no será sencilla, tendrá que navegar un panorama complejo, donde cada decisión será una prueba de su liderazgo y de la capacidad de Estados Unidos para reinventarse y reafirmarse en un mundo cada vez más incierto.",
    category: "Política",
    date: "2025-03-11",
    readingTime: 3,
    tags: ["geopolítica", "estados unidos", "liderazgo"],
    body: [
      {
        type: "p",
        text: "La “Misión: Trump II” no será sencilla, tendrá que navegar un panorama complejo, donde cada decisión será una prueba de su liderazgo y de la capacidad de Estados Unidos para reinventarse y reafirmarse en un mundo cada vez más incierto.",
      },
    ],
  },
  {
    slug: "los-amos-del-mundo",
    title: "Los amos del mundo",
    excerpt:
      "Quizás para muchos será difícil de creer, pero los amos del mundo no son los líderes de las potencias, ellos son circunstanciales, tampoco son los dueños de los grandes bancos, ellos luchan por mantener a flote el valor de sus monedas en un mundo cada vez más diversificado y menos creyente en sus bondades, los verdaderos amos del mundo son los que cambian los hábitos de vida, modifican la cotidianidad y nos hacen dependientes < hasta viciosos > de sus inventos.",
    category: "Política",
    date: "2025-02-25",
    readingTime: 4,
    tags: ["poder", "geopolítica", "tecnología"],
    body: [
      {
        type: "p",
        text: "Quizás para muchos será difícil de creer, pero los amos del mundo no son los líderes de las potencias, ellos son circunstanciales, tampoco son los dueños de los grandes bancos, ellos luchan por mantener a flote el valor de sus monedas en un mundo cada vez más diversificado y menos creyente en sus bondades, los verdaderos amos del mundo son los que cambian los hábitos de vida, modifican la cotidianidad y nos hacen dependientes < hasta viciosos > de sus inventos.",
      },
    ],
  },
  {
    slug: "umbrales-de-la-democracia",
    title: "Los umbrales de la democracia",
    excerpt:
      "La democracia sigue siendo el mejor sistema de gobierno, pero dejando claro que no es un estado estático, es un proceso continuo que requiere vigilancia, defensa constante y todos debemos tener el deber de defenderla, consolidarla y en cuanto sea posible mejorarla, por lo tanto, la democracia no es solo un ideal a ser celebrado, es una tarea a ser realizada.",
    category: "Política",
    date: "2025-02-11",
    readingTime: 3,
    tags: ["democracia", "instituciones", "ciudadanía"],
    body: [
      {
        type: "p",
        text: "La democracia sigue siendo el mejor sistema de gobierno, pero dejando claro que no es un estado estático, es un proceso continuo que requiere vigilancia, defensa constante y todos debemos tener el deber de defenderla, consolidarla y en cuanto sea posible mejorarla, por lo tanto, la democracia no es solo un ideal a ser celebrado, es una tarea a ser realizada.",
      },
    ],
  },
  {
    slug: "era-de-la-velocidad",
    title: "La era de la velocidad: te mueves o claudicas",
    excerpt:
      "Muchas empresas nacen con la misma concepción de las personas en su juventud, elaboran planes de vida exitosos, a largo plazo, rígidos y luego les pasa como el que construye un castillo de arena en la orilla del mar, por muy sólido que parezca está condenado a ser destruido por las olas. En un mundo empresarial cada vez más competitivo y volátil, las organizaciones deben ser capaces de adaptarse a los cambios con la misma agilidad que un camaleón cambia de color, solo aquellas empresas que sean capaces de aprender, innovar y evolucionar de manera constante lograrán sobrevivir y prosperar a largo plazo de igual manera sucede con las personas ante aquella planificación soñada, por lo tanto, es mejor moverse para no claudicar.",
    category: "Emprendimiento",
    date: "2025-01-28",
    readingTime: 5,
    tags: ["innovación", "agilidad", "adaptación"],
    body: [
      {
        type: "p",
        text: "Muchas empresas nacen con la misma concepción de las personas en su juventud, elaboran planes de vida exitosos, a largo plazo, rígidos y luego les pasa como el que construye un castillo de arena en la orilla del mar, por muy sólido que parezca está condenado a ser destruido por las olas. En un mundo empresarial cada vez más competitivo y volátil, las organizaciones deben ser capaces de adaptarse a los cambios con la misma agilidad que un camaleón cambia de color, solo aquellas empresas que sean capaces de aprender, innovar y evolucionar de manera constante lograrán sobrevivir y prosperar a largo plazo de igual manera sucede con las personas ante aquella planificación soñada, por lo tanto, es mejor moverse para no claudicar.",
      },
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
