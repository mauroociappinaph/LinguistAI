import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson07: Lesson = {
  id: "gs7",
  title: "Skills & Abilities",
  level: Difficulty.A1,
  description: "Learn to describe your technical skills using 'can' and 'can't'.",
  didYouKnow: "In tech interviews, being honest about what you 'can't' do (yet) is often as important as what you 'can' do. It shows self-awareness.",
  grammar: {
    ...grammar,
    commonMistakes
  },
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,
  scenario: "Discussing your tech stack and abilities in an interview or team intro.",
  speaking: "I can code in JavaScript and Python. I can't use Rust yet, but I am learning. Can you help me with this bug?",
  speakingPracticeMode: "general",
  readingActivity: {
    title: "Reading: My Skill Set",
    text: "Hi, I'm Sarah. I am a frontend developer. I can build responsive websites using React. I can also design basic UI components in Figma. I can't write backend code very well, but I can understand simple API documentation. I can use Git for version control.",
    comprehensionQuestions: [
      {
        question: "What can Sarah build?",
        answer: "Responsive websites using React."
      },
      {
        question: "Can she write backend code well?",
        answer: "No, she can't."
      }
    ]
  },
  listeningActivity: {
    title: "Listening: Team Skills",
    transcript: "We have a strong team. John can manage the database. Lisa can handle the frontend. I can take care of the DevOps. We can't launch this week, but we can be ready by next Monday.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Pronunciation: Can vs Can't",
    explanation: "The vowel sound changes. 'Can' is often reduced to /kən/. 'Can't' has a clear /æ/ sound.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Skill Check",
    objective: "Discuss what you can and can't do regarding a new project requirement.",
    aiPersona: "Project Manager",
    initialMessage: "We need someone to set up the CI/CD pipeline. Can you do that?"
  }
};
