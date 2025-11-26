import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';

export const lesson07: Lesson = {
  id: "db7",
  title: "UI States & Data Issues",
  level: Difficulty.A1,
  description: "Learn to discuss UI states and data problems using Present Continuous to describe ongoing issues and changes in system behavior.",
  didYouKnow: "UI bugs affect 70% of user-reported issues. Continuous tense helps describe dynamic UI problems like loading states, data updates, and real-time changes that are happening right now.",
  
  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

  scenario: "Describing user interface problems and data display issues in a web application.",
  speaking: "The loading spinner is spinning endlessly when it should stop after the data loads. The status indicator is showing 'loading' but the page is completely rendered. Users are clicking buttons but nothing is responding visually.",
  speakingPracticeMode: "description",

  readingActivity: {title: "Reading: Common UI State Problems",
    text: "Front-end applications have complex state management that can fail in many ways. Loading indicators might show forever while data has already loaded. Buttons could remain disabled after successful operations. Real-time updates might not reflect in the UI until manual refresh. Modals could get stuck in open states. Navigation breadcrumbs might not update when routes change. All these issues stem from state management problems where the UI representation doesn't match the underlying application state.",
    comprehensionQuestions: [
      {
        question: "What might continue showing after data loads?",
        answer: "Loading indicators"
      },
      {
        question: "Why might buttons stay disabled?",
        answer: "State management problems after successful operations"
      },
      {
        question: "What is a common result of state management failure?",
        answer: "UI representation doesn't match application state"
      }
    ],
  },
  listeningActivity: {
    title: "Listening: UI Bug Demonstration",
    transcript: "Watch this: I'm clicking the submit button, but the loading state is showing indefinitely. The button text is changing from 'Submit' to 'Processing...' but it's stuck there. Meanwhile, if I check the network tab, the API call completed successfully a minute ago. The UI state is not updating properly - it's not transitioning from 'loading' to 'success'. This is a classic state management bug where the component is not receiving the state update from the async operation.",
    comprehensionQuestions: [
      {
        question: "What is stuck showing after clicking submit?",
        answer: "The loading state indefinitely"
      },
      {
        question: "When did the API call actually complete?",
        answer: "A minute ago"
      },
      {
        question: "What's the main problem causing this bug?",
        answer: "UI state is not updating properly"
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: UI State Terms",
    explanation: "Master the correct pronunciation of common user interface and state management terms.",
    examples: [
      {
        term: "rendering",
        phonetic: "/ˈrɛndərɪŋ/",
        tip: "Three syllables: 'ren-der-ing'. Stress on third syllable. Means converting code to visual output."
      },
      {
        term: "state management",
        phonetic: "/steɪt ˈmænɪdʒmənt/",
        tip: "Four syllables: 'state-man-age-ment'. Stress on first and third syllables."
      },
      {
        term: "loading indicator",
        phonetic: "/ˈloʊdɪŋ ˈɪndɪˌkeɪtər/",
        tip: "Five syllables: 'load-ing-in-di-ca-tor'. Stress on second and fifth syllables."
      }
    ]
  },
  globalAccentLab: [[
    {
      accent: "American English (West Coast)",
      speakerBio: "Rachel, Frontend Developer from Seattle",
      audioSrc: "",
      transcript: "Dude, check this out - the profile pic is loading forever. The spinner is just spinning, spinning, spinning. The network call finished ages ago, but the UI is not updating. We got a race condition where the component unmounts before the state update hits. Classic React async bug."
    },
    {
      accent: "Irish English (Dublin)",
      speakerBio: "Sean, UX Designer from Dublin",
      audioSrc: "",
      transcript: "Sure look, the dropdown's not closing when it should. Users are clicking away but the menu's staying open. The click event handler's not attached properly, or maybe there's a z-index issue with the modal overlay. The state is updating in the code but the DOM's not reflecting the change. Grand altogether, just another day in frontend development!"
    }
  ]],
  rolePlay: {
    title: "UI Bug Description",
    objective: "Describe a complex UI state issue using continuous tenses to show what is currently happening and how it should behave.",
    aiPersona: "Frontend engineer experiencing a UI state bug",
    initialMessage: "I'm seeing this weird UI behavior - let me show you what's happening."
  }
};
