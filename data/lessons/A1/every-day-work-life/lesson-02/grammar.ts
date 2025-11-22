import { GrammarSection } from '../../../../../types';


export const grammar: GrammarSection = {
  title: "Articles, Comparatives & Preferences",
  explanation:
    "Understanding **articles**, **comparatives**, and **preferences** is essential for speaking clearly about tools, technologies, and choices in the IT world.\n\n" +
    "**Articles (a/an, the)** help you distinguish between general and specific items:\n" +
    "- **a / an** → something general or first mentioned\n" +
    "- **the** → something specific or already known\n\n" +
    "**Comparatives** allow you to compare tools, frameworks, or processes:\n" +
    "- Short adjectives (1–2 syllables): add **-er** → fast → faster\n" +
    "- Long adjectives (3+ syllables): use **more** → more flexible\n" +
    "- Irregular adjectives: good → better / bad → worse\n\n" +
    "**Preferences** help you express what you like, dislike, or choose in your workflow:\n" +
    "- **prefer X to Y**\n" +
    "- **prefer + -ing** for general habits\n\n" +
    "These structures are crucial when evaluating libraries, tools, platforms, and workflows in technical discussions.",

  usage:
    "Use these structures when making comparisons or expressing your preferred tools, frameworks, or workflows.\n\n" +
    "**Common IT use cases:**\n" +
    "- Justifying a tech choice in a meeting\n" +
    "- Explaining tool differences in documentation\n" +
    "- Comparing performance, speed, or usability\n" +
    "- Describing personal or team preferences\n\n" +
    "These forms help you communicate more clearly and professionally when discussing technology.",

  rules: [
    { from: "Articles", to: "Use **a/an** for general nouns; use **the** for specific nouns." },
    { from: "Short adjectives", to: "**adjective + -er + than** → faster than, smaller than" },
    { from: "Long adjectives", to: "**more + adjective + than** → more efficient than" },
    { from: "Irregular forms", to: "**better, worse, farther/further**" },
    { from: "Preferences", to: "**prefer X to Y**" },
    { from: "Habits", to: "**prefer + -ing** → 'I prefer coding at night.'" }
  ],

  examples: [
    "**Articles:** 'I installed **a** new extension. **The** extension improves debugging.'",
    "'You need **an** API key to access the service.'",
    "'I bought **a** laptop. **The** laptop is much faster now.'",

    "**Comparatives:** 'VS Code is **faster than** Sublime Text.'",
    "'React is **more popular than** Backbone.'",
    "'This tool is **more efficient than** the previous version.'",

    "**Preferences:** 'I **prefer** working with light themes.'",
    "'She **prefers** VS Code **to** WebStorm.'",
    "'I **like using** extensions, but I **prefer** keeping my setup simple.'"
  ],

  commonMistakes: [
    {
      incorrect: "VS Code is more fast than Sublime Text.",
      correct: "VS Code is faster than Sublime Text.",
      explanation: "Short adjectives form comparatives with -er, not 'more'."
    },
    {
      incorrect: "I use code editor.",
      correct: "I use a code editor.",
      explanation: "Singular countable nouns require an article: a/an."
    },
    {
      incorrect: "I prefer VS Code than Atom.",
      correct: "I prefer VS Code to Atom.",
      explanation: "The correct structure is 'prefer X to Y'."
    },
    {
      incorrect: "This tool is more easy.",
      correct: "This tool is easier.",
      explanation: "‘Easy’ is a short adjective → easier."
    },
    {
      incorrect: "The React is popular.",
      correct: "React is popular.",
      explanation: "Framework names do not use 'the'."
    }
  ],

  interactiveExercise: {
    type: 'fill-in-the-blank',
    question: "This framework is ___ than the old one.",
    options: ["popular", "more popular", "most popular"],
    answer: "more popular"
  }
};
