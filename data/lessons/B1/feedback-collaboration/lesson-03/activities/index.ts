export const scenario = "Summarizing a sprint retrospective meeting for team members who couldn't attend.";

export const speaking = "In yesterday's retrospective, Sarah mentioned that the deployment process was too slow. Mike said he could automate some steps, and the team agreed they would implement the changes next sprint.";

export const speakingPracticeMode = "explanation" as const;

export const readingActivity = {
  title: "Reading: Meeting Minutes",
  text: "During the quarterly planning meeting, the product manager stated that customer feedback had been very positive. The engineering lead mentioned that the team would need additional resources to meet the deadline. All stakeholders agreed they could postpone non-critical features if necessary.",
  comprehensionQuestions: [
    {
      question: "What did the product manager state?",
      answer: "That customer feedback had been very positive."
    },
    {
      question: "What did the engineering lead mention?",
      answer: "That the team would need additional resources."
    },
    {
      question: "What did stakeholders agree on?",
      answer: "They could postpone non-critical features if necessary."
    }
  ]
};

export const listeningActivity = {
  title: "Listening: Post-Meeting Summary",
  transcript: "Let me summarize today's stand-up. Maria said she had finished the authentication module. John mentioned he was still working on the dashboard and would need another day. The team agreed they could help with code review tomorrow.",
  comprehensionQuestions: [
    {
      question: "What did Maria say?",
      answer: "She had finished the authentication module."
    },
    {
      question: "What did John mention?",
      answer: "He was still working on the dashboard."
    },
    {
      question: "What did the team agree on?",
      answer: "They could help with code review tomorrow."
    }
  ],
  audioSrc: ""
};

export const pronunciationClinic = {
  title: "Pronunciation: Reporting Verbs",
  explanation: "Master the pronunciation of common reporting verbs used in professional settings.",
  examples: [
    {
      term: "mentioned",
      phonetic: "/ˈmenʃənd/",
      tip: "Two syllables: 'men-shund'. Past tense of mention."
    },
    {
      term: "stated",
      phonetic: "/ˈsteɪtɪd/",
      tip: "Two syllables: 'stay-ted'. Formal reporting verb."
    },
    {
      term: "explained",
      phonetic: "/ɪkˈspleɪnd/",
      tip: "Two syllables: 'ex-plained'. Stress on second syllable."
    },
    {
      term: "agreed",
      phonetic: "/əˈɡriːd/",
      tip: "Two syllables: 'a-greed'. Long 'ee' sound."
    }
  ]
};

export const globalAccentLab = [
  {
    accent: "American English",
    speakerBio: "Jessica, Scrum Master from Seattle",
    audioSrc: "",
    transcript: "In this morning's stand-up, the team mentioned they were making good progress. Tom said he'd finished the API integration, and Lisa stated she could start testing tomorrow."
  },
  {
    accent: "British English",
    speakerBio: "Oliver, Project Manager from London",
    audioSrc: "",
    transcript: "During yesterday's planning session, the developers explained they would need more time for testing. The client agreed they could extend the deadline by one week if necessary."
  }
];

export const rolePlay = {
  title: "Reporting a Technical Meeting",
  objective: "Practice summarizing a meeting using reported speech.",
  aiPersona: "Colleague who missed the meeting",
  initialMessage: "Hey, I missed the planning meeting. Can you summarize what was discussed?"
};
