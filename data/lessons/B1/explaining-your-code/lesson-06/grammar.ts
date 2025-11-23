import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Passive Voice for SDLC Processes",
  explanation: "**Passive in SDLC**: 'Code is reviewed', 'Tests are automated', 'Features are deployed'\n**Process Focus**: Emphasizes what happens rather than who does it\n**Standard Documentation**: 'Requirements are gathered', 'Code is committed', 'Bugs are tracked'",
  usage: "📋 **SDLC Documentation**: Use passive for standardized processes\n🏗️ **Process Flows**: 'Requirements are analyzed, code is developed, tests are executed'\n📝 **Checklists**: 'Features are peer-reviewed, bugs are documented, releases are signed off'",
  rules: [
    {
      from: "Process description",
      to: "Object + is/are + past participle (Code + is + reviewed)"
    },
    {
      from: "Standard procedures",
      to: "Passive to describe regulated, standard processes"
    },
    {
      from: "Documentation style",
      to: "Use passive for official documentation and checklists"
    }
  ],
  examples: [
    "**Requirements are gathered** at project initiation phase.",
    "**Code is reviewed** before being merged to main branch.",
    "**Tests are automated** as part of CI/CD pipeline.",
    "**Features are deployed** automatically to staging environment.",
    "**Bugs are tracked** in the issue management system."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "Complete with passive voice: 'Bugs ___ (track) in the issue management system and features ___ (test) before deployment.'",
    options: ["are tracked, are tested", "track, test", "tracked, tested"],
    answer: "are tracked, are tested"
  }
};
