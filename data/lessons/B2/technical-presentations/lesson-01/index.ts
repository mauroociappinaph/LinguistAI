import { Lesson, Difficulty } from '../../../../../types';

export const technicalPresentationsLesson01: Lesson = {
  id: "tp1",
  title: "Structuring Long-Form Technical Presentations",
  level: Difficulty.B2,
  description: "Learn to guide your audience through complex technical presentations using signposting language, discourse markers, and logical transitions.",
  didYouKnow: "Research shows that audiences retain 40% more information when speakers use clear 'signposts' to signal structure and transitions.",

  grammar: {
    title: "Signposting Language & Discourse Markers",
    explanation: "To guide your audience through a long presentation, use 'signposting' language. These are words and phrases that signal what you are going to do next, connecting your ideas logically.\\n\\n- **Introduction**: 'Today, I'm going to talk about...'\\n- **Structuring**: 'I've divided my presentation into three parts. First,... Second,... Finally,...'\\n- **Transitioning**: 'This brings me to my next point, which is...'\\n- **Summarizing**: 'To sum up,...', 'In conclusion,...'",
    usage: "Tech Talks, Demos, Architecture Reviews:\\n\\n🎤 **Intro**: 'I'll start by outlining the problem.'\\n➡️ **Transition**: 'Moving on to the solution...'\\n🔚 **Conclusion**: 'That covers the main features.'",
    rules: [
      {
        from: "Abrupt Change",
        to: "Signposted Transition: 'Now I will talk about performance.'"
      },
      {
        from: "Listing",
        to: "Sequencing: 'First of all', 'Secondly', 'Lastly'"
      },
      {
        from: "Ending",
        to: "Summarizing: 'To wrap up', 'Key takeaways are'"
      }
    ],
    examples: [
      "**First of all**, let's look at the current architecture.",
      "**This leads me to** the main bottleneck we identified.",
      "**Turning our attention to** the new API design...",
      "**In conclusion**, this approach reduces latency by 50%.",
      "**To sum up**, we need to refactor the authentication service."
    ],
    commonMistakes: [
      {
        incorrect: "I talk about the database now.",
        correct: "Now, I'm going to talk about the database.",
        explanation: "Use 'going to' or 'will' for future intentions in presentations."
      },
      {
        incorrect: "Finally, I want to say...",
        correct: "Finally, I'd like to conclude by saying...",
        explanation: "Use more formal/standard phrases for conclusions."
      },
      {
        incorrect: "At last, the result is...",
        correct: "Ultimately/Finally, the result is...",
        explanation: "'At last' implies impatience; 'Finally' implies the last item in a sequence."
      }
    ],
    interactiveExercise: {
      type: "multiple-choice",
      question: "Which phrase is best for moving to a new topic?",
      options: [
        "I change topic.",
        "Moving on to the next point...",
        "Next thing is...",
        "Stop that, start this."
      ],
      answer: "Moving on to the next point..."
    }
  },

  vocabulary: [
    {
      item: "overview",
      explanation: "A general summary of a subject.",
      example: "I'll give you a brief overview of the system.",
      pronunciation: "/ˈoʊvərˌvjuː/"
    },
    {
      item: "takeaway",
      explanation: "A key fact, point, or idea to be remembered.",
      example: "The key takeaway from this slide is the performance gain.",
      pronunciation: "/ˈteɪkəˌweɪ/"
    },
    {
      item: "roadmap",
      explanation: "A plan or strategy intended to achieve a particular goal.",
      example: "Here is the roadmap for Q4.",
      pronunciation: "/ˈroʊdˌmæp/"
    }
  ],
  phrasalVerbs: [
    {
      item: "wrap up",
      explanation: "To finish or conclude something.",
      example: "Let's wrap up this section before the break.",
      pronunciation: "/ræp ʌp/"
    },
    {
      item: "go over",
      explanation: "To examine or review details.",
      example: "I'm going to go over the test results.",
      pronunciation: "/ˈɡoʊ ˈoʊvər/"
    }
  ],
  compoundWords: [],
  functionalChunks: {
    title: "Presentation Signposts",
    chunks: [
      {
        chunk: "I'd like to start by [verb-ing]",
        usage: "Beginning the presentation"
      },
      {
        chunk: "Let's move on to [topic]",
        usage: "Transitioning"
      },
      {
        chunk: "That covers [topic]",
        usage: "Closing a section"
      }
    ]
  },

  scenario: "Presenting a technical proposal to stakeholders.",
  speaking: "Good morning. Today I'd like to present our migration plan. I've divided my talk into three parts. First, I'll cover the risks. Second, the timeline. And finally, the expected benefits. Let's start by looking at the risks.",
  speakingPracticeMode: "presentation-delivery",

  readingActivity: {
    title: "Reading: Presentation Script",
    text: "Introduction: Welcome everyone. Today's topic is Micro-frontends. Structure: I'll begin with the 'Why', then move to the 'How', and finish with a demo. Body: So, why micro-frontends? The main reason is scalability. Transition: Now that we understand the why, let's look at the implementation.",
    comprehensionQuestions: [
      {
        question: "What is the second part of the presentation?",
        answer: "The 'How' (implementation)."
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Tech Talk Intro",
    transcript: "Hi everyone. Thanks for coming. I'm going to talk about State Management. First, I'll review the current problems. Then, I'll introduce Redux Toolkit. Finally, I'll show some code examples. Feel free to ask questions at the end.",
    comprehensionQuestions: [
      {
        question: "When can the audience ask questions?",
        answer: "At the end."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Pausing",
    explanation: "Pause after signposting phrases to let the audience process.",
    examples: [
      {
        term: "First of all, ...",
        phonetic: "[Pause]",
        tip: "Pause for 1 second after 'First of all'."
      },
      {
        term: "Moving on, ...",
        phonetic: "[Pause]",
        tip: "Pause to signal a change."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "Canadian English (Product Manager)",
      speakerBio: "Sarah, PM from Toronto",
      audioSrc: "",
      transcript: "A good presentation is like a story. You need a beginning, a middle, and an end. Using phrases like 'This leads to' helps connect the chapters of your story."
    }
  ],

  rolePlay: {
    title: "The Lightning Talk",
    objective: "Practice giving a short, structured update using signposting.",
    aiPersona: "Team Lead",
    initialMessage: "Okay, you have 2 minutes. Give us a quick update on the API integration."
  }
};
