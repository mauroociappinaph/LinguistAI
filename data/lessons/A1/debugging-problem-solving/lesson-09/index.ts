import { Lesson, Difficulty } from '../../../../../types';

export const lesson09: Lesson = {
  id: "db9",
  title: "Data Flow Debugging",
  level: Difficulty.A1,
  description: "Learn to debug data flow issues using Present Continuous and Passive Voice to analyze data movement and processing problems.",
  didYouKnow: "Data flow bugs account for 40% of all application crashes. Debugging data flow systematically uncovers hidden issues in data transformation and validation processes.",

  grammar: {
    title: "Present Continuous + Passive for Data Flow",
    explanation:
      "**Present Continuous**: Dynamic data behaviors - 'Data is flowing', 'Values are changing'\n**Passive + Continuous**: Describes data being processed - 'Data is being validated', 'Records are being filtered'\n\nData flow analysis:\n\n🔄 **Ongoing processes**: 'The cache is being updated'\n📊 **Data validation**: 'Input data is being verified'\n⚙️ **Transformation**: 'Raw data is being converted to JSON'",
    usage: "Data debugging conversations:\n\n💡 **Flow analysis**: 'Data is being filtered but not updated'\n🔍 **Investigation**: 'Values are changing unexpectedly'\n📈 **Transformation**: 'XML is being converted to JSON automatically'",
    rules: [
      {
        from: "Dynamic processes",
        to: "Data + is/are + verb-ing (data + is + flowing)"
      },
      {
        from: "Passive processes",
        to: "Data + is/are + being + past participle (data + is + being + processed)"
      },
      {
        from: "Current state",
        to: "is/are + happening now (data + is + corrupting)"
      }
    ],
    examples: [
      "The user data **is being encrypted** before storage but **is being corrupted** during transmission.",
      "API responses **are being cached** but **not expiring** properly.",
      "Database records **are being updated** asynchronously and **causing race conditions**.",
      "Input values **are being validated** but **empty strings are passing through**.",
      "The data pipeline **is processing** 10 records per second but **dropping critical fields**."
    ],
    commonMistakes: [
      {
        incorrect: "Data being validate",
        correct: "Data is being validated",
        explanation:
          "Use 'is/are being' for continuous passive - complete the structure."
      },
      {
        incorrect: "Data flow",
        correct: "Data is flowing",
        explanation:
          "Use continuous for ongoing data movement and processing."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The data ___ at each step of processing",
      options: ["is being verified", "verified", "will verify", "verifying"],
      answer: "is being verified"
    }
  },
  vocabulary: [
    {
      item: "data flow",
      explanation: "The movement and transformation of data through a system.",
      example: "The data flow is interrupted at the validation step.",
      pronunciation: "/ˈdeɪtə floʊ/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Data Flow Analysis Patterns",
    chunks: [
      {
        chunk: "Data is [verb-ing] but ___ ",
        usage: "Identifying data flow issues"
      },
      {
        chunk: "[Data] is being [processed] but [problem]",
        usage: "Describing processing failures"
      }
    ]
  },
  scenario: "Debugging a complex data processing pipeline where information is being lost or corrupted during flow.",
  speaking: "The data is being processed through multiple transformations but values are getting corrupted. The validation step is working but the encryption is being applied incorrectly. Each record is being updated but some fields are being dropped.",
  speakingPracticeMode: "explanation",
  readingActivity: {
    title: "Data Flow Analysis",
    text: "Data flow analysis is critical for debugging.",
    comprehensionQuestions: [
      {
        question: "What happens during data transformation?",
        answer: "Data gets corrupted or lost"
      }
    ],
  },
  listeningActivity: {
    title: "Data Flow Discussion",
    transcript: "The data is flowing correctly.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Data Terms",
    explanation: "Pronunciation of data terms.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Debugging Session",
    objective: "Debug a data flow issue.",
    aiPersona: "Senior Dev",
    initialMessage: "Let's look at the data flow."
  }
};
