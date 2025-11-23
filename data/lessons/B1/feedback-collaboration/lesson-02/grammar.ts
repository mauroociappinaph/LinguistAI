import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Expressions + Comparatives/Superlatives in Technical Context",
  explanation: "**Comparative: more + adj** - 'This approach is more efficient than the previous one'\n**Superlative: the most + adj** - 'REST is the most scalable architecture'\n**Agreement/Disagreement phrases**: Agree to disagree, I see your point, However, That depends...",

  usage: "Technical Discussions & Reviews:\n\n🤝 **Agreement**: 'I totally agree that microservices would be more flexible'\n❌ **Disagreement**: 'However, I think the monolithic approach might be less complex'\n⚖️ **Comparison**: 'Kubernetes is definitely the most powerful orchestration tool'",
  rules: [
    {
      from: "Comparative structures",
      to: "Subject + is/are + more + adj + than (Docker is more efficient than bare metal)"
    },
    {
      from: "Superlative structures",
      to: "Subject + is/are + the most + adj + in/for (RabbitMQ is the most reliable queue in production)"
    },
    {
      from: "Agreement phrases",
      to: "I completely agree that..., You're absolutely right about..., That's a good point"
    }
  ],
  examples: [
    "**I completely agree that TypeScript provides better type safety than JavaScript alone.**",
    "**However, I think Java might be more suitable for enterprise applications than Node.js.**",
    "**GraphQL is definitely the most flexible API technology we could use here.**",
    "**You're right that containers are more portable than virtual machines.**",
    "**AWS is probably the most reliable cloud provider for mission-critical applications.**",
    "**I see your point about technical debt, but the deadline is more urgent than refactoring.**"
  ],
  commonMistakes,
  interactiveExercise: {
    type: "scenario-completion",
    question: "Complete the technical discussion: 'I agree ___ microservices are scalable, ___ monolithic architecture is sometimes ___ simple. However, K8s is probably ___ powerful solution.'",
    options: [
      "that, but, more, the most",
      "that, and, most, more",
      "with, but, less, the more",
      "with, however, least, most"
    ],
    answer: "that, but, more, the most"
  }
};
