import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson02: Lesson = {
  id: "pc2",
  title: "Code Reviews & Feedback",
  level: Difficulty.A1,
  description: "Learn to participate in code reviews and give/receive constructive feedback using modal verbs and technical communication patterns.",
  didYouKnow: "Code review is one of the most effective ways to catch bugs early - studies show it can reduce defect rates by up to 30%. Modern development teams use tools like GitHub Pull Requests, GitLab, and Azure DevOps to facilitate asynchronous reviews. The average developer now spends about 1-2 hours per day on code reviews.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Conducting a code review on a team member's pull request and providing constructive feedback.",
  speaking: "This code looks good overall, but you should consider extracting this logic into a separate function. Also, this might cause issues with null values. What do you think about adding input validation?",
  speakingPracticeMode: "conversation",

  readingActivity: {title: "Reading: Effective Code Review Guidelines",
    text: "Effective code reviews combine technical feedback with constructive communication. **Reviewers should** focus on the code, not the person - approach criticism collaboratively. **Consider** suggesting improvements while acknowledging good practices. **Ask** questions when something is unclear rather than assuming mistakes. **Use** tools appropriately for automated checks. **Provide** specific examples when suggesting changes. **Balance** positive feedback with actionable recommendations.",
    comprehensionQuestions: [
      {
        question: "What should reviewers focus on?",
        answer: "The code, not the person."
      },
      {
        question: "How should criticism be approached?",
        answer: "Collaboratively."
      },
      {
        question: "What should you do when something is unclear?",
        answer: "Ask questions."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Code Review Discussion",
    transcript: "Let me review this pull request. The new authentication logic looks solid, but you should consider adding error handling for network failures. This function could be simplified by extracting the validation logic. Also, this might cause issues if the user token expires. What do you think about using the existing helper function instead? Overall great work on handling the edge cases properly.",
    comprehensionQuestions: [
      {
        question: "What looks solid in the code?",
        answer: "The new authentication logic."
      },
      {
        question: "What should be added for network failures?",
        answer: "Error handling."
      },
      {
        question: "What might cause issues?",
        answer: "If the user token expires."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Development & Code Review Terms",
    explanation: "Master the pronunciation of key terms used in software development, code reviews, and version control conversations.",
    examples: [
      {
        term: "refactor",
        phonetic: "/ˈrifæktər/",
        tip: "Three syllables: 'ree-fack-ter'. Stress on first syllable. Don't say 'ref-act-ter'."
      },
      {
        term: "commit",
        phonetic: "/kəˈmɪt/",
        tip: "Two syllables: 'com-mit'. Stress on second syllable. Short 'i' sound."
      },
      {
        term: "pull request",
        phonetic: "/pʊl rɪˈkwɛst/",
        tip: "Three syllables: 'pull re-quest'. Stress on second syllable. 'Pull' like in tug-of-war."
      },
      {
        term: "merge conflict",
        phonetic: "/mɜrdʒ ˈkɒnflɪkt/",
        tip: "Three syllables: 'merge con-flict'. Stress on first word, then second. 'Conflict' like argue."
      },
      {
        term: "technical debt",
        phonetic: "/ˈtɛknɪkəl dɛt/",
        tip: "Four syllables: 'tech-ni-cal debt'. Stress on first syllable, then third. 'Debt' as in money owed."
      }
    ]
  },
  globalAccentLab: [[
    {
      accent: "American English (Tech)",
      speakerBio: "Mike, Senior Developer from Austin",
      audioSrc: "",
      transcript: "Alright, let me take a look at this PR. The authentication flow is solid, but you should definitely add error handling for those edge cases. This could be simplified by using the existing auth helper we have. Might wanna consider adding some tests too."
    },
    {
      accent: "Australian English (Sydney)",
      speakerBio: "Lisa, Tech Lead from Sydney",
      audioSrc: "",
      transcript: "Good work on this feature, mate. The API integration looks ace, but you should consider refactoring that nested function. This might cause performance issues down the track. What do you reckon about adding some caching here?"
    }
  ]],
  rolePlay: {
    title: "Code Review Session",
    objective: "Review a colleague's code submission and provide constructive feedback using appropriate modal verbs and professional communication patterns.",
    aiPersona: "Junior developer whose code is being reviewed",
    initialMessage: "I've submitted the user registration feature for review. What do you think? Are there any issues I should address before we merge it?"
  }
};
