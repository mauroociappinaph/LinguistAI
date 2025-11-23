import { Lesson, Difficulty } from '../../../../../types';

export const lesson10: Lesson = {
  id: "db10",
  title: "Root Cause Analysis",
  level: Difficulty.A1,
  description: "Learn to analyze root causes of bugs using Past Simple and connectors to trace problems to their origin and understand why they occurred.",
  didYouKnow: "Root cause analysis solves 90% of repeating bugs. Understanding why problems occurred prevents them from happening again and saves development time in the long term.",

  grammar: {
    title: "Past Simple + Connectors for Root Cause Analysis",
    explanation:
      "**Past Simple**: Completed actions that caused the issue - 'The server crashed', 'The code failed'\n**Connectors**: Link causes and effects - 'Because, When, So, Then, Since'\n\nProblem investigation:\n\n🔍 **Sequence**: 'Server restarted, then database disconnected'\n💡 **Reasons**: 'Code failed because validation was missing'\n🎯 **Root cause**: 'Issue occurred when config file changed'",
    usage:
      "Root cause conversations:\n\n📝 **Chronology**: 'User logged in, clicked submit, then app froze'\n🔗 **Causal links**: 'Server crashed because memory ran out'\n🎯 **Discovery**: 'Bug appeared when library was updated'",
    rules: [
      {
        from: "Chronological events",
        to: "verb-ed + then + verb-ed (crashed + then + restarted)"
      },
      {
        from: "Causal relationships",
        to: "because + clause (because + connection failed)"
      },
      {
        from: "Triggers",
        to: "when + past event (when + deployed)"
      }
    ],
    examples: [
      "The server **crashed** because **memory leaked** during the operation.",
      "**When** we **deployed** the code, **users couldn't log in** anymore.",
      "**Since** the database **migrated**, **all queries returned** null values.",
      "The API **failed** **because** the authentication token **expired**.",
      "**Then** the backend **returned** 500 errors **after** the load balancer **redirected** traffic."
    ],
    commonMistakes: [],
    interactiveExercise: {
      type: "root-cause",
      question: "Identify the root cause: The server crashed because of a memory leak.",
      options: ["Server crash", "Memory leak"],
      answer: "Memory leak"
    }
  },
  vocabulary: [
    {
      item: "root cause",
      explanation: "The fundamental underlying reason for a problem.",
      example: "We identified the root cause as a race condition in the thread pool.",
      pronunciation: "/rut kɔz/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Root Cause Analysis Patterns",
    chunks: [
      {
        chunk: "[Problem] occurred because [cause]",
        usage: "Explaining direct causes of bugs"
      },
      {
        chunk: "When [trigger], [result]",
        usage: "Describing event triggers"
      },
      {
        chunk: "It [action] because [reason]",
        usage: "Personal investigation findings"
      }
    ]
  },
  scenario: "Analyzing why a production bug occurred by tracing through the timeline of events and identifying the fundamental cause.",
  speaking: "The service crashed because the database connection pool exhausted. When traffic spiked during the marketing campaign, connections weren't being released properly. The root cause was a missing dispose method in the connection handler.",
  speakingPracticeMode: "explanation",
  readingActivity: {
    title: "Root Cause Analysis Process",
    text: "Root cause analysis involves systematically working backwards from symptoms to initial causes. Ask why repeatedly: symptom leads to direct cause, which leads to underlying condition, which leads to root cause. Document each level of analysis to ensure the complete picture emerges.",
    comprehensionQuestions: [
      {
        question: "What is the systematic process for root cause analysis?",
        answer: "Working backwards from symptoms to initial causes"
      },
      {
        question: "Why should you document each level of analysis?",
        answer: "To ensure the complete picture emerges"
      }
    ],
  },
  listeningActivity: {
    title: "Root Cause Discussion",
    transcript: "We found the root cause.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Root Cause Terms",
    explanation: "Pronunciation of analysis terms.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Root Cause Meeting",
    objective: "Discuss the root cause.",
    aiPersona: "Team Lead",
    initialMessage: "What was the root cause?"
  }
};
