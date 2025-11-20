
import { VocabularyItem, FunctionalChunk } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  {
    item: "meeting",
    explanation: "Un evento programado donde la gente discute temas.",
    example: "We have a team meeting every morning.",
    pronunciation: "/ˈmiːtɪŋ/"
  },
  {
    item: "deadline",
    explanation: "La fecha u hora límite para completar algo.",
    example: "The deadline for this task is tomorrow.",
    pronunciation: "/ˈdɛdlaɪn/"
  },
  {
    item: "sprint",
    explanation:
      "Un corto período de tiempo (usualmente 1-4 semanas) en el que un equipo trabaja para completar una cantidad de trabajo establecida.",
    example: "This feature is planned for the next sprint.",
    pronunciation: "/sprɪnt/"
  },
  {
    item: "task",
    explanation: "Una pieza de trabajo individual que debe ser completada.",
    example: "My first task today is to review the code.",
    pronunciation: "/tɑːsk/"
  },
  {
    item: "schedule",
    explanation: "Un plan de cosas que deben ocurrir y cuándo.",
    example: "Let's check the schedule for next week.",
    pronunciation: "/ˈʃɛdjuːl/"
  },
  {
    item: "o'clock",
    explanation: "Se usa para especificar la hora en punto.",
    example: "The daily is at 9 o'clock.",
    pronunciation: "/əˈklɒk/"
  }
];

export const phrasalVerbs: VocabularyItem[] = [
  {
    item: "set up",
    explanation: "Organizar, configurar o preparar algo.",
    example: "Can you set up a meeting for tomorrow?",
    pronunciation: "/sɛt ʌp/"
  },
  {
    item: "check in",
    explanation:
      "Reportar tu progreso o estado, común en las 'daily meetings'.",
    example: "Let's check in to see the progress.",
    pronunciation: "/tʃɛk ɪn/"
  },
  {
    item: "put off",
    explanation: "Pospoder o retrasar algo.",
    example: "We have to put off the meeting until next week.",
    pronunciation: "/pʊt ɒf/"
  },
  {
    item: "move up",
    explanation: "Adelantar algo a una fecha u hora anterior.",
    example: "Can we move up the deadline to Tuesday?",
    pronunciation: "/muːv ʌp/"
  }
];

export const compoundWords: VocabularyItem[] = [
  {
    item: "timeline",
    explanation: "Una representación visual de eventos en orden cronológico.",
    example: "The project timeline shows all the key dates.",
    pronunciation: "/ˈtaɪmlaɪn/"
  },
  {
    item: "workflow",
    explanation:
      "La secuencia de pasos involucrados en un proceso de trabajo.",
      example: "Our team has a very efficient workflow.",
      pronunciation: "/ˈwɜːrkfloʊ/"
  }
];

export const functionalChunks: { title: string; chunks: FunctionalChunk[] } = {
  title: "Talking about Time",
  chunks: [
    {
      chunk: "The deadline is...",
      usage: "Stating when something is due."
    },
    {
      chunk: "Can we reschedule?",
      usage: "Asking to change the time of a meeting."
    },
    {
      chunk: "Let's meet at...",
      usage: "Proposing a time."
    }
  ]
};
