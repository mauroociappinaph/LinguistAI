import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson04: Lesson = {
  id: "pc4",
  title: "Issue Tracking & Problem Solving",
  level: Difficulty.A1,
  description: "Learn to track issues, troubleshoot problems, and use past tenses and cause/effect relationship vocabulary in technical problem-solving scenarios.",
  didYouKnow: "Software development teams spend an average of 35-50% of their time fixing bugs and resolving issues. Effective issue tracking reduces this time significantly, with tools like Jira helping teams manage tickets and maintain clear communication about problems and solutions. Good problem-solving skills are among the top requirements for modern developers.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Investigating and resolving a critical production issue using systematic problem-solving approaches and proper issue tracking communication.",
  speaking: "The application crashed because the database connection timed out. We implemented connection pooling so that we can handle more concurrent users. I've documented the steps to reproduce the issue in the ticket.",
  speakingPracticeMode: "conversation",

  readingActivity: {title: "Reading: Systematic Problem Solving in Software Development",
    text: "Effective problem solving requires methodical approaches. **Replicate** the issue first to understand conditions. **Isolate** variables to identify the **root cause**, then develop a solution. Document findings **so that** team members can learn from the experience. Implement fixes with appropriate **priority** based on **impact**. Create **workarounds** for critical issues requiring immediate attention while permanent solutions are developed.",
    comprehensionQuestions: [
      {
        question: "What should you do first when troubleshooting?",
        answer: "Replicate the issue."
      },
      {
        question: "What helps identify the fundamental problem?",
        answer: "Isolate variables."
      },
      {
        question: "What should be developed for immediate critical issues?",
        answer: "Workarounds."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Incident Response Meeting",
    transcript: "Let's review this production outage. The server crashed because the memory usage spiked to 95%. We implemented monitoring so that we can detect these issues earlier. The root cause was an infinite loop in the image processing function. I've isolated the problematic code and developed a hotfix. As a workaround for now, we've increased the server capacity. Can you reproduce these conditions in the test environment?",
    comprehensionQuestions: [
      {
        question: "What was the root cause of the crash?",
        answer: "An infinite loop in the image processing function."
      },
      {
        question: "What was implemented to detect issues earlier?",
        answer: "Monitoring."
      },
      {
        question: "What workaround was applied?",
        answer: "Increased the server capacity."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Troubleshooting and Issue Terms",
    explanation: "Master the pronunciation of key terms used in software problem-solving, debugging, and issue tracking conversations.",
    examples: [
      {
        term: "reproduce",
        phonetic: "/ˌriprəˈdus/",
        tip: "Three syllables: 'ree-pro-duce'. Stress on third syllable. Don't confuse with 'reproduce' meaning to have children."
      },
      {
        term: "regression",
        phonetic: "/rɪˈgrɛʃən/",
        tip: "Three syllables: 'ree-gresh-un'. Stress on second syllable. Short 'e' in middle."
      },
      {
        term: "severity",
        phonetic: "/sɪˈvɛrəti/",
        tip: "Four syllables: 'sev-er-i-ty'. Stress on penultimate syllable. Sounds like 'ver' in 'very'."
      },
      {
        term: "workaround",
        phonetic: "/ˈwɜrkəˌraʊnd/",
        tip: "Three syllables: 'work-a-round'. Stress on first syllable. Second 'a' is short sound."
      },
      {
        term: "trace",
        phonetic: "/treɪs/",
        tip: "One syllable, like 'ace' but with 'tr'. Don't say 'trayce'. Used in 'stack trace'."
      }
    ]
  },
  globalAccentLab: [[
    {
      accent: "Irish English (Dublin)",
      speakerBio: "Shane, DevOps Engineer from Dublin",
      audioSrc: "",
      transcript: "Alright, let's trace this database issue. The query failed because the connection pool was exhausted. We've implemented connection limits so that this won't happen again. Can you reproduce it in staging? The severity is high - it's affecting customer orders."
    },
    {
      accent: "South African English (Cape Town)",
      speakerBio: "Lindsey, QA Lead from Cape Town",
      audioSrc: "",
      transcript: "Okay team, this regression is concerning. The login page broke because we deployed the new CSS without testing. We need to implement better test coverage so that this doesn't happen again. As a workaround, I've rolled back the deployment. Priority should be critical for the fix."
    }
  ]],
  rolePlay: {
    title: "Critical Bug Investigation",
    objective: "Investigate a reported bug, determine root cause using systematic troubleshooting methods, and communicate findings to the development team.",
    aiPersona: "QA tester who identified and reported the bug",
    initialMessage: "I found this critical bug in the payment processing. I've written reproduction steps, but I need your help to trace what's causing it. Can we schedule some time to investigate together?"
  }
};
