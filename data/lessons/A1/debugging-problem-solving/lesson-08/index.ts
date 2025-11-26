import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson08: Lesson = {
  id: "db8",
  title: "Bug Prioritization",
  level: Difficulty.A1,
  description: "Learn to prioritize bugs using comparatives to compare issue severity and impact on users and business.",
  didYouKnow: "80% of software bugs are never reported. Effective prioritization ensures teams fix the most critical issues first, reducing overall system risk by up to 60%.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Prioritizing bugs in a backlog, comparing their relative importance and business impact.",
  speaking: "The login failure is definitely more serious than the footer alignment issue. User data corruption is worse than just display problems. We should fix the payment validation errors first because they're blocking more users.",
  speakingPracticeMode: "assessment",

  readingActivity: {title: "Bug Triage",
    text: "Bug triage is the process of prioritizing bugs based on severity and impact.",
    comprehensionQuestions: []
  },
  listeningActivity: {
    title: "Prioritization Meeting",
    transcript: "We need to fix the critical bugs first.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Prioritization Terms",
    explanation: "Pronunciation of key terms.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Bug Triage Session",
    objective: "Prioritize a list of bugs.",
    aiPersona: "Product Owner",
    initialMessage: "Here is the list of reported bugs. Which one should we fix first?"
  }
};
