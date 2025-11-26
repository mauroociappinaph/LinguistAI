import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson09: Lesson = {
  id: "db9",
  title: "Data Flow Debugging",
  level: Difficulty.A1,
  description: "Learn to debug data flow issues using Present Continuous and Passive Voice to analyze data movement and processing problems.",
  didYouKnow: "Data flow bugs account for 40% of all application crashes. Debugging data flow systematically uncovers hidden issues in data transformation and validation processes.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Debugging a complex data processing pipeline where information is being lost or corrupted during flow.",
  speaking: "The data is being processed through multiple transformations but values are getting corrupted. The validation step is working but the encryption is being applied incorrectly. Each record is being updated but some fields are being dropped.",
  speakingPracticeMode: "explanation",

  readingActivity: {title: "Data Flow Analysis",
    text: "Data flow analysis is critical for debugging.",
    comprehensionQuestions: [
      {
        question: "What happens during data transformation?",
        answer: "Data gets corrupted or lost"
      }
    ],
  },
  listeningActivity: {
    title: "Data Flow Discussion",
    transcript: "The data is flowing correctly.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Data Terms",
    explanation: "Pronunciation of data terms.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Debugging Session",
    objective: "Debug a data flow issue.",
    aiPersona: "Senior Dev",
    initialMessage: "Let's look at the data flow."
  }
};
