import { Lesson, Difficulty } from '../../../../../types';

export const lesson02: Lesson = {
  id: "we2",
  title: "Remote Work & Digital Tools",
  level: Difficulty.A1,
  description: "Master essential vocabulary and phrases for remote work environments, virtual meetings, and digital collaboration tools in tech settings.",
  didYouKnow: "By 2025, 70% of the global workforce will work remotely at least 2.5 days per week according to Harvard Business Review research. This shift has accelerated digital tool adoption, with Microsoft's Teams and Zoom seeing massive growth during the pandemic.",

  grammar: {
    title: "Prepositions for Digital Locations",
    explanation:
      "**'In'** for inside digital spaces, **'on'** for online platforms, **'from'** for remote locations.\n\n- **in** a meeting (virtual space)\n- **on** Teams/Zoom/Slack (platforms)\n- **from** home/office/café (physical locations)\n\nUse these prepositions to describe your remote work setup: 'We're meeting **in** Google Meet!', 'Share that document **on** Slack', 'She works **from** multiple locations'.",
    usage:
      "In remote work, these prepositions help you communicate clearly:\n\n**'Log in'** to systems, **'attend'** meetings online, **'connect from'** anywhere.\n\nExamples: 'I'm connecting **from** my home office', 'Join the call **on** Microsoft Teams', 'The files are **in** the shared drive'.",
    rules: [
      {
        from: "Digital platforms",
        to: "on (on Slack, on Teams, on GitHub)"
      },
      {
        from: "Virtual meetings/call",
        to: "in (in a meeting, in a call)"
      },
      {
        from: "Physical locations when working remotely",
        to: "from (from home, from the office, from a café)"
      }
    ],
    examples: [
      "We're discussing this **on** Slack.",
      "The team works **from** home today.",
      "Join the call **in** Zoom at 3 PM.",
      "**From** my home office, I can see...",
      "Save the file **in** the shared folder."
    ],
    commonMistakes: [
      {
        incorrect: "Let me share it in Slack.",
        correct: "Let me share it on Slack.",
        explanation:
          "Use 'on' for platforms like Slack, not 'in'."
      },
      {
        incorrect: "The meeting is at Zoom.",
        correct: "The meeting is on Zoom.",
        explanation:
          "Use 'on' for online platforms, not 'at'."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "Join the standup ___ Teams at 9 AM.",
      options: ["in", "on", "from", "at"],
      answer: "on"
    }
  },
  vocabulary: [
    {
      item: "remote work",
      explanation: "Working from a location outside the main office, usually from home.",
      example: "Remote work has become standard in our tech company.",
      pronunciation: "/rɪˈmoʊt wɜːrk/"
    },
    {
      item: "virtual meeting",
      explanation: "An online meeting conducted through video conferencing software.",
      example: "Let's schedule a virtual meeting to discuss the project.",
      pronunciation: "/ˈvɜːrtʃuəl ˈmiːtɪŋ/"
    },
    {
      item: "video call",
      explanation: "A phone call between people using video technology so they can see each other.",
      example: "I have a video call with the client at 2 PM.",
      pronunciation: "/ˈvɪdioʊ kɔːl/"
    },
    {
      item: "bandwidth",
      explanation: "The capacity of a communication channel to transmit information.",
      example: "Slow bandwidth makes video meetings challenging.",
      pronunciation: "/ˈbændwɪdθ/"
    },
    {
      item: "connection",
      explanation: "The state of being linked or joined to something, especially over the internet.",
      example: "My internet connection dropped during the presentation.",
      pronunciation: "/kəˈnɛkʃən/"
    },
    {
      item: "laptop",
      explanation: "A portable computer small enough to be carried around easily.",
      example: "I use my laptop for all remote work.",
      pronunciation: "/ˈlæptɒp/"
    },
    {
      item: "colleague",
      explanation: "A person with whom one works, especially in a profession or business.",
      example: "My colleague is joining from a different time zone.",
      pronunciation: "/ˈkɑːliːɡ/"
    },
    {
      item: "distraction",
      explanation: "Something that prevents someone from giving their attention to something else.",
      example: "Working from home has some distractions I need to manage.",
      pronunciation: "/dɪˈstrækʃən/"
    },
    {
      item: "flexibility",
      explanation: "The ability to change or be changed easily to suit new conditions.",
      example: "Remote work offers great flexibility in scheduling.",
      pronunciation: "/ˌflɛksəˈbɪləti/"
    },
    {
      item: "headset",
      explanation: "A pair of headphones and a microphone worn together, usually for telephoning.",
      example: "I always wear my headset during video calls.",
      pronunciation: "/ˈhɛdsɛt/"
    },
    {
      item: "mute button",
      explanation: "A button to silence audio input and output.",
      example: "Remember to use the mute button when not speaking.",
      pronunciation: "/myuːt ˈbʌtən/"
    },
    {
      item: "screen share",
      explanation: "The action of sharing one's screen display with others in a video meeting.",
      example: "I'll screen share the latest changes to the code.",
      pronunciation: "/skriːn ʃɛr/"
    },
    {
      item: "time zone",
      explanation: "A region of the globe that observes a uniform standard time.",
      example: "We have team members in different time zones.",
      pronunciation: "/taɪm zoʊn/"
    },
    {
      item: "hybrid model",
      explanation: "A work arrangement combining remote and office work.",
      example: "Our company is implementing a hybrid model.",
      pronunciation: "/ˈhaɪbrɪd ˈmɑːdəl/"
    },
    {
      item: "connect remotely",
      explanation: "To join meetings or systems from a location outside the office.",
      example: "I can connect remotely using VPN and my work laptop.",
      pronunciation: "/kəˈnɛkt rɪˈmoʊtli/"
    }
  ],
  phrasalVerbs: [
    {
      item: "log on",
      explanation: "To start using a computer system or website.",
      example: "First, log on to your work account.",
      pronunciation: "/lɔg ɔn/"
    },
    {
      item: "log off",
      explanation: "To stop using a computer system or website.",
      example: "Don't forget to log off after work.",
      pronunciation: "/lɔg ɔf/"
    },
    {
      item: "tune in",
      explanation: "To start paying attention to something, especially audio or video.",
      example: "Please tune in to the webinar at 10 AM.",
      pronunciation: "/tun ɪn/"
    },
    {
      item: "drop off",
      explanation: "To suddenly disconnect or lose connection.",
      example: "My connection dropped off during the presentation.",
      pronunciation: "/drɔp ɔf/"
    }
  ],
  compoundWords: [
    {
      item: "video conference",
      explanation: "A meeting conducted via video technology where participants can see and hear each other.",
      example: "We held a video conference with the client.",
      pronunciation: "/ˈvɪdioʊ ˈkɑːnfərəns/"
    },
    {
      item: "remote access",
      explanation: "Access to a computer system from a remote location.",
      example: "I use remote access to connect to company servers.",
      pronunciation: "/rɪˈmoʊt ˈæksɛs/"
    },
    {
      item: "home office",
      explanation: "An office or work area in someone's home.",
      example: "I've set up a proper home office for better productivity.",
      pronunciation: "/hoʊm ˈɔfɪs/"
    }
  ],
  functionalChunks: {
    title: "Remote Work Communication Patterns",
    chunks: [
      {
        chunk: "I'm connecting ___ [location], is the meeting starting?",
        usage: "Indicating your location when joining remotely"
      },
      {
        chunk: "Can you ___ your screen? I'd like to see that.",
        usage: "Requesting screen sharing in meetings"
      },
      {
        chunk: "My internet ___ is unstable, can we troubleshoot?",
        usage: "Reporting technical issues"
      },
      {
        chunk: "Let me put you ___ speaker so everyone can hear.",
        usage: "Managing audio in virtual meetings"
      },
      {
        chunk: "I'm working ___ this week, but I'm available online.",
        usage: "Explaining work arrangement"
      }
    ]
  },
  scenario: "Joining a remote team meeting and explaining your work-from-home setup to new colleagues.",
  speaking: "Hi everyone, I'm dialing in from my home office in Buenos Aires. My internet connection is good, but I have time zone difference. Let me screen share my current work progress.",
  speakingPracticeMode: "conversation",
  readingActivity: {
    title: "Reading: Remote Work Best Practices",
    text: "Remote work requires strong digital communication skills. **Connect** with your team regularly using video calls and instant messaging. **Screen share** to show work progress and get feedback. Respect **time zones** when scheduling meetings. Practice good etiquette like using the **mute button** appropriately and enabling camera when possible. Address **distractions** proactively and set clear availability status. The **hybrid model** combines flexibility with collaboration opportunities.",
    comprehensionQuestions: [
      {
        question: "What should you do regularly in remote work?",
        answer: "Connect with your team using video calls and instant messaging."
      },
      {
        question: "What is important when scheduling remote meetings?",
        answer: "Respect time zones."
      },
      {
        question: "What etiquette should you practice in video calls?",
        answer: "Using the mute button appropriately and enabling camera when possible."
      }
    ],
  },
  listeningActivity: {
    title: "Listening: Remote Team Standup",
    transcript: "Good morning team! Let's get started with our standup. I'm working from my home office today. How's everyone's connection? Mark, you look muted there - can you unmute? Sarah, can you screen share your progress on that API? My bandwidth here is not great, so bear with me. Okay, let's jump in. I'm connecting from Berlin, what's everyone working on?",
    comprehensionQuestions: [
      {
        question: "Where is the speaker working from?",
        answer: "Home office."
      },
      {
        question: "What does the speaker ask Sarah to do?",
        answer: "Screen share her progress."
      },
      {
        question: "What issue does the speaker mention?",
        answer: "Bandwidth is not great."
      }
    ],
    audioSrc: "",
  },
  pronunciationClinic: {
    title: "Pronunciation Clinic: Tech Meeting Terms",
    explanation: "Master the pronunciation of common virtual meeting vocabulary used in remote work environments. These terms are essential for clear communication in international teams.",
    examples: [
      {
        term: "bandwidth",
        phonetic: "/ˈbændwɪdθ/",
        tip: "Three syllables: 'band-wi-dth'. Don't confuse with 'brand width' - stress the second syllable and pronounce the th fully."
      },
      {
        term: "remote",
        phonetic: "/rɪˈmoʊt/",
        tip: "Two syllables: 're-moat'. Stress on first syllable. Sounds like 'moat' (as in castle defense ditch)."
      },
      {
        term: "headset",
        phonetic: "/ˈhɛdsɛt/",
        tip: "Two syllables: 'head-set'. Pronounce the 't' distinctly. Not 'head-sed' or 'hedset'."
      },
      {
        term: "connection",
        phonetic: "/kəˈnɛkʃən/",
        tip: "Three syllables: 'con-ner-tion'. Stress on second syllable. The 'nn' is clear, not slurred."
      },
      {
        term: "distractions",
        phonetic: "/dɪˈstrækʃənz/",
        tip: "Three syllables: 'dis-track-shunz'. Plural 's' is pronounced softly. Focus on the 'traction' part."
      }
    ]
  },
  globalAccentLab: [
    {
      accent: "American English (California)",
      speakerBio: "Tommy, Tech Lead from Silicon Valley",
      audioSrc: "",
      transcript: "Okay team, I'm connecting from my home office here in Palo Alto. Got great bandwidth today. Let's get this standup started. Who's presenting the user stories for Sprint 4? I want to screen share the architecture diagram - can everyone see that clearly?"
    },
    {
      accent: "British English (London)",
      speakerBio: "Emma, Product Manager from London",
      audioSrc: "",
      transcript: "Morning everyone! Connecting from my flat today, hope the connection holds up. Right then, let's jump into the agile ceremony. Sarah, would you mind screen sharing the Kanban board? I want to review the work in progress column before planning the next sprint."
    }
  ],
  rolePlay: {
    title: "Remote Team Onboarding",
    objective: "Guide a new remote team member through their first virtual meeting setup and introduce them to remote work tools using appropriate digital communication phrases.",
    aiPersona: "New Remote Developer joining the team",
    initialMessage: "Hi everyone! I'm joining remotely from Mexico City. Can someone help me set up for the meeting? I can see the video but I'm not sure about the audio settings."
  }
};
