import { VocabularyItem, FunctionalChunk } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  {
    item: "deploy",
    explanation:
      "Poner el software en producción para que los usuarios puedan usarlo.",
    example: "We deploy the new version every two weeks.",
    pronunciation: "/dɪˈplɔɪ/"
},
  {
    item: "code",
    explanation: "Escribir instrucciones para un programa de computadora.",
    example: "I need to code a new function.",
    pronunciation: "/koʊd/"
},
  {
    item: "review",
    explanation:
      "Examinar el código de otra persona para encontrar errores o sugerir mejoras.",
    example: "Please review my pull request.",
    pronunciation: "/rɪˈvjuː/"
},
  {
    item: "test",
    explanation: "Verificar que el software funciona correctamente.",
    example: "We must test the application before deploying.",
    pronunciation: "/tɛst/"
},
  {
    item: "fix",
    explanation: "Corregir un error o 'bug' en el código.",
    example: "I have to fix a bug in the login page.",
    pronunciation: "/fɪks/"
},
  {
    item: "always",
    explanation: "At all times; on all occasions (100%).",
    example: "I always test my code before pushing.",
    pronunciation: "/ˈɔːlweɪz/"
},
  {
    item: "usually",
    explanation: "In most cases; normally.",
    example: "I usually have lunch at 12:30.",
    pronunciation: "/ˈjuːʒuəli/"
},
  {
    item: "sometimes",
    explanation: "Occasionally, rather than all of the time.",
    example: "The build sometimes fails for no reason.",
    pronunciation: "/ˈsʌmtaɪmz/"
},
  {
    item: "never",
    explanation: "At no time in the past or future; on no occasion (0%).",
    example: "He never forgets to write documentation.",
    pronunciation: "/ˈnɛvər/"
},
  {
    item: "commit",
    explanation: "Guardar cambios en el repositorio de código.",
    example: "I need to commit my changes before I leave.",
    pronunciation: "/kəˈmɪt/"
},
  {
    item: "push",
    explanation: "Subir tus 'commits' a un repositorio remoto (como GitHub).",
    example: "Don't forget to push your code at the end of the day.",
    pronunciation: "/pʊʃ/"
},
];

export const phrasalVerbs: VocabularyItem[] = [
  {
    item: "clean up",
    explanation:
      "Eliminar archivos innecesarios u organizar un sistema para que esté más ordenado.",
    example:
      "I have a script that cleans up the temporary files every night.",
    pronunciation: "/kliːn ʌp/"
},
  {
    item: "log on",
    explanation: "Sinónimo de 'log in', conectarse a un sistema.",
    example: "I log on to Slack as soon as I start working.",
    pronunciation: "/lɒɡ ɒn/"
},
  {
    item: "shut down",
    explanation: "Apagar una computadora o sistema.",
    example: "Don't forget to shut down your computer at the end of the day.",
    pronunciation: "/ʃʌt daʊn/"
},
  {
    item: "look into",
    explanation: "Investigar un problema.",
    example: "I'll look into the bug reported this morning.",
    pronunciation: "/lʊk ˈɪntuː/"
},
  {
    item: "get back to",
    explanation: "Responder a alguien más tarde.",
    example: "I don't have the answer now, but I'll get back to you.",
    pronunciation: "/ɡɛt bæk tuː/"
},
];

export const compoundWords: VocabularyItem[] = [
  {
    item: "codebase",
    explanation:
      "La colección completa de código fuente para un proyecto de software.",
    example: "Our codebase is very large and complex.",
    pronunciation: "/ˈkoʊdbeɪs/"
},
  {
    item: "bugfix",
    explanation: "Una corrección a un error de software.",
    example: "I'm working on a critical bugfix.",
    pronunciation: "/ˈbʌɡfɪks/"
},
];

export const functionalChunks: { title: string; chunks: FunctionalChunk[] } = {
  title: "Workplace Communication",
  chunks: [
    {
      chunk: "I'll get back to you on that.",
      usage: "Use when you need time to provide an answer."
    },
    {
      chunk: "Let me look into it.",
      usage: "Use when you need to investigate something."
    },
    {
      chunk: "I usually start my day with...",
      usage: "Describing your daily routine."
    },
    {
      chunk: "We always follow the process of...",
      usage: "Explaining standard procedures."
    }
  ]
};
