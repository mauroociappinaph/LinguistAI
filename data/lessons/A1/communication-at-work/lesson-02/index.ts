import { Lesson, Difficulty } from '../../../../../types';

export const lesson02: Lesson = {
  id: "com2",
  title: "Meeting Communication & Presentations",
  level: Difficulty.A1,
  description: "Learn to lead meetings, present ideas, and handle Q&A sessions using formal presentation language and interactive communication skills.",
  didYouKnow: "Effective meetings save companies an average of $250 per person annually by reducing unnecessary follow-ups and decision delays. Well-structured presentations increase audience retention by 30%.",

  grammar: {
    title: "Present Continuous for Presentations + Questions for Q&A",
    explanation:
      "**Present Continuous for Dynamic Presentations**: Shows ongoing actions - 'We're currently developing...', 'Data shows they're improving'\n**Modal Questions for Q&A**: Polite inquiries - 'Could you clarify...?', 'Would you like me to explain...?'\n**Present Simple for Facts**: Describes current state - 'The project involves...', 'The data indicates'",
    usage: "Meeting and presentation communication:\n\n📊 **Presenting**: 'The system is currently processing 1M requests'\n🤝 **Questions**: 'Could you explain that point further?'\n✅ **Responses**: 'That's correct - it is improving user experience'",
    rules: [
      {
        from: "Ongoing processes",
        to: "is/are + verb-ing (is + processing, are + improving)"
      },
      {
        from: "Polite questions",
        to: "Could/Would + subject + verb...? (Could + you + explain...?)"
      },
      {
        from: "Current facts",
        to: "Subject + verb + object (System + processes + requests)"
      }
    ],
    examples: [
      "The application **is currently supporting** over 10,000 active users daily.",
      "**We're implementing** a new feature that **is reducing** response times by 50%.",
      "**Could you clarify** the requirements for this functionality?",
      "**Would you like me to elaborate** on that technical issue?",
      "The monitoring system **shows** that performance **is improving** steadily."
    ],
    commonMistakes: [
      {
        incorrect: "We are implementing feature now",
        correct: "We're currently implementing the new feature",
        explanation:
          "Use contractions and 'currently' for professional presentations."
      },
      {
        incorrect: "What you mean?",
        correct: "Could you clarify what you mean?",
        explanation:
          "Add polite modals and complete the question structure."
      },
      {
        incorrect: "System support many users",
        correct: "The system currently supports many users",
        explanation:
          "Add 'currently' for ongoing state, include subject."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The team ___ the new authentication system this quarter.",
      options: ["implemented", "is implementing", "will implement", "implements"],
      answer: "is implementing"
    }
  },
  vocabulary: [
    {
      item: "agenda",
      explanation: "A list of items to be discussed in a meeting.",
      example: "Let's review the meeting agenda before we begin.",
      pronunciation: "/əˈdʒɛndə/"
    },
    {
      item: "objective",
      explanation: "The purpose or goal of a meeting or presentation.",
      example: "The objective of this meeting is to review the sprint progress.",
      pronunciation: "/əbˈdʒɛktɪv/"
    },
    {
      item: "stakeholder",
      explanation: "A person with an interest or concern in a project.",
      example: "We need to communicate the changes to all stakeholders.",
      pronunciation: "/ˈsteɪkˌhoʊldər/"
    },
    {
      item: "deliverable",
      explanation: "A tangible or intangible item produced as a result of a project.",
      example: "The key deliverable for this sprint is the login feature.",
      pronunciation: "/dɪˈlɪvərəbəl/"
    },
    {
      item: "timeline",
      explanation: "A schedule showing when events or tasks will occur.",
      example: "The project timeline shows completion by Q4.",
      pronunciation: "/ˈtaɪmˌlaɪn/"
    },
    {
      item: "quarterly",
      explanation: "Occurring every three months or relating to a quarter-year period.",
      example: "We conduct quarterly reviews of project progress.",
      pronunciation: "/ˈkwɔrtərli/"
    },
    {
      item: "milestone",
      explanation: "A significant event or point in development.",
      example: "Completing the beta release is our next milestone.",
      pronunciation: "/ˈmaɪlˌstoʊn/"
    },
    {
      item: "RFP",
      explanation: "Request for Proposal - a document describing project requirements.",
      example: "The client sent an RFP for the new mobile application.",
      pronunciation: "/ɑr ɛf pi/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Meeting & Presentation Communication Patterns",
    chunks: [
      {
        chunk: "The objective of today's meeting is to ___",
        usage: "Setting meeting goals and purpose"
      },
      {
        chunk: "We're currently ___ and ___ results",
        usage: "Presenting current work and outcomes"
      },
      {
        chunk: "Could you clarify your question about ___?",
        usage: "Handling Q&A professionally"
      },
      {
        chunk: "I'd like to discuss ___ - any questions?",
        usage: "Transitioning between agenda items"
      }
    ]
  },
  scenario: "Leading a sprint review meeting and presenting project updates to stakeholders.",
  speaking: "Good morning everyone. The objective of today's sprint review is to demonstrate the completed features. We're currently implementing a new caching layer that is improving response times by 40%. The user authentication is working perfectly, and we're testing edge cases. Could anyone clarify the requirements for the mobile version? We'll discuss the next sprint objectives next.",
  speakingPracticeMode: "presentation",

  readingActivity: {
    title: "Reading: Effective Meeting Structure",
    text: "Successful meetings follow structured formats. Begin with clear objectives, review previous action items, cover main topics systematically, and end with agreed next steps. Presentations should use visuals, speak to both technical and non-technical audiences, anticipate questions, and always ask for feedback. Meeting effectiveness depends on active listening, note-taking, and ensuring everyone contributes. Document decisions, action items, and owners immediately to ensure follow-through.",
    comprehensionQuestions: [
      {
        question: "What should you begin meetings with?",
        answer: "Clear objectives and review of previous action items."
      },
      {
        question: "How should presentations address different audiences?",
        answer: "Using visuals and speaking to both technical and non-technical people."
      },
      {
        question: "What should be documented immediately after meetings?",
        answer: "Decisions, action items, and owners."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Sprint Review Presentation",
    transcript: "Hi team, welcome to our sprint 7 review. The objective is to showcase what we've completed and discuss next priorities. We're currently developing the payment integration, and initial results show it's processing transactions successfully with proper error handling. However, we're encountering edge cases with international payments. Could you provide more context on the localization requirements? We're also implementing automated testing that is catching 90% of regressions. Let me walk you through the demo now.",
    comprehensionQuestions: [
      {
        question: "What is the main purpose of the meeting?",
        answer: "To showcase completed work and discuss next priorities."
      },
      {
        question: "What is the team developing currently?",
        answer: "Payment integration feature."
      },
      {
        question: "What issue is affecting internationalization?",
        answer: "Edge cases with international payments."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Meeting and Presentation Terms",
    explanation: "Master pronunciation of key terms used in meetings and presentations.",
    examples: [
      {
        term: "executable",
        phonetic: "/ɪɡˈzɛkjʊtəbəl/",
        tip: "Five syllables: 'eg-zek-yoo-ta-bel'. Stress on third syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (New York)",
      speakerBio: "Maria, Product Manager from New York",
      audioSrc: "",
      transcript: "Alright folks, let's get started. We're currently running about 85% of our planned experiments, and the results are showin' we're definitely movin' the needle on user engagement. Could anybody fill me in on why the conversion rate is tankin' on mobile? We're gonna need to address that before we roll out the new feature set. Any thoughts?"
    }
  ],

  rolePlay: {
    title: "Leading a Project Update Meeting",
    objective: "Practice leading a meeting discussion and handling questions professionally.",
    aiPersona: "Team member asking questions during presentation",
    initialMessage: "I've been following along, but could you clarify the impact on our existing API endpoints?"
  }
};
