import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Formal Recommendations with Should/Must",
  explanation: "In technical proposals and documentation, we use **should** and **must** to make professional recommendations. These modals are more appropriate than subjunctive for B1 learners.\\n\\n**Should** = Strong recommendation (but not mandatory)\\n**Must** = Requirement or necessity\\n**Could** = Suggestion or possibility\\n\\n**Pattern:** Subject + should/must/could + base verb",
  usage: "Technical Documentation, Proposals & Professional Recommendations:\\n\\n📋 **Proposals**: 'The system should be updated regularly'\\n🔧 **Requirements**: 'All code must be reviewed before deployment'\\n💡 **Suggestions**: 'We could implement caching for better performance'",
  rules: [ {
      from: "Strong recommendations",
      to: "Use 'should': 'The database **should be** optimized for performance.'"
    },
    {
      from: "Requirements",
      to: "Use 'must': 'Security patches **must be** applied immediately.'"
    },
    {
      from: "Suggestions",
      to: "Use 'could': 'We **could implement** automated testing.'"
    }],
   examples: [
    "The architecture **should be** redesigned to improve scalability.",
    "All API endpoints **must be** documented following OpenAPI standards.",
    "We **could migrate** to microservices for better maintainability.",
    "The deployment process **should be** automated to reduce errors.",
    "Code reviews **must be** completed before merging to main branch."
  ],
  commonMistakes: [],
  interactiveExercise: {
    type: "modal-selection",
    question: "Complete with the correct modal: 'Security vulnerabilities ___ be fixed immediately.'",
    options: ["should", "must", "could", "might"],
    answer: "must"
  }
};
