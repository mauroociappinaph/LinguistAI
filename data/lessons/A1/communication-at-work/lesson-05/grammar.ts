import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Modals (should/could) + Passive Voice + Connectors",
  explanation:
    "**Modals for Tentative Suggestions**: 'Should' for recommendations, 'Could' for possibilities - 'This should be clarified'\n**Passive Voice for Objective Analysis**: Focuses on what's needed, not who - 'Code should be refactored', 'Documentation needs updating'\n**Connectors for Rationale**: 'Because... so...', 'Since... we could...'\n\nPerfect for constructive tech feedback: 'This code should be optimized because it processes too many records'",
  usage:
    "Professional suggestion patterns:\n\n💡 **Constructive**: 'This could be improved because...'\n🔧 **Technical**: 'The database should be indexed for better performance'\n👥 **Team focus**: 'We could implement... since it would...'",
  rules: [
    {
      from: "Suggestions",
      to: "Should + subject + verb (Code should be restructured)"
    },
    {
      from: "Possibilities",
      to: "Could + subject + verb (You could add validation)"
    },
    {
      from: "Objective recommendations",
      to: "Should + passive (API should be documented, Tests should be written)"
    }
  ],
  examples: [
    "**This feature should be implemented** because users need it for compliance.",
    "**The code could be optimized** since performance is being affected.",
    "**Documentation should be updated** whenever APIs change.",
    "**We should consider refactoring** because the current structure is complex.",
    "**Tests should be added** to prevent regressions in the future."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "The database ___ indexed because query performance ___ slow.",
    options: ["should be, is being", "should be, is", "could be, has been", "will be, becomes"],
    answer: "should be, is"
  }
};
