import { Lesson, Difficulty } from '../../../../../types';

export const careerDevelopmentLesson01: Lesson = {
  id: "cd1",
  title: "Professional Profiles & Emails",
  level: Difficulty.B1,
  description: "Master the art of writing professional emails and crafting impactful profiles using formal register, action verbs, and reported speech.",
  didYouKnow: "Using strong action verbs in your CV (like 'Architected' instead of 'Worked on') can increase your chances of passing ATS (Applicant Tracking Systems) by up to 40%.",

  grammar: {
    title: "Formal Writing, Action Verbs & Reported Speech",
    explanation: "Use a formal register, strong action verbs, and reported speech in professional communication.\\n\\n- **Formal Register**: Avoid contractions (use 'I am', not 'I'm').\\n- **Action Verbs**: Start CV bullet points with verbs like 'Developed', 'Implemented', 'Managed', 'Optimized'.\\n- **Reported Speech**: Report conversations using verbs like 'said', 'told', 'asked', 'advised', 'suggested'. Remember to shift tenses back. 'I **am** available' -> 'He said he **was** available.'",
    usage: "CVs, LinkedIn Profiles, Formal Emails, Meeting Minutes:\\n\\n📄 **CV**: 'Optimized database performance.'\\n📧 **Email**: 'I am writing to inquire about...'\\n💬 **Minutes**: 'The client suggested that we delay the launch.'",
    rules: [
      {
        from: "Direct Speech (Present)",
        to: "Reported Speech (Past): 'I am busy' -> 'He said he was busy.'"
      },
      {
        from: "Weak Verbs (CV)",
        to: "Action Verbs: 'Did' -> 'Executed', 'Made' -> 'Created/Built'"
      },
      {
        from: "Informal (Email)",
        to: "Formal: 'Thanks' -> 'Thank you', 'Can you?' -> 'Could you please?'"
      }
    ],
    examples: [
      "**Developed** a scalable microservices architecture.",
      "**Implemented** CI/CD pipelines using GitHub Actions.",
      "He **mentioned that** the deadline **was** tight.",
      "She **asked if** we **could** reschedule the meeting.",
      "I **am writing** to follow up on our previous conversation."
    ],
    commonMistakes: [
      {
        incorrect: "I'm writing to tell you...",
        correct: "I am writing to inform you...",
        explanation: "Avoid contractions (I'm) and casual verbs (tell) in formal emails."
      },
      {
        incorrect: "Worked on the frontend.",
        correct: "Engineered the frontend architecture.",
        explanation: "Use specific, strong action verbs for professional profiles."
      },
      {
        incorrect: "He said that he is ready.",
        correct: "He said that he was ready.",
        explanation: "In reported speech, usually shift the tense back (backshifting)."
      }
    ],
    interactiveExercise: {
      type: "multiple-choice",
      question: "Choose the best bullet point for a CV:",
      options: [
        "Worked on making the app faster.",
        "Optimized application performance by 30%.",
        "Did some optimization work.",
        "Was responsible for speed."
      ],
      answer: "Optimized application performance by 30%."
    }
  },

  vocabulary: [
    {
      item: "inquire",
      explanation: "To ask for information (formal).",
      example: "I am writing to inquire about the open position.",
      pronunciation: "/ɪnˈkwaɪər/"
    },
    {
      item: "regarding",
      explanation: "About; concerning (formal).",
      example: "I have a question regarding the new policy.",
      pronunciation: "/rɪˈɡɑːrdɪŋ/"
    },
    {
      item: "spearhead",
      explanation: "To lead an initiative or project (strong action verb).",
      example: "Spearheaded the migration to the cloud.",
      pronunciation: "/ˈspɪrˌhɛd/"
    }
  ],
  phrasalVerbs: [
    {
      item: "reach out",
      explanation: "To contact someone (professional but friendly).",
      example: "Feel free to reach out if you have questions."
    },
    {
      item: "follow up",
      explanation: "To contact again to check progress or remind.",
      example: "I wanted to follow up on my application.",
      separator: " "
    }
  ],
  compoundWords: [],
  functionalChunks: {
    title: "Professional Email Phrases",
    chunks: [
      {
        chunk: "I am writing to [purpose]",
        usage: "Opening a formal email"
      },
      {
        chunk: "Please find attached [document]",
        usage: "Sending files"
      },
      {
        chunk: "I look forward to [hearing from you/meeting you]",
        usage: "Closing a formal email"
      }
    ]
  },

  scenario: "Writing a follow-up email after a job interview and updating your CV.",
  speaking: "I am writing to express my continued interest in the role. During the interview, you mentioned that the team was looking for a React expert. I have spearheaded several React projects and optimized performance significantly.",
  speakingPracticeMode: "formal-email-dictation",

  readingActivity: {
    title: "Reading: A Senior Developer's CV",
    text: "Experience: Spearheaded the migration from monolith to microservices. Mentored junior developers and conducted code reviews. Orchestrated the deployment of the new payment gateway. Education: B.S. in Computer Science.",
    comprehensionQuestions: [
      {
        question: "Which verb is used to describe leading the migration?",
        answer: "Spearheaded"
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Meeting Recap",
    transcript: "In the meeting, Sarah said that the API was ready for testing. John asked if we could deploy it on Friday. I suggested that we wait until Monday to avoid weekend issues. The manager agreed and told us to proceed with caution.",
    comprehensionQuestions: [
      {
        question: "What did Sarah say about the API?",
        answer: "She said that it was ready for testing."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Past Tense Endings",
    explanation: "Focus on the /t/, /d/, and /ɪd/ endings of regular past verbs.",
    examples: [
      {
        term: "developed",
        phonetic: "/dɪˈvɛləpt/",
        tip: "Ends with a /t/ sound."
      },
      {
        term: "managed",
        phonetic: "/ˈmænɪdʒd/",
        tip: "Ends with a /d/ sound."
      },
      {
        term: "implemented",
        phonetic: "/ˈɪmplɪˌmɛntɪd/",
        tip: "Ends with /ɪd/ because it ends in 't'."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (HR Manager)",
      speakerBio: "Jennifer, HR Manager from New York",
      audioSrc: "",
      transcript: "Your CV is impressive. I noticed you used strong action verbs like 'orchestrated' and 'deployed'. It really stands out compared to passive descriptions."
    }
  ],

  rolePlay: {
    title: "Salary Negotiation Email",
    objective: "Practice writing a formal email negotiating salary using polite and professional language.",
    aiPersona: "Recruiter",
    initialMessage: "We are pleased to offer you the position with a salary of $80,000."
  }
};
