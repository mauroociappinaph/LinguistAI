import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Future Forms for Technical Evolution",
  explanation: "**Will + infinitive**: Spontaneous decisions - 'We'll deprecate this API'\n**Going to + infinitive**: Planned decisions - 'We're going to migrate to cloud'\n**Will be + -ing**: Processes in progress - 'The system will be undergoing maintenance'",
  usage: "Technical Planning & Roadmaps:\n\n📅 **Deprecation warnings**: 'This feature will be removed in v2.0'\n🌐 **Migration plans**: 'We are going to implement containerization'\n🔄 **Maintenance**: 'Database will be undergoing optimization'",
  rules: [
    {
      from: "Spontaneous decisions",
      to: "Will + infinitive (I'll archive this, We'll refactor it)"
    },
    {
      from: "Pre-planned actions",
      to: "Going to + infinitive (Going to modernize, Going to sunset)"
    },
    {
      from: "Formal announcements",
      to: "Will be + past participle (will be deprecated, will be migrated)"
    }
  ],
  examples: [
    "**Legacy authentication will be deprecated** by end of Q2; **we're going to** implement OAuth instead.",
    "**Database migration is going to begin** next sprint; **backup will be created** automatically.",
    "**This framework will be upgraded** to support the new requirements if performance drops.",
    "**The old API endpoints will be removed** in version 2.0; **we are going to** provide migration guides.",
    "**Security patches are going to be applied** automatically; **manual intervention will be required** only for critical systems."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "sentence-combination",
    question: "Combine to create a technical deprecation announcement: 'legacy database / will be / upgraded / next month'",
    options: [
      "Legacy database will be upgraded next month.",
      "The legacy database will be upgraded next month.",
      "Legacy database is going to be upgraded next month.",
      "The legacy database will be migrated next month."
    ],
    answer: "The legacy database will be upgraded next month."
  }
};
