import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Formal Language & Structure for Professional Writing",
  explanation:
    "**Present Simple Active**: Describes processes and actions - 'The project requires approval', 'The team sends updates'\n**Passive Voice for Professional Distance**: Emphasizes actions over people - 'The bug is fixed' vs 'I fix the bug'\n**Conditional Structures**: Professional requests - 'Would you be able to review...?' 'Could you provide updates?'",
  usage: "Professional written communication:\n\n✉️ **Emails**: 'The team would appreciate your feedback'\n📝 **Documentation**: 'The API accepts POST requests'\n💬 **Messages**: 'Could you review this merge request?'",
  rules: [
    {
      from: "Formal requests",
      to: "Would you be able to + verb...? (Would you be able to review...?)"
    },
    {
      from: "Describing processes",
      to: "Subject + verb + object (The system + generates + reports)"
    },
    {
      from: "Professional distance",
      to: "Passive structures (The issue + is being + addressed)"
    }
  ],
  examples: [
    "The deployment **is scheduled** for next Monday at 3:00 PM.",
    "**Would you be able to attend** the project meeting tomorrow?",
    "The documentation **requires** updating before we release the feature.",
    "**Could you please review** the code changes in this pull request?",
    "The testing environment **is not responding** - **can you investigate**?"
  ],
  commonMistakes,
  writingExamples: [
    "**Scenario: Email to a new team member**\nI would be able to review the documentation with you next Tuesday. Would that work for you?",
    "**Scenario: Slack message during standup**\nThe deployment requirements are now available. Would you be able to take a look?"
  ],
  whyCrucial: "📝 **80% of professional IT communication is written** - emails, documentation, issue reports all build credibility.\n\n🕐 **Tone matters in remote work**: Professional distance through conditionals prevents misunderstandings and builds trust.\n\n🎯 **Career acceleration**: Professionals who master formal written communication advance 50% faster in tech careers.",
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "___ you please provide an update on the project status?",
    options: ["Would", "Can", "Are", "Do"],
    answer: "Would"
  }
};
