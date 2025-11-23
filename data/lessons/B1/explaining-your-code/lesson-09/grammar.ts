import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Present Simple + Past Tenses for Tech Stack",
  explanation: "**Present Simple**: Current architecture - 'Our system uses React'\n**Past Simple**: Decisions made - 'We chose PostgreSQL'\n**Present Perfect**: Recent changes - 'We have upgraded Node.js'",
  usage: "Tech Stack Communication:\n\n🏗️ **Current Setup**: 'Database runs on AWS'\n📋 **Rationale**: 'We chose Docker because it simplified deployment'\n🔄 **Recent**: 'We have migrated to microservices'",
  rules: [
    {
      from: "Current system state",
      to: "Present simple for existing infrastructure (runs on, uses, supports)"
    },
    {
      from: "Decision explanation",
      to: "Past simple for historical choices (chose, selected, decided)"
    },
    {
      from: "Recent changes",
      to: "Present perfect for recent adoptions/upgrades (have implemented, have upgraded)"
    }
  ],
  examples: [
    "**Our application runs** on cloud infrastructure and **serves** 10M users daily.",
    "**We selected** microservices architecture **because** it enables independent deployments.",
    "**The system supports** multiple authentication methods; **we implemented** OAuth last quarter.",
    "**Database queries are optimized** automatically; **designers chose** PostgreSQL for its reliability."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "sentence-combination",
    question: "Explain a tech choice: 'Choose relational database for scalability → Use PostgreSQL → Completed migration last month'",
    options: [
      "We chose PostgreSQL because it supports scalability; we completed the migration last month.",
      "We choose PostgreSQL for scalability; we have completed the migration last month.",
      "We chose PostgreSQL because it supports scalability; we have completed the migration last month."
    ],
    answer: "We chose PostgreSQL because it supports scalability; we have completed the migration last month."
  }
};
