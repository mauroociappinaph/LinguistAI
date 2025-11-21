import { AccentSample } from '../../../../../../types';

export const scenario = "Describe your typical workday using adverbs of frequency. Include what time you start, your main activities, and how often you do them.";

export const speaking = "I usually start my day with the stand-up meeting. I always check my emails first. I sometimes do pair programming, but I never deploy code on a Monday.";

export const speakingPracticeMode = "feedback";

export const pronunciationClinic = {
  title: "Adverbs of Frequency",
  explanation: "Practice pronouncing these adverbs with correct stress patterns. Pay attention to the emphasized syllables and natural rhythm.",
  examples: [
    {
      term: "always",
      phonetic: "/ˈɔːlweɪz/",
      tip: "Stress on the first syllable: AL-ways. The 'ay' sound is like in 'say'."
    },
    {
      term: "usually",
      phonetic: "/ˈjuːʒuəli/",
      tip: "Stress on the first syllable: U-sual-ly. The 'zh' sound is soft like in 'measure'."
    },
    {
      term: "sometimes",
      phonetic: "/ˈsʌmtaɪmz/",
      tip: "Stress on the first syllable: SOME-times. Don't pronounce it as two separate words."
    },
    {
      term: "never",
      phonetic: "/ˈnɛvər/",
      tip: "Stress on the first syllable: NEV-er. The 'e' is short like in 'bet'."
    },
    {
      term: "often",
      phonetic: "/ˈɔːfən/ or /ˈɔːftən/",
      tip: "Both pronunciations are correct. The 't' can be silent or pronounced. American English often drops the 't'."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Silicon Valley)",
    speakerBio: "Jake, Software Engineer from San Francisco, California",
    audioSrc: "/audio/every-day-work-life/lesson-01/american-routine.mp3",
    transcript: "I usually grab coffee before my morning stand-up. I always check my notifications on Slack first thing. Sometimes I work from home, but I often prefer the office for collaboration. I never skip code reviews - they're super important for code quality."
  },
  {
    accent: "British English (London)",
    speakerBio: "Lucy, DevOps Engineer from London",
    audioSrc: "/audio/every-day-work-life/lesson-01/british-routine.mp3",
    transcript: "I always review my tickets first thing in the morning. I usually have a coffee whilst checking my emails. Sometimes I work late if there's a deployment, but I rarely stay past six. I never forget to update the team on my progress."
  },
  {
    accent: "Indian English (Bangalore)",
    speakerBio: "Raj, Full-Stack Developer from Bangalore",
    audioSrc: "/audio/every-day-work-life/lesson-01/indian-routine.mp3",
    transcript: "I usually start my day at 9 AM sharp. I always attend the daily standup without fail. Sometimes I pair program with my colleagues, but I often work independently on my tasks. I never deploy to production on Fridays - it's our team policy."
  }
];
