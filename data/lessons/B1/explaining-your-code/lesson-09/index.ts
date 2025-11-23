import { Lesson, Difficulty } from '../../../../../types';

export const lesson09: Lesson = {
  id: "eyc9",
  title: "Technology Stack Explanations",
  level: Difficulty.B1,
  description: "Learn to explain technical stacks and technology choices using present simple for current infrastructure and past tenses for decisions made.",

  grammar: {
    title: "Present Simple + Past Tenses for Tech Stack",
    explanation: "**Present Simple**: Current architecture - 'Our system uses React'\n**Past Simple**: Decisions made - 'We chose PostgreSQL'\n**Present Perfect**: Recent changes - 'We have upgraded Node.js'",
    usage: "Tech Stack Communication:\n\n🏗️ **Current Setup**: 'Database runs on AWS'\n📋 **Rationale**: 'We chose Docker because it simplified deployment'\n🔄 **Recent**: 'We have migrated to microservices'"
  },
  vocabulary: [
    {
      item: "stack",
      explanation: "Complete set of software used to build applications.",
      example: "Our technology stack includes React, Node.js, and PostgreSQL.",
      pronunciation: "/stæk/"
    },
    {
      item: "infrastructure",
      explanation: "Underlying structure for systems and services.",
      example: "Cloud infrastructure provides scalable computing resources.",
      pronunciation: "/ˈɪnfrəˌstrʌktʃər/"
    }
  ],
  scenario: "Explaining technology choices to new team members or stakeholders.",
  speaking: "Our technology stack runs on cloud infrastructure. We chose AWS because it offers global availability. We have recently integrated Kubernetes for container orchestration.",
  speakingPracticeMode: "explanation"
};
