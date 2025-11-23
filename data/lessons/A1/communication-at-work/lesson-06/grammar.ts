import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Present Perfect + Future Tenses for Updates",
  explanation: "**Present Perfect for Achievements**: 'We have completed X tasks', 'The system has processed Y requests'\n**Future for Commitments**: 'We will deliver by Friday', 'The team will implement the feature'\n\n**Combined**: 'We have finished testing and we will deploy next week'",
  usage: "Stakeholder updates:\n\n📊 **Progress reports**: 'We have implemented 80% of requirements'\n🎯 **Future commitments**: 'We will complete the milestone by EOW'\n🔄 **Combined**: 'We have resolved the blocking issues, so we will meet the deadline'",
  rules: [
    {
      from: "Completed work",
      to: "Have/has + past participle (have + completed, has + improved)"
    },
    {
      from: "Future plans",
      to: "Will + base verb (will + deliver, will + update)"
    },
    {
      from: "Be going to",
      to: "Am/is/are going to + verb (going to + ship)"
    }
  ],
  examples: [
    "**We have completed** the API development and **will begin** testing tomorrow.",
    "**The team has delivered** the core functionality; **we are going to** add polish next.",
    "**We have resolved** 90% of the bugs and **will finish** the remaining ones today.",
    "**Management has approved** the budget; **we will allocate** resources immediately.",
    "**We have achieved** our sprint goals but **will reassess** priorities for next week."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "The team ___ completed the testing phase and ___ conduct user acceptance testing next week.",
    options: ["have, will", "has, is going to", "completed, will", "had, would"],
    answer: "has, is going to"
  }
};
