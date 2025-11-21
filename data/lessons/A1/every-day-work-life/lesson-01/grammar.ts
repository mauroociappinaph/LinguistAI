import { GrammarSection } from '../../../../../types';
import { interactiveExercise } from './interactiveExercise';


export const grammar: GrammarSection = {
  title: "Advanced Adverbs & Comparisons: Expressing Precision in Technical Work",
  explanation:
    "**Master all adverb types for professional technical communication.**\n\n" +
    "**Complete Adverb System:**\n" +
    "• **Frequency**: always (100%), usually (80%), often (70%), sometimes (50%), occasionally (40%), rarely (20%), seldom (15%), never (0%)\n" +
    "• **Degree**: extremely, absolutely, completely, utterly, totally, highly, greatly, significantly\n" +
    "• **Manner**: professionally, efficiently, systematically, methodically, strategically, effectively\n" +
    "• **Time**: immediately, promptly, subsequently, eventually, subsequently, concurrently\n\n" +
    "**Advanced Comparison Techniques:**\n" +
    "• Comparative: more/less + adjective + than (more scalable than, less complex than)\n" +
    "• Superlative: the most/least + adjective (the most critical, the least efficient)\n" +
    "• Quantitative: 40% more efficient, twice as fast, significantly better\n\n" +
    "**Position Rules**: Before main verbs (-ly adverbs), after 'to be' (frequency), before comparatives",

  usage:
    "**Technical Applications**: Use adverbs to express process efficiency, comparison of technologies, and professional standards. 'This solution **significantly** improves performance.' 'Our deployment process is **40% more efficient** than before.'",

  rules: [
    {
      from: "I check always my email.",
      to: "I always check my email."
    },
    {
      from: "This more faster than before.",
      to: "This is faster than before."
    },
    {
      from: "We deploy usually on Fridays.",
      to: "We usually deploy on Fridays."
    }
  ],

  examples: [
    // Frequency Adverbs
    "**Routines**: 'I **always** commit code before lunch.'",
    "**Processes**: 'We **usually** deploy on Tuesdays.'",
    "**Occasional**: 'I **sometimes** work remotely.'",
    "**Never**: 'We **never** skip code reviews.'",

    // Degree Adverbs
    "**Performance**: 'This optimization runs **significantly** faster.'",
    "**Quality**: 'The code is **completely** refactored.'",
    "**Importance**: 'This bug is **extremely** critical.'",
    "**Impact**: 'Cloud migration **highly** improves scalability.'",

    // Manner Adverbs
    "**Professional**: 'Handle tickets **professionally** and promptly.'",
    "**Efficient**: 'Manage tasks **systematically** to avoid bottlenecks.'",
    "**Effective**: 'Communicate **strategically** in cross-functional teams.'",
    "**Methodical**: 'Debug issues **systematically** for faster resolution.'",

    // Comparisons in IT Decisions
    "**Architecture**: 'Microservices are **more scalable** than monoliths.'",
    "**Performance**: 'Our new API is **40% faster** than the legacy system.'",
    "**Complexity**: 'This framework is **significantly easier** to maintain.'",
    "**Efficiency**: 'Agile teams are **far more productive** than waterfall teams.'",
  ],

  commonMistakes: [
    {
      incorrect: "I check always my email.",
      correct: "I always check my email.",
      explanation: "Frequency adverbs go before main verbs, after 'to be'."
},
    {
      incorrect: "This more faster than before.",
      correct: "This is faster than before.",
      explanation:
        "Use 'more' only with multi-syllable adjectives: fast→faster, scalable→more scalable."
},
    {
      incorrect: "The most quickest solution.",
      correct: "The quickest solution.",
      explanation:
        "Don't use 'most' with irregular comparatives (good→best, quick→quickest)."
},
    {
      incorrect: "I work more efficient than my colleague.",
      correct: "I work more efficiently than my colleague.",
      explanation:
        "Use adverb form (-ly) when comparing actions: efficient→efficiently."
},
    {
      incorrect: "This tool extremely improves performance.",
      correct: "This tool improves performance extremely/significantly.",
      explanation:
        "Degree adverbs go before adjectives but after verbs (IMPROVES extremely)."
},
    {
      incorrect: "We deploy usually on Fridays.",
      correct: "We usually deploy on Fridays.",
      explanation:
        "Adverb position: subject + frequency adverb + verb (We usually deploy)."
},
  ],

  interactiveExercise
};
