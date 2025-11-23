import { Lesson, Difficulty } from '../../../../../types';

export const lesson05: Lesson = {
  id: "db5",
  title: "Bug Investigation",
  level: Difficulty.A1,
  description: "Learn to investigate bugs systematically using passive voice for analytical descriptions and imperatives for investigation steps.",
  didYouKnow: "Systematic bug investigation reduces debugging time by 70% and uncovers 2x more root causes compared to haphazard approaches. Passive voice helps maintain objective, professional tone in technical analysis.",

  grammar: {
    title: "Passive + Imperatives for Investigation",
    explanation:
      "**Passive**: Focuses on process/actions - 'The log is analyzed, The code is reviewed'\n**Imperatives + Passive**: Investigation steps - 'Analyze the log, Check the database'\n\nCombine for structured debugging:\n\n🎯 **Investigation**: 'Examine the database - errors are logged'\n📝 **Analysis**: 'The bug is identified - verify the cause'",
    usage:
      "Systematic debugging process:\n\n🔍 **Identify**: 'Locate the failing code'\n📊 **Analyze**: 'Data structures are examined'\n🎛️ **Test**: 'Isolate variables, Check assumptions'\n📈 **Document**: 'Findings are recorded'",
    rules: [
      {
        from: "Investigation steps",
        to: "Imperative + object (Check the logs, Test the function)"
      },
      {
        from: "Analysis descriptions",
        to: "Passive structure (Data is processed, Logs are generated)"
      },
      {
        from: "Combined process",
        to: "Imperative + passive (Verify that data is validated)"
      }
    ],
    examples: [
      "**Investigate** the database connection - make sure **logs are checked**.",
      "**Isolate** the bug - **variables are examined** one by one.",
      "**Analyze** the error - **stack trace is reviewed** carefully.",
      "**Test** the fix - **assumptions are verified**.",
      "**Document** the investigation - **findings are recorded**."
    ],
    commonMistakes: [
      {
        incorrect: "I investigate the bug and find it.",
        correct: "Investigate the bug systematically - root cause is identified.",
        explanation:
          "Use imperative for instructions, passive for objective findings."
      },
      {
        incorrect: "Check logs and they are checked.",
        correct: "Check the logs - they are examined for errors.",
        explanation:
          "Don't repeat passive structure unnecessarily."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "___ the code and ___ that variables ___ set correctly.",
      options: ["Check, Verify, Are", "Checked, Verified, Is", "Checking, Verifying, Are", "Checks, Verifies, Are"],
      answer: "Check, Verify, Are"
    }
  },
  vocabulary: [],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Bug Investigation Communication Patterns",
    chunks: [
      {
        chunk: "___ [step] and ___ that [condition] is met",
        usage: "Systematic verification during debugging"
      },
      {
        chunk: "Check ___ - verify that [process] ___ [result]",
        usage: "Testing assumptions step by step"
      },
      {
        chunk: "Investigate ___ - findings ___ documented",
        usage: "Professional investigation reporting"
      }
    ]
  },
  scenario: "Systematically investigating a database connection issue using structured debugging approaches.",
  speaking: "First, investigate the connection pool. Check the logs and verify that connections are being released. Isolate the query and test it separately. The issue is identified - database timeout is occurring.",
  speakingPracticeMode: "instructions",

  readingActivity: {
    title: "Reading: Systematic Bug Investigation",
    text: "Professional debugging follows structured approaches. First, confirm the issue exists and document exact reproduction steps. Gather evidence from logs, database queries, and user reports. Form hypotheses about the root cause, then test them systematically. Use scientific method in debugging: observe problem, form hypothesis, test hypothesis, analyze results. Keep detailed notes throughout the investigation. Document false assumptions and dead ends - this helps others learn from the investigation process.",
    comprehensionQuestions: [
      {
        question: "What should you do before investigating deeply?",
        answer: "Confirm the issue exists and document exact reproduction steps."
      },
      {
        question: "What is the structured approach to debugging?",
        answer: "Observe, form hypothesis, test, analyze."
      },
      {
        question: "Why should you document false assumptions?",
        answer: "To help others learn from the investigation process."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Investigation Process Walkthrough",
    transcript: "Let's investigate this database issue step by step. First, check the connection pool usage - verify that connections are being properly released. Then isolate the problematic query and test it against the database directly. Examine the error handling - make sure exceptions are being caught and logged. The timestamp is checked and the slow query is identified. Database indexing is optimized and the issue is resolved.",
    comprehensionQuestions: [
      {
        question: "What should be checked first in database issues?",
        answer: "Connection pool usage."
      },
      {
        question: "What is isolated and tested directly?",
        answer: "The problematic query."
      },
      {
        question: "What was ultimately optimized?",
        answer: "Database indexing."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Investigation Terms",
    explanation: "Master key terms used during systematic bug investigation processes.",
    examples: [
      {
        term: "hypothesis",
        phonetic: "/haɪˈpɑθəsɪs/",
        tip: "Four syllables: 'hi-poth-e-sis'. Primary stress on second syllable."
      },
      {
        term: "evidence",
        phonetic: "/ˈɛvɪdəns/",
        tip: "Three syllables: 'ev-i-dence'. Stress on first syllable."
      },
      {
        term: "isolated",
        phonetic: "/ˈaɪsəˌleɪtɪd/",
        tip: "Four syllables: 'i-so-lay-ted'. Stress on third syllable."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Australian English (Sydney)",
      speakerBio: "Tom, Senior Developer from Sydney",
      audioSrc: "",
      transcript: "Alright, let's crack this bug investigation open. First up, isolate the function and test it on its own. Check the inputs - verify that data types are correct. Then examine the interaction with the database. The timing issue is identified and the query is optimized. Piece of cake!"
    }
  ],

  rolePlay: {
    title: "Bug Investigation Process",
    objective: "Guide a systematic bug investigation using imperative instructions and passive analysis.",
    aiPersona: "Junior developer working through a complex bug",
    initialMessage: "I've been looking at this bug for hours but can't figure out what's causing it. Should I keep trying random changes?"
  }
};
