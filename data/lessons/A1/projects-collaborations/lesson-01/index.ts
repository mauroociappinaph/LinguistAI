import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson01: Lesson = {
  id: "pc1",
  title: "Project Planning & Sprint Management",
  level: Difficulty.A1,
  description: "Learn to plan projects and manage sprints using future tenses and project management vocabulary in agile development environments.",
  didYouKnow: "Agile methodologies, which popularized sprint planning, were originally developed for software development but are now used across industries. The average sprint duration is 2 weeks, allowing teams to adapt quickly to changes while maintaining steady progress. Sprint planning meetings typically last 1-2 hours per week of sprint duration.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Participating in sprint planning meeting and discussing team capacity and sprint goals.",
  speaking: "In our next sprint, we will develop the login feature with the acceptance criteria. We are going to estimate the user stories and commit to what we can realistically complete.",
  speakingPracticeMode: "conversation",

  readingActivity: {
    title: "Reading: Agile Sprint Planning Guide",
    text: "Successful sprint planning requires clear communication and realistic commitments. **We will** begin the sprint planning meeting with backlog review. **The product owner will** present the prioritized user stories with acceptance criteria. **The development team will** discuss capacity and estimate effort using story points. **We are going to** identify dependencies and technical challenges early. **We shall** evaluate the team's velocity from previous sprints to ensure commitment realism. Quality standards and definition of done **will be** reviewed before commitment.",
    comprehensionQuestions: [
      {
        question: "Who presents the prioritized user stories?",
        answer: "The product owner."
      },
      {
        question: "What will be reviewed before commitment?",
        answer: "Quality standards and definition of done."
      },
      {
        question: "How will effort be estimated?",
        answer: "Using story points."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Sprint Planning Meeting",
    transcript: "Right team, let's start our sprint planning. We've got 8 story points capacity for this sprint. The product owner will present the backlog items. This login feature looks ready - we will implement it with proper validation. Shall we add automated tests to the definition of done? Our velocity last sprint was 7 points, so we are going to be conservative with commitments. Each developer should commit to tasks they feel confident about completing.",
    comprehensionQuestions: [
      {
        question: "What is the team's sprint capacity?",
        answer: "8 story points."
      },
      {
        question: "What will the team implement?",
        answer: "The login feature."
      },
      {
        question: "What was the team's velocity last sprint?",
        answer: "7 points."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Agile Methodology Terms",
    explanation: "Master the pronunciation of key sprint planning and agile methodology vocabulary used in professional software development environments.",
    examples: [
      {
        term: "sprint",
        phonetic: "/sprɪnt/",
        tip: "One syllable, like 'print' but with 's'. Short 'i' sound. Not 'spront'."
      },
      {
        term: "backlog",
        phonetic: "/ˈbækˌlɔg/",
        tip: "Two syllables: 'back-log'. Stress on first syllable. The 'g' at the end is soft."
      },
      {
        term: "scrum",
        phonetic: "/skrʌm/",
        tip: "One syllable, rhymes with 'drum'. Short 'u' sound. Not 'scr-um'."
      },
      {
        term: "burndown",
        phonetic: "/ˈbɜrndəʊn/",
        tip: "Two syllables: 'burn-down'. Stress on first syllable. Like 'burned down' but as one word."
      },
      {
        term: "velocity",
        phonetic: "/vəˈlɑsəti/",
        tip: "Four syllables: 've-loc-i-ty'. Stress on third syllable. 'vel' like 'well', 'ty' like 'tee'."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "American English (Silicon Valley)",
      speakerBio: "Sarah, Scrum Master from San Francisco",
      audioSrc: "",
      transcript: "Okay team, let's dive into this sprint planning. We've got solid capacity this time around - I'd say we can commit to about 12 story points. The product owner will walk us through the backlog. We will prioritize the user authentication feature. What do you think - shall we break it down into smaller user stories?"
    },
    {
      accent: "British English (London)",
      speakerBio: "James, Product Owner from London",
      audioSrc: "",
      transcript: "Right, let's get this sprint planned properly. The team will need to review the backlog items first. I think we can probably commit to 10 points this time. We are going to include the testing criteria in our definition of done. Shall we schedule the grooming session for tomorrow morning?"
    }
  ],
  rolePlay: {
    title: "Sprint Planning Meeting",
    objective: "Participate in a sprint planning meeting, estimate user stories, and commit to sprint goals using appropriate planning language and future tenses.",
    aiPersona: "Scrum Master facilitating the planning meeting",
    initialMessage: "Welcome to sprint planning. Let's start with the backlog review. What user stories shall we consider for this sprint, and how many story points do you think we can commit to?"
  }
};
