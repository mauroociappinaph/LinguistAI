import { AccentSample } from '../../../../../../types';

export const scenario = "In a daily stand-up meeting, describe what you're working on right now.";
export const speaking = "I am currently debugging the login functionality. I am implementing a new search algorithm. The team is developing the mobile interface.";
export const speakingPracticeMode = 'feedback';

export const pronunciationClinic = {
  title: "Pronunciation Clinic: Present Continuous",
  explanation: "The present continuous requires clear pronunciation of contractions and -ing endings. Focus on linking 'am/is/are' with the main verb and maintaining natural rhythm.",
  examples: [
    {
      term: "I'm working",
      phonetic: "/aɪm ˈwɜːrkɪŋ/",
      tip: "Contract 'I am' to 'I'm' /aɪm/. Link smoothly to 'working': 'I'm-working'. The -ing ending is /ɪŋ/, not /ɪn/. Stress on 'work'."
    },
    {
      term: "debugging",
      phonetic: "/diːˈbʌɡɪŋ/",
      tip: "Three syllables: de-BUG-ging. Stress on the second syllable. The double 'g' creates a hard stop before the -ing. Don't drop the 'g' sound at the end."
    },
    {
      term: "she's testing",
      phonetic: "/ʃiːz ˈtestɪŋ/",
      tip: "Contract 'she is' to 'she's' /ʃiːz/. The 's' sound links directly to 'testing': 'sheez-testing'. Natural flow is key."
    },
    {
      term: "we're developing",
      phonetic: "/wɪr dɪˈveləpɪŋ/",
      tip: "Contract 'we are' to 'we're' /wɪr/ (sounds like 'weer'). Link to 'developing': 'weer-developing'. Four syllables in 'developing' with stress on 'vel'."
    },
    {
      term: "currently",
      phonetic: "/ˈkɜːrəntli/",
      tip: "Three syllables: CUR-rent-ly. Stress on the first syllable. The 'r' is pronounced in American English but often dropped in British English. Common in stand-ups."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Austin)",
    speakerBio: "Tyler, Software Engineer from Austin, Texas",
    audioSrc: "",
    transcript: "Good morning everyone. I'm currently working on the authentication module. I'm implementing OAuth2 integration, and I'm also reviewing the security audit. The team is developing the new dashboard, and we're making good progress."
  },
  {
    accent: "British English (Edinburgh)",
    speakerBio: "Fiona, QA Engineer from Edinburgh",
    audioSrc: "",
    transcript: "Morning team. I'm testing the payment gateway at the moment. I'm also debugging some issues with the mobile app. The frontend team is developing the new user interface, and they're doing brilliant work."
  },
  {
    accent: "South African English (Cape Town)",
    speakerBio: "Thabo, DevOps Engineer from Cape Town",
    audioSrc: "",
    transcript: "Hi guys. I'm currently setting up the CI/CD pipeline. I'm also working on the deployment scripts. The infrastructure team is developing the monitoring system, and we're collaborating closely on that."
  }
];
