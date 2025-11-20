import { AccentSample } from '../../../../../../types';

export const scenario = "Estás en tu primera semana y necesitas pedir información básica a un compañero.";

export const speaking = "Excuse me, I have a question. How do I connect to the test server?";

export const speakingPracticeMode = "feedback";

export const pronunciationClinic = {
  title: "Pronunciation Clinic: Rising Intonation",
  explanation:
    "For Yes/No questions, your voice should rise in pitch at the end. This signals to the listener that you are expecting a 'yes' or 'no' answer.",
  examples: [
    {
      term: "Is she the new designer? ↗",
      phonetic: "/ɪz ʃi ðə njuː dɪˈzaɪnər/",
      tip: "Practice saying the sentence with your voice going up at the end.",
    },
    {
      term: "Do you work on the frontend team? ↗",
      phonetic: "/duː juː wɜːrk ɒn ðə ˈfrʌntɛnd tiːm/",
      tip: "The intonation should rise on the word 'team'.",
    },
  ],
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Texas)",
    speakerBio: "Dave, Senior Developer from Austin",
    audioSrc:
      "https://storage.googleapis.com/aistudio-public/prompts/media/tech-english-pro/a1_m01_l04_accent_us.mp3",
    transcript: "Hey, you got a question? Sure, what's up? How can I help you? Where are you trying to find the file?",
  },
  {
    accent: "British English (RP)",
    speakerBio: "Eleanor, Team Lead from London",
    audioSrc:
      "https://storage.googleapis.com/aistudio-public/prompts/media/tech-english-pro/a1_m01_l04_accent_uk.mp3",
    transcript: "Excuse me, sorry to bother you. Could you tell me who the product manager is for this project? And when is the next meeting?",
  },
  {
    accent: "German English (Munich)",
    speakerBio: "Stefan, Engineer from Munich",
    audioSrc:
      "https://storage.googleapis.com/aistudio-public/prompts/media/tech-english-pro/a1_m01_l04_accent_de.mp3",
    transcript: "I have a question. Why is this button not working? And how do I restart the local server?",
  },
];
