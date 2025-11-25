import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Modal Verbs for Technical Proposals",
  explanation:
    "Modal verbs (should, could, would, might, must) express recommendations, possibilities, and requirements in technical proposals. Essential for RFCs, feature requests, and architecture decisions.\n\n" +
    "### Why it matters in IT:\n" +
    "Technical proposals require careful language to:\n" +
    "• Express recommendations without being too forceful\n" +
    "• Present options and alternatives diplomatically\n" +
    "• Indicate certainty levels about outcomes\n" +
    "• Suggest improvements without criticizing current solutions\n\n" +
    "### Modal Verbs Usage:\n" +
    "**Should** (recommendation, advice)\n" +
    "• 'We should migrate to microservices for better scalability.'\n" +
    "• 'The API should return JSON instead of XML.'\n\n" +
    "**Could** (possibility, suggestion)\n" +
    "• 'We could use Redis for caching.'\n" +
    "• 'This approach could reduce latency by 40%.'\n\n" +
    "**Would** (conditional, polite suggestion)\n" +
    "• 'This change would improve performance.'\n" +
    "• 'I would recommend starting with a proof of concept.'\n\n" +
    "**Might** (lower probability possibility)\n" +
    "• 'This might cause compatibility issues.'\n" +
    "• 'We might need additional resources.'\n\n" +
    "**Must** (strong requirement, necessity)\n" +
    "• 'The system must handle 10,000 requests per second.'\n" +
    "• 'We must ensure backward compatibility.'\n\n" +
    "**Strength Scale**: must > should > would > could > might",

  usage: "Use in technical proposals, RFCs, feature requests, architecture decision records, code review suggestions, and improvement recommendations.",

  rules: [
    {
      from: "Should (recommendation)",
      to: "We should implement rate limiting to prevent API abuse."
    },
    {
      from: "Could (possibility/option)",
      to: "We could use either PostgreSQL or MongoDB for this use case."
    },
    {
      from: "Would (conditional outcome)",
      to: "Adopting TypeScript would reduce runtime errors significantly."
    },
    {
      from: "Might (uncertain possibility)",
      to: "This change might affect existing integrations."
    },
    {
      from: "Must (requirement)",
      to: "The authentication system must support OAuth 2.0."
    }
  ],

  examples: [
    "We should refactor this module to improve maintainability.",
    "The team could adopt pair programming for complex features.",
    "This optimization would reduce database queries by 60%.",
    "We might encounter edge cases that weren't covered in testing.",
    "The API must respond within 200ms for 95% of requests.",
    "I would suggest using a message queue for asynchronous processing.",
    "We could implement feature flags to enable gradual rollouts.",
    "The caching strategy should be reviewed quarterly.",
    "This approach might not scale beyond 100,000 users.",
    "We must ensure GDPR compliance before launching in Europe.",
    "The deployment pipeline could be automated with GitHub Actions.",
    "I would recommend conducting a security audit before release."
  ],

  commonMistakes: [
    {
      incorrect: "We must to implement authentication.",
      correct: "We must implement authentication.",
      explanation: "Don't use 'to' after modal verbs. Modals are followed directly by the base form of the verb."
    },
    {
      incorrect: "We should migrating to the cloud.",
      correct: "We should migrate to the cloud.",
      explanation: "Use the base form of the verb after modals, not the -ing form."
    },
    {
      incorrect: "This could to cause performance issues.",
      correct: "This could cause performance issues.",
      explanation: "Never use 'to' after modal verbs."
    },
    {
      incorrect: "We would can use Docker for deployment.",
      correct: "We could use Docker for deployment. OR We would be able to use Docker.",
      explanation: "Don't combine two modal verbs. Use 'be able to' if you need to express ability with 'would'."
    },
    {
      incorrect: "The system musts handle high traffic.",
      correct: "The system must handle high traffic.",
      explanation: "Modal verbs don't take -s in third person. 'Must' stays the same for all subjects."
    },
    {
      incorrect: "We should to consider alternatives.",
      correct: "We should consider alternatives.",
      explanation: "No 'to' after 'should'. Use the base form directly."
    },
    {
      incorrect: "This might be cause problems.",
      correct: "This might cause problems.",
      explanation: "Don't use 'be' between the modal and the main verb unless you're forming passive voice."
    },
    {
      incorrect: "I think we must to refactor this code.",
      correct: "I think we must refactor this code.",
      explanation: "No 'to' after 'must'."
    },
    {
      incorrect: "We could implementing caching.",
      correct: "We could implement caching.",
      explanation: "Use base form after modals, not -ing form."
    },
    {
      incorrect: "The API should returns JSON.",
      correct: "The API should return JSON.",
      explanation: "Use base form after modals, not third person -s form."
    }
  ],

  writingExamples: [
    "RFC Proposal: 'I propose we should migrate our authentication system to OAuth 2.0. This change would improve security and would enable single sign-on across our services. We could implement this in phases: first, we should add OAuth support alongside the existing system. This would allow us to test thoroughly before full migration. The migration might take 3-4 sprints, but it must be completed before our enterprise launch. We should also consider using Auth0 or Okta, which could reduce implementation time significantly.'",
    "Feature Request: 'We should add real-time notifications to improve user engagement. This feature could be implemented using WebSockets or Server-Sent Events. WebSockets would provide bidirectional communication, which might be useful for future features. However, SSE could be simpler for our current needs. The notification system must support at least 50,000 concurrent connections and should gracefully degrade if the WebSocket connection fails. We would need to add Redis for pub/sub functionality, which could also improve our caching strategy.'",
    "Architecture Decision: 'For our new microservice, we must choose between REST and GraphQL. REST would be simpler to implement and our team already has expertise with it. However, GraphQL could reduce over-fetching and might improve mobile app performance. We should conduct a proof of concept with both approaches. The chosen solution must support versioning and should be well-documented. I would recommend GraphQL for this use case, but we could start with REST if time constraints are critical.'"
  ],

  interactiveExercise: {
    type: "multiple-choice",
    question: "Complete: 'We _____ implement caching, which _____ reduce API response time by 50%.'",
    options: [
      "must / should",
      "should / would",
      "could / might",
      "would / could"
    ],
    answer: "should / would"
  }
};
