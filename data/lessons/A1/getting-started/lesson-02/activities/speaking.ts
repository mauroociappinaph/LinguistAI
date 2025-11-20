import { AccentSample } from '../../../../../../types';

export const scenario = "Completar tu perfil en la intranet de la empresa.";

export const speaking = "My name is Maria, my position is QA Engineer, and my team is working on the new mobile app project.";

export const speakingPracticeMode = "feedback";

export const pronunciationClinic = {
  title: "Pronunciation Clinic: Possessives",
  explanation: "Let's practice the pronunciation of possessive pronouns, which are essential for talking about your team and work.",
  examples: [
    {
      term: "my",
      phonetic: "/maɪ/",
      tip: "A clear 'eye' sound, like in 'sky'."
    },
    {
      term: "your",
      phonetic: "/jɔːr/",
      tip: "Sounds like the word 'yore'. Be careful not to say 'you'."
    },
    {
      term: "our",
      phonetic: "/ˈaʊər/",
      tip: "Often pronounced like 'are', especially in fast speech. 'Are team is ready.' is how it might sound."
    },
    {
      term: "their",
      phonetic: "/ðɛər/",
      tip: "Sounds exactly like 'there' and 'they're'. The context tells you the meaning."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (California)",
    speakerBio: "Sarah, HR Manager from Palo Alto",
    audioSrc: "",
    transcript: "Okay, so for your company profile, I'll need your full name, your position, and your department. What team are you on?"
  },
  {
    accent: "British English (London)",
    speakerBio: "David, IT Support from London",
    audioSrc: "",
    transcript: "Right, just need to fill out your details for the company records. What's your email address and which project is your team working on?"
  },
  {
    accent: "German English (Berlin)",
    speakerBio: "Klaus, Office Manager from Berlin",
    audioSrc: "",
    transcript: "Hello, welcome. For your access card, I need your position and your department. My system needs this information."
  }
];
