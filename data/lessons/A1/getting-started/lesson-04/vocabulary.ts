import { VocabularyItem, FunctionalChunk } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  {
    item: "laptop",
    explanation: "Un ordenador portátil.",
    example: "My laptop is new.",
    pronunciation: "/ˈlæptɒp/",
  },
  {
    item: "keyboard",
    explanation: "El periférico para escribir.",
    example: "I have a mechanical keyboard.",
    pronunciation: "/ˈkiːbɔːrd/",
  },
  {
    item: "headset",
    explanation: "Auriculares con micrófono, para llamadas.",
    example: "I need a headset for the meeting.",
    pronunciation: "/ˈhɛdsɛt/",
  },
  {
    item: "click / type",
    explanation: "Acciones básicas con el ratón y el teclado.",
    example: "Click on the 'submit' button and type your name.",
    pronunciation: "",
  },
  {
    item: "open / restart",
    explanation: "Abrir un programa o reiniciar una máquina.",
    example: "Please, open the file and restart your computer.",
    pronunciation: "",
  },
  {
    item: "mute / unmute",
    explanation: "Silenciar o activar tu micrófono en una llamada.",
    example: "You are on mute. Please unmute yourself.",
    pronunciation: "/mjuːt/ /ʌnˈmjuːt/",
  },
  {
    item: "share screen",
    explanation: "Mostrar tu pantalla a otros en una videollamada.",
    example: "Can you share your screen to show me the error?",
    pronunciation: "",
  },
  {
    item: "Could you repeat that?",
    explanation: "Pide que repitan una instrucción que no entendiste.",
    example:
      "A: 'You need to restart the server.' B: 'Sorry, could you repeat that?'",
    pronunciation: "",
  },
  {
    item: "Could you spell that?",
    explanation: "Pide que deletreen un comando o nombre de archivo.",
    example:
      "A: 'The file is 'config.yml'.' B: 'Could you spell that file name?'",
    pronunciation: "",
  },
  {
    item: "What does 'share screen' mean?",
    explanation:
      "Pide el significado de una acción o término que no conoces.",
    example: "You said 'share screen'. What does that mean?",
    pronunciation: "",
  },
];

export const phrasalVerbs: VocabularyItem[] = [];

export const compoundWords: VocabularyItem[] = [
  {
    item: "user interface",
    explanation:
      "La parte visual de una aplicación con la que el usuario interactúa.",
    example: "What do you think of the new user interface?",
    pronunciation: "/ˈjuːzər ˈɪntərfeɪs/",
  },
];

export const functionalChunks: { title: string; chunks: FunctionalChunk[] } = {
  title: "Functional Chunks: Getting Information",
  chunks: [
    {
      chunk: "Excuse me, I have a question.",
      usage: "A polite way to interrupt someone and ask for help.",
    },
    {
      chunk: "Do you have a moment?",
      usage: "To check if someone is free to talk.",
    },
    {
      chunk: "Can you tell me where...?",
      usage: "To ask for the location of something.",
    },
    {
      chunk: "I'm not sure how to...",
      usage: "To explain you don't know the process for something.",
    },
  ],
};
