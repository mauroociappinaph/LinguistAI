import { Lesson, Difficulty } from '../../../../../types';
import { grammar } from './grammar';
import { vocabulary, phrasalVerbs, compoundWords, functionalChunks } from './vocabulary';
import { commonMistakes } from './commonMistakes';

export const lesson02: Lesson = {
  id: "we2",
  title: "Remote Work & Digital Tools",
  level: Difficulty.A1,
  description: "Master essential vocabulary and phrases for remote work environments, virtual meetings, and digital collaboration tools in tech settings.",
  didYouKnow: "By 2025, 70% of the global workforce will work remotely at least 2.5 days per week according to Harvard Business Review research. This shift has accelerated digital tool adoption, with Microsoft's Teams and Zoom seeing massive growth during the pandemic.",

  grammar,
  vocabulary,
  phrasalVerbs,
  compoundWords,
  functionalChunks,

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
    title: " Listening: Remote Team Standup",
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
