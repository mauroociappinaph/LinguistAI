import { GrammarSection } from '../../../../../types';
import { interactiveExercise } from './interactiveExercise';

export const grammar: GrammarSection = {
  title: "Gerunds vs. Infinitives: Talking about Learning",
  explanation:
    "In English, when we use two verbs together, the second verb usually changes form. It either becomes a **Gerund** (ending in **-ing**) or an **Infinitive** (starting with **to**).\n\n" +
    "**1. Gerunds (-ing)**\n" +
    "Use the gerund when the verb acts as a **noun** (the subject of a sentence) or after **prepositions**.\n" +
    "- *Subject:* **Learning** English is important.\n" +
    "- *After Preposition:* He is good **at coding**.\n\n" +
    "**2. Infinitives (to + verb)**\n" +
    "Use the infinitive to express **purpose** (why you do something) or after certain verbs like *want, need, decide, hope*.\n" +
    "- *Purpose:* I use Anki **to memorize** vocabulary.\n" +
    "- *After Verb:* I want **to master** React.\n\n" +
    "**Common Verbs:**\n" +
    "- **Followed by Gerund:** enjoy, finish, avoid, recommend, keep (e.g., *Keep practicing*).\n" +
    "- **Followed by Infinitive:** want, need, decide, plan, hope (e.g., *Plan to study*).",

  usage:
    "In a professional context, you use this distinction constantly to describe your skills, your goals, and your daily activities.\n" +
    "- **Describing skills:** 'I am good at **debugging**.'\n" +
    "- **Stating goals:** 'My goal is **to become** a Senior Developer.'\n" +
    "- **Explaining processes:** '**Testing** the code is essential before **deploying**.'",

  examples: [
    "**Gerund as Subject:** '**Refactoring** legacy code can be challenging.'",
    "**Gerund after Preposition:** 'Thank you **for helping** me with this ticket.'",
    "**Infinitive for Purpose:** 'We use Docker **to containerize** our applications.'",
    "**Infinitive after Verb:** 'The team decided **to adopt** TypeScript.'",
    "**Both (Change in meaning):** 'I stopped **coding**' (I quit) vs 'I stopped **to code**' (I paused another action to start coding)."
  ],

  commonMistakes: [
    {
      incorrect: "I want learning React.",
      correct: "I want to learn React.",
      explanation: "The verb 'want' is always followed by an infinitive (to + verb)."
    },
    {
      incorrect: "I am interested in to learn.",
      correct: "I am interested in learning.",
      explanation: "After a preposition (like 'in', 'at', 'for', 'of'), you must always use the gerund (-ing)."
    },
    {
      incorrect: "Develop software is fun.",
      correct: "Developing software is fun.",
      explanation: "When a verb is the subject of the sentence (at the beginning), it must be a gerund."
    },
    {
      incorrect: "The actual version is 2.0.",
      correct: "The current version is 2.0.",
      explanation: "**False Friend:** 'Actual' means 'real' or 'true'. If you mean 'present' or 'now', use **current**."
    },
    {
      incorrect: "I assisted the meeting.",
      correct: "I attended the meeting.",
      explanation: "**False Friend:** 'Assist' means 'to help'. If you mean 'to be present at an event', use **attend**."
    }
  ],

  interactiveExercise,
  rules: []
};
