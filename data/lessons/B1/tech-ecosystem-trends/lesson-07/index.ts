import { Lesson, Difficulty } from '../../../../../types';

export const techEcosystemTrendsLesson07: Lesson = {
  id: "tet7",
  title: "Accessible & Inclusive Documentation",
  level: Difficulty.B1,
  description: "Learn to write inclusive, accessible technical content using clear descriptions and appropriate modals like 'should' for best practices.",
  didYouKnow: "Inclusive documentation benefits everyone, not just those with disabilities. Clear, simple language improves translation and comprehension for non-native speakers.",

  grammar: {
    title: "Giving Advice & Describing Features",
    explanation: "**Modals for Best Practices:**\\n- **Should**: Recommended action (Best practice).\\n- **Must**: Mandatory action (Accessibility requirement).\\n\\n**Descriptive Language:**\\n- Use clear, objective adjectives.\\n- Avoid idioms or cultural metaphors.\\n- Use 'Alt text' structures: Subject + Action + Context.",
    usage: "Accessibility Guides, UI Documentation, Style Guides:\\n\\n♿ **Alt Text**: 'A user clicking the submit button.'\\n💡 **Advice**: 'You should ensure high contrast.'\\n🚫 **Avoid**: 'Click here' (Use descriptive links).",
    rules: [
      {
        from: "Recommendation",
        to: "Should + base verb: 'Images should have alt text.'"
      },
      {
        from: "Requirement",
        to: "Must + base verb: 'All inputs must have labels.'"
      },
      {
        from: "Describing UI elements",
        to: "Adjective + Noun: 'The blue primary button', 'The navigation menu'"
      }
    ],
    examples: [
      "All interactive elements **must be keyboard accessible**.",
      "You **should provide** captions for all videos.",
      "**Avoid using** color alone to convey meaning.",
      "Links **should describe** their destination (e.g., 'Read the guide', not 'Click here').",
      "The interface **should support** screen readers."
    ],
    commonMistakes: [
      {
        incorrect: "Click here to download.",
        correct: "Download the PDF guide.",
        explanation: "Link text should describe the action or destination for screen readers."
      },
      {
        incorrect: "The button needs to be red.",
        correct: "The button must have a high contrast ratio.",
        explanation: "Focus on function and accessibility (contrast) rather than just color."
      },
      {
        incorrect: "You have to put alt text.",
        correct: "You must include alt text.",
        explanation: "'Must' is more professional for requirements than 'have to'."
      }
    ],
    interactiveExercise: {
      type: "multiple-choice",
      question: "Which is the best link text for accessibility?",
      options: [
        "Click here",
        "Read more",
        "View the accessibility guidelines",
        "Link"
      ],
      answer: "View the accessibility guidelines"
    }
  },

  vocabulary: [
    {
      item: "accessibility (a11y)",
      explanation: "The practice of making websites usable by as many people as possible.",
      example: "We need to improve the accessibility of our forms.",
      pronunciation: "/əkˌsɛsəˈbɪləti/"
    },
    {
      item: "screen reader",
      explanation: "Software that reads text on a screen aloud for visually impaired users.",
      example: "Test the navigation menu with a screen reader.",
      pronunciation: "/ˈskriːn riːdər/"
    },
    {
      item: "alt text",
      explanation: "Alternative text describing an image.",
      example: "Add descriptive alt text to the logo.",
      pronunciation: "/ɔlt tɛkst/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Inclusive Language Patterns",
    chunks: [
      {
        chunk: "Ensure that [element] is [accessible/readable]",
        usage: "Stating accessibility goals"
      },
      {
        chunk: "Provide [alternative] for [content]",
        usage: "Describing fallback options"
      },
      {
        chunk: "Users should be able to [action]",
        usage: "Describing expected user capability"
      }
    ]
  },

  scenario: "Reviewing a website for accessibility compliance and suggesting improvements.",
  speaking: "We must ensure that all images have descriptive alt text. The navigation menu should be accessible via keyboard. We should avoid using color as the only way to convey errors.",
  speakingPracticeMode: "accessibility-review",

  readingActivity: {
    title: "Reading: Accessibility Guidelines",
    text: "Headings: Use a logical hierarchy (H1, H2, H3). Contrast: Text must have a contrast ratio of at least 4.5:1. Keyboard: All functionality should be available using only a keyboard. Forms: Labels must be permanently visible. Focus: The focus state should be clearly visible.",
    comprehensionQuestions: [
      {
        question: "What is the minimum contrast ratio for text?",
        answer: "4.5:1"
      }
    ]
  },

  listeningActivity: {
    title: "Listening: Design Review",
    transcript: "I noticed some accessibility issues in the new modal. First, the close button doesn't have a label for screen readers. We must add an aria-label there. Also, the focus trap isn't working, so keyboard users might tab outside the modal. We should fix this before the release.",
    comprehensionQuestions: [
      {
        question: "What is missing from the close button?",
        answer: "A label for screen readers (aria-label)."
      }
    ],
    audioSrc: ""
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: A11y Terms",
    explanation: "Practice pronouncing common accessibility terms.",
    examples: [
      {
        term: "hierarchy",
        phonetic: "/ˈhaɪərɑːrki/",
        tip: "Four syllables: hi-er-ar-chy."
      },
      {
        term: "contrast",
        phonetic: "/ˈkɒntræst/",
        tip: "Stress the first syllable for the noun."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "British English (UX Researcher)",
      speakerBio: "Emma, UX Researcher from London",
      audioSrc: "",
      transcript: "Inclusive design means considering all users from the start. We should provide transcripts for podcasts and captions for videos. It's not just a requirement; it's about creating a better experience for everyone."
    }
  ],

  rolePlay: {
    title: "Accessibility Audit",
    objective: "Practice giving feedback on accessibility using 'should' and 'must'.",
    aiPersona: "Frontend Developer",
    initialMessage: "I finished the new form component. How does it look in terms of accessibility?"
  }
};
