import { Lesson, Difficulty } from '../../../../../types';

export const lesson02: Lesson = {
  id: "ffc2",
  title: "Agreeing, Disagreeing & Comparing",
  level: Difficulty.B1,
  description: "Learn to express agreement, disagreement, and make technical comparisons using expressions plus comparatives and superlatives.",
  didYouKnow: "Technical discussions involve constant comparison of approaches. Studies show that clear comparison language improves team decision-making by 40%.",

  grammar: {
    title: "Expressions + Comparatives/Superlatives in Technical Context",
    explanation: "**Comparative: more + adj** - 'This approach is more efficient than the previous one'\n**Superlative: the most + adj** - 'REST is the most scalable architecture'\n**Agreement/Disagreement phrases**: Agree to disagree, I see your point, However, That depends...",

    usage: "Technical Discussions & Reviews:\n\n🤝 **Agreement**: 'I totally agree that microservices would be more flexible'\n❌ **Disagreement**: 'However, I think the monolithic approach might be less complex'\n⚖️ **Comparison**: 'Kubernetes is definitely the most powerful orchestration tool'",
    rules: [
      {
        from: "Comparative structures",
        to: "Subject + is/are + more + adj + than (Docker is more efficient than bare metal)"
      },
      {
        from: "Superlative structures",
        to: "Subject + is/are + the most + adj + in/for (RabbitMQ is the most reliable queue in production)"
      },
      {
        from: "Agreement phrases",
        to: "I completely agree that..., You're absolutely right about..., That's a good point"
      }
    ],
    examples: [
      "**I completely agree that TypeScript provides better type safety than JavaScript alone.**",
      "**However, I think Java might be more suitable for enterprise applications than Node.js.**",
      "**GraphQL is definitely the most flexible API technology we could use here.**",
      "**You're right that containers are more portable than virtual machines.**",
      "**AWS is probably the most reliable cloud provider for mission-critical applications.**",
      "**I see your point about technical debt, but the deadline is more urgent than refactoring.**"
    ],
    commonMistakes: [
      {
        incorrect: "I agree your idea.",
        correct: "I agree with your idea.",
        explanation: "Use 'agree with' for ideas, 'agree to' for proposals."
      },
      {
        incorrect: "React is most popular.",
        correct: "React is the most popular framework.",
        explanation: "Superlatives need 'the most', not just 'most'."
      },
      {
        incorrect: "I disagree that this is good.",
        correct: "I disagree that this is the best approach, but I see why you chose it.",
        explanation: "Soft disagreement is usually more productive than hard disagreement."
      }
    ],
    interactiveExercise: {
      type: "scenario-completion",
      question: "Complete the technical discussion: 'I agree ___ microservices are scalable, ___ monolithic architecture is sometimes ___ simple. However, K8s is probably ___ powerful solution.'",
      options: [
        "that, but, more, the most",
        "that, and, most, more",
        "with, but, less, the more",
        "with, however, least, most"
      ],
      answer: "that, but, more, the most"
    }
  },
  vocabulary: [
    {
      item: "comparative",
      explanation: "Adjective form used to compare two things (bigger, faster, better).",
      example: "Docker is faster and more efficient than traditional VMs.",
      pronunciation: "/kəmˈpærətɪv/"
    },
    {
      item: "alternative",
      explanation: "To describe a different option or approach.",
      example: "Have you considered an alternative solution?",
      pronunciation: "/ɔlˈtɜrnətɪv/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Agreement & Comparison Phrases",
    chunks: [
      {
        chunk: "I [ completely agree | totally see] [ that | why] ___",
        usage: "Expressing agreement with technical decisions"
      },
      {
        chunk: "However, [ I think | I'd argue that ] ___ is [ more | less ] ___",
        usage: "Introducing respectful disagreement"
      },
      {
        chunk: "[ This / That ] is probably the ___ [ approach / solution / tool ]",
        usage: "Making strongest comparisons (superlatives)"
      }
    ]
  },
  scenario: "Participating in technical planning meetings discussing different architectural approaches.",
  speaking: "I completely agree that Kubernetes is more scalable than Docker Swarm, but I think Docker Swarm might be simpler to implement. However, AWS ECS is probably the most reliable managed solution.",
  speakingPracticeMode: "analysis",
  readingActivity: {
    title: "Reading: Technical Architecture Debate",
    text: "During technology selection discussions, team members often compare options using comparative and superlative forms. 'I agree that Vue.js is more lightweight than React, however, I think TypeScript is the most important consideration for our project.' These structures help teams make objective technical decisions.",
    comprehensionQuestions: [
      {
        question: "Why is Vue.js described as more lightweight?",
        answer: "Because it's being compared to React."
      },
      {
        question: "What is considered the most important consideration?",
        answer: "TypeScript."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Technology Comparison Discussion",
    transcript: "I see your point about using MongoDB for its flexibility, but I think PostgreSQL is more reliable for complex queries. That said, PostgreSQL is probably the most widely adopted database in enterprise applications. Would you agree an SQL solution is better for our use case?",
    comprehensionQuestions: [
      {
        question: "What advantage is mentioned for MongoDB?",
        answer: "Its flexibility."
      },
      {
        question: "Why would someone prefer PostgreSQL?",
        answer: "Because it's more reliable for complex queries."
      },
      {
        question: "What is PostgreSQL said to be?",
        answer: "The most widely adopted database in enterprise applications."
      }
    ],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Comparative Forms",
    explanation: "Master pronunciation of comparatives and superlatives commonly used in technical discussions.",
    examples: [
      {
        term: "easier",
        phonetic: "/ˈiziər/",
        tip: "Two syllables, stress on first syllable. Drop the 'i' sound to make it quicker."
      },
      {
        term: "fastest",
        phonetic: "/ˈfæstɪst/",
        tip: "Two syllables, stress on first. Add 'est' clearly but quickly."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "Scottish English (Technical)",
      speakerBio: "Iain, Tech Lead from Edinburgh",
      audioSrc: "",
      transcript: "Aye, I see your point about GraphQL being more flexible than REST, but I'd argue that REST is simpler to implement and debug. That said, REST is probably the most battle-tested approach for APIs. What do you think?"
    }
  ],
  rolePlay: {
    title: "Architecture Decision Debate",
    objective: "Use comparative and superlative structures to discuss and debate different technical approaches with colleagues.",
    aiPersona: "Senior Developer debating technology choices",
    initialMessage: "I think we should use Elixir, but what do you think? Don't you agree it's more scalable than Node.js?"
  }
};
