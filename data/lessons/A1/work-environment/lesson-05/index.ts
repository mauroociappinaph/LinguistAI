import { Lesson, Difficulty } from '../../../../../types';

export const lesson05: Lesson = {
  id: "we5",
  title: "Needs and Abilities in Tech Work",
  level: Difficulty.A1,
  description: "Learn to express professional needs and abilities using 'can/can't', 'need to', and vocabulary for workplace requirements and skills development in tech environments.",
  didYouKnow: "According to LinkedIn's 2024 Workplace Learning Report, 94% of workers would stay at a company longer if it invested in their professional development. Learning new technologies and getting certifications in skills like cloud computing, data analysis, and cybersecurity is becoming essential for career advancement in tech.",

  grammar: {
    title: "Can/Can't for Abilities & Need to for Requirements",
    explanation:
      "Use **'can'** for current abilities and **'can't'** for limitations. Use **'need to'** for necessary requirements and actions. Combine them to discuss professional growth:\n\n**'I can code in Python'** (current ability)\n**'I need to learn React'** (requirement)\n**'I can't handle DevOps yet'** (limitation)\n\n**'Need'** is modal (=must) followed by infinitive without 'to'. Use **'don't need to'** for non-essentials.",
    usage:
      "In tech job conversations, use these to:\n\n🛠️ Describe technical skills\n📚 Express learning requirements\n🎯 Discuss career development\n👥 Explain team capabilities\n\nUse 'can/can't' for what you do know, 'need to' for what you must acquire.",
    rules: [
      {
        from: "Current skills (positive)",
        to: "Can + infinitive (I can deploy apps)"
      },
      {
        from: "Skills you lack (negative)",
        to: "Can't + infinitive (She can't use APIs)"
      },
      {
        from: "Required skills (obligation)",
        to: "Need to + infinitive (We need to learn AWS)"
      },
      {
        from: "Unnecessary skills",
        to: "Don't need to + infinitive (They don't need to code Java)"
      }
    ],
    examples: [
      "**I can** handle database queries efficiently.",
      "**She can't** design user interfaces.",
      "**We need to** upgrade our cloud security.",
      "**You don't need to** know assembly language anymore.",
      "**Our team can** implement agile methodology."
    ],
    commonMistakes: [
      {
        incorrect: "I need to study React today.",
        correct: "I need to study React today.",
        explanation:
          "This is actually correct! Use 'need to' for requirement + infinitive."
      },
      {
        incorrect: "He cans program in C++.",
        correct: "He can program in C++.",
        explanation:
          "Don't add 's' to 'can' - it's already correct as a modal verb."
      },
      {
        incorrect: "We need learn Kubernetes.",
        correct: "We need to learn Kubernetes.",
        explanation:
          "Never omit 'to' after modal verbs. Always use full form."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "Our developers ___ to attend the security training.",
      options: ["need", "needs", "needing", "needed"],
      answer: "need"
    }
  },
  vocabulary: [
    {
      item: "ability",
      explanation: "The power or skill to do something.",
      example: "Her ability to debug complex code is impressive.",
      pronunciation: "/əˈbɪləti/"
    },
    {
      item: "skill",
      explanation: "An ability or expertise that can be learned through training.",
      example: "JavaScript is a crucial skill for frontend developers.",
      pronunciation: "/skɪl/"
    },
    {
      item: "certification",
      explanation: "An official document that proves someone has the knowledge or skill to do something.",
      example: "I need AWS certification for my cloud role.",
      pronunciation: "/ˌsɜːrtɪfɪˈkeɪʃən/"
    },
    {
      item: "training",
      explanation: "The process of learning the skills needed for a particular job.",
      example: "The team attended training on the new testing framework.",
      pronunciation: "/ˈtreɪnɪŋ/"
    },
    {
      item: "requirement",
      explanation: "Something that is necessary for a particular purpose.",
      example: "The job requirement includes 3 years of React experience.",
      pronunciation: "/rɪˈkwaɪərmənt/"
    },
    {
      item: "competency",
      explanation: "The ability to do something well or effectively.",
      example: "Our competency in machine learning sets us apart.",
      pronunciation: "/ˈkɑːmpɪtənsi/"
    },
    {
      item: "proficiency",
      explanation: "A high level of skill or expertise in something.",
      example: "His proficiency in SQL query optimization is outstanding.",
      pronunciation: "/prəˈfɪʃənsi/"
    },
    {
      item: "expertise",
      explanation: "Special knowledge or skill in a particular area.",
      example: "We need his expertise in cybersecurity for this project.",
      pronunciation: "/ˌɛkspɜːrˈtiːz/"
    },
    {
      item: "capability",
      explanation: "The power or ability to do something.",
      example: "Our team's capability in full-stack development is growing.",
      pronunciation: "/ˌkeɪpəˈbɪləti/"
    },
    {
      item: "limitation",
      explanation: "A restriction or weakness in ability or knowledge.",
      example: "Her main limitation is lack of experience with Docker.",
      pronunciation: "/ˌlɪmɪˈteɪʃən/"
    },
    {
      item: "gap",
      explanation: "A space or difference between what you know and what you need to know.",
      example: "There's a skills gap in our data science team.",
      pronunciation: "/ɡæp/"
    },
    {
      item: "resource",
      explanation: "A useful or valuable possession or quality of a country, person, or organization.",
      example: "Training resources are available on the company portal.",
      pronunciation: "/rɪˈsɔːrs/"
    },
    {
      item: "development",
      explanation: "The process of developing or being developed in skill or knowledge.",
      example: "Professional development is important in tech careers.",
      pronunciation: "/dɪˈvɛləpmənt/"
    },
    {
      item: "assessment",
      explanation: "An evaluation of knowledge, skills, or needs.",
      example: "The skills assessment showed we need to focus on cloud computing.",
      pronunciation: "/əˈsɛsmənt/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Professional Development Communication",
    chunks: [
      {
        chunk: "I can [skill], but I need ___ [another skill]",
        usage: "Expressing current abilities and future needs"
      },
      {
        chunk: "Our team ___ handle [task/area], but we ___ learn [new technology]",
        usage: "Discussing team capabilities and requirements"
      },
      {
        chunk: "This project requires [skill] that I/we ___ know yet",
        usage: "Identifying missing competencies"
      },
      {
        chunk: "My limitation is [area], so I ___ to improve there",
        usage: "Discussing personal development goals"
      },
      {
        chunk: "[Company/team] needs ___ invest in [training/certification]",
        usage: "Recommending organizational development"
      }
    ]
  },
  scenario: "Discussing your current tech skills and professional development needs during a performance review with your manager.",
  speaking: "I can work with React and Node.js effectively, but I need to improve my DevOps skills. Our team can handle frontend development, but we need to learn more about cloud architecture for scalability.",
  speakingPracticeMode: "conversation",

  readingActivity: {
    title: "Reading: Tech Skills Assessment",
    text: "A comprehensive skills assessment revealed that our development team has strong proficiency in JavaScript frameworks, but there's a gap in cloud technologies. While individual developers **can** implement complex user interfaces and database queries, the team **needs to** acquire expertise in AWS, Docker, and Kubernetes. To address this limitation, we're implementing targeted training programs and certification tracks. Our goal is to build capabilities in modern infrastructure while maintaining our current competency in application development. Professional development resources include online courses, workshops, and mentorship opportunities.",
    comprehensionQuestions: [
      {
        question: "What does the team have strong proficiency in?",
        answer: "JavaScript frameworks."
      },
      {
        question: "What expertise does the team need to acquire?",
        answer: "AWS, Docker, and Kubernetes."
      },
      {
        question: "How will they address the skills gap?",
        answer: "Implementing targeted training programs and certification tracks."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Career Development Discussion",
    transcript: "Welcome to your 6-month review. You've shown great growth in frontend development - you can handle complex React applications really well. However, you mentioned you can't work with APIs yet, and that might be a limitation for your next role. Our team needs developers who can integrate backend services. I recommend you need to attend our API training workshop next month. Also, certification in cloud computing would open up new opportunities. Do you have any specific development needs I should know about?",
    comprehensionQuestions: [
      {
        question: "What has the employee shown growth in?",
        answer: "Frontend development."
      },
      {
        question: "What is mentioned as a potential limitation?",
        answer: "Not being able to work with APIs."
      },
      {
        question: "What is recommended for the employee?",
        answer: "Attend API training workshop."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Professional Skills Terms",
    explanation: "Master the pronunciation of essential workplace vocabulary for discussing abilities, requirements, and professional development in tech environments.",
    examples: [
      {
        term: "ability",
        phonetic: "/əˈbɪləti/",
        tip: "Four syllables: 'a-bil-i-ty'. Stress on second syllable. Don't pronounce as 'abilitay'."
      },
      {
        term: "certification",
        phonetic: "/ˌsɜːrtɪfɪˈkeɪʃən/",
        tip: "Five syllables: 'sur-ti-fi-kay-shun'. Stress on penultimate syllable. The 'ti' is not 'tih'."
      },
      {
        term: "competency",
        phonetic: "/ˈkɑːmpɪtənsi/",
        tip: "Four syllables: 'kom-pi-ten-see'. Stress on first syllable. Ends with clear 'see', not 'cy'."
      },
      {
        term: "limitation",
        phonetic: "/ˌlɪmɪˈteɪʃən/",
        tip: "Five syllables: 'lim-i-tay-shun'. Stress on second-to-last syllable. Watch the double 'm'."
      },
      {
        term: "resource",
        phonetic: "/rɪˈsɔːrs/",
        tip: "Three syllables: 'ri-sors'. Stress on second syllable. Don't add 'es' sound - it's 'sors'."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Boston)",
      speakerBio: "Alex, Senior Engineer from Boston",
      audioSrc: "",
      transcript: "Look, you can write great code, but you need to understand architectural patterns too. Our system needs to handle scale - can your current approach handle 10,000 users? We can build features fast, but we can't maintain technical debt forever. Let's assess what skills you need to develop."
    },
    {
      accent: "Australian English (Sydney)",
      speakerBio: "Sophie, Tech Lead from Sydney",
      audioSrc: "",
      transcript: "Mate, you've got solid coding abilities, but you need to shore up your testing skills. The team can handle feature development, can't they? We need to think about our competency gaps though. What resources do you need to upskill in automated testing?"
    }
  ],

  rolePlay: {
    title: "Skills Development Planning Session",
    objective: "Have a conversation with your manager about your current abilities, areas for improvement, and professional development needs using appropriate business English vocabulary.",
    aiPersona: "HR Manager conducting development planning",
    initialMessage: "Let's talk about your current role and where you'd like to develop. What skills do you think you need to improve upon? How can we help you close any competency gaps?"
  }
};
