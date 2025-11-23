import { Lesson, Difficulty } from '../../../../../types';

export const lesson07: Lesson = {
  id: "eyc7",
  title: "Narrating Professional Experiences",
  level: Difficulty.B1,
  description: "Learn to share professional experiences using narrative tenses - Present Perfect for ongoing experience and Past Simple for specific events.",

  grammar: {
    title: "Narrative Tenses for Professional Experience",
    explanation: "**Present Perfect for Experience**: 'I have worked with React for 3 years' - shows current relevant expertise\n**Past Simple for Events**: 'I led the migration project last year' - specific completed events\n**Combined**: 'I have implemented 5 microservices and led the last deployment'",
    usage: "Professional Storytelling:\n\n📚 **Résumé/Bio**: 'I have developed scalable applications'\n🔄 **Specific Projects**: 'I redesigned the user interface in 2022'\n🎯 **Combined**: 'Since graduating, I have worked on 10 projects'",
    rules: [
      {
        from: "Current experience/expertise",
        to: "Have/has + past participle (have developed, has implemented)"
      },
      {
        from: "Specific past events",
        to: "Subject + past simple (developed, implemented)"
      },
      {
        from: "Timeline connection",
        to: "Since + time + have/has, For + period + have/has"
      }
    ],
    examples: [
      "**I have worked** as a full-stack developer **for 4 years** and **designed** the current architecture.",
      "**We have implemented** CI/CD pipelines **since 2021**, and **automated** the deployment process last quarter.",
      "**I have led** 15 code reviews **since joining** the team and **identified** critical bugs in important projects.",
      "**The team has achieved** 99.9% uptime **for the last 6 months**; **we resolved** the outage incident two weeks ago."
    ],
    commonMistakes: [
      {
        incorrect: "I am working in development since 3 years.",
        correct: "I have worked in development for 3 years.",
        explanation: "Present perfect for state, use 'have' with plural time expressions."
      },
      {
        incorrect: "I led the project in 2021.",
        correct: "I led the project in 2021 and continue leading similar projects.",
        explanation: "Past simple for specific events, present perfect for current relevance."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "Complete with present perfect or past simple: '___ you ___ (ever/use) microservices? ___ you ___ (implement) your first one last year?'",
      options: ["Have, ever used, Did, implement", "Has, ever used, Did, implement", "Have, ever use, Do, implement"],
      answer: "Have, ever used, Did, implement"
    }
  },
  vocabulary: [
    {
      item: "experience",
      explanation: "Knowledge or skill from doing or seeing things, or practical knowledge of something.",
      example: "I have 5 years of experience with distributed systems.",
      pronunciation: "/ɪkˈspɪriəns/"
    },
    {
      item: "expertise",
      explanation: "Special skill or knowledge that you get from experience.",
      example: "My expertise lies in database optimization techniques.",
      pronunciation: "/ˌɛkspɜrˈtiːz/"
    }
  ],
  scenario: "Sharing professional background during interviews or team introductions.",
  speaking: "I have worked in software development for 6 years. I led the transition to microservices at my previous company and have implemented continuous integration pipelines at three different organizations.",
  speakingPracticeMode: "narrative",
  didYouKnow: "Engineers spend 40% of work time communicating about their work. Storytelling skills help developers advance their careers and influence technical decisions.",
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Professional Experience Patterns",
    chunks: [
      {
        chunk: "I have [worked/led/implemented] [project/tech] [for/since/until]",
        usage: "Describing professional background and expertise"
      },
      {
        chunk: "[Project/role] lasted [time period] and [outcome]",
        usage: "Narrating project timelines and achievements"
      }
    ]
  },
  readingActivity: {
    title: "Reading: Professional Experience Narration",
    text: "Effective communication about work experience requires mixing past simple for specific events with present perfect for ongoing capabilities. 'I developed a mobile app in 2021 and have led five successful deployments.' This combination allows stakeholders to understand both historical achievements and current relevance.",
    comprehensionQuestions: [
      {
        question: "Why should developers mix tense forms in experience narration?",
        answer: "To show both historical achievements and current relevance."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Professional Background Discussion",
    transcript: "I have worked in tech for eight years. I started with Java development and have expanded into full-stack roles. I led the digital transformation project last year and have modernized three legacy apps since joining the company.",
    comprehensionQuestions: [
      {
        question: "How did the speaker start their career?",
        answer: "With Java development."
      },
      {
        question: "What leadership experience do they have?",
        answer: "Led the digital transformation project."
      }
    ],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Professional Terms",
    explanation: "Master pronunciation of terms commonly used in professional experience narration.",
    examples: [
      {
        term: "experience",
        phonetic: "/ɪkˈspɪriəns/",
        tip: "Four syllables, stress on middle syllable."
      },
      {
        term: "expertise",
        phonetic: "/ˌɛkspɜrˈtiːz/",
        tip: "Three syllables, stress on middle."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "Irish English (Professional)",
      speakerBio: "Liam, Senior Developer from Dublin",
      audioSrc: "",
      transcript: "I have worked in development for nearly a decade now. I specialize in cloud infrastructure and have implemented scalable solutions across multiple enterprises. Glad to be part of this innovative team."
    }
  ],
  rolePlay: {
    title: "Professional Background Interview",
    objective: "Use narrative tenses to share relevant professional experience and expertise with an interviewer.",
    aiPersona: "Hiring Manager",
    initialMessage: "Can you walk me through your professional background and what experience you bring to this role?"
  }
};
