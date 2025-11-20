import { AccentSample } from '../../../../../../types';

export const scenario = "You're starting with an introductions section at a team onboarding session. Cover your background, current role, technical expertise, and work situation. Then ask about your new colleagues to build team connections. Keep it professional but conversational - aim for 60-90 seconds.";

export const speaking = "Introduce yourself as if you're meeting a new client partner: 'Hi, I am [Name], and I am [Role] at [Company]. I have been working in [Field] for [Time], specializing in [Key Technology]. Currently, I am [Working on/Focusing on]...' Practice varying your pace and emphasis to sound natural.";

export const speakingPracticeMode = "conversation";

export const pronunciationClinic = {
  title: "Pronunciation Clinic: Professional Introductions",
  explanation: "Mastering introductions requires precision in two areas: individual word pronunciation and natural connection between words. Let's break down the most common challenges.",
  examples: [
    {
      term: "'I am'",
      phonetic: "/aɪ æm/",
      tip: "The 'I' sound transitions smoothly into the 'am' with a tiny connecting 'y' sound: /ɪ/. Listen: \"I-I'm\" not \"I... am\". This linking sound is crucial for sounding natural."
    },
    {
      term: "developer",
      phonetic: "/dɪˈvɛləpər/",
      tip: "Four syllables with secondary stress on the third: 'de-vel-OP-er'. The 'o' is short like 'uh', never 'oh'. Common mistake: British speakers sometimes emphasize the first syllable more than Americans."
    },
    {
      term: "experience",
      phonetic: "/ɪkˈspɪərɪəns/",
      tip: "Four syllables: 'ex-PEER-ee-ence'. Primary stress on the second syllable. The 'x' is not pronounced - it's just the 'eks' sound. Watch for the double 'ee' sounds."
    },
    {
      term: "'and I am'",
      phonetic: "/ænd aɪ æm/",
      tip: "Word connection: 'and' ends with 'd' which connects to the 'a' in 'I am': \"an-DA-am\". In rapid speech, you often hear \"an-jam\" or \"en-jam\". Listen for this pattern in natural conversation."
    },
    {
      term: "professional",
      phonetic: "/prəˈfeʃənl/",
      tip: "Four syllables: 'pro-FESH-on-ul'. The 't' is silent, and the 'o' is a weak 'uh' sound. Stress on the third syllable makes this word distinctive in professional contexts."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Silicon Valley)",
    speakerBio: "Sarah, Engineering Manager from Palo Alto, California",
    audioSrc: "",
    transcript: "Hey team! I'm Sarah Chen, and I am the new Engineering Manager here. I have eight years of experience in software development, and I am really focused on building high-performing teams. I'm based in Palo Alto, so feel free to grab coffee if we're both in the office!"
  },
  {
    accent: "British English (London)",
    speakerBio: "David, Senior Developer from Manchester, working in London",
    audioSrc: "",
    transcript: "Alright, everyone! I'm David Thompson, and I am your new Senior Developer. I have been working with JavaScript and React for six years now. My background is in computer science, and I am particularly interested in performance optimization. I work from our London office."
  },
  {
    accent: "Australian English (Sydney)",
    speakerBio: "Emma, Full-Stack Engineer from Melbourne, now in Sydney",
    audioSrc: "",
    transcript: "G'day folks! I'm Emma Patterson, and I am the newest member of your development team. I have been coding for seven years, specialising in full-stack development. Before this, I was working in Melbourne, but now I am based right here in Sydney. Can't wait to get stuck in!"
  }
];
