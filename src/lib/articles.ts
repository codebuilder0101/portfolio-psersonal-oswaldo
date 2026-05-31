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
    readingTime: 7,
    featured: true,
    tags: ["marca personal", "reputación", "posicionamiento"],
    body: [
      {
        type: "p",
        text: `La diferencia entre "ser" y "parecer" nos confronta permanentemente con la realidad que transmitimos, pues, vivimos en sociedad y lo que los demás perciben de nosotros puede tener tanto peso como nuestras verdaderas intenciones. Desde que por una simple sospecha de Julio César sobre su esposa hizo proferir aquella célebre frase: "La mujer del César no solo tiene que serlo, tiene que parecerlo" se ha consolidado la idea en los seres humanos de que es tan importante cuidar y proteger la imagen pública como sus hechos. El cuidado de la reputación pública ha evolucionado, hasta hace algunos años existía la idea que bastaba con trabajar duro, ofrecer buenos servicios, ser responsable o acumular méritos y títulos para construir una buena reputación, ya que las oportunidades llegarían solas, pero la ecuación ha cambiado, ya no se trata solo de quién eres, sino de quién sabe que existes. Vivimos un tiempo donde la visibilidad es un activo estratégico, no se trata de fingir, ni de vender humo, se trata de algo más profundo, de dar visibilidad a tu causa, tu visión, tu valor diferencial, de no dejar que el libre albedrío construya la narrativa por ti, es entender que la reputación no se presume: se comunica, se construye y proyecta. Parafraseando a Julio César, hoy no basta con ser bueno, hay que parecerlo, explicarlo y demostrarlo, porque si no lo haces, alguien (quizás muchos) lo hará para sí mismo, y esto, en un entorno donde las decisiones se toman con base a percepciones y referencias, puede ser la diferencia entre participar o quedar fuera de la conversación que te podría cambiar la vida.`,
      },
      {
        type: "p",
        text: `Aunque no lo queramos, todos somos marca, así nos perciben y así percibimos, ser visibles o no queda a vuestra decisión, quizás, esta idea se asocie a la autopromoción vacía o al influencer sin contenido que mencioné en mi artículo anterior, pero no es así, esto es otra cosa, hablo de una estrategia de posicionamiento con propósito, de una marca personal construida sobre la base de la experiencia, credibilidad y trayectoria. En este mundo hiperconectado, lo que no se ve: no se valora o simplemente no existe, según un estudio de LinkedIn, el 85% de las oportunidades laborales y de colaboración surgen a través de redes de contacto personales y visibilidad digital, no del currículum, tampoco del expediente académico, sino de lo que proyectas y cómo te perciben, hace poco escuché una frase muy determinante sobre esto "El talento sin visibilidad es como un faro apagado: está ahí, pero no guía a nadie". Hoy, cuando alguien quiere saber quién eres, no va a revisar tus títulos, va a buscar tu nombre en Google, revisan tu perfil en Linkedin, Facebook o Instagram ¡no es invento!, una encuesta global de Career Builder reveló que el 70% de los empleadores revisan las redes sociales de un candidato antes de contratarlo y casi el 50% ha descartado a candidatos por no encontrar evidencia de presencia profesional online. Igualmente sucede con los consumidores, según un estudio de Deloitte 8 de cada 10 personas buscan información en línea antes de realizar una compra o contratar un servicio y el 95% lee las reseñas en línea y el mismo porcentaje las asume como influencia directa en sus decisiones de compra.`,
      },
      {
        type: "p",
        text: `Cuantos casos no existen de profesionales que no vendieron sus servicios, no fueron contratados o quedaron fuera de decisiones importantes simplemente porque nadie los vio y mucho menos pensó en ellos, en cambio personas con menos experiencia, servicios menos robustos, pero con fuerte proyección y presencia en redes ganaron esa carrera. En sectores como la política, la percepción pública es determinante, la marca se construye día a día, gracias a esto, en muchos casos el vencedor de unas elecciones ya la ha ganado antes de iniciar el proceso electoral y no necesariamente era el idóneo, pero se proyectó mejor. Igualmente sucede para quienes lideramos equipos, emprendimientos o iniciativas sociales, la marca personal es parte del impacto institucional, porque cuando un líder se posiciona, también posiciona a su organización, humanizándola y enriqueciéndola.`,
      },
      {
        type: "p",
        text: `En este sentido, la construcción de una marca con influencia positiva, la creación de una huella digital como estrategia de posicionamiento siempre aportará mayores beneficios que inconvenientes, al respecto, dos referentes en este campo plantean su importancia de diferentes formas, por un lado, Seth Godin sostiene que "Si no eres diferente, entonces eres invisible" y por otro lado, Jurgen Klaric defiende la idea que "Debería ser obligatorio tomar clases para aprender a vender y venderse antes de graduarse de la universidad", ambas perspectivas convergen en la necesidad imperante de construir una marca personal distintiva y comunicarla eficazmente, Godin nos advierte el peligro del anonimato e impulsa la idea de ser visibles y auténticos, mientras que Klaric, con su pragmatismo característico, señala la importancia de la habilidad de venderse, de comunicar vuestro valor y potencial como factor diferencial de competencia, incluso superior a los conocimientos adquiridos en la academia. En definitiva, hoy la marca personal es la imagen que dejamos en la gente, es nuestra carta de presentación, ignorar esta realidad es conformarse con ser espectador en un mundo que premia a quienes se atreven a ser diferentes, mostrando su autenticidad y propósito. No ser visto no es una opción, ¡es autoexcluirse!`,
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
    readingTime: 8,
    tags: ["historia", "ciclos", "sociedad"],
    body: [
      {
        type: "p",
        text: `"La historia sigue un ciclo de nacimiento, desarrollo y decadencia" así opinaba el filósofo italiano Giambattista Vico, sobran evidencias históricas de momentos de esplendor y estabilidad seguidos de crisis y transformación, algo así como que no avanzamos en línea recta, solo transitamos en espirales, cambiando de formas, pero repitiendo patrones. Es probable que hoy estemos transitando uno de esos espirales en los que el mundo parece desmoronarse, Winston Churchill decía "cuanto más atrás puedas mirar, más adelante verás" y así encontramos eventos como la caída del Imperio Romano, la Revolución Francesa o el colapso de la Unión Soviética, momentos donde el mundo experimentó incertidumbre y preocupación por el futuro, en estos casos, la tensión fue antesala de un cambio profundo, quizás doloroso, pero necesario. El presente nos muestra la guerra en Ucrania, conflictos en Medio Oriente, auge de extremismos políticos, debilitamiento de la confianza en instituciones y tantas otras circunstancias que reflejan crisis y desencuentros en el mundo, a pesar de la globalización que prometía unirnos, pero que en su evolución ha expuesto nuestras vulnerabilidades y lamentablemente ha acentuado divisiones mediante la creación un entorno global de desinformación, medias verdades y/o mentiras que se propagan como virus. Quizás esto sea uno de los mayores problemas actuales, la erosión de la verdad como valor fundamental, ya lo decía Miguel de Unamuno "Vivir sin verdad es no vivir" y hoy la desinformación está al alcance de un clic, la manipulación de datos en las redes sociales es una realidad que amplifica el sesgo y fragmenta la verdad en tantas versiones como actores en juego, incluso sobre un mismo hecho.`,
      },
      {
        type: "p",
        text: `Nuestra sociedad es un laberinto de contradicciones para jóvenes y familias que enfrentan desafíos sobre el futuro, casos tangibles lo vemos en la moda, valores en disputa, debate entre estructuras ortodoxas y modernas, ritmos musicales con sus videoclips y letras, modas ideológicas o tendencias woke que han dejado de ser expresiones culturales para convertirse en potentes vehículos de influencia que aparentemente actúan bajo la bandera de la inclusión y la modernidad pero promueven mensajes que diluyen valores fundamentales, estos hechos así como la banalización del esfuerzo y la imposición de ideologías extremas están penetrando la juventud, sumergiéndola en un relativismo sin límites donde lo correcto e incorrecto depende del capricho del momento. Mientras esto sucede, la mayoría de gobiernos y organismos miran hacia otro lado, por conveniencia o cobardía permitiendo que estas corrientes dicten nuevas normas sin un mínimo debate sobre sus consecuencias futuras, y no se trata de oponerse al cambio ni de censurar la evolución cultural, sino de cuestionar si estas tendencias realmente aportan a la construcción de una sociedad más justa y equilibrada o si, por el contrario, están erosionando los cimientos de la responsabilidad, el respeto y la verdad. Este escenario, exige asumir acciones valientes para defender a la familia y garantizar un buen futuro para las nuevas generaciones, potenciando su capacidad de cuestionar para que puedan crecer y desarrollarse con sólidos valores en una sociedad donde la verdad y la justicia no son en muchos casos la moneda de cambio.`,
      },
      {
        type: "p",
        text: `Hoy, cualquiera con un perfil en redes sociales y un par de frases motivacionales bien estructuradas puede proclamarse experto, sin formación ni la experiencia de haber enfrentado pruebas que forjan un verdadero especialista, estos falsos gurús que prometen cambiar tu vida en cinco pasos, enseñarte las diez leyes infalibles del éxito o revelarte el secreto para volverte millonario están acumulando seguidores día tras día y en su recorrido moldean mentalidades con discursos superficiales y llenos de promesas, son una epidemia, se creen capaces de todo, pues muchos de estos, se apoyan en la magia de la inteligencia artificial que les permite generar obras maestras en segundos y el problema no es la IA en sí misma, sino su uso irresponsable, ya que, en manos de quienes realmente buscan aportar conocimiento, la inteligencia artificial es un instrumento poderoso para la educación y la innovación pero en manos oportunistas, se convierte en un vehículo peligroso principalmente para los jóvenes que se están creyendo el cuento del éxito y felicidad instántanea y que el esfuerzo se reemplaza por atajos. ¿Estamos frente a una generación que confía más en un influencer que en verdaderos especialistas? ¿Construcción de un mundo irreal de sabiduría instantanea? Ahora, ¿Dónde queda la autenticidad y la experiencia?, debe seguir dando la lucha por la verdad en medio del ruido digital, muchas veces con voces opacadas porque la verdad con su complejidad y matices, no es tan atractiva como el espectáculo que ofrece una receta mágica de unos cuantos caracteres, con título de impacto y llamado a la acción o un video editado para generar emociones rápidas. Urge valorar el conocimiento real antes que la mediocridad disfrazada de sabiduría termine definiendo la realidad, es hora de reivindicar el valor de la experiencia, la preparación y la verdad, antes que el mundo se rinda a la era de los falsos sabios.`,
      },
      {
        type: "p",
        text: `Efectivamente estamos en tiempos de incertidumbre y crisis, pero no hay mejor oportunidad para el cambio que la crisis, por lo tanto, el cambio es inevitable, la dirección que tome depende de nosotros. Si queremos un futuro basado en la verdad, la ética y el respeto a la dignidad humana, debemos empujar hacia ese lado, lo contrario es quedarnos como simple espectadores.`,
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
    readingTime: 7,
    tags: ["transformación", "pymes", "tecnología"],
    body: [
      {
        type: "p",
        text: `Hace unos días finalizamos un programa de transformación digital para pymes, donde abordamos diversos desafíos y oportunidades que enfrentan las empresas durante este proceso y hubo un punto alineado al criterio de todos los que participamos: la transformación digital no es un destino, ni un proyecto con fecha de inicio y fin, es una actividad permanente, de la cual trataré de destacar sus elementos más relevantes en estas líneas y empiezo con una frase del Dr. Mario Alonso Puig: "Cuando una persona quiere tener un buen futuro, lo primero que tiene que tener, es un gran presente."`,
      },
      {
        type: "p",
        text: `Esta reflexión se aplica también a las empresas, porque en el afán de crecer y proyectarse hacia el futuro olvidan que la base del éxito no está en lo que prometen hacer mañana, sino en lo que están haciendo hoy. Siempre he creído en el poder del presente para edificar el futuro y aunque la cotidianidad, esa mezcla de rutinas diarias a veces suele jugar en contra, logrando la procrastinación y fortaleciendo creencias como: "mañana será el día para empezar" o "cuando se tengan los recursos adecuados se dará el primer paso", no los debe confundir, porque la realidad es que el futuro se construye desde hoy.`,
      },
      {
        type: "p",
        text: `Actualmente muchas pequeñas y medianas empresas aún dependen de métodos anticuados para gestionar sus operaciones, no es sorpresa, encontrar oficinas donde el inventario se controla desde hojas de cálculo de excel, el mantenimiento de equipos se registra en papel, el análisis de facturas se realiza de forma manual e igualmente sucede con los pedidos de clientes, entre otras tantas cosas, pero esta forma de trabajar, aunque parezca inofensiva, tiene un costo muy alto. Los procesos en una empresa independientemente de su tamaño, sector u actividad son diversos y comprenden un conjunto de tareas y procedimientos que entre otros objetivos permiten llevar control de la operación, prevenir posibles riesgos y dejar abierta la oportunidad de mejora y cuando uno de estos objetivos no está claro, hay debilidad en su ejecución y/o presentan errores recurrentes es necesario buscar alternativas para obtener mejor precisión. No es por moda o tendencia que lo digo, pero, la transformación digital es una real solución a muchas de estas necesidades que tienen las empresas hoy y en la medida que adopten sistemas automatizados para gestionar sus operaciones serán mucho más rentables, confiables y seguras.`,
      },
      {
        type: "p",
        text: `En una oportunidad conversaba con el dueño de un negocio y me comentaba feliz que llevaba trabajando más de 20 años ininterrumpidos y frases como "somos los mismos de siempre" o "lo digital es para los jóvenes" me quedaron presentes por la evidente resistencia al cambio y a la innovación; este fenómeno se ve también en muchos profesionales que miran las propuestas de mejoras de las actividades que realizan como obstáculos a su "tranquilidad" y de lo que se trata es de adoptar un enfoque integral que optimice los procesos y proporcione datos para tomar mejores decisiones.`,
      },
      {
        type: "p",
        text: `La transformación digital no es solo tecnología, además es, un cambio de mentalidad porque se requiere valentía para salir de la zona de confort, abandonar prácticas arraigadas o los procesos que "siempre han funcionado", también se requiere flexibilidad para adaptarse a los nuevos tiempos y crear una visión más clara del futuro. Lo común es asociar este proceso únicamente a software, hardware, conectividad, etc, pero la tecnología es solo la herramienta, el verdadero motor de la transformación reside en la mentalidad de las personas que la impulsan, sobre todo cuando su resistencia inicial se transforma en entusiasmo porque comienzan a ver los primeros resultados: procesos más eficientes, menos papeleo y más tiempo para lo que realmente importa. No es cliché decir que las empresas que sobreviven y prosperan son aquellas que entienden la transformación digital como una necesidad estratégica y no como una opción que se pueda descartar o postergar "quien sabe para cuándo".`,
      },
      {
        type: "p",
        text: `Cuando una empresa considera transformarse digitalmente, surgen dos preguntas fundamentales: ¿por dónde empezar? y ¿cómo llevarlo a cabo?, la clave radica en entender que no se trata de digitalizar por digitalizar, sino de usar la tecnología para fortalecer la esencia del negocio, por lo tanto, antes de invertir en cualquier herramienta digital, es necesario responder algunas interrogantes ¿Qué metas de negocio queremos alcanzar con la digitalización? ¿Cómo podemos fortalecer nuestra propuesta de valor, diferenciarnos de la competencia? ¿Buscamos aumentar la eficiencia operativa, mejorar la rentabilidad, o transformar la experiencia del cliente?, la respuesta a estas preguntas guiará vuestras decisiones y asegurará que la tecnología se convierta en un aliado estratégico y no en un simple adorno. Luego debe haber una priorización inteligente, pues, no todo debe digitalizarse de inmediato, es fundamental identificar las áreas donde la transformación generará mayor valor y comenzar por allí y para esto, entre otras cosas, se deberá analizar previamente dónde se encuentran los cuellos de botella en los procesos o cuales áreas tienen el mayor potencial de mejora, de esta manera se maximizará el impacto de los recursos y se obtendrán resultados más rápidos.`,
      },
      {
        type: "p",
        text: `El futuro no es una cuestión de suerte ni de esperar el momento perfecto, las empresas que triunfan son aquellas que deciden actuar hoy y sin excusas. ¡Éxitos!`,
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
    readingTime: 7,
    tags: ["venezuela", "autoritarismo", "poder"],
    body: [
      {
        type: "p",
        text: `La historia conserva grandes ejemplos del ascenso y caída de regímenes autoritarios, por más sólidos que parezcan, llevan en sí mismos su propia ruina. Al aferrarse al poder, recurren a abusos cada vez mayores, acelerando su colapso. Venezuela no será la excepción, las elecciones presidenciales del 28 de julio de 2024 representaron un punto de inflexión, ya que, con Edmundo González Urrutia como claro ganador, el régimen de Maduro optó no por el fraude tradicional, sino por la aniquilación total del proceso electoral desconociendo los resultados, marcando el fin de su disfraz democrático y consolidando la imagen de lo que siempre ha sido: ¡Un dictador! El pasado 10 de enero de 2025, Nicolás Maduro ilegítimamente se juramentó sin ninguna base de apoyo popular, solo con la complicidad de su aparato de poder; evolucionaron, lo que en otrora era un sistema basado en el populismo y la manipulación electoral, hoy se reduce a la retención del poder erosionando totalmente la legalidad, un verdadero asalto a la democracia y sus principios. La pregunta nunca fue si Maduro entregaría el poder, sino ¿cuándo y cómo se vería obligado a hacerlo? ¿La oposición pecó de ingenuidad al participar en ese proceso o lo hizo a sabiendas lo que tramaba el régimen, porque necesitaba que se quitaran las caretas definitivamente? sin duda, era necesario desenmascararlos porque a lo largo de la historia, cada dictador que ha llegado a este punto ha firmado sin saberlo, su sentencia de muerte política.`,
      },
      {
        type: "p",
        text: `La democracia venezolana desde Chávez ha sido atacada sin piedad, la ilegalidad y el atropello sistemático de derechos se convirtieron en la norma, cerrando todos los caminos democráticos para consolidar una dictadura con las fuerzas armadas y milicias urbanas como brazo de amedrentamiento y terror, esta es la realidad. No obstante, el régimen enfrenta un dilema que ha derrumbado muchas dictaduras: aislamiento internacional, esta vez con razones y evidencias de insuperable peso y resistencia interna firme porque la gente sabe que no ganó ni siquiera en los cuarteles militares.`,
      },
      {
        type: "p",
        text: `No es sorpresa la "Convocatoria a Elecciones Regionales", el régimen trata de proyectar un clima de paz, estrategia gastada y conocida: participan sus aliados directos y también falsos opositores, aquellos que fingen ser adversarios del régimen, pero juegan en su mismo equipo defendiendo cuanta farsa electoral convocan. Forma parte del libreto de las dictaduras, acaso ¿Pinochet y Videla no utilizaron políticos y empresarios para justificar su permanencia en el poder?, estos personajes se fundamentan en frases como, "es mejor participar que quedarse de brazos cruzados" o "no podemos ceder espacios" estas, no son más que excusas recurrentes de quienes no buscan un cambio, sino, preservar sus intereses personales, acceder a financiamiento y mantener relevancia política, contribuyendo así, a perpetuar el control dictatorial. Sobre esto Hannah Arendt enfatizó "los regímenes totalitarios utilizan a estos colaboracionistas para sembrar desconfianza y dividir a la resistencia", triste futuro político les espera, ejemplos hay de sobra de como terminan siendo desenmascarados y condenados por la sociedad.`,
      },
      {
        type: "p",
        text: `A nivel internacional, países como Nicaragua, Cuba, China y Rusia han sido fundamentales para la supervivencia del régimen, proporcionándole recursos y blindaje diplomático, mientras tanto, otras naciones como México, Colombia, Brasil y España han jugado un rol de neutralidad cómplice, permitiendo que el régimen siga operando en un limbo político. Sin embargo, el cerco se estrecha: la presión internacional del resto de países crece y organismos como la OEA, ONU, UE, Corte Interamericana de Derechos Humanos y Corte Penal Internacional acumulan expedientes que agravan su situación. Por otro lado, la forzada migración de más de ocho millones de venezolanos ha creado una diáspora incansable que denuncia a viva voz la crisis humanitaria mientras las sanciones internacionales erosionan las estructuras de financiamiento del régimen.`,
      },
      {
        type: "p",
        text: `En el camino se han perdido luchadores, héroes y demócratas a carta cabal, su espíritu de lucha fortalece e inspira a los que aquí seguimos y entre tantos nombres de hombres, mujeres y jóvenes que han desafiado al régimen destaca una mujer que con valentía inquebrantable encarna la lucha por la libertad: María Corina Machado, icono indudable de resistencia y esperanza. Su liderazgo, determinación y transparencia ha sido clave para articular a millones de venezolanos a pesar de la represión implacable del gobierno, ella ha marcado el camino, la ruta, quizás sin tener todas las respuestas, pero sabiendo que la transición no es un sueño utópico si se construye con cada acto de resistencia, con cada voz que se niega a ser silenciada, con cada aporte en nombre de la libertad, yo sí creo que Venezuela está más cerca que nunca de recuperar su democracia, el mundo mira firme nuestra lucha, Maduro ha cruzado todas las líneas rojas, ya solo depende de la represión.`,
      },
      {
        type: "p",
        text: `La historia de las dictaduras ha demostrado que su agonía es un proceso complejo, donde su desenlace, el ¿cuándo? y el ¿cómo?, están determinados por la persistencia, la organización social, la presión internacional y la unidad del pueblo. Así como hoy arde nuestra llama de libertad, que ardan también las voces y luchas de todos los pueblos oprimidos, que sean imparables como un aguacero que no cesa… ¡hasta el final!`,
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
    readingTime: 7,
    tags: ["conocimiento", "acción", "gestión"],
    body: [
      {
        type: "p",
        text: `El genio Leonardo Da Vinci destacó la importancia de la acción sobre el conocimiento y lo dejó plasmado en la frase: "No es el saber lo que es más importante, sino el saber hacer" poderosa sentencia que aplica a cualquier gestión, ya que la posibilidad de un resultado exitoso se sustenta en el equilibrio entre el conocimiento teórico y la capacidad de aplicarlo en la práctica, si bien la inteligencia y el dominio de conceptos son fundamentales, estos por sí solos no garantizan el éxito de la gestión. Numerosas organizaciones han experimentado fracasos rotundos a pesar de contar con equipos altamente calificados, lo que evidencia una brecha significativa entre el saber y el saber hacer, el ejercicio y responsabilidad de llevar adelante una gestión con éxito implica tener una múltiple combinación de habilidades y destrezas.`,
      },
      {
        type: "p",
        text: `Los líderes empresariales y los funcionarios públicos deben poseer una sólida base teórica para comprender los complejos desafíos que enfrentan sus organizaciones, pero esto apenas es un elemento, pues el éxito estará presente cuando logren combinar ese conocimiento con la capacidad para tomar decisiones estratégicas, motivar equipos, resolver conflictos con liderazgo, adaptarse a entornos cambiantes con sagacidad, saber por dónde empezar el rompecabezas, saber escuchar, saber definir qué acciones son prioritarias y quiénes son las personas idóneas para llevarlas a cabo y saber supervisar y evaluar los avances. Agrego como punto especial la capacidad de comunicación, pues, saber: cómo, cuándo y qué comunicar es clave para transmitir la visión con claridad y el propósito con firmeza, además que trae implícita la posibilidad de lograr la credibilidad necesaria en la gestión de expectativas de manera efectiva. Todo esto será en vano si no hay ganas genuinas de querer hacerlo, de aquí que la actitud y voluntad de la persona son determinantes para inspirar confianza y lograr objetivos con éxito.`,
      },
      {
        type: "p",
        text: `La historia está repleta de ejemplos que demuestran cómo incluso las mentes más brillantes con pocas habilidades prácticas y humanas han fracasado en sus roles de gestión y liderazgo, desencadenando el colapso de organizaciones aparentemente invencibles. La célebre frase de Henry Ford, "Si preguntara a mis clientes qué querían, me habrían dicho un caballo más rápido", subraya la necesidad de ir más allá del conocimiento técnico y entender profundamente las necesidades reales de los consumidores y en una línea similar, Elon Musk reflexionó sobre su experiencia diciendo: "La peor decisión que tomé fue darle demasiada importancia al talento y no tanto a la personalidad. Importa, y mucho, si una persona tiene buen corazón, en vez de un buen cerebro". Ambas afirmaciones destacan un principio esencial: el liderazgo efectivo no se basa únicamente en la inteligencia o el conocimiento, sino en la capacidad de conectar con las personas, influir sobre ellas y construir equipos basados en la empatía y la confianza; allí reside la capacidad de promover y llevar al éxito a una organización, institución o proyecto.`,
      },
      {
        type: "p",
        text: `En una oportunidad estuve entrevistando a varias personas para un cargo clave, los finalistas, demostraron profundo conocimiento, sin embargo, al plantearles un problema, un escenario específico y pedirles que describieran cómo lo abordarían para su solución, las diferencias fueron evidentes. Uno de ellos respondió de manera impecable desde el punto de vista teórico, mostrando un conocimiento claro del tema, pero su enfoque resultó abstracto. En cambio, el otro candidato no solo demostró sus conocimientos, también describió con precisión las acciones concretas que tomaría para resolver el problema planteado, por lo tanto, su respuesta fue más práctica y efectiva, además de la forma de comunicar cómo gestionaría la situación.`,
      },
      {
        type: "p",
        text: `Esta experiencia reafirma la brecha entre saber y saber hacer y sus efectos para las organizaciones, realmente no basta solo con dominar la teoría, lo que marca la diferencia es la capacidad de traducir ese conocimiento en acciones tangibles y soluciones claras. Hemos visto como líderes sin tener una formación académica extensa, lograron construir empresas exitosas y duraderas, tal es el caso de Henry Ford que revolucionó la industria automotriz con su enfoque en la producción en masa o Steve Jobs fue capaz de transformar Apple en una de las empresas más valiosas del mundo.`,
      },
      {
        type: "p",
        text: `El dinamismo de la actualidad impone la capacidad de adaptarse para mantenerse a flote, las estructuras rígidas se muestran cada vez más ineficaces frente a un entorno en constante cambio, mientras la teoría sigue evolucionando. En este escenario, la actitud de líderes y gerentes se convierte en un factor decisivo en la superación de retos y desafíos actuales, muchos de ellos llegan de forma imprevista, no admiten tiempo de análisis, imponiendo para su solución conocimientos y habilidades en la gestión práctica.`,
      },
      {
        type: "p",
        text: `Cerrar esta brecha entre el conocimiento (saber) y su aplicación práctica (saber hacer) sigue siendo un desafío, las empresas e instituciones deben seguir avanzando en programas disruptivos de aprendizaje y las instituciones educativas deben seguir rediseñando sus currículos para equilibrar la formación con escenarios que se dan a diario en empresas e instituciones del mundo, promoviendo cada vez más la capacidad de aplicar conocimiento. Tony Robbins lo dijo de esta manera: "El saber hacer es la capacidad de aplicar el conocimiento de manera efectiva en el mundo real" y hoy yo lo resalto, para indicar que las personas y organizaciones que integren este enfoque estarán mejor posicionadas para lograr el éxito al enfrentar los retos actuales y del futuro.`,
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
    readingTime: 7,
    tags: ["geopolítica", "estados unidos", "liderazgo"],
    body: [
      {
        type: "p",
        text: `Tras el rotundo triunfo de Donald Trump en las recientes elecciones presidenciales de Estados Unidos, que lo convierte en el 47º presidente de ese país, se han generado numerosos análisis sobre las razones que motivaron su victoria, incluso de sus más férreos adversarios los cuales convergen principalmente en causas políticas y sociales: descontento de la población con el "establishment" político, preocupación por distorsiones en agendas globales, cansancio de políticas progresistas que vulneran valores tradicionales. Estas explicaciones suelen quedarse insuficientes, sería más contundente agregar a cada "¿Por qué?" un "¿Para qué?" Para abrir una ventana sobre el futuro y el objetivo que se aspira, ayudando a entender el motivo de fondo y la orientación de las decisiones, intenciones e impacto deseado.`,
      },
      {
        type: "p",
        text: `¿Para qué ganó Trump? entender cuál será su misión tomando en cuenta sus posiciones durante la campaña, plantea preguntas sobre el rumbo que tomará y su consecuente influencia en el mundo, porque guste o no guste, Estados Unidos representa una de las democracias más sólidas a nivel global, es una potencia económica, militar y sus decisiones, así como las acciones de sus líderes en el ámbito gubernamental y empresarial tienen un impacto profundo en las dinámicas sociales y económicas del resto del mundo, estableciendo tendencias que moldean estilos de vida, visiones de futuro y modelos de desarrollo. Hay muchas expectativas por los giros en la Casa Blanca, pero su éxito vendrá de su capacidad de responder a las demandas internas y por su habilidad para liderar de manera responsable y constructiva los retos globales actuales.`,
      },
      {
        type: "p",
        text: `La globalización ha impulsado la adopción de perspectivas similares entre ciudadanos de distintas naciones en temas esenciales para la sociedad. En este escenario, muchos han encontrado refugio y voz en líderes como Donald Trump, polémico y a veces contradictorio, pero supo apropiarse de banderas que el mundo reclama con urgencia; necesidad de orden y estabilidad en un contexto global de incertidumbres que requiere planteamientos contundentes sobre elementos como recuperar el valor de la familia tradicional conformado por hombre y mujer y la importancia de los valores cristianos como cimientos que dan sentido y dirección a la vida social.`,
      },
      {
        type: "p",
        text: `Barack Obama dijo en una oportunidad que "la democracia en un país de 300 millones de personas puede ser ruidosa, desordenada y complicada y cuando cada voz es escuchada, entonces esa es precisamente la democracia en su máximo esplendor" el hecho de escuchar a cada persona no debería significar de forma automática concesiones individuales o colectivas, pues, la línea que se traza es muy frágil y puede rozar con el anarquismo que promueve libertades sin orden. El crecimiento del colectivismo y la cultura progre en su afán por deconstruir todo lo establecido, proposición de una gama de identidades de género que confunden a todos, entre otros aspectos que han encontrado asidero en partidos y políticos populistas en busca de mantener un status quo o aumentar popularidad para un momento electoral sin medir consecuencias sociales futuras.`,
      },
      {
        type: "p",
        text: `Por otra parte, las acciones a tomar frente al auge de modelos de gobiernos basados en ideologías autoritarias como el comunismo que ha dejado una huella de destrucción, pobreza y represión dondequiera que se ha implementado, es hora de desenmascarar sus promesas engañosas, sus defensores y educar sobre los daños que este modelo ha causado y sigue causando, en la historia hay numerosos ejemplos de cómo el comunismo lleva a la pérdida de libertades individuales y al deterioro de las condiciones de vida y es tarea de las democracias alertar a sus pueblos sobre sus verdaderos efectos.`,
      },
      {
        type: "p",
        text: `La reivindicación del capitalismo como motor de desarrollo con todas sus imperfecciones, demostrando ser el sistema más efectivo para generar crecimiento, desarrollo y bienestar para las familias, las comunidades y los países, es un modelo que permite la movilidad social, que incentiva la innovación y que en un marco de libertades permite que cada individuo alcance su máximo potencial, defender el capitalismo es defender el derecho a la propiedad, a la libre empresa y a la competencia justa, elementos esenciales para el progreso.`,
      },
      {
        type: "p",
        text: `Dag Hammarskjöld, ex Secretario General de la ONU dijo en una oportunidad que: "Las Naciones Unidas no fueron creadas para llevar a la humanidad al cielo, sino para salvarla del infierno", basado en estas apreciaciones se impone la búsqueda de justicia mediante instituciones sólidas, coherentes y efectivas a nivel mundial que deben reconstituirse para ser claves en la interpretación del futuro y las acciones que se requieren aplicar, ya lo dijo Antonio Guterres, actual Secretario General de la ONU "La ONU es el foro más importante que el mundo tiene para enfrentar desafíos globales, pero necesita reformas urgentes para ser efectiva"`,
      },
      {
        type: "p",
        text: `La "Misión: Trump II" no será sencilla, tendrá que navegar un panorama complejo, donde cada decisión será una prueba de su liderazgo y de la capacidad de Estados Unidos para reinventarse y reafirmarse en un mundo cada vez más incierto, Bill Clinton, lo expresó de la siguiente forma "La verdadera fuerza de Estados Unidos no radica en su riqueza ni en su poder militar, sino en su habilidad para inspirar ideales que trascienden sus fronteras" Esa inspiración será puesta a prueba y si Trump logra cumplir esta misión podría marcar un antes y un después en el poder de influencia estadounidense a nivel global.`,
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
    readingTime: 6,
    tags: ["poder", "geopolítica", "tecnología"],
    body: [
      {
        type: "p",
        text: `Quizás para muchos será difícil de creer, pero los amos del mundo no son los líderes de las potencias, ellos son circunstanciales, tampoco son los dueños de los grandes bancos, ellos luchan por mantener a flote el valor de sus monedas en un mundo cada vez más diversificado y menos creyente en sus bondades, los verdaderos amos del mundo son los que cambian los hábitos de vida, modifican la cotidianidad y nos hacen dependientes < hasta viciosos > de sus inventos. ¿Quién hasta hace 20 o 30 años podía imaginar hacer una videollamada por un dispositivo móvil de tamaño igual o inferior al de una mano? Y esto solo por poner un ejemplo. Pero que hay detrás de estas grandes invenciones, ¿Son acaso características sociales, culturales, económicas de la sociedad? ¿Son atributos personales, condiciones superiores de estos seres que les otorga diferencia suprema sobre el resto de la humanidad? O una mezcla de ambas.`,
      },
      {
        type: "p",
        text: `Mas allá de la genialidad, ímpetu, determinación y visión de personas como Steve Jobs, Bill Gates, Elon Musk, Mark Zuckerberg, solo por nombrar algunos de los más conocidos emprendedores, que han construido emporios valorados en sumas superiores al PIB de algunos países latinoamericanos, es necesario evaluar el emprendimiento en sí y las circunstancias que lo promueven, ya que seguirán en expansión e impactarán en el mundo. Es pertinente que líderes entiendan esta realidad y promuevan cambios de rumbo en cuanto a la gestión económica y el desarrollo de sus naciones porque la explotación de los recursos naturales no ha sido ni será suficiente para cubrir tantas expectativas. ¿Por qué aferrarse a eventos y formas tradicionales de gestión? ¿por qué vemos empresas que avanzan y crecen con una agilidad sorprendente en contraposición a países en los cuales no sucede los mismo?`,
      },
      {
        type: "p",
        text: `Hay una frase atribuida a Sócrates, el gran filósofo griego donde revela un gran secreto, el secreto para cambiar, él decía que: "El secreto para cambiar es encontrar toda la energía y ponerla al servicio no para luchar contra lo viejo sino para construir lo nuevo"`,
      },
      {
        type: "p",
        text: `Desde hace unos años viene un proceso en el mundo rompiendo las barreras entre lo digital, lo físico y lo biológico, está transformando el mundo en que vivimos, es la Cuarta Revolución Industrial donde tecnologías como el internet 5G, inteligencia artificial, ingeniería genética, impresión 3D y tecnología blockchain, representan grandes oportunidades, que están dando paso a un nuevo orden mundial en el horizonte cercano con características distintas a lo que hemos visto hasta ahora.`,
      },
      {
        type: "p",
        text: `Ante tantas ideas trasnochadas basadas en débiles experiencias y en resultados contraproducentes, ante lideres obstinados que tratan de imponer ideologías y modelos retrógrados, es insano tratar de erigirse como eruditos infalibles de lo que deben hacer los países para asegurar y fortalecer la prosperidad de su gente, razón tuvo el famoso escritor estadounidense Eric Hoffer cuando se le consultó acerca de las mejoras posturas de las personas y naciones en tiempos de cambio, respondiendo que: "En tiempos de cambio, quién cree saberlo todo estará bien equipado para un mundo que no existe"`,
      },
      {
        type: "p",
        text: `Y por esto resalto que quienes se adueñan del mundo son los que están abiertos al aprendizaje, a fusionar conocimientos y en esa búsqueda constante de solucionar falencias o mejorar estilos de vida y problemas sociales, proponen sus ideas mediante innovaciones. Hay ideas buenas que han tenido éxito, así como otras que se han quedado en el camino, pero en la medida que se construya en nuestras naciones una estructura social, económica y académica que coadyuve a que sigan surgiendo, se estará generando un ecosistema propicio para la creación de grandes ideas innovadoras de impacto global.`,
      },
      {
        type: "p",
        text: `Andrés Openheimer, el agudo periodista y escritor argentino planteaba en uno de sus libros ¿Por qué los países latinoamericanos no crecen en la misma dimensión que los asiáticos o europeos? Y al respecto mencionaba que: "Mientras los asiáticos están guiados por el pragmatismo y obsesionados por el futuro, los latinoamericanos estamos guiados por ideologías y obsesionados con el pasado"`,
      },
      {
        type: "p",
        text: `Esta debe ser una profunda reflexión que se debe dar ya que en esta era del conocimiento no es posible que nuestras principales motivaciones sean las que tuvieron hombres y mujeres que vivieron hace cientos de años. Hasta cuando líderes que pretenden con símbolos y alegorías del pasado ser populares en el presente.`,
      },
      {
        type: "p",
        text: `Que bien que existan glorias del pasado en nuestros países, es nuestra historia, pero es hora de empezar a trabajar para construir los símbolos y glorias del futuro y esto será posible en la medida en que nuestras naciones avancen a la par de la innovación en el mundo.`,
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
    readingTime: 6,
    tags: ["democracia", "instituciones", "ciudadanía"],
    body: [
      { type: "h2", text: `¿Cuándo se deja de ser democrático?` },
      {
        type: "p",
        text: `A propósito de celebrarse el 15 de septiembre el día internacional de la democracia, es importante reflexionar acerca de sus aportes como sistema político ya que ha sido ampliamente valorada por su énfasis en la participación ciudadana, la protección de derechos individuales y el favorecimiento de la toma de decisiones colectivas. Sin embargo, es importante reconocer que incluso en los sistemas democráticos existen límites y riesgos inherentes que podrían erosionar los principios que la originan y sostienen para dar paso a regímenes totalitarios y crecen inicialmente en las ideas de alguien que por su condición de poder circunstancial pretende alargar estos lapsos de tiempo mediante acciones poco democráticas que aseguren su permanencia en esa instancia de poder y liderazgo.`,
      },
      {
        type: "p",
        text: `Hay varios factores que evidencian la transición de un líder hacia conductas totalitarias de las cuales hay que estar advertidos, por ejemplo: pretensión de concentrar mayor poder del permitido en sí mismo o en un círculo cercano, manipulación de instituciones, pretensión de incidir en decisiones del Poder Judicial, legislativo u organismos de control con el objetivo de socavar la independencia de estos poderes o limitar su capacidad de vigilancia, limitar la libertad de expresión, utilizar tácticas intimidatorias para silenciar opiniones críticas hasta llegar al punto de crear entornos donde se promueva el culto a su persona como máximo y único líder capaz.`,
      },
      {
        type: "p",
        text: `Un pilar fundamental de la democracia es la expresión de la voluntad popular mediante elecciones libres y justas ya que los líderes electos reflejan la diversidad de la sociedad y además deben estar sometidos a un sistema robusto de contrapesos y supervisión. Ahora, ¿es suficiente la mera realización de elecciones para considerar que un país es democrático? La respuesta es negativa si dichas elecciones carecen de transparencia o equidad, si el proceso electoral previo y posterior se ve empañado por reducción de derechos civiles, desigualdad de condiciones entre candidatos o el uso indebido de los recursos gubernamentales a favor de un candidato oficialista, estos factores y otros similares erosionan la legalidad y transparencia del proceso y por tanto sus resultados pierden su legitimidad, así como la democracia, su esencia.`,
      },
      {
        type: "p",
        text: `A nivel internacional, existen instancias como la Organización de Estados Americanos y Naciones Unidas, Unión Europea, Corte Penal Internacional, G7, G20, entre otros que actúan en sus respectivos ámbitos de acción, pero su capacidad en este mundo multipolar cada vez es más limitada y los tiempos de resolución demasiado lentos para frenar de manera efectiva el deterioro democrático en tiempo real, además, que esta vigilancia sobre procesos electorales y retrocesos en sistemas democráticos varía en función de los intereses geopolíticos y las dinámicas de poder donde la imposición de sanciones o advertencias tienden a ser selectivas y en lugar de garantizar una intervención oportuna las instituciones no van más allá de comunicados y ruedas de prensa generando ambientes propicios para la consolidación de regímenes autoritarios en países cuya fachada democrática oculta elecciones amañadas y erosión progresiva de pilares fundamentales de la democracia.`,
      },
      {
        type: "p",
        text: `Uno de los episodios más recientes que ha mantenido al mundo en vilo es el flagrante fraude perpetrado por el dictador Nicolás Maduro en Venezuela, al escribir estas líneas, como noticia de último minuto, se informa que Edmundo González Urrutia, legítimo vencedor de las elecciones presidenciales celebradas el pasado 28 de julio, se dirige al exilio en España buscando proteger su vida y libertad de la implacable persecución del régimen, este hecho es una nueva muestra del colapso democrático en países donde la voluntad popular ha sido progresivamente pisoteada por dictadores que utilizan el aparato del estado para promover violencia y miedo en la población y lograr perpetuarse en el poder.`,
      },
      {
        type: "p",
        text: `Difícil tarea tiene la comunidad internacional para enfrentar estas circunstancias con mayor firmeza y coherencia de lo contrario, seguirá siendo testigo silente de la degradación democrática que amenaza con volverse irreversible en muchos países del mundo, ante esto, es importante recordar un episodio ocurrido en la Cámara de los Comunes del Reino Unido el 11 de noviembre de 1947 en medio de un momento difícil para el mundo pues, aún se estaba superando la devastación de la Segunda Guerra mundial y Winston Churchill pronuncia uno de los discursos más memorables de la historia abogando por la importancia de la democracia en un momento en que surgían diversas ideologías políticas y sistemas de gobierno distintos, enfatizando que "la democracia es el peor sistema de gobierno diseñado por el hombre con excepción de todos los demás"`,
      },
      {
        type: "p",
        text: `Hoy, reivindico sus palabras y concuerdo que a pesar de sus fallas e imperfecciones la democracia sigue siendo el mejor sistema de gobierno, pero dejando claro que no es un estado estático, es un proceso continuo que requiere vigilancia, defensa constante y todos debemos tener el deber de defenderla, consolidarla y en cuanto sea posible mejorarla, por lo tanto, la democracia no es solo un ideal a ser celebrado, es una tarea a ser realizada.`,
      },
      { type: "quote", text: `¡Las ideas cobran fuerza cuando se comparten!` },
    ],
  },
  {
    slug: "era-de-la-velocidad",
    title: "La era de la velocidad: te mueves o claudicas",
    excerpt:
      "Muchas empresas nacen con la misma concepción de las personas en su juventud, elaboran planes de vida exitosos, a largo plazo, rígidos y luego les pasa como el que construye un castillo de arena en la orilla del mar, por muy sólido que parezca está condenado a ser destruido por las olas. En un mundo empresarial cada vez más competitivo y volátil, las organizaciones deben ser capaces de adaptarse a los cambios con la misma agilidad que un camaleón cambia de color.",
    category: "Emprendimiento",
    date: "2025-01-28",
    readingTime: 6,
    tags: ["innovación", "agilidad", "adaptación"],
    body: [
      {
        type: "p",
        text: `Dave Girouard CEO de @upstart quien además es conocido por convertir la división de aplicaciones empresariales de Google en un negocio de más de 1000 millones de dólares, generó gran impacto por su visión acerca de la velocidad en la toma de decisiones como elemento fundamental para el crecimiento de las empresas, asumiendo como premisa fundamental para tal proposición, la siguiente clave: "CUÁNDO se toma una decisión, es mucho más importante, que QUÉ decisión se toma"`,
      },
      {
        type: "p",
        text: `Considero que esta idea no solo tiene efectos positivos para el crecimiento de las empresas, también podría tener similar efecto para el crecimiento y proyección individual, sobre todo si atendemos como viable lo que el General George Patton defendía en sus planteamientos estratégicos "Un buen plan ejecutado violentamente ahora, es mejor que un plan perfecto la próxima semana" Y es que la agilidad con la que se mueve el mundo, tendencias, modas, usos, herramientas, metodologías y formas, ha traspasado las formas de gestión empresariales conocidas, imponiéndose ahora, modelos basados en la flexibilidad, agilidad, rapidez y proponiendo fijar cumplimientos en lapsos operativos más cortos para poder medir, entre otras cosas, uso de recursos, cantidad de tareas y resultados con base a objetivos planteados, de esta manera, si ocurriese un error, pueda ser subsanado también con la misma agilidad, pero esta vez aprendiendo de lo ocurrido.`,
      },
      {
        type: "p",
        text: `La velocidad actual ha transformado vertiginosamente el mundo empresarial, demandando profesionales más ágiles, creativos e innovadores, las metodologías ágiles con su enfoque en la iteración, adaptación y mejora continua son un claro ejemplo de cómo ha cambiado la forma en que trabajamos. Los profesionales deben conocer las herramientas tecnológicas más avanzadas que permitan desarrollar su trabajo de forma eficiente, estar dotados con las competencias necesarias para enfrentar los desafíos de un mercado laboral en constante evolución, convertirse en gestores proactivos de su propio conocimiento, con pensamiento crítico en la toma de decisiones y capacidad de adaptación. Ser capaces de aplicar todo esto en el mundo laboral les permitirá desenvolverse mejor en esos entornos cada vez más dinámicos y complejos.`,
      },
      {
        type: "p",
        text: `Estas habilidades y fortalezas son las que realmente marcan la diferencia, son las que han impulsado la innovación, superado obstáculos y construido el mundo. Estos entornos laborales dinámicos precisan de recursos humanos que sepan cultivar, desarrollar y fomentar estas destrezas como competencias claves para crecer profesionalmente y alcanzar máximo potencial de productividad. El informe global "2023 Workplace Learning Trends", elaborado por Udemy engloba en tres categorías estas habilidades: Empresariales, técnicas y humanas y centra su visión en la mejora de las competencias y habilidades de las personas, resaltando la importancia de las organizaciones que aseguran estos desarrollos para sus empleados, ya que demuestran estar más preparados para afrontar cambios y por consecuencia estarán mejor posicionados para afrontar los retos y encarar a la competencia, esto implica también un proceso de adaptación y mejora de la relación de las empresas hacia sus líderes y colaboradores.`,
      },
      {
        type: "p",
        text: `Esta relación del mundo empresarial y el mundo personal está más conectada que nunca, el crecimiento profesional influye positivamente en el crecimiento de la empresa que se dirige o donde se labore y a su vez esas habilidades desarrolladas se refuerzan en la propia capacidad de adaptación, creatividad y resolución de problemas, por lo tanto, no solo nos convertimos en mejores profesionales, sino también en personas más completas y realizadas. Evidentemente la forma de actuación a nivel personal cambia luego de alguna preparación y experiencia profesional y se puede percibir cuando toca tomar alguna decisión riesgosa, el manejo de las dudas e interrogantes del momento y luego de tomar la decisión de nadar en esas aguas turbulentas, la calma y determinación presente para seguir avanzando a pesar de cuantos obstáculos se atreviesen. ¡Lo viven las empresas, lo viven las personas!`,
      },
      {
        type: "p",
        text: `Muchas empresas nacen con la misma concepción de las personas en su juventud, elaboran planes de vida exitosos, a largo plazo, rígidos y luego les pasa como el que construye un castillo de arena en la orilla del mar, por muy sólido que parezca está condenado a ser destruido por las olas. En un mundo empresarial cada vez más competitivo y volátil, las organizaciones deben ser capaces de adaptarse a los cambios con la misma agilidad que un camaleón cambia de color, solo aquellas empresas que sean capaces de aprender, innovar y evolucionar de manera constante lograrán sobrevivir y prosperar a largo plazo de igual manera sucede con las personas ante aquella planificación soñada, por lo tanto, es mejor moverse para no claudicar.`,
      },
      {
        type: "p",
        text: `¿Estás listo para dar el salto y convertirte en un líder ágil? Empieza hoy mismo a cuestionar tus propias suposiciones, a experimentar con nuevas ideas y a tomar decisiones más rápidas, recuerda, el éxito en el mundo empresarial actual pertenece a aquellos que son capaces de adaptarse al cambio, aprovechar oportunidades y asumir compromisos.`,
      },
    ],
  },
];

export const categories: Category[] = ["Política", "Sociedad", "Emprendimiento", "Estrategia", "Pensamiento"];

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "long", year: "numeric" });
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelated(slug: string, n = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, n);
  return articles
    .filter((a) => a.slug !== slug && a.category === current.category)
    .slice(0, n)
    .concat(articles.filter((a) => a.slug !== slug && a.category !== current.category).slice(0, n))
    .slice(0, n);
}
