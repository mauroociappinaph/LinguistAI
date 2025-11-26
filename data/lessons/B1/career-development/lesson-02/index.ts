import { Lesson, Difficulty } from '../../../../../types';

export const careerDevelopmentLesson02: Lesson = {
  id: "cd2",
  title: "Global Tech Networking",
  level: Difficulty.B1,
  description: "Build your professional network with confidence using essential phrases for introductions, small talk, and polite conversation closers.",
  didYouKnow: "In many tech hubs, 'What are you working on?' is a more common opening question than 'How are you?'. Networking is often about sharing passion for technology.",

  grammar: {
    title: "Networking Phrases & Small Talk",
    explanation: "Networking involves a specific set of phrases for introductions and 'small talk' (polite conversation about unimportant things) to build connections.\\n\\n- **Introductions**: 'Hi, I'm [Name]. I work as a [Role] at [Company].'\\n- **Asking about them**: 'So, what do you do?', 'What brings you to this event?'\\n- **Closing**: 'It was great to meet you. I'd love to connect on LinkedIn.'",
    usage: "Tech Conferences, Meetups, Virtual Coffee Chats:\\n\\n👋 **Intro**: 'Hi, I'm Alex. I'm a backend dev.'\\n❓ **Question**: 'Have you used the new version of Next.js?'\\n🤝 **Closing**: 'Let's keep in touch.'",
    rules: [
      {
        from: "Direct Question",
        to: "Polite Inquiry: 'Who are you?' -> 'May I ask what you do?'"
      },
      {
        from: "Abrupt Ending",
        to: "Polite Closing: 'Bye' -> 'It was a pleasure meeting you.'"
      },
      {
        from: "Silent Listening",
        to: "Active Listening: 'Really?', 'That's interesting', 'I see.'"
      }
    ],
    examples: [
      "**Hi, I'm** Mauro. I **work as a** Full Stack Developer.",
      "**So, what do you do?**",
      "**What brings you to** this conference?",
      "**It was great to meet you.**",
      "**I'd love to connect on** LinkedIn."
    ],
    commonMistakes: [
      {
        incorrect: "What is your job?",
        correct: "What do you do?",
        explanation: "'What do you do?' is the standard, polite way to ask about someone's profession."
      },
      {
        incorrect: "I want your LinkedIn.",
        correct: "Can I add you on LinkedIn?",
        explanation: "Use polite questions for requests."
      },
      {
        incorrect: "I am boring.",
        correct: "I am bored.",
        explanation: "'Boring' describes the thing; 'Bored' describes your feeling. (Though avoid saying either at a networking event!)"
      }
    ],
    interactiveExercise: {
      type: "sentence-completion",
      question: "Complete the closing: 'It was great ___ you.'",
      options: [
        "to meet",
        "meeting",
        "meet",
        "met"
      ],
      answer: "meeting"
    }
  },

  vocabulary: [
    {
      item: "networking",
      explanation: "The action or process of interacting with others to exchange information and develop professional or social contacts.",
      example: "I'm going to a networking event tonight.",
      pronunciation: "/ˈnɛtˌwɜːrkɪŋ/"
    },
    {
      item: "small talk",
      explanation: "Polite conversation about unimportant or uncontroversial matters.",
      example: "We made some small talk about the weather before the meeting.",
      pronunciation: "/smɔːl tɔːk/"
    },
    {
      item: "background",
      explanation: "Your past experience and education.",
      example: "My background is in computer science.",
      pronunciation: "/ˈbækˌɡraʊnd/"
    }
  ],
  phrasalVerbs: [
    {
      item: "catch up",
      explanation: "To talk to someone you haven't seen for a while.",
      example: "Let's catch up over coffee next week."
    },
    {
      item: "keep in touch",
      explanation: "To maintain contact with someone.",
      example: "Here's my card. Let's keep in touch.",
      separator: " "
    }
  ],
  compoundWords: [],
  functionalChunks: {
    title: "Conversation Starters & Closers",
    chunks: [
      {
        chunk: "What brings you here today?",
        usage: "Starting a conversation at an event"
      },
      {
        chunk: "How are you finding the [event/conference]?",
        usage: "Asking for an opinion"
      },
      {
        chunk: "Enjoy the rest of the [event/evening]",
        usage: "Polite closing"
      }
    ]
  },

  scenario: "Meeting a potential employer at a tech conference mixer.",
  speaking: "Hi, I'm Mauro. I'm a developer specializing in React. I heard your talk about AI integration, and I found it really interesting. What brings you to this event?",
  speakingPracticeMode: "networking-intro",

  readingActivity: {
    title: "Reading: Event Badge & Bio",
    text: "Name: Sarah Chen. Role: CTO at TechFlow. Bio: Passionate about scaling engineering teams and open source. Ask me about: Kubernetes, Go, and remote work culture.",
    comprehensionQuestions: [
      {
        question: "What topics can you ask Sarah about?",
        answer: "Kubernetes, Go, and remote work culture."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Conference Break",
    transcript: "A: Hi, is this seat taken? B: No, go ahead. I'm David, by the way. A: Nice to meet you, David. I'm Lisa. What do you do? B: I'm a UX designer at a startup. How about you? A: I'm a frontend dev. Are you enjoying the conference?",
    comprehensionQuestions: [
      {
        question: "What is David's role?",
        answer: "He is a UX designer."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Intonation in Questions",
    explanation: "Practice rising and falling intonation.",
    examples: [
      {
        term: "What do you do? ↘",
        phonetic: "Falling intonation",
        tip: "Wh- questions usually have falling intonation."
      },
      {
        term: "Are you enjoying it? ↗",
        phonetic: "Rising intonation",
        tip: "Yes/No questions usually have rising intonation."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Indian English (Software Architect)",
      speakerBio: "Raj, Software Architect from Bangalore",
      audioSrc: "",
      transcript: "Networking is very important in our industry. It's not just about finding a job; it's about learning from others. I always try to ask people what challenges they are solving right now."
    }
  ],

  rolePlay: {
    title: "The Elevator Pitch",
    objective: "Practice introducing yourself and your work in 30 seconds.",
    aiPersona: "Industry Expert",
    initialMessage: "Hi there! I don't think we've met. I'm James."
  }
};
