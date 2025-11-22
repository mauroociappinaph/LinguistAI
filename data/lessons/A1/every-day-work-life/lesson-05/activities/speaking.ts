import { AccentSample } from '../../../../../../types';

export const scenario = "You are guiding a new team member on how to use the company's internal dashboard for the first time (onboarding).";
export const speaking = "First, go to the login page. Enter your email and password, then click the 'Login' button. This will take you to your dashboard.";
export const speakingPracticeMode = 'feedback';

export const pronunciationClinic = {
  title: "Pronunciation Clinic: UI Navigation",
  explanation: "Clear pronunciation of UI terms and action verbs is essential when guiding users. Focus on stress patterns in compound words and smooth transitions between instructions.",
  examples: [
    {
      term: "click on",
      phonetic: "/klɪk ɒn/",
      tip: "Two words that flow together: 'click-on'. The 'k' at the end of 'click' connects smoothly to 'on': 'cli-KON'. Very common in UI instructions."
    },
    {
      term: "dashboard",
      phonetic: "/ˈdæʃbɔːrd/",
      tip: "Two syllables: DASH-board. Stress on the first syllable. The 'sh' sound is clear. Don't pronounce it as 'dash-bored'—the 'oa' is like 'or'."
    },
    {
      term: "enter your",
      phonetic: "/ˈentər jʊr/",
      tip: "Link smoothly: 'enter-your'. The 'r' in 'enter' connects to 'your': 'en-ter-your'. In rapid speech, 'your' often reduces to /jər/."
    },
    {
      term: "scroll down",
      phonetic: "/skroʊl daʊn/",
      tip: "Two words with clear separation. 'Scroll' has the 'scr' cluster at the start. 'Down' rhymes with 'town'. Link naturally: 'scroll-down'."
    },
    {
      term: "settings",
      phonetic: "/ˈsetɪŋz/",
      tip: "Two syllables: SET-tings. Stress on the first syllable. The double 't' creates a clear stop. The -ings ending is /ɪŋz/, not /ɪnz/."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Boston)",
    speakerBio: "Rachel, UX Designer from Boston",
    audioSrc: "",
    transcript: "Okay, let me walk you through this. First, click on the menu icon in the top left. Then, scroll down to find the settings option. Click on it, and you'll see your profile page. Enter your information in the form fields, then click save."
  },
  {
    accent: "British English (Bristol)",
    speakerBio: "Oliver, Product Manager from Bristol",
    audioSrc: "",
    transcript: "Right, here's how it works. Go to the dashboard first. Click on the notifications bell at the top. You'll see a dropdown menu—select preferences from there. Toggle the switches to enable or disable features, then save your changes."
  },
  {
    accent: "Canadian English (Toronto)",
    speakerBio: "Maya, Frontend Developer from Toronto",
    audioSrc: "",
    transcript: "Alright, let's get you set up. Open the app and log in with your credentials. Navigate to the projects tab on the left sidebar. Click the plus button to create a new project. Fill out the form, upload your files, and hit submit when you're ready."
  }
];
