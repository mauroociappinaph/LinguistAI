import { Lesson, Difficulty } from '../../../../../types';

export const intermediateWorkplaceLesson09: Lesson = {
  id: "iwc9",
  title: "Describing Experience: Present Perfect Continuous",
  level: Difficulty.A2,
  description: "Learn to describe your ongoing professional experience and current projects using the Present Perfect Continuous tense.",
  didYouKnow: "Recruiters often ask 'What have you been working on recently?' to understand your current focus and ongoing skills.",

  grammar: {
    title: "Present Perfect Continuous",
    explanation: "**Structure:** have/has been + verb-ing\\n\\n**Use:** To describe actions that started in the past and are still continuing now, or have just finished with a result in the present.\\n\\n**Focus:** It emphasizes the *duration* or the *process* of the activity.",
    usage: "Job Interviews, Status Updates, Casual Work Chat:\\n\\n⏳ **Duration**: 'I have been working here for 3 years.'\\n🔄 **Recent Activity**: 'I have been learning React.'\\n🚧 **Ongoing Projects**: 'We have been migrating the database.'",
    rules: [
      {
        from: "I / You / We / They",
        to: "have been + working / learning / coding"
      },
      {
        from: "He / She / It",
        to: "has been + working / learning / coding"
      },
      {
        from: "Time expressions",
        to: "for [duration], since [start time], lately, recently"
      }
    ],
    examples: [
      "I **have been working** as a developer for five years.",
      "She **has been learning** Go for the past few months.",
      "We **have been using** this framework since the project started.",
      "They **have been testing** the new feature recently.",
      "What **have you been doing** lately?"
    ],
    commonMistakes: [
      {
        incorrect: "I am working here for 2 years.",
        correct: "I have been working here for 2 years.",
        explanation: "Use Present Perfect Continuous, not Present Continuous, with 'for' or 'since'."
      },
      {
        incorrect: "I have been knowing him for a long time.",
        correct: "I have known him for a long time.",
        explanation: "Stative verbs (know, like, believe) are not usually used in continuous forms."
      },
      {
        incorrect: "She has working on the project.",
        correct: "She has been working on the project.",
        explanation: "Don't forget 'been' in the structure."
      }
    ],
    interactiveExercise: {
      type: "sentence-completion",
      question: "Complete: 'I ___ (learn) Python for two months.'",
      options: [
        "am learning",
        "have been learning",
        "learn",
        "was learning"
      ],
      answer: "have been learning"
    }
  },

  vocabulary: [
    {
      item: "lately",
      explanation: "Recently; in the near past.",
      example: "I haven't been coding much lately.",
      pronunciation: "/ˈleɪtli/"
    },
    {
      item: "recently",
      explanation: "Not long ago.",
      example: "Have you been attending any workshops recently?",
      pronunciation: "/ˈriːsntli/"
    },
    {
      item: "ongoing",
      explanation: "Continuing; still in progress.",
      example: "This is an ongoing issue we have been investigating.",
      pronunciation: "/ˈɒnˌɡoʊɪŋ/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Describing Duration & Recent Activity",
    chunks: [
      {
        chunk: "I have been [working/learning] [context]",
        usage: "Describing current focus"
      },
      {
        chunk: "How long have you been [action]?",
        usage: "Asking about duration"
      },
      {
        chunk: "Lately, I've been focusing on [topic]",
        usage: "Talking about recent interests"
      }
    ]
  },

  scenario: "Answering questions about your recent work experience in an interview or team intro.",
  speaking: "I have been working as a frontend developer for three years. Recently, I have been focusing on improving accessibility. I have also been learning TypeScript to enhance my code quality.",
  speakingPracticeMode: "experience-description",

  readingActivity: {
    title: "Reading: LinkedIn Profile Summary",
    text: "Summary: I have been building scalable web applications for over a decade. Lately, I have been specializing in cloud architecture and have been leading a team of five engineers. We have been developing a new e-commerce platform that launched last week.",
    comprehensionQuestions: [
      {
        question: "What has the person been specializing in lately?",
        answer: "Cloud architecture."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Coffee Chat",
    transcript: "Hey! Long time no see. What have you been up to? I've been working on a new mobile app for the last six months. It's been challenging but fun. We've been using React Native, which is new for me. How about you?",
    comprehensionQuestions: [
      {
        question: "How long has the speaker been working on the mobile app?",
        answer: "For the last six months."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Contractions",
    explanation: "Practice the contractions 'I've been', 'She's been', 'We've been'.",
    examples: [
      {
        term: "I've been",
        phonetic: "/aɪv bɪn/",
        tip: "Blend 'I've' and 'been' smoothly."
      },
      {
        term: "It's been",
        phonetic: "/ɪts bɪn/",
        tip: "Sounds like 'its bin'."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Australian English (Recruiter)",
      speakerBio: "Liam, Tech Recruiter from Sydney",
      audioSrc: "",
      transcript: "So, tell me, what have you been working on since you left your last role? Have you been doing any freelance projects or upskilling?"
    }
  ],

  rolePlay: {
    title: "Interview Question",
    objective: "Practice describing your recent experience using Present Perfect Continuous.",
    aiPersona: "Hiring Manager",
    initialMessage: "I see you have a background in Java. What have you been working on recently?"
  }
};
