import { AccentSample } from '../../../../../../types';

export const scenario = "Describe your current workspace setup.";
export const speaking = "I have a dual-monitor setup. This keyboard is mechanical, and those headphones are noise-canceling. My laptop has 32GB of RAM.";
export const speakingPracticeMode = 'feedback';

export const pronunciationClinic = {
  title: "Pronunciation Clinic: Demonstratives & Possession",
  explanation: "Describing your tech setup requires clear pronunciation of demonstratives (this/that/these/those) and the verb 'to have'. Focus on the 'th' sounds and linking words smoothly.",
  examples: [
    {
      term: "this / these",
      phonetic: "/ðɪs/ /ðiːz/",
      tip: "Both start with the voiced 'th' /ð/ (like in 'the'). 'This' is singular (near), 'these' is plural (near). The 's' in 'these' is voiced /z/. Point clearly when using them."
    },
    {
      term: "that / those",
      phonetic: "/ðæt/ /ðoʊz/",
      tip: "Both start with the voiced 'th' /ð/. 'That' is singular (far), 'those' is plural (far). The 'o' in 'those' is a diphthong /oʊ/. Stress on the word itself."
    },
    {
      term: "I have",
      phonetic: "/aɪ hæv/",
      tip: "Link smoothly: 'I-have'. The 'h' in 'have' is pronounced. Don't drop it. In rapid speech, often contracted to 'I've' /aɪv/."
    },
    {
      term: "has",
      phonetic: "/hæz/",
      tip: "One syllable. The 's' is voiced /z/. Used with he/she/it. Link to the next word: 'has-a-monitor' becomes 'ha-za-monitor'."
    },
    {
      term: "monitor",
      phonetic: "/ˈmɒnɪtər/",
      tip: "Three syllables: MON-i-tor. Stress on the first syllable. The 'o' is short. The final 'or' is /ər/ in American English, /ə/ in British English."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Silicon Valley)",
    speakerBio: "Jessica, Software Architect from San Jose",
    audioSrc: "",
    transcript: "Let me show you my setup. I have three monitors—this one in the center is 32 inches, and those two on the sides are 27 inches. My keyboard has mechanical switches, and these headphones have active noise cancellation. The laptop has an M2 chip with 64GB of RAM."
  },
  {
    accent: "British English (Cambridge)",
    speakerBio: "Tom, Research Engineer from Cambridge",
    audioSrc: "",
    transcript: "Right, so this is my workspace. I have a standing desk with two monitors. This mouse is ergonomic, and that trackpad over there is for design work. My MacBook has 32GB of memory. These cables are all USB-C, which makes everything much tidier."
  },
  {
    accent: "Singapore English",
    speakerBio: "Wei Lin, Cloud Engineer from Singapore",
    audioSrc: "",
    transcript: "Okay lah, let me describe my setup. I have dual monitors for coding. This keyboard is quite new—it has RGB lighting. Those speakers there are for meetings. My workstation has a powerful GPU for machine learning tasks. This setup works very well for me."
  }
];
