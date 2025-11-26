import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Passive + Imperatives & Modals of Deduction",
  explanation:
    "**Passive**: Focuses on process/actions - 'The log is analyzed'.\n**Imperatives**: Instructions - 'Check the database'.\n**Modals of Deduction**: Expressing certainty about bugs.\n- **Must be**: 90-100% sure ('It must be a timeout').\n- **Might/Could be**: 50% sure ('It might be a network issue').\n- **Can't be**: 90-100% sure it's NOT ('It can't be the code').",
  usage:
    "Systematic debugging process:\n\n🔍 **Identify**: 'Locate the failing code'\n🤔 **Deduce**: 'It must be the database because...'\n📊 **Analyze**: 'Data structures are examined'\n🎛️ **Test**: 'Isolate variables, Check assumptions'",
  rules: [
    {
      from: "Investigation steps",
      to: "Imperative + object (Check the logs)"
    },
    {
      from: "High certainty (Positive)",
      to: "Must be + noun/adjective (It must be the API)"
    },
    {
      from: "Uncertainty",
      to: "Might/Could be + noun/adjective (It might be a cache issue)"
    },
    {
      from: "High certainty (Negative)",
      to: "Can't be + noun/adjective (It can't be the frontend)"
    },
  ],
  examples: [
    "**Investigate** the database - it **must be** a connection error.",
    "**Isolate** the bug - it **might be** a race condition.",
    "**Analyze** the error - it **can't be** a syntax error because it compiled.",
    "**Test** the fix - **assumptions are verified**.",
    "**Can** you review my code?",
    "They **can** troubleshoot network issues."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "___ the code and ___ that variables ___ set correctly.",
    options: ["Check, Verify, Are", "Checked, Verified, Is", "Checking, Verifying, Are", "Checks, Verifies, Are"],
    answer: "Check, Verify, Are"
  }
};
