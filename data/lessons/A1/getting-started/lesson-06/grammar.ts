import { GrammarSection } from '../../../../../types';
import { interactiveExercise } from './interactiveExercise';

export const grammar: GrammarSection = {
  title: "Comparatives & Superlatives: Analyzing Systems",
  explanation:
    "When we analyze systems, choose tools, or optimize performance, we constantly compare things. We use **Comparatives** to compare two things and **Superlatives** to compare one thing against a group.\n\n" +
    "**1. Comparatives (Comparing 2 things)**\n" +
    "- **Short adjectives (1 syllable):** Add **-er** + **than** (e.g., *fast* → *faster than*).\n" +
    "- **Long adjectives (2+ syllables):** Use **more** + adjective + **than** (e.g., *efficient* → *more efficient than*).\n" +
    "- **Irregular:** *good* → *better*, *bad* → *worse*.\n\n" +
    "**2. Superlatives (The #1 in a group)**\n" +
    "- **Short adjectives:** Use **the** + adjective + **-est** (e.g., *fast* → *the fastest*).\n" +
    "- **Long adjectives:** Use **the most** + adjective (e.g., *efficient* → *the most efficient*).\n" +
    "- **Irregular:** *good* → *the best*, *bad* → *the worst*.",

  usage:
    "Use these structures to justify technical decisions and trade-offs.\n" +
    "- 'Python is **slower than** C++.' (Comparative)\n" +
    "- 'This is **the most critical** bug in the backlog.' (Superlative)\n" +
    "- 'A monolithic architecture is **simpler than** microservices initially.' (Comparative)",

  examples: [
    "**Comparative (Short):** 'The new server is **faster than** the old one.'",
    "**Comparative (Long):** 'React is **more popular than** Angular right now.'",
    "**Superlative (Short):** 'This is the **cleanest** code I have ever seen.'",
    "**Superlative (Long):** 'Security is the **most important** feature.'",
    "**Irregular:** 'This solution is **better than** the previous one.' / 'It was the **worst** outage of the year.'"
  ],

  commonMistakes: [
    {
      incorrect: "This code is more fast.",
      correct: "This code is faster.",
      explanation: "For short adjectives like 'fast', add '-er'. Do not use 'more'."
    },
    {
      incorrect: "It is the most best solution.",
      correct: "It is the best solution.",
      explanation: "Never use 'most' with a superlative form like 'best'. It's redundant."
    },
    {
      incorrect: "I bought a book at the library.",
      correct: "I bought a book at the bookstore.",
      explanation: "**False Friend:** 'Library' is where you borrow books (Biblioteca). If you want to buy them, go to a **bookstore** (Librería)."
    },
    {
      incorrect: "The data is sensible.",
      correct: "The data is sensitive.",
      explanation: "**False Friend:** 'Sensible' means reasonable/logical (Sensato). If you mean delicate or private, use **sensitive**."
    }
  ],

  interactiveExercise,
  rules: []
};
