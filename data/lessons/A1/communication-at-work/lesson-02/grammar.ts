import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Present Continuous for Presentations + Questions for Q&A",
  explanation:
    "**Present Continuous for Dynamic Presentations**: Shows ongoing actions - 'We're currently developing...', 'Data shows they're improving'\n**Modal Questions for Q&A**: Polite inquiries - 'Could you clarify...?', 'Would you like me to explain...?'\n**Present Simple for Facts**: Describes current state - 'The project involves...', 'The data indicates'",
  usage: "Meeting and presentation communication:\n\n📊 **Presenting**: 'The system is currently processing 1M requests'\n🤝 **Questions**: 'Could you explain that point further?'\n✅ **Responses**: 'That's correct - it is improving user experience'",
  rules: [
    {
      from: "Ongoing processes",
      to: "is/are + verb-ing (is + processing, are + improving)"
    },
    {
      from: "Polite questions",
      to: "Could/Would + subject + verb...? (Could + you + explain...?)"
    },
    {
      from: "Current facts",
      to: "Subject + verb + object (System + processes + requests)"
    }
  ],
  examples: [
    "The application **is currently supporting** over 10,000 active users daily.",
    "**We're implementing** a new feature that **is reducing** response times by 50%.",
    "**Could you clarify** the requirements for this functionality?",
    "**Would you like me to elaborate** on that technical issue?",
    "The monitoring system **shows** that performance **is improving** steadily."
  ],
  commonMistakes,
  writingExamples: [
    "**Scenario: Task assignment in Jira**\nPrepare status report for the QA department.\nTest the new authentication module.",
    "**Scenario: Pull request description**\nThis commit fixes the memory leak issue. Please review and merge."
  ],
  whyCrucial: "📝 **75% of IT tasks require written instructions** - bug reports, documentation, and user guides depend on imperative forms.\n\n⚡ **Reduces miscommunication**: Clear commands prevent costly implementation errors.\n\n🎯 **Professional clarity**: Direct language builds trust in technical environments.",
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "___ status report for the QA department.",
    options: ["Prepare", "Prepares", "Preparing", "Prepared"],
    answer: "Prepare"
  }
};
