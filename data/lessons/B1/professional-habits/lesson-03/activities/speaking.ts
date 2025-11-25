import { AccentSample } from '../../../../../../types';

export const scenario = "Follow a tutorial to install a new tool.";
export const speaking = "First, open the terminal. Then, run the command 'npm install' to install the packages.";
export const speakingPracticeMode = 'feedback';

export const pronunciationClinic = {
  title: "Pronunciation Clinic: Imperatives & Commands",
  explanation: "When giving technical instructions, clear pronunciation of command verbs and smooth linking between steps is crucial. Focus on stress patterns in imperative forms and natural pausing between instructions.",
  examples: [
    {
      term: "install",
      phonetic: "/ɪnˈstɔːl/",
      tip: "Two syllables: in-STALL. Stress on the second syllable. The 'a' sounds like 'aw' in American English. Don't add an extra syllable at the end—it's not 'in-stall-ed' when used as a command."
    },
    {
      term: "run the script",
      phonetic: "/rʌn ðə skrɪpt/",
      tip: "Link smoothly: 'run-the-script'. The 'the' is reduced to /ðə/ (not /ðiː/). The 'r' in 'run' connects to 'the': 'run-nuh-script'. Natural flow is essential."
    },
    {
      term: "open",
      phonetic: "/ˈoʊpən/",
      tip: "Two syllables: O-pen. Stress on the first syllable. The 'o' is a diphthong /oʊ/ (like 'oh'). Common mistake: pronouncing it as one syllable 'opn'."
    },
    {
      term: "don't forget",
      phonetic: "/doʊnt fərˈɡet/",
      tip: "Link the 't' in 'don't' to 'forget': 'don-tfor-get'. Stress on 'get'. In rapid speech, 'don't' often becomes /doʊn/ without the 't' sound."
    },
    {
      term: "make sure",
      phonetic: "/meɪk ʃʊr/",
      tip: "Link smoothly: 'make-sure'. The 'k' connects to 'sure': 'may-KSHUR'. Common in instructions. Stress on 'sure'."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Seattle)",
    speakerBio: "Alex, Senior DevOps from Seattle",
    audioSrc: "",
    transcript: "Okay, first open your terminal. Then, navigate to the project directory. Run 'npm install' to get all the dependencies. After that, create a new branch. Don't forget to pull the latest changes before you start coding."
  },
  {
    accent: "British English (Manchester)",
    speakerBio: "James, Tech Lead from Manchester",
    audioSrc: "",
    transcript: "Right, let's get started. Open the configuration file and update the API key. Save the file, then restart the server. Make sure you check the logs afterwards. Don't skip the testing step—it's crucial."
  },
  {
    accent: "Australian English (Sydney)",
    speakerBio: "Kate, Backend Developer from Sydney",
    audioSrc: "",
    transcript: "Alright team, here's what you need to do. Clone the repository first. Install the dependencies using yarn. Run the migration scripts. Then, start the development server. Let me know if you run into any issues, yeah?"
  }
];
