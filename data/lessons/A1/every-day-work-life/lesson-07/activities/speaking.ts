import { AccentSample } from '../../../../../../types';

export const scenario = "Explain how to document a new feature.";
export const speaking = "First, write a clear title. Then, describe what the feature does. Add code examples and explain the parameters.";
export const speakingPracticeMode = 'feedback';

export const pronunciationClinic = {
  title: "Pronunciation Clinic: Documentation Language",
  explanation: "Technical documentation requires precise pronunciation of technical terms and clear articulation of instructions. Focus on compound words and smooth transitions between steps.",
  examples: [
    {
      term: "documentation",
      phonetic: "/ˌdɒkjʊmenˈteɪʃən/",
      tip: "Five syllables: doc-u-men-TAY-shun. Stress on the fourth syllable. The 'c' sounds like 'k'. Don't rush through this word—each syllable should be clear."
    },
    {
      term: "README",
      phonetic: "/ˈriːdmiː/",
      tip: "Two syllables: READ-ME. Both parts are stressed equally. Often spelled in all caps. Pronounce each part clearly: 'reed-mee', not 'red-me'."
    },
    {
      term: "step-by-step",
      phonetic: "/ˈstep baɪ ˈstep/",
      tip: "Three stressed syllables: STEP-by-STEP. Clear pauses between each word. The 'by' is slightly reduced. Very common in technical writing."
    },
    {
      term: "describes",
      phonetic: "/dɪˈskraɪbz/",
      tip: "Two syllables: de-SCRIBES. Stress on the second syllable. The 's' at the end is voiced /z/. Link smoothly to the next word."
    },
    {
      term: "parameter",
      phonetic: "/pəˈræmɪtər/",
      tip: "Four syllables: pa-RAM-i-ter. Stress on the second syllable. The first 'a' is reduced to /ə/. Common in API documentation."
    }
  ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Seattle)",
    speakerBio: "Chris, Technical Writer from Seattle",
    audioSrc: "",
    transcript: "When writing documentation, start with a clear overview. Describe what the function does in simple terms. Then, add a step-by-step guide. Include code examples that demonstrate the main use cases. Finally, document all the parameters and their types."
  },
  {
    accent: "British English (Oxford)",
    speakerBio: "Hannah, Senior Developer from Oxford",
    audioSrc: "",
    transcript: "Right, let's talk about good documentation practices. First, write a concise summary at the top. Explain the purpose clearly. Break down complex processes into numbered steps. Use bullet points for lists. Add screenshots where appropriate. Keep your language simple and direct."
  },
  {
    accent: "New Zealand English (Wellington)",
    speakerBio: "Ben, DevOps Lead from Wellington",
    audioSrc: "",
    transcript: "Kia ora team. When you're documenting a deployment process, make sure you include all the prerequisites. List the steps in order. Explain what each command does. Add warnings for critical steps. Include troubleshooting tips at the end. Keep it updated as things change."
  }
];
