import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson12: Lesson = {
  id: "db12",
  title: "Post-Mortem & Prevention",
  level: Difficulty.A1,
  description: "Learn to write post-mortems and prevention plans using Past and Future tenses to analyze incidents and implement safeguards.",
  didYouKnow: "Effective post-mortems reduce incident recurrence by 70%. Companies that conduct blameless post-mortems have 20% fewer incidents than those that don't.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Writing a post-mortem report after a production incident and outlining prevention strategies.",
  speaking: "The service went down because we deployed without proper testing. We should have had better monitoring in place. Next time we will implement automated failover and won't deploy without thorough testing.",
  speakingPracticeMode: "explanation",

  readingActivity: {
    title: "Reading: Effective Post-Mortem Practices",
    text: "Good post-mortems focus on learning without blame. Document the timeline: when symptoms appeared, when engineers noticed, when it was resolved. Include quantifiable impact: downtime duration, affected users, revenue lost. Detail root causes without assigning personal fault. Craft action items with clear ownership and timelines. Share post-mortems broadly to educate the entire team.",
    comprehensionQuestions: [
      {
        question: "What should post-mortems focus on?",
        answer: "Learning without blame"
      },
      {
        question: "What details should be included in a timeline?",
        answer: "When symptoms appeared, engineers noticed, and resolution occurred"
      },
      {
        question: "What should action items include?",
        answer: "Clear ownership and timelines"
      }
    ],
  },
  listeningActivity: {
    title: "Post-Mortem Meeting",
    transcript: "Let's review the incident.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Incident Terms",
    explanation: "Pronunciation of incident terms.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Post-Mortem Review",
    objective: "Conduct a post-mortem.",
    aiPersona: "Engineering Manager",
    initialMessage: "Let's start the post-mortem."
  }
};
