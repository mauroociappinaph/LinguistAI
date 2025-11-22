import { PronunciationTip } from '../../../../../../types';

export const pronunciationClinic: { title: string; explanation: string; examples: PronunciationTip[] } = {
  title: "Word Stress in Long Words",
  explanation: "In English, long words have one strong syllable. If you stress the wrong syllable, it can be hard to understand. Listen and repeat the stress pattern.",
  examples: [
    {
      term: "comparative",
      phonetic: "/kəmˈpærətɪv/",
      tip: "Stress the second syllable: com-PAR-a-tive."
    },
    {
      term: "superlative",
      phonetic: "/suˈpɜːrlətɪv/",
      tip: "Stress the second syllable: su-PER-la-tive."
    },
    {
      term: "efficient",
      phonetic: "/ɪˈfɪʃənt/",
      tip: "Stress the second syllable: ef-FI-cient."
    },
    {
      term: "scalable",
      phonetic: "/ˈskeɪləbl/",
      tip: "Stress the FIRST syllable: SCA-la-ble."
    }
  ]
};
