import { Lesson, Difficulty } from '../../../../../types';

export const lesson01: Lesson = {
  id: "we1",
  title: "Describing the Workplace",
  level: Difficulty.A1,
  description: "Learn to describe workplaces and office environments using 'there is/are' and prepositions of place. Essential vocabulary for discussing office layouts, remote work, and workspace arrangements in a professional setting.",
  didYouKnow:
    "In software, we also describe a 'workspace'. For example, in an IDE like VS Code, your 'workspace' contains all the files and folders for your project, along with your personal settings and configurations. Many developers also 'make a request' for new features or 'set up a desk' in digital project boards, mirroring physical office tasks.",
  grammar: {
    title: "There is/are & Prepositions of Place",
    explanation:
      "Use **'there is'** for singular things and **'there are'** for plural things to say that something exists. Combine them with prepositions of place to describe where things are.\n- **in**: inside something (in the office)\n- **on**: on a surface (on the desk)\n- **at**: at a specific point (at reception)\n- **next to**: beside something (next to the window)\n\nFor negation, use **'there isn't'** for singular and **'there aren't'** for plural to say that something does not exist.",
    usage:
      "Use 'there is/are' and prepositions to describe your work environment, whether it's a physical office or a digital space like a project folder ('**There is** a new file **in** this folder.').\n\nYou can also use **'there isn't / there aren't'** to talk about missing items or empty spaces (e.g., '**There isn't** a printer in this room.').\n\nUse short questions for interaction: '**Is there** a coffee machine?', '**Are there** any chairs in the meeting room?'.",
    rules: [
      {
        from: "Subject",
        to: "Verb form"
      },
      {
        from: "Singular things",
        to: "There is + singular noun"
      },
      {
        from: "Plural things",
        to: "There are + plural noun"
      },
      {
        from: "Questions",
        to: "Is there/Are there + noun?"
      },
      {
        from: "Negation",
        to: "There isn't/aren't + noun"
      }
    ],
    examples: [
      "**There is** a monitor **on** my desk.",
      "**There are** two new developers **in** the team.",
      "Is there a coffee machine **next to** the kitchen?",
      "**There isn't** a printer in this office.",
      "Are there any spare chairs in the meeting room?"
    ],
    commonMistakes: [
      {
        incorrect: "There are a monitor on my desk.",
        correct: "There is a monitor on my desk.",
        explanation:
          "Use 'there is' for singular nouns ('a monitor') and 'there are' for plural nouns ('two monitors').",
      },
      {
        incorrect: "The monitor is in my desk.",
        correct: "The monitor is on my desk.",
        explanation:
          "Use 'on' for things that are on a surface. Use 'in' for things that are inside something, like 'in a drawer'.",
      },
      {
        incorrect: "There are some chairs by the window?",
        correct: "Are there any chairs next to the window?",
        explanation:
          "For questions, the auxiliary verb comes first: 'Is/Are there' instead of 'There is/are'."
      },
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "___ a coffee machine next to the kitchen?",
      options: ["Is there", "Are there", "There is"],
      answer: "Is there",
    },
  },
  vocabulary: [
    {
      item: "office",
      explanation: "The building or room where people work.",
      example: "Our office is in the city center.",
      pronunciation: "/ˈɒfɪs/",
    },
    {
      item: "remote",
      explanation: "Working from home or outside of the office.",
      example: "Our company is fully remote.",
      pronunciation: "/rɪˈmoʊt/",
    },
    {
      item: "coworking space",
      explanation:
        "A shared office space used by people from different companies.",
      example: "I sometimes work from a coworking space.",
      pronunciation: "/ˈkoʊˈwɜːrkɪŋ speɪs/",
    },
    {
      item: "desk",
      explanation: "Your work table.",
      example: "My desk is next to the window.",
      pronunciation: "/dɛsk/",
    },
    {
      item: "monitor",
      explanation: "A screen for a computer.",
      example: "I need a second monitor for my setup.",
      pronunciation: "/ˈmɒnɪtər/",
    },
    {
      item: "meeting room",
      explanation: "A room used for meetings.",
      example: "The meeting room is booked for 2 PM.",
      pronunciation: "/ˈmiːtɪŋ ruːm/",
    },
    {
      item: "surface",
      explanation: "The flat top part of an object, like a desk.",
      example: "My monitor is on the surface of my desk.",
      pronunciation: "/ˈsɜːrfɪs/",
    },
    {
      item: "along",
      explanation:
        "(Preposition) In a line next to something long, like a wall or a river.",
      example: "The meeting rooms are along the main hallway.",
      pronunciation: "/əˈlɔŋ/",
    },
    {
      item: "spare room",
      explanation:
        "An extra room in a house that is not used for a specific purpose.",
      example: "My home office is in the spare room.",
      pronunciation: "/spɛr ruːm/",
    },
    {
      item: "set up a desk",
      explanation: "To arrange your desk for work.",
      example: "I need to set up my desk before starting the project.",
      pronunciation: "/sɛt ʌp ə dɛsk/",
    },
    {
      item: "make a request",
      explanation: "To formally ask for something you need at work.",
      example: "I will make a request for a new chair.",
      pronunciation: "/meɪk ə rɪˈkwɛst/",
    },
  ],
  phrasalVerbs: [
    {
      item: "look around",
      explanation: "To explore a place.",
      example: "Let me look around the new office.",
      pronunciation: "/lʊk əˈraʊnd/",
    },
    {
      item: "show around",
      explanation: "To show a place to someone for the first time.",
      example: "On your first day, someone will show you around.",
      pronunciation: "/ʃoʊ əˈraʊnd/",
    },
    {
      item: "settle in",
      explanation: "To become comfortable in a new place or job.",
      example: "It took me a few weeks to settle in.",
      pronunciation: "/ˈsɛtəl ɪn/",
    },
  ],
  compoundWords: [
    {
      item: "workspace",
      explanation: "The physical or digital space where you work.",
      example: "I like to keep my workspace clean.",
      pronunciation: "/ˈwɜːrkˈspeɪs/",
    },
    {
      item: "home office",
      explanation: "A space in your house dedicated to work.",
      example: "I set up my home office in the spare room.",
      pronunciation: "/hoʊm ˈɒfɪs/",
    },
  ],
  functionalChunks: {
    title: "Workplace Description Phrases",
    chunks: [
      {
        chunk: "There is/are [item] [preposition] [place]",
        usage: "Describe locations and things in your workspace"
      },
      {
        chunk: "Is there/Are there [item] in [place]?",
        usage: "Ask about equipment or facilities available"
      },
      {
        chunk: "I work [remotely/from [location]/at [company]]",
        usage: "Explain your work arrangement"
      },
      {
        chunk: "My desk/workspace is [adjective] [adverb]",
        usage: "Describe your personal work area"
      },
      {
        chunk: "There's no [item] in [place]",
        usage: "Report missing or unavailable resources"
      }
    ]
  },
  scenario:
    "Describe your workspace to a new team member and make a simple request for new equipment.",
  speaking:
    "Role-play: You are a new employee. Describe your desk to your manager using prepositions (e.g., 'There is a laptop on my desk'). Then, ask for a second monitor.",
  speakingPracticeMode: "conversation",
  readingActivity: {
    title: "Reading: Virtual Office Tour",
    text: "Welcome to your new workspace! Your desk is **next to** the big window. **On** your desk, **there is** a new laptop and one monitor. **There are** some notebooks and pens **in** the top drawer. The team's meeting room is **at** the end of the hall. If you need anything, just ask!",
    comprehensionQuestions: [
      {
        question: "What is on the desk?",
        answer: "There is a new laptop and one monitor.",
      },
      {
        question: "Where is the meeting room located?",
        answer: "The meeting room is at the end of the hall.",
      },
      {
        question: "What is in the top drawer?",
        answer: "There are some notebooks and pens in the top drawer.",
      },
    ],
  },
  listeningActivity: {
    title: "Listening: Office Tour",
    audioSrc: "", // Will be generated by Gemini TTS when needed
    transcript: "Welcome to TechCorp offices! There is a coffee machine next to reception. There are meeting rooms along the main hallway. Your desk is in the corner with two monitors on it. Please ask if you need anything - we're happy to help new team members settle in.",
    comprehensionQuestions: [
      {
        question: "What is next to reception?",
        answer: "There is a coffee machine next to reception.",
      },
      {
        question: "Where are the meeting rooms?",
        answer: "There are meeting rooms along the main hallway.",
      },
      {
        question: "What is there on the desk?",
        answer: "There are two monitors on the desk.",
      },
    ],
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Workplace Vocabulary",
    explanation: "Master key workplace terms for clear communication in professional settings. These words are commonly used in IT and tech environments.",
    examples: [
      {
        term: "workspace",
        phonetic: "/ˈwɜːrkˈspeɪs/",
        tip: "Two syllables with primary stress on 'work'. Don't stress the 's' - it's pronounced like 'works' with a silent 'e'.",
      },
      {
        term: "meeting room",
        phonetic: "/ˈmiːtɪŋ ruːm/",
        tip: "Stress on 'meet' (not 'ing'). Room is pronounced 'room' (not 'ruhm'). The 't' is soft.",
      },
      {
        term: "coworking space",
        phonetic: "/ˈkoʊˈwɜːrkɪŋ speɪs/",
        tip: "Three syllables: 'co-work-ing space'. Stress on 'work'. The 'cow' part rhymes with 'now'.",
      },
      {
        term: "set up",
        phonetic: "/sɛt ʌp/",
        tip: "Short 'e' sound in 'set', weak vowel 'uh' in 'up'. As a phrasal verb, stress can shift depending on usage.",
      },
      {
        term: "remote",
        phonetic: "/rɪˈmoʊt/",
        tip: "Three syllables: 're-mote'. Primary stress on second syllable. The 'o' is long, like 'oh'.",
      },
    ]
  },
  globalAccentLab: [
    {
      accent: "American English (California)",
      speakerBio: "Jenna, Office Manager from Los Angeles",
      audioSrc: "https://storage.googleapis.com/aistudio-public/prompts/media/tech-english-pro/a1_m03_l01_accent_us.mp3",
      transcript: "Welcome! So, this is your new desk. There's a monitor and a laptop for you. There are meeting rooms down the hall if you need one.",
    },
    {
      accent: "British English (London)",
      speakerBio: "Arthur, Team Lead from London",
      audioSrc: "https://storage.googleapis.com/aistudio-public/prompts/media/tech-english-pro/a1_m03_l01_accent_uk.mp3",
      transcript: "Right, so this is the office. Your desk is over there, next to the window. There is a spare monitor you can use. There are also some quiet rooms on this floor.",
    },
    {
      accent: "German English (Berlin)",
      speakerBio: "Frank, IT Support from Berlin",
      audioSrc: "https://storage.googleapis.com/aistudio-public/prompts/media/tech-english-pro/a1_m03_l01_accent_de.mp3",
      transcript: "Hello. In this office, there is a kitchen on the left. On your desk, there is one monitor. If you need a second one, please make a ticket.",
    },
  ],
  rolePlay: {
    title: "The Office Tour",
    objective: "Show a new colleague around your workplace and describe the office layout using 'there is/are' and prepositions of place.",
    aiPersona: "Sarah, New Frontend Developer",
    initialMessage: "Hi! Thanks for showing me around. Can you tell me where everything is? I'm a bit lost!",
  }
};
