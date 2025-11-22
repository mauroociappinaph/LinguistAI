import { PronunciationTip } from '../../../../../../types';

export const pronunciationClinic: { title: string; explanation: string; examples: PronunciationTip[] } = {
  title: "The -ing Sound (/ŋ/)",
  explanation: "The **-ing** ending (Gerund) uses the nasal sound **/ŋ/**. Your tongue should touch the back of your mouth, not the front. It is NOT the same as the /n/ sound in 'thin'.",
  examples: [
    {
      term: "learning",
      phonetic: "/ˈlɜːrnɪŋ/",
      tip: "Focus on the final 'ng' sound. Don't say 'learnin'."
    },
    {
      term: "coding",
      phonetic: "/ˈkoʊdɪŋ/",
      tip: "Make the 'o' long and finish with a strong nasal /ŋ/."
    },
    {
      term: "debugging",
      phonetic: "/diːˈbʌɡɪŋ/",
      tip: "Stress the second syllable: de-BUG-ging."
    },
    {
      term: "testing",
      phonetic: "/ˈtɛstɪŋ/",
      tip: "Clean /t/ sound at the start, nasal /ŋ/ at the end."
    }
  ]
};
