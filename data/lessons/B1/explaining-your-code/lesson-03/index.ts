import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson03: Lesson = {
  id: "eyc3",
  title: "Cause, Effect & Contrast in Problem Solving",
  level: Difficulty.B1,
  description: "Master zero conditional, connectors (because/since/so) and contrast (although/while) to explain technical decisions and problem-solving approaches.",
  didYouKnow: "Technical explanations use conditional logic 78% of the time. Zero conditional rules like 'If you increase cache size, performance improves' are fundamental to explaining system relationships and troubleshooting logic.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Explaining technical decisions during code reviews or architecture discussions, analyzing pros/cons and cause/effect relationships.",
  speaking: "Although the microservices approach offers scalability, it increases complexity so we implement it carefully. If you split the monolith into services, each becomes independently deployable because they have separate CI/CD pipelines.",
  speakingPracticeMode: "explanation",

  readingActivity: {
    title: "Reading: Technical Problem Solving",
    text: "Technical decisions often involve balancing trade-offs. If you prioritize performance, you might sacrifice simplicity, although modern frameworks help mitigate this. Since observability is crucial, we implement comprehensive logging even though it adds overhead.",
    comprehensionQuestions: [
      {
        question: "What is often sacrificed when prioritizing performance?",
        answer: "Simplicity."
      },
      {
        question: "What helps mitigate complexity in modern frameworks?",
        answer: "Modern frameworks help mitigate this (trade-off)."
      }
    ]
  },

  listeningActivity: {
    title: "Architecture Decision Discussion",
    transcript: "Although serverless offers cost benefits, we chose containers because they provide better control over the runtime environment. If we use serverless, scaling happens automatically, but debugging becomes more difficult.",
    comprehensionQuestions: [
      {
        question: "Why was serverless not chosen despite cost benefits?",
        answer: "Because containers provide better control over runtime."
      },
      {
        question: "What becomes more difficult with serverless?",
        answer: "Debugging becomes more difficult."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Logic Connectors",
    explanation: "Master pronunciation of key connectors used in technical explanations.",
    examples: [
      {
        term: "although",
        phonetic: "/ɔlˈðoʊ/",
        tip: "Three syllables, stress on second. Means 'despite the fact that'."
      },
      {
        term: "because",
        phonetic: "/bɪˈkɔz/",
        tip: "Two syllables, stress on first. Always explain the 'why'."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Canadian English",
      speakerBio: "Jordan, DevOps Engineer from Toronto",
      audioSrc: "",
      transcript: "Although Kubernetes is powerful, we use Docker Compose for development because it simplifies the local environment. If you need orchestration at scale, Kubernetes makes sense, but for now the simplicity works well for our team."
    }
  ],

  rolePlay: {
    title: "Explaining Technical Trade-offs",
    objective: "Practice using conditional and connector structures to explain technical decisions and problem-solving approaches.",
    aiPersona: "Product Manager questioning technical choices",
    initialMessage: "Why did you choose this architecture? It seems more complex than necessary."
  }
};
