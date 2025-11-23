export const vocabulary = [
  {
    item: "top-down",
    explanation:
      "Procediendo de lo general a lo específico. (Pronunciación: Acento en 'TOP').",
    example: "Learning the theory before practice is a top-down approach.",
    pronunciation: "/ˈtɒpˈdaʊn/",
  },
  { item: "bottom-up", explanation: "Procediendo de lo específico a lo general.", example: "Learning from examples to understand a theory is a bottom-up approach.", pronunciation: "/ˌbɒtəmˈʌp/" },
  { item: "efficient", explanation: "(Adjetivo) Lograr la máxima productividad con el mínimo esfuerzo o gasto desperdiciado.", example: "This algorithm is more efficient than the previous one.", pronunciation: "/ɪˈfɪʃənt/" },
  { item: "scalable", explanation: "(Adjetivo) Capaz de cambiar de tamaño o escala.", example: "Microservices are more scalable than monoliths.", pronunciation: "/ˈskeɪləbl/" },
  { item: "reliable", explanation: "(Adjetivo) Consistentemente bueno en calidad o rendimiento; confiable.", example: "PostgreSQL is a very reliable database.", pronunciation: "/rɪˈlaɪəbl/" },
  { item: "trade-off", explanation: "(Sustantivo) Un equilibrio logrado entre dos características deseables pero incompatibles.", example: "There is always a trade-off between speed and memory usage.", pronunciation: "/ˈtreɪd ɔːf/" },
  {
    item: "approach",
    explanation: "Una forma de lidiar con una situación o problema (enfoque).",
    example: "Let's try a different approach.",
    pronunciation: "/əˈproʊtʃ/",
  },
  {
    item: "strategy",
    explanation:
      "Un plan de acción diseñado para lograr un objetivo a largo plazo o general.",
    example: "Our strategy is to build small components first.",
    pronunciation: "/ˈstrætədʒi/",
  },
  {
    item: "system",
    explanation:
      "Un conjunto de cosas que trabajan juntas como partes de un mecanismo o una red interconectada.",
    example: "We need to understand the whole system.",
    pronunciation: "/ˈsɪstəm/",
  },
  {
    item: "component",
    explanation: "Una parte o elemento de un todo más grande.",
    example: "Let's build the individual components first.",
    pronunciation: "/kəmˈpoʊnənt/",
  },
  {
    item: "Waterfall model",
    explanation:
      "Un modelo de desarrollo de software tradicional y secuencial (paso a paso), similar a una cascada. Es un ejemplo de enfoque 'top-down'.",
    example:
      "The Waterfall model is less flexible than modern Agile methods.",
    pronunciation: "/ˈwɔːtərˌfɔl ˈmɒdl/",
  },
  {
    item: "a set of",
    explanation: "Un grupo o una colección de cosas similares.",
    example: "A system is a set of components that work together.",
    pronunciation: "/ə sɛt əv/",
  },
  {
    item: "isolation",
    explanation:
      "El estado de estar separado; en desarrollo, significa probar un componente por sí solo, sin sus dependencias.",
    example:
      "Testing a function in isolation helps you find bugs more easily.",
    pronunciation: "/ˌaɪsəˈleɪʃən/",
  },
  {
    item: "Could you repeat that?",
    explanation: "Pide que repitan un término o enfoque que no entendiste.",
    example:
      "A: 'We're using a bottom-up strategy.' B: 'Sorry, could you repeat that?'",
    pronunciation: ""
  },
  {
    item: "What does 'top-down' mean?",
    explanation: "Pide el significado de uno de estos enfoques.",
    example:
      "What's the difference between a 'top-down' and 'bottom-up' approach?",
    pronunciation: ""
  },
];

export const phrasalVerbs = [
  {
    item: "break down",
    explanation: "Dividir algo en partes más pequeñas y manejables.",
    example:
      "A top-down approach is to break down the big problem into smaller pieces.",
    pronunciation: ""
  },
  {
    item: "build up",
    explanation:
      "Crear o desarrollar algo gradualmente, ya sea un sistema (construir) o un concepto mental (desarrollar entendimiento).",
    example:
      "In a bottom-up approach, you build up a complex system from simple parts.",
    pronunciation: ""
  },
];

export const compoundWords = [
  {
    item: "problem-solving",
    explanation:
      "El proceso de encontrar soluciones a problemas difíciles o complejos.",
    example: "These are two different styles of problem-solving.",
    pronunciation: ""
  },
];

export const functionalChunks = {
  title: "Discussing Strategy",
  chunks: [
    {
      chunk: "We should take a [top-down/bottom-up] approach.",
      usage: "Proposing a strategy."
    },
    {
      chunk: "Let's start with the basics.",
      usage: "Suggesting a bottom-up start."
    },
    {
      chunk: "We need to look at the big picture.",
      usage: "Suggesting a top-down view."
    },
    {
      chunk: "How do we break this down?",
      usage: "Asking for help in decomposing a problem."
    }
  ]
};
