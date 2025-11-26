import { Lesson, Difficulty } from '../../../../../types';

export const advancedTechnicalWritingLesson03: Lesson = {
  id: "atw3",
  title: "Advanced Technical Synonyms & Precision Vocabulary",
  level: Difficulty.C1,
  description: "Master the art of precision in technical writing using advanced synonym strategies, tone alignment, and nuance to elevate your professional communication.",
  didYouKnow: "Using precise vocabulary not only improves readability but also demonstrates expertise. Distinguishing between 'latency' and 'lag', or 'deprecated' and 'obsolete', shows deep technical understanding.",

  grammar: {
    title: "Mastering Synonym Systems for Professional Communication",
    explanation: "**Advanced synonym mastery for sophisticated professional communication.**\\n\\n**SYNONYM SPECTRUM STRATEGY:**\\n\\n**Precision Hierarchy**:\\n- **Core Synonyms**: Essential alternatives for everyday professional use\\n- **Tone Synonyms**: Express different degrees of intensity/formality\\n- **Context Synonyms**: Domain-specific terms for technical fields\\n- **Nuance Synonyms**: Subtle differences in meaning and connotation\\n\\n**Strategic Replacement Guidelines**:\\n1. **Avoid Repetition**: Use synonyms to prevent monotony in professional writing\\n2. **Tone Alignment**: Match formality level to audience and context\\n3. **Precision Enhancement**: Choose terms with exact shade of meaning needed\\n4. **Cultural Adaptation**: Consider international audience preferences\\n\\n**Hardly Ever Integration**: Advanced frequency adverb 'hardly ever' expresses extreme rarity. 'This service **hardly ever** experiences downtime.' Synonym alternatives: rarely, scarcely, almost never.",
    usage: "Technical Papers, Architecture Docs, Executive Summaries:\\n\\n📝 **Repetition**: Instead of 'use', try 'utilize', 'leverage', 'employ'.\\n🎯 **Precision**: Instead of 'fast', try 'performant', 'responsive', 'low-latency'.\\n👔 **Formality**: Instead of 'fix', try 'rectify', 'resolve', 'remediate'.",
    rules: [
      {
        from: "Basic: 'Use'",
        to: "Advanced: 'Leverage' (for advantage), 'Employ' (formal), 'Utilize' (practical)"
      },
      {
        from: "Basic: 'Change'",
        to: "Advanced: 'Modify' (minor), 'Transform' (major), 'Alter' (specific)"
      },
      {
        from: "Basic: 'Problem'",
        to: "Advanced: 'Issue' (general), 'Bottleneck' (performance), 'Defect' (bug)"
      }
    ],
    examples: [
      "We **leveraged** the new API to enhance performance.",
      "The system **hardly ever** fails under load.",
      "This patch **rectifies** the security vulnerability.",
      "We need to **mitigate** the risks associated with the migration.",
      "The algorithm was **optimized** for high-throughput scenarios."
    ],
    commonMistakes: [
      {
        incorrect: "We used the tool to do the job.",
        correct: "We utilized the tool to accomplish the task.",
        explanation: "Elevate vocabulary in formal contexts."
      },
      {
        incorrect: "It is a big problem.",
        correct: "It is a significant challenge/issue.",
        explanation: "'Big problem' is too simplistic for C1 writing."
      },
      {
        incorrect: "The server hardly ever is down.",
        correct: "The server is hardly ever down.",
        explanation: "Adverbs of frequency usually go after the verb 'to be'."
      }
    ],
    interactiveExercise: {
      type: "multiple-choice",
      question: "Select the most precise synonym for 'fast' in: 'The database query is very ___.'",
      options: [
        "quick",
        "performant",
        "speedy",
        "rapid"
      ],
      answer: "performant"
    }
  },

  vocabulary: [
    {
      item: "leverage",
      explanation: "To use something to maximum advantage.",
      example: "We should leverage existing libraries.",
      pronunciation: "/ˈlɛvərɪdʒ/"
    },
    {
      item: "mitigate",
      explanation: "To make less severe, serious, or painful.",
      example: "Strategies to mitigate data loss.",
      pronunciation: "/ˈmɪtɪˌɡeɪt/"
    },
    {
      item: "obsolete",
      explanation: "No longer produced or used; out of date.",
      example: "This protocol is now obsolete.",
      pronunciation: "/ˌɒbsəˈliːt/"
    }
  ],
  phrasalVerbs: [
    {
      item: "phase out",
      explanation: "To gradually stop using something.",
      example: "We are phasing out the legacy system."
    },
    {
      item: "drill down",
      explanation: "To look at data or details in more depth.",
      example: "Let's drill down into the error logs.",
      separator: " "
    }
  ],
  compoundWords: [],
  functionalChunks: {
    title: "Precision Phrases",
    chunks: [
      {
        chunk: "To be precise",
        usage: "Clarifying a point"
      },
      {
        chunk: "In other words",
        usage: "Rephrasing for clarity"
      },
      {
        chunk: "Conversely",
        usage: "Introducing an opposing idea"
      }
    ]
  },

  scenario: "Rewriting a technical incident report to sound more professional.",
  speaking: "The system experienced a significant outage. We have identified the root cause and implemented a fix. We hardly ever see this specific race condition. Moving forward, we will leverage automated testing to prevent recurrence.",
  speakingPracticeMode: "formal-report",

  readingActivity: {
    title: "Reading: Architecture Decision Record (ADR)",
    text: "Context: The current monolith is becoming unmaintainable. Decision: We will transition to a microservices architecture. Consequences: This will enhance scalability but increase operational complexity. We must mitigate this by adopting robust observability tools.",
    comprehensionQuestions: [
      {
        question: "What word is used instead of 'improve' for scalability?",
        answer: "Enhance"
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Code Review Feedback",
    transcript: "I think we should modify this function. It's a bit verbose. If we utilize a helper method, we can reduce duplication. Also, this variable name is ambiguous; let's choose something more explicit.",
    comprehensionQuestions: [
      {
        question: "What synonym for 'use' does the speaker suggest?",
        answer: "Utilize"
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Word Stress",
    explanation: "Stress the correct syllable in multi-syllabic formal words.",
    examples: [
      {
        term: "mitigate",
        phonetic: "/ˈmɪtɪɡeɪt/",
        tip: "Stress the first syllable: MI-ti-gate."
      },
      {
        term: "redundant",
        phonetic: "/rɪˈdʌndənt/",
        tip: "Stress the second syllable: re-DUN-dant."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (CTO)",
      speakerBio: "David, CTO from San Francisco",
      audioSrc: "",
      transcript: "Precision is key. When you say 'the system is slow', it's vague. When you say 'we have high latency in the database layer', that's actionable. Using the right words saves time."
    }
  ],

  rolePlay: {
    title: "The Technical Writer",
    objective: "Practice replacing simple words with precise technical synonyms.",
    aiPersona: "Editor",
    initialMessage: "This paragraph is too simple. Can you make it sound more professional? 'We used the new tool to fix the bad bug.'"
  }
};
