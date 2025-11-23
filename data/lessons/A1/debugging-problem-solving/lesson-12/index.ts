import { Lesson, Difficulty } from '../../../../../types';

export const lesson12: Lesson = {
  id: "db12",
  title: "Post-Mortem & Prevention",
  level: Difficulty.A1,
  description: "Learn to write post-mortems and prevention plans using Past and Future tenses to analyze incidents and implement safeguards.",
  didYouKnow: "Effective post-mortems reduce incident recurrence by 70%. Companies that conduct blameless post-mortems have 20% fewer incidents than those that don't.",

  grammar: {
    title: "Past + Future Tenses for Post-Mortem Analysis",
    explanation:
      "**Past**: What happened - 'Server crashed, Users lost access'\n**Future**: Prevention measures - 'Will implement monitoring, Won't repeat mistake'\n\nIncident analysis:\n\n📝 **Chronicle**: 'Incident started when traffic spiked'\n🎯 **Preventions**: 'Will add load balancers, Implement circuit breakers'\n📚 **Lessons**: 'Should have tested failover earlier'",
    usage:
      "Post-mortem discussions:\n\n🔮 **Planning**: 'Will add alerts for high memory usage'\n📋 **Prevention**: 'Should implement rollback procedures'\n🚀 **Improvements**: 'Won't deploy without proper testing'",
    rules: [
      {
        from: "Past incident description",
        to: "verb-ed/had + past participle (started, had crashed)"
      },
      {
        from: "Future preventions",
        to: "will/won't + verb (will implement, won't delay)"
      },
      {
        from: "Conditional lessons",
        to: "should/shouldn't have + past participle (should have tested)"
      }
    ],
    examples: [
      "The server **crashed** unexpectedly, so **we will implement** automated recovery.",
      "**If** traffic **had spiked** again, **users would have remained** online.",
      "**We should have tested** failover procedures before deployment.",
      "**We won't deploy** without proper monitoring going forward.",
      "**Traffic increased** gradually, but **we will add** threshold alerts now."
    ],
    commonMistakes: [
      {
        incorrect: "Server crash, will implement monitoring",
        correct: "Server crashed, so we will implement monitoring.",
        explanation:
          "Add proper tense agreement and connectors."
      },
      {
        incorrect: "We should implemented backup.",
        correct: "We should have implemented a backup.",
        explanation:
          "Use correct past conditional form."
      },
      {
        incorrect: "Next time we implement better.",
        correct: "Next time we will implement it better.",
        explanation:
          "Complete future construction."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The bug occurred because we ___ , so next time we ___ monitoring.",
      options: ["didn't test, will implement", "don't test, implemented", "hadn't tested, will have implemented", "aren't testing, implement"],
      answer: "didn't test, will implement"
    }
  },
  vocabulary: [
    {
      item: "post-mortem",
      explanation: "An analysis of an incident to understand what happened and how to prevent it.",
      example: "We conducted a post-mortem to prevent similar outages in the future.",
      pronunciation: "/ˈpoʊst ˈmɔrtəm/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Post-Mortem Writing Patterns",
    chunks: [
      {
        chunk: "Issue [happened] because [reason], so we [won't] [action]",
        usage: "Explaining cause and future prevention"
      },
      {
        chunk: "We should have [done] , so we will [do]",
        usage: "Lessons learned and implementation"
      }
    ]
  },
  scenario: "Writing a post-mortem report after a production incident and outlining prevention strategies.",
  speaking: "The service went down because we deployed without proper testing. We should have had better monitoring in place. Next time we will implement automated failover and won't deploy without thorough testing.",
  speakingPracticeMode: "explanation",
  readingActivity: {
    title: "Reading: Effective Post-Mortem Practices",
    text: "Good post-mortems focus on learning without blame. Document the timeline: when symptoms appeared, when engineers noticed, when it was resolved. Include quantifiable impact: downtime duration, affected users, revenue lost. Detail root causes without assigning personal fault. Craft action items with clear ownership and timelines. Share post-mortems broadly to educate the entire team.",
    comprehensionQuestions: [
      {
        question: "What should post-mortems focus on?",
        answer: "Learning without blame"
      },
      {
        question: "What details should be included in a timeline?",
        answer: "When symptoms appeared, engineers noticed, and resolution occurred"
      },
      {
        question: "What should action items include?",
        answer: "Clear ownership and timelines"
      }
    ],
  },
  listeningActivity: {
    title: "Post-Mortem Meeting",
    transcript: "Let's review the incident.",
    comprehensionQuestions: [],
    audioSrc: ""
  },
  pronunciationClinic: {
    title: "Incident Terms",
    explanation: "Pronunciation of incident terms.",
    examples: []
  },
  globalAccentLab: [],
  rolePlay: {
    title: "Post-Mortem Review",
    objective: "Conduct a post-mortem.",
    aiPersona: "Engineering Manager",
    initialMessage: "Let's start the post-mortem."
  }
};
