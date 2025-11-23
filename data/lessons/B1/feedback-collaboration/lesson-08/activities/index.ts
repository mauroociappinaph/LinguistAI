export const scenario = "Participating in a technical architecture debate about whether to refactor a legacy system or build a new microservices architecture.";

export const speaking = "If we refactored the legacy system, it would take less time initially, but we might face the same scalability issues. On the other hand, if we built a microservices architecture, we could scale better, but we'd have more overhead. I would rather invest time now in microservices — we ought to think long-term.";

export const speakingPracticeMode = "debate" as const;

export const readingActivity = {
  title: "Reading: Technical Architecture Debate",
  text: "The team debated two approaches for the new platform. If they used serverless architecture, deployment would be faster and costs could be lower. However, cold starts might affect performance. If they chose containerized applications, they would have more control but higher infrastructure overhead. The lead architect stated: 'We ought to prioritize scalability. You had better consider the five-year roadmap, not just immediate needs. I would rather build something that scales than optimize for today's traffic.'",
  comprehensionQuestions: [
    {
      question: "What would be an advantage of serverless architecture?",
      answer: "Faster deployment and potentially lower costs."
    },
    {
      question: "What did the lead architect say they should prioritize?",
      answer: "Scalability."
    },
    {
      question: "What preference did the architect express?",
      answer: "Building something that scales over optimizing for current traffic."
    }
  ]
};

export const listeningActivity = {
  title: "Listening: Code Review Debate",
  transcript: "I've reviewed your pull request, and I have some thoughts. If we extracted this logic into a separate service, it would be more reusable. You ought to consider the single responsibility principle here. Also, you had better add error handling for the API calls — if that endpoint fails, the entire system would crash. Personally, I would rather see this implemented with async/await than callbacks.",
  comprehensionQuestions: [
    {
      question: "What would happen if the logic were extracted?",
      answer: "It would be more reusable."
    },
    {
      question: "What principle should be considered?",
      answer: "The single responsibility principle."
    },
    {
      question: "What preference did the reviewer express?",
      answer: "Using async/await instead of callbacks."
    }
  ],
  audioSrc: ""
};

export const pronunciationClinic = {
  title: "Pronunciation: Advanced Modals",
  explanation: "Master the pronunciation of advanced modal expressions used in professional debates.",
  examples: [
    {
      term: "ought to",
      phonetic: "/ɔt tu/",
      tip: "Two words, but often sounds like 'otta'. Don't pronounce the 'gh'."
    },
    {
      term: "had better",
      phonetic: "/hæd ˈbɛtər/",
      tip: "Often contracted to 'd better' in speech: 'you'd better'."
    },
    {
      term: "would rather",
      phonetic: "/wʊd ˈræðər/",
      tip: "Often contracted to 'd rather': 'I'd rather'."
    },
    {
      term: "scalability",
      phonetic: "/ˌskeɪləˈbɪləti/",
      tip: "Five syllables, stress on third: scale-a-BIL-i-ty."
    }
  ]
};

export const globalAccentLab = [
  {
    accent: "American English (Silicon Valley)",
    speakerBio: "David, Tech Lead from San Francisco",
    audioSrc: "",
    transcript: "If we switched to Kubernetes, we could deploy faster and scale automatically. We ought to consider the learning curve though. You'd better get buy-in from the ops team first. Honestly, I'd rather spend two months migrating properly than deal with issues later."
  },
  {
    accent: "British English (London)",
    speakerBio: "Emma, Solutions Architect from London",
    audioSrc: "",
    transcript: "If we implemented caching at this level, performance would improve dramatically. We ought to benchmark both approaches before deciding. You'd better involve the infrastructure team — this would affect our AWS costs significantly."
  }
];

export const rolePlay = {
  title: "Technical Architecture Debate",
  objective: "Practice using second conditional and advanced modals to debate technical approaches professionally.",
  aiPersona: "Senior Engineer with different technical preferences",
  initialMessage: "I think we should stick with the monolith architecture. What's your take on refactoring vs. microservices?"
};
