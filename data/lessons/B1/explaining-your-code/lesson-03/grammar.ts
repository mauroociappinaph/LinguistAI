import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Zero Conditional + Connectors for Technical Logic",
  explanation: "**Zero Conditional (If + present, present)**: Universal truths - 'If you restart the server, it clears cache'\n**Cause Connectors**: 'because/since' - reason/result relationship\n**Effect Connectors**: 'so' - consequence/result\n**Contrast Connectors**: 'although/while' - exceptions and alternatives",
  usage: "Explaining Technical Decisions:\n\n🔍 **Troubleshooting**: 'If the API returns 500, check database connection because that's usually the cause'\n⚖️ **Trade-offs**: 'Although microservices offer flexibility, they increase complexity'\n🔄 **Processes**: 'The CI pipeline runs automatically so deployments happen consistently'",
  rules: [
    {
      from: "Zero conditional pattern",
      to: "If + present simple, present simple (If you deploy, monitor begins)"
    },
    {
      from: "Cause connectors",
      to: "Result + because/since + reason (It's slow because of network latency)"
    },
    {
      from: "Contrast situations",
      to: "Although + contrast, main point (Although it's complex, it works)"
    }
  ],
  examples: [
    "**If the database is slow**, check query optimization **because** indexes improve performance.",
    "**Although the solution is elegant**, it requires more maintenance **so** we chose the simpler approach.",
    "**Since the API is asynchronous**, error handling becomes critical **while** synchronous calls are straightforward.",
    "**If you use caching**, response times improve significantly **because** data is served from memory.",
    "**Although caching helps performance**, it introduces consistency challenges **so** use Redis wisely.",
    "**If load increases**, the auto-scaler activates **since** that's how we maintain stability."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "sentence-combination",
    question: "Combine with appropriate connector: 'The app is slow. Database queries are inefficient.'",
    options: ["The app is slow because database queries are inefficient.", "The app is slow although database queries are inefficient.", "If the app is slow, database queries are inefficient."],
    answer: "The app is slow because database queries are inefficient."
  }
};
