import { Lesson, Difficulty } from '../../../../../types';

export const lesson04: Lesson = {
  id: "pc4",
  title: "Issue Tracking & Problem Solving",
  level: Difficulty.A1,
  description: "Learn to track issues, troubleshoot problems, and use past tenses and cause/effect relationship vocabulary in technical problem-solving scenarios.",
  didYouKnow: "Software development teams spend an average of 35-50% of their time fixing bugs and resolving issues. Effective issue tracking reduces this time significantly, with tools like Jira helping teams manage tickets and maintain clear communication about problems and solutions. Good problem-solving skills are among the top requirements for modern developers.",

  grammar: {
    title: "Past Tenses & Cause/Effect: Because/So That",
    explanation:
      "**'Because'** shows cause: 'The database crashed **because** of the memory leak'. **'So that'** shows purpose: 'We added logging **so that** we can debug issues'.\n\nIn problem-solving: 'The build failed **because** dependencies were missing', 'We implemented error handling **so that** users see helpful messages'.",
    usage:
      "Use in issue analysis:\n\n🔍 **Cause**: 'The error occurred **because** of input validation'\n🎯 **Purpose**: 'We added monitoring **so that** we can detect issues early'\n\nPast tenses for what happened, present for current analysis.",
    rules: [
      {
        from: "Cause relationship",
        to: "because + clause (Because the server crashed, the site was down)"
      },
      {
        from: "Purpose/result",
        to: "so that + clause (We added tests so that we prevent regression)"
      },
      {
        from: "Past complained problems",
        to: "Past simple for resolved issues, past perfect for sequence"
      }
    ],
    examples: [
      "The API failed **because** the authentication token expired.",
      "We implemented caching **so that** the page loads faster.",
      "The user **reported** the bug last week, and we **fixed** it yesterday.",
      "The server **had crashed** before we **identified** the memory leak.",
      "We added monitoring **so that** we can prevent future outages."
    ],
    commonMistakes: [
      {
        incorrect: "The code broke because of we didn't test it.",
        correct: "The code broke because we didn't test it.",
        explanation:
          "Don't add 'of' after 'because'. Use 'because' + subject + verb directly."
      },
      {
        incorrect: "We deployed so that fix the issue.",
        correct: "We deployed so that we could fix the issue.",
        explanation:
          "After 'so that', use a full clause with subject and modal verb when needed."
      },
      {
        incorrect: "The bug occurred because the error handling wasn't there.",
        correct: "The bug occurred because the error handling wasn't implemented.",
        explanation:
          "Use more precise vocabulary. 'Wasn't there' sounds vague; 'wasn't implemented' is clearer."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The application crashed ___ of a null pointer exception.",
      options: ["because", "so that", "than"],
      answer: "because"
    }
  },
  vocabulary: [
    {
      item: "troubleshoot",
      explanation: "To identify and solve problems in a system or process.",
      example: "Let's troubleshoot the login issue step by step.",
      pronunciation: "/ˈtrʌblˌʃut/"
    },
    {
      item: "debug",
      explanation: "To find and fix defects or problems in software.",
      example: "I spent two hours debugging the authentication flow.",
      pronunciation: "/diˈbʌg/"
    },
    {
      item: "replicate",
      explanation: "To make or do something again in exactly the same way.",
      example: "Can you replicate the steps that caused this error?",
      pronunciation: "/ˈrɛplɪkeɪt/"
    },
    {
      item: "reproduce",
      explanation: "To create the same conditions to see a problem again.",
      example: "I can't reproduce the bug on my machine.",
      pronunciation: "/ˌriprəˈdus/"
    },
    {
      item: "isolate",
      explanation: "To separate something from others to examine it individually.",
      example: "Let's isolate the problematic component in our tests.",
      pronunciation: "/ˈaɪsəleɪt/"
    },
    {
      item: "workaround",
      explanation: "A temporary solution to bypass a problem until it can be properly fixed.",
      example: "We implemented a workaround until the permanent fix is deployed.",
      pronunciation: "/ˈwɜrkəˌraʊnd/"
    },
    {
      item: "root cause",
      explanation: "The fundamental reason for a problem or issue.",
      example: "We identified the root cause as a database connection timeout.",
      pronunciation: "/rut kɔz/"
    },
    {
      item: "regression",
      explanation: "A bug that reappears after a fix or change that was supposed to prevent it.",
      example: "The test suite prevents regression of fixed issues.",
      pronunciation: "/rɪˈgrɛʃən/"
    },
    {
      item: "severity",
      explanation: "The degree of seriousness or importance of a problem.",
      example: "This is a high severity bug that affects all users.",
      pronunciation: "/sɪˈvɛrəti/"
    },
    {
      item: "priority",
      explanation: "The relative importance or urgency of a task or issue.",
      example: "Set the priority to critical for this production issue.",
      pronunciation: "/praɪˈɔrəti/"
    },
    {
      item: "trace",
      explanation: "To follow the path or development of something, especially to find the source.",
      example: "The stack trace helped us identify where the error originated.",
      pronunciation: "/treɪs/"
    },
    {
      item: "impact",
      explanation: "The effect or influence that an event, situation, or action has on something.",
      example: "This issue has minimal impact on user experience.",
      pronunciation: "/ˈɪmpækt/"
    },
    {
      item: "backup",
      explanation: "A copy of data or files that can be used to restore the original data if it is lost or damaged.",
      example: "We restored the database from a recent backup.",
      pronunciation: "/ˈbækˌʌp/"
    },
    {
      item: "patch",
      explanation: "A piece of software that updates or fixes another program.",
      example: "Apply the security patch immediately to all servers.",
      pronunciation: "/pætʃ/"
    },
    {
      item: "hotfix",
      explanation: "An urgent software fix that is implemented quickly without following the full release process.",
      example: "We deployed a hotfix to resolve the critical security vulnerability.",
      pronunciation: "/ˈhɑtˌfɪks/"
    }
  ],
  phrasalVerbs:[],
  compoundWords:[],
  functionalChunks: {
    title: "Problem Solving Communication Patterns",
    chunks: [
      {
        chunk: "The issue occurred because ___",
        usage: "Explaining root causes when analyzing problems"
      },
      {
        chunk: "We implemented ___ so that ___",
        usage: "Describing solutions and their purposes"
      },
      {
        chunk: "Can you replicate ___? / I can't reproduce ___",
        usage: "Discussing steps to reproduce issues"
      },
      {
        chunk: "The root cause was ___",
        usage: "Reporting findings from investigation"
      },
      {
        chunk: "As a workaround, ___",
        usage: "Offering temporary solutions"
      }
    ]
  },
  scenario: "Investigating and resolving a critical production issue using systematic problem-solving approaches and proper issue tracking communication.",
  speaking: "The application crashed because the database connection timed out. We implemented connection pooling so that we can handle more concurrent users. I've documented the steps to reproduce the issue in the ticket.",
  speakingPracticeMode: "conversation",

  readingActivity: {
    title: "Reading: Systematic Problem Solving in Software Development",
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

  globalAccentLab: [
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
  ],

  rolePlay: {
    title: "Critical Bug Investigation",
    objective: "Investigate a reported bug, determine root cause using systematic troubleshooting methods, and communicate findings to the development team.",
    aiPersona: "QA tester who identified and reported the bug",
    initialMessage: "I found this critical bug in the payment processing. I've written reproduction steps, but I need your help to trace what's causing it. Can we schedule some time to investigate together?"
  }
};
