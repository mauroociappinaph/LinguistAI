import { CommonMistake } from '../../../../../types';

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "I check always my email.",
    correct: "I always check my email.",
    explanation: "Frequency adverbs go before main verbs, after 'to be'."
  },
  {
    incorrect: "This more faster than before.",
    correct: "This is faster than before.",
    explanation: "Use 'more' only with multi-syllable adjectives: fast→faster, scalable→more scalable."
  },
  {
    incorrect: "The most quickest solution.",
    correct: "The quickest solution.",
    explanation: "Don't use 'most' with irregular comparatives (good→best, quick→quickest)."
  },
  {
    incorrect: "I work more efficient than my colleague.",
    correct: "I work more efficiently than my colleague.",
    explanation: "Use adverb form (-ly) when comparing actions: efficient→efficiently."
  },
  {
    incorrect: "This tool extremely improves performance.",
    correct: "This tool improves performance extremely/significantly.",
    explanation: "Degree adverbs go before adjectives but after verbs (IMPROVES extremely)."
  },
  {
    incorrect: "We deploy usually on Fridays.",
    correct: "We usually deploy on Fridays.",
    explanation: "Adverb position: subject + frequency adverb + verb (We usually deploy)."
  },
  // False Friends additions
  {
    incorrect: "The actual version is v2.0.",
    correct: "The current version is v2.0.",
    explanation: "**Actual** means 'real' (realmente). Use **Current** for 'actual' (presente)."
  },
  {
    incorrect: "I assisted the meeting.",
    correct: "I attended the meeting.",
    explanation: "**Assist** means 'to help' (ayudar). Use **Attend** for 'asistir' (ir a un lugar)."
  },
  {
    incorrect: "The project was a big exit.",
    correct: "The project was a big success.",
    explanation: "**Exit** means 'salida'. Use **Success** for 'éxito'."
  }
];
