import { Lesson, Difficulty } from '../../../../../types';

export const lesson01: Lesson = {
  id: "atw1",
  title: "Formal Technical Writing: Nominalization & Inversion",
  level: Difficulty.C1,
  description: "Master nominalization and inversion to write formal, academic-style technical documentation and research papers.",
  didYouKnow: "Academic papers use nominalization 5x more than conversational English. 'Implementation' sounds more formal than 'we implemented'.",

  grammar: {
    title: "Nominalization & Inversion",
    explanation: "**Nominalization:** Converting verbs/adjectives into nouns for formal style.\\n- decide → decision\\n- analyze → analysis\\n- implement → implementation\\n\\n**Inversion:** Reversing subject-verb order for emphasis (formal).\\n- Rarely do we see... (instead of 'We rarely see...')\\n- Only after testing can we deploy... (instead of 'We can only deploy after testing...')",
    usage: "Academic & Formal Technical Writing:\\n\\n📄 **Research Papers**: 'The implementation of microservices improved scalability.'\\n🔍 **Analysis**: 'Rarely have we encountered such performance issues.'\\n📊 **Reports**: 'Only through rigorous testing can reliability be ensured.'",
    rules: [
      {
        from: "Nominalization patterns",
        to: "Verb → Noun: implement → implementation, deploy → deployment, analyze → analysis"
      },
      {
        from: "Inversion with negatives",
        to: "Rarely/Seldom/Never + auxiliary + subject + verb"
      },
      {
        from: "Inversion with 'only'",
        to: "Only + prepositional phrase + auxiliary + subject + verb"
      }
    ],
    examples: [
      "**Nominalization**: The **implementation** of CI/CD pipelines reduced deployment time. (vs. 'We implemented CI/CD...')",
      "**Nominalization**: The **analysis** of user behavior revealed key insights. (vs. 'We analyzed user behavior...')",
      "**Inversion**: **Rarely do we encounter** such critical bugs in production.",
      "**Inversion**: **Only after thorough code review can** the PR be merged.",
      "**Inversion**: **Never have I seen** such efficient database optimization."
    ],
    commonMistakes: [
      {
        incorrect: "The deciding of the architecture was difficult.",
        correct: "The decision regarding the architecture was difficult.",
        explanation: "Use proper noun form: 'decision', not 'deciding'."
      },
      {
        incorrect: "Rarely we see performance issues.",
        correct: "Rarely do we see performance issues.",
        explanation: "Inversion requires auxiliary verb after the negative adverb."
      },
      {
        incorrect: "Only after testing we can deploy.",
        correct: "Only after testing can we deploy.",
        explanation: "Invert subject and auxiliary after 'only + phrase'."
      }
    ],
    interactiveExercise: {
      type: "transformation",
      question: "Transform to formal style: 'We rarely encounter bugs in production.'",
      options: [
        "Rarely we encounter bugs in production.",
        "Rarely do we encounter bugs in production.",
        "We do rarely encounter bugs in production.",
        "Bugs are rarely encountered in production."
      ],
      answer: "Rarely do we encounter bugs in production."
    }
  },

  vocabulary: [
    {
      item: "implementation",
      explanation: "The process of putting a plan or system into operation.",
      example: "The implementation of the new framework took three sprints.",
      pronunciation: "/ˌɪmplɪmenˈteɪʃən/"
    },
    {
      item: "deployment",
      explanation: "The act of making software available for use.",
      example: "The deployment strategy minimized downtime.",
      pronunciation: "/dɪˈplɔɪmənt/"
    },
    {
      item: "optimization",
      explanation: "The action of making something as effective as possible.",
      example: "Database optimization improved query performance by 40%.",
      pronunciation: "/ˌɑptɪməˈzeɪʃən/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Formal Writing Patterns",
    chunks: [
      {
        chunk: "The [noun-form] of [system/process] resulted in [outcome]",
        usage: "Describing formal cause-effect relationships"
      },
      {
        chunk: "Rarely/Seldom do [subject] [verb]",
        usage: "Emphasizing infrequency formally"
      },
      {
        chunk: "Only [condition] can [subject] [verb]",
        usage: "Expressing necessary conditions formally"
      }
    ]
  },

  scenario: "Writing a formal technical proposal or research paper for publication.",
  speaking: "The implementation of containerization led to significant improvements in deployment efficiency. Rarely do we encounter compatibility issues with this approach. Only through systematic testing can we ensure production readiness.",
  speakingPracticeMode: "formal-presentation",

  readingActivity: {
    title: "Reading: Academic Technical Paper",
    text: "The optimization of database queries resulted in a 60% reduction in response time. Rarely have such improvements been achieved without significant infrastructure changes. Only through careful analysis of query patterns could these gains be realized. The implementation phase took six weeks, during which continuous monitoring ensured system stability.",
    comprehensionQuestions: [
      {
        question: "What writing techniques make this text formal?",
        answer: "Nominalization (optimization, implementation) and inversion (Rarely have, Only through)."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Conference Presentation",
    transcript: "The deployment of microservices architecture represented a paradigm shift. Rarely do organizations achieve such seamless migration. Only through meticulous planning and phased rollout could we minimize disruption. The transformation of our monolithic system took eighteen months.",
    comprehensionQuestions: [
      {
        question: "How long did the transformation take?",
        answer: "Eighteen months."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Nominalized Forms",
    explanation: "Practice stress patterns in nominalized technical terms.",
    examples: [
      {
        term: "implementation",
        phonetic: "/ˌɪmplɪmenˈteɪʃən/",
        tip: "Stress on 'ta' syllable, 5 syllables total."
      },
      {
        term: "optimization",
        phonetic: "/ˌɑptɪməˈzeɪʃən/",
        tip: "Stress on 'za' syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "British English (Academic)",
      speakerBio: "Dr. James, Computer Science Professor from Cambridge",
      audioSrc: "",
      transcript: "The implementation of distributed systems requires careful consideration. Rarely do we encounter such complex architectural challenges. Only through rigorous testing and validation can system reliability be guaranteed."
    }
  ],

  rolePlay: {
    title: "Academic Paper Defense",
    objective: "Practice using nominalization and inversion to defend your technical research formally.",
    aiPersona: "Conference Reviewer",
    initialMessage: "Can you explain the methodology and results of your research using formal academic language?"
  }
};
