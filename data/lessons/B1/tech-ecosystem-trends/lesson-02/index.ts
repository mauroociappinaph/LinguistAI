import { Lesson, Difficulty } from '../../../../../types';

export const techEcosystemTrendsLesson02: Lesson = {
  id: "tet2",
  title: "AI & Machine Learning Concepts",
  level: Difficulty.B1,
  description: "Develop technical vocabulary for AI/ML concepts using formal definitions and technical explanations.",
  didYouKnow: "AI terminology evolves rapidly - understanding neural networks is essential for modern data science careers.",

  grammar: {
    title: "Technical Definitions & Explanations",
    explanation: "Using formal structures: 'is defined as', 'refers to', 'is a type of' for explaining AI/ML concepts professionally.",
    usage: "Data Science & AI Technical Discussions",
    rules: [],
    examples: [],
    commonMistakes: [],
    interactiveExercise: {
      type: "definition-matching",
      question: "Match these AI terms with their definitions:",
      options: ["Algorithm", "Dataset", "Model"],
      answer: "Algorithm"
    }
  },

  vocabulary: [
    {
      item: "neural network",
      explanation: "A computational model inspired by biological neural networks that processes information.",
      example: "The neural network processes image data for classification.",
      pronunciation: "/ˈnʊərəl ˈnetwɜːrk/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "AI Technical Definitions",
    chunks: [
      {
        chunk: "[Term] is defined as [definition]",
        usage: "Formally defining AI/ML concepts"
      }
    ]
  },

  scenario: "AI model training and deployment discussions.",
  speaking: "A neural network is defined as a computational system that learns from data patterns.",
  speakingPracticeMode: "definition",
  readingActivity: {
    title: "Reading: Introduction to Machine Learning",
    text: "Machine learning algorithms process training data to create predictive models that can make decisions based on input data.",
    comprehensionQuestions: []
  },
  listeningActivity: {
    title: "Listening: Data Science Team Meeting",
    transcript: "Our existing model shows good accuracy metrics, but we need to train it on a larger dataset to improve generalization.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: AI Terms",
    explanation: "Master pronunciation of essential AI/ML terminology.",
    examples: [{
      term: "neural network",
      phonetic: "/ˈnʊərəl ˈnetwɜːrk/",
      tip: "Stress on 'neu' and 'net'"
    }]
  },
  globalAccentLab: [],
  rolePlay: {
    title: "AI Model Explanation",
    objective: "Practice explaining AI/ML concepts using formal definitions.",
    aiPersona: "Business stakeholder",
    initialMessage: "Can you explain what machine learning is and why we're using it for this project?"
  }
};
