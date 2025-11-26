import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson04: Lesson = {
  id: "db4",
  title: "Bug Reports & Checklists",
  level: Difficulty.A1,
  description: "Learn to create professional bug reports and checklists using imperatives to systematically document and track software issues.",
  didYouKnow: "Professional bug reports reduce debugging time by 60% on average and ensure nothing gets missed. Checklists have been shown to prevent bugs in 85% of cases during quality assurance processes.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Creating a comprehensive bug report for a user login issue using checklists and clear imperative instructions.",
  speaking: "Fill out the bug report template. Document the steps to reproduce, include screenshots, and describe what should happen instead. Make sure to test this in multiple browsers.",
  speakingPracticeMode: "instructions",

  readingActivity: {title: "Reading: Quality Bug Report Guidelines",
    text: "Effective bug reports follow specific guidelines. First, reproduce the issue consistently and document every step. Include system details, browser versions, and exact error messages. Provide screenshots or screen recordings when possible. Clearly describe what you expected versus what actually happened. Categorize the severity and impact. Test on multiple devices and environments. Include any workarounds you discover. Good bug reports save development time and prevent misunderstandings.",
    comprehensionQuestions: [
      {
        question: "What should you do first when writing a bug report?",
        answer: "Reproduce the issue consistently."
      },
      {
        question: "What information helps developers understand the issue?",
        answer: "System details, browser versions, and exact error messages."
      },
      {
        question: "Why are bug reports important?",
        answer: "They save development time and prevent misunderstandings."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Bug Report Creation Walkthrough",
    transcript: "Okay, create a new bug report from the template. First, assign it to the right team and give it a clear, descriptive title. Then, fill in the description: write what you were doing, what you expected to happen, and what actually happened. Add the reproduction steps in numbered list format. Make sure to include your browser version, operating system, and any error messages you saw. Finally, add any screenshots and categorize the severity. Test if this reproduces on other devices before you submit.",
    comprehensionQuestions: [
      {
        question: "What should be first in the title?",
        answer: "A clear, descriptive title."
      },
      {
        question: "What format should reproduction steps be in?",
        answer: "Numbered list format."
      },
      {
        question: "What should you do before submitting?",
        answer: "Test if it reproduces on other devices."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Bug Report Terms",
    explanation: "Master the pronunciation of standard bug report and checklist terminology.",
    examples: [
      {
        term: "reproduce",
        phonetic: "/ˌriprəˈdus/",
        tip: "Three syllables: 're-pro-duce'. Primary stress on third syllable. Means to make happen again."
      },
      {
        term: "severity",
        phonetic: "/sɪˈvɛrɪti/",
        tip: "Four syllables: 'se-ver-i-ty'. Stress on third syllable. Means how serious the problem is."
      },
      {
        term: "workaround",
        phonetic: "/ˈwɜrkəˌraʊnd/",
        tip: "Three syllables: 'work-a-round'. Stress on first and third syllables. Means temporary solution."
      }
    ]
  },
  globalAccentLab: [[
    {
      accent: "Canadian English (Toronto)",
      speakerBio: "Emma, QA Engineer from Toronto",
      audioSrc: "",
      transcript: "Alright, let's create the bug report. First off, document the exact steps to reproduce. Include your browser and OS details. Take screenshots of the error messages. And eh, make sure to note if this affects multiple users. Don't forget to add the environment variables and any logs from the console."
    }
  ]],
  rolePlay: {
    title: "Bug Report Creation",
    objective: "Guide someone through creating a proper bug report using checklists and imperative instructions.",
    aiPersona: "Junior developer learning to write bug reports",
    initialMessage: "I'm trying to report a bug I found in the app. What information do I need to include?"
  }
};
