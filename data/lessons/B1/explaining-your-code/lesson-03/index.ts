import { Lesson, Difficulty } from '../../../../../types';

export const lesson03: Lesson = {
  id: "eyc3",
  title: "Cause, Effect & Contrast in Problem Solving",
  level: Difficulty.B1,
  description: "Master zero conditional, connectors (because/since/so) and contrast (although/while) to explain technical decisions and problem-solving approaches.",
  didYouKnow: "Technical explanations use conditional logic 78% of the time. Zero conditional rules like 'If you increase cache size, performance improves' are fundamental to explaining system relationships and troubleshooting logic.",

  grammar: {
    title: "Zero Conditional + Connectors for Technical Logic",
    explanation: "**Zero Conditional (If + present, present)**: Universal truths - 'If you restart the server, it clears cache'\n**Cause Connectors**: 'because/since' - reason/result relationship\n**Effect Connectors**: 'so' - consequence/result\n**Contrast Connectors**: 'although/while' - exceptions and alternatives",
    usage: "Explaining Technical Decisions:\n\n🔍 **Troubleshooting**: 'If the API returns 500, check database connection because that's usually the cause'\n⚖️ **Trade-offs**: 'Although microservices offer flexibility, they increase complexity'\n🔄 **Processes**: 'The CI pipeline runs automatically so deployments happen consistently'",
    rules: [
      {
        from: "Zero conditional pattern",
        to: "If + present simple, present simple (If you deploy, monitor begins)"
      },
      {
        from: "Cause connectors",
        to: "Result + because/since + reason (It's slow because of network latency)"
      },
      {
        from: "Contrast situations",
        to: "Although + contrast, main point (Although it's complex, it works)"
      }
    ],
    examples: [
      "**If the database is slow**, check query optimization **because** indexes improve performance.",
      "**Although the solution is elegant**, it requires more maintenance **so** we chose the simpler approach.",
      "**Since the API is asynchronous**, error handling becomes critical **while** synchronous calls are straightforward.",
      "**If you use caching**, response times improve significantly **because** data is served from memory.",
      "**Although caching helps performance**, it introduces consistency challenges **so** use Redis wisely.",
      "**If load increases**, the auto-scaler activates **since** that's how we maintain stability."
    ],
    commonMistakes: [
      {
        incorrect: "The app is slow, check the database.",
        correct: "The app is slow because database queries need optimization.",
        explanation: "Use 'because' to explain the reason behind technical issues."
      },
      {
        incorrect: "Although it's expensive, we use it.",
        correct: "Although it's expensive, it scales well so we use it.",
        explanation: "Complete contrast statements with consequences using 'so'."
      },
      {
        incorrect: "If you do that, it breaks.",
        correct: "If you restart the service without graceful shutdown, it breaks.",
        explanation: "Use full conditional statements for clear technical explanations."
      }
    ],
    interactiveExercise: {
      type: "sentence-combination",
      question: "Combine with appropriate connector: 'The app is slow. Database queries are inefficient.'",
      options: ["The app is slow because database queries are inefficient.", "The app is slow although database queries are inefficient.", "If the app is slow, database queries are inefficient."],
      answer: "The app is slow because database queries are inefficient."
    }
  },
  vocabulary: [
    {
      item: "optimize",
      explanation: "To make something as good or effective as possible.",
      example: "If you optimize database queries, performance improves significantly.",
      pronunciation: "/ˈɑptɪmaɪz/"
    },
    {
      item: "latency",
      explanation: "The delay before a transfer of data begins following an instruction.",
      example: "Since network latency is high, users experience slow loading times.",
      pronunciation: "/ˈleɪtnsi/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Technical Logic Patterns",
    chunks: [
      {
        chunk: "If [condition], [result] because [reason]",
        usage: "Explaining technical cause-and-effect relationships"
      },
      {
        chunk: "Although [trade-off/trade], [main benefit] so [action]",
        usage: "Justifying technical decisions with balanced analysis"
      }
    ]
  },
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
