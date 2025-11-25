import { AccentSample } from '../../../../../../types';

export const scenario = "Give a brief stand-up update.";
export const speaking = "Yesterday, I fixed the authentication bug and reviewed two pull requests. Today, I work on the API documentation.";
export const speakingPracticeMode = 'feedback';

export const pronunciationClinic = {
  title: "Pronunciation Clinic: Stand-up Reports",
  explanation: "Stand-up reports require clear pronunciation of past tense endings and smooth transitions between time frames. Focus on -ed endings and natural linking between words.",
  examples: [
    {
      term: "yesterday",
      phonetic: "/ˈjestərdeɪ/",
      tip: "Three syllables: YES-ter-day. Stress on the first syllable. The 'r' is often dropped in British English. Very common in stand-ups to indicate completed work."
    },
    {
      term: "fixed",
      phonetic: "/fɪkst/",
      tip: "One syllable. The -ed ending is pronounced as /t/ because 'fix' ends in a voiceless sound. Not 'fix-ed' (two syllables). Link to the next word: 'fixed-the-bug'."
    },
    {
      term: "reviewed",
      phonetic: "/rɪˈvjuːd/",
      tip: "Two syllables: re-VIEWED. The -ed ending is pronounced as /d/ because 'review' ends in a voiced sound. Stress on the second syllable."
    },
    {
      term: "today",
      phonetic: "/təˈdeɪ/",
      tip: "Two syllables: to-DAY. Stress on the second syllable. Often reduced to /tə/ in the first syllable. Marks the transition to present/future plans in stand-ups."
    },
    {
      term: "I work on",
      phonetic: "/aɪ wɜːrk ɒn/",
      tip: "Link smoothly: 'I-work-on'. The 'k' in 'work' connects to 'on': 'wor-KON'. Simple present for today's plan. Natural flow is essential."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (New York)",
    speakerBio: "Jordan, Backend Developer from Brooklyn",
    audioSrc: "",
    transcript: "Morning team. Yesterday, I completed the database migration and deployed the hotfix to production. I also reviewed three PRs from the frontend team. Today, I work on optimizing the search queries and I plan to finish the API documentation."
  },
  {
    accent: "British English (London)",
    speakerBio: "Emily, Scrum Master from London",
    audioSrc: "",
    transcript: "Good morning everyone. Yesterday, I facilitated the sprint planning session and updated all the Jira tickets. I also reviewed the team's velocity metrics. Today, I work on preparing the sprint review presentation and I'll catch up with stakeholders."
  },
  {
    accent: "Irish English (Dublin)",
    speakerBio: "Liam, Mobile Developer from Dublin",
    audioSrc: "",
    transcript: "Hiya folks. Yesterday, I fixed the crash on iOS 17 and tested the new push notification feature. I also paired with Sarah on the authentication flow. Today, I work on the offline mode functionality and I'll be reviewing the design specs."
  }
];
