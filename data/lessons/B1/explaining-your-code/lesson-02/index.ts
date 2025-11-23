import { Lesson, Difficulty } from '../../../../../types';

export const lesson02: Lesson = {
  id: "eyc2",
  title: "Presenting Your Work",
  level: Difficulty.B1,
  description: "Use present perfect to showcase completed work, recent achievements, and current relevance in professional presentations.",
  didYouKnow: "Present perfect appears in 65% of technical presentations because it bridges past achievements with current expertise. Phrases like 'I have implemented', 'We have developed', and 'The team has delivered' demonstrate track record and current capability.",

  grammar: {
    title: "Present Perfect for Professional Achievement",
    explanation: "**Present Perfect (have/has + past participle)**: Connects past actions with present relevance\n\n**Key Uses in Professional Settings:**\n- **Experience**: 'I have worked with React for 3 years'\n- **Achievements**: 'The team has delivered 5 major features'\n- **Current State**: 'We have implemented the new architecture'\n- **Unspecified Time**: 'I have encountered similar issues before'",
    usage: "Presentations & Code Walkthroughs:\n\n🎯 **Project Updates**: 'We have completed the backend migration'\n🏆 **Personal Branding**: 'I have optimized database performance by 40%'\n📈 **Team Achievements**: 'Our team has reduced deployment time'",
    rules: [
      {
        from: "Stative verbs in present perfect",
        to: "Have/has + past participle (have implemented, has improved)"
      },
      {
        from: "Duration with 'for/since'",
        to: "Have/has + past participle + for/since (for 2 years, since last month)"
      },
      {
        from: "Experience vs achievement",
        to: "Experience: ongoing capability, Achievement: specific completed work"
      }
    ],
    examples: [
      "**I have implemented** authentication systems for enterprise clients.",
      "**The team has delivered** 15 features in the current sprint.",
      "**We have reduced** response times by implementing caching strategies.",
      "**Project Alpha has exceeded** all performance benchmarks we established.",
      "**I have worked** with distributed systems for over 4 years.",
      "**The application has scaled** to handle 1M daily active users."
    ],
    commonMistakes: [
      {
        incorrect: "I worked with React for 3 years.",
        correct: "I have worked with React for 3 years.",
        explanation: "Present perfect shows current relevant experience; simple past was 3 years ago."
      },
      {
        incorrect: "We finished the project last month.",
        correct: "We have finished the project and moved to maintenance.",
        explanation: "Present perfect connects completion with current state."
      },
      {
        incorrect: "The bug was fixed last week.",
        correct: "The bug has been fixed and the issue is resolved.",
        explanation: "Present perfect shows current solved status."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "Complete with present perfect: 'The development team ___ (deliver) three major releases ___ (since) the beginning of the year.'",
      options: ["has delivered, since", "delivered, since", "will deliver, for", "is delivering, in"],
      answer: "has delivered, since"
    }
  },
  vocabulary: [
    {
      item: "achieved",
      explanation: "Successfully reached or accomplished a goal.",
      example: "We have achieved 99.9% uptime this quarter.",
      pronunciation: "/əˈtʃɪvd/"
    },
    {
      item: "accomplished",
      explanation: "Successfully completed something, especially something difficult.",
      example: "I have accomplished the migration without downtime.",
      pronunciation: "/əˈkɑmplɪʃt/"
    },
    {
      item: "delivered",
      explanation: "Successfully completed and provided something promised.",
      example: "The team has delivered all sprint commitments on time.",
      pronunciation: "/dɪˈlɪvərd/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Professional Achievement Patterns",
    chunks: [
      {
        chunk: "I have [achieved/developed/implemented] ___",
        usage: "Presenting personal accomplishments"
      },
      {
        chunk: "The team has [delivered/reduced/improved] ___ by ___%",
        usage: "Quantifying team achievements"
      },
      {
        chunk: "[Project/Product] has [scaled/grown/exceeded] ___",
        usage: "Describing growth and success"
      }
    ]
  },
  scenario: "Delivering a project status presentation highlighting recent achievements and progress to management.",
  speaking: "We have delivered the new user dashboard according to schedule. The team has implemented responsive design and improved loading times by 60%. I have personally led the frontend development and have worked with our design system for 2 years.",
  speakingPracticeMode: "presentation",
  readingActivity: {
    title: "Reading: Present Perfect in Technical Presentations",
    text: "Present perfect tense is essential in technical presentations because it connects past work with current relevance. Developers use it to showcase experience and achievements that demonstrate current expertise. For example, 'I have developed scalable systems' shows both past experience and current capability.\n\nThis tense creates credibility by linking historical performance with current knowledge. Stakeholders want to know not only what you've done, but how that experience makes you qualified for future challenges.",
    comprehensionQuestions: [
      {
        question: "Why is present perfect essential in technical presentations?",
        answer: "It connects past work with current relevance."
      },
      {
        question: "What does 'I have developed scalable systems' demonstrate?",
        answer: "Both past experience and current capability."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Project Achievement Presentation",
    transcript: "I have successfully led three major refactoring projects this year. The team has optimized database queries resulting in 40% performance improvement. We have implemented automated testing across all services, and I have mentored junior developers on best practices. This experience has prepared us well for the next phase.",
    comprehensionQuestions: [
      {
        question: "What percentage of performance improvement was achieved?",
        answer: "40% performance improvement."
      },
      {
        question: "What was implemented across all services?",
        answer: "Automated testing."
      }
    ],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Achievement Words",
    explanation: "Master pronunciation of common achievement and result words used in professional presentations.",
    examples: [
      {
        term: "achieved",
        phonetic: "/əˈtʃɪvd/",
        tip: "Three syllables, stress on middle syllable. Clearly pronounce the 'ch' sound."
      },
      {
        term: "implemented",
        phonetic: "/ˈɪmplɪˌmɛntɪd/",
        tip: "Four syllables, reduce the 'i' sounds to make them quicker."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "British English (Professional)",
      speakerBio: "Mark, Project Manager from Manchester",
      audioSrc: "",
      transcript: "We have delivered the project ahead of schedule and have implemented all the core features successfully. The team has exceeded expectations on performance metrics, and I have personally led the quality assurance process. We're well positioned for the next development cycle."
    }
  ],
  rolePlay: {
    title: "Achievement Presentation",
    objective: "Practice presenting recent achievements using present perfect tense to showcase technical expertise and results to management.",
    aiPersona: "Senior Manager reviewing team performance",
    initialMessage: "Please walk me through what your team has accomplished this quarter."
  }
};
