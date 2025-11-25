import { AccentSample } from '../../../../../../types';

export const scenario = "Compare two tech tools you use and explain your preference.";
export const speaking = "I use VS Code as my IDE. I think it's better than other editors because it is faster and has more extensions. I also like its integrated terminal.";
export const speakingPracticeMode = 'feedback';

export const pronunciationClinic = {
  title: "Pronunciation Clinic: Comparatives & Preferences",
  explanation: "When comparing tools or expressing preferences, clear pronunciation of comparative forms and linking words is essential. Focus on stress patterns and smooth transitions between words.",
  examples: [
    {
      term: "faster than",
      phonetic: "/ˈfæstər ðæn/",
      tip: "The 'th' in 'than' is voiced (like 'the'), not voiceless (like 'think'). Link the words smoothly: 'fas-ter-than' with stress on 'fas'. Common mistake: pronouncing it as 'faster then' (which means 'next')."
    },
    {
      term: "more efficient",
      phonetic: "/mɔːr ɪˈfɪʃənt/",
      tip: "Three syllables in 'efficient': e-FI-cient. Stress on the second syllable. The 'c' sounds like 'sh'. Link 'more' smoothly into 'efficient': 'mo-rif-fi-cient'."
    },
    {
      term: "prefer to",
      phonetic: "/prɪˈfɜːr tuː/",
      tip: "Stress on the second syllable of 'prefer': pre-FER. The 'to' is often reduced to /tə/ in natural speech. Don't confuse with 'prefer than' (incorrect)."
    },
    {
      term: "better than",
      phonetic: "/ˈbetər ðæn/",
      tip: "The double 't' in 'better' becomes a soft 'd' sound in American English: 'be-der'. British English keeps it as 't'. Link smoothly to 'than': 'be-ter-than'."
    },
    {
      term: "I like using",
      phonetic: "/aɪ laɪk ˈjuːzɪŋ/",
      tip: "Link 'like' and 'using' smoothly. The 'k' at the end of 'like' connects to the 'y' sound in 'using': 'li-KYU-zing'. Natural flow is key."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Silicon Valley)",
    speakerBio: "Marcus, DevOps Engineer from San Francisco",
    audioSrc: "",
    transcript: "I prefer Docker to traditional VMs because it's faster and more efficient. The containerization approach is better than running full virtual machines. I like using Docker Compose for local development—it's way more flexible than other tools I've tried."
  },
  {
    accent: "British English (London)",
    speakerBio: "Sophie, Frontend Developer from Cambridge",
    audioSrc: "",
    transcript: "I think TypeScript is more reliable than plain JavaScript. It's a bit slower to write initially, but the type safety is better in the long run. I prefer using it for larger projects because it catches errors earlier than JavaScript would."
  },
  {
    accent: "Indian English (Bangalore)",
    speakerBio: "Raj, Full-Stack Developer from Bangalore",
    audioSrc: "",
    transcript: "In my experience, VS Code is faster than Eclipse and much lighter. I prefer it to other IDEs because the extension marketplace is more comprehensive. The integrated terminal is better than switching between windows constantly."
  }
];
