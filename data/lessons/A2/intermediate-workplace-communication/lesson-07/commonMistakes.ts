import { CommonMistake } from '../../../../../types';

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "We must to implement authentication.",
    correct: "We must implement authentication.",
    explanation: "Don't use 'to' after modal verbs. Use the base form directly."
  },
  {
    incorrect: "We should migrating to microservices.",
    correct: "We should migrate to microservices.",
    explanation: "Use the base form after modals, not the -ing form."
  },
  {
    incorrect: "This could to improve performance.",
    correct: "This could improve performance.",
    explanation: "Never use 'to' after modal verbs."
  },
  {
    incorrect: "We would can use Docker.",
    correct: "We could use Docker. OR We would be able to use Docker.",
    explanation: "Don't combine two modals. Use 'be able to' if needed."
  },
  {
    incorrect: "The API musts support OAuth.",
    correct: "The API must support OAuth.",
    explanation: "Modals don't take -s. 'Must' is the same for all subjects."
  },
  {
    incorrect: "We should to consider alternatives.",
    correct: "We should consider alternatives.",
    explanation: "No 'to' after 'should'."
  },
  {
    incorrect: "This might be cause issues.",
    correct: "This might cause issues.",
    explanation: "Don't use 'be' between modal and main verb (except for passive voice)."
  },
  {
    incorrect: "We could implementing caching.",
    correct: "We could implement caching.",
    explanation: "Use base form after modals, not -ing."
  },
  {
    incorrect: "The system should returns JSON.",
    correct: "The system should return JSON.",
    explanation: "Use base form after modals, not third person -s."
  },
  {
    incorrect: "We must be implement this feature.",
    correct: "We must implement this feature.",
    explanation: "Don't use 'be' unless forming passive: 'must be implemented'."
  },
  {
    incorrect: "I think we should to refactor.",
    correct: "I think we should refactor.",
    explanation: "No 'to' after modals."
  },
  {
    incorrect: "This would improving performance.",
    correct: "This would improve performance.",
    explanation: "Use base form, not -ing."
  },
  {
    incorrect: "We could to use Redis for caching.",
    correct: "We could use Redis for caching.",
    explanation: "No 'to' after 'could'."
  },
  {
    incorrect: "The API should be returns data quickly.",
    correct: "The API should return data quickly.",
    explanation: "Don't use 'be' with active voice modals."
  },
  {
    incorrect: "We might to need more resources.",
    correct: "We might need more resources.",
    explanation: "No 'to' after 'might'."
  },
  {
    incorrect: "This must to be completed by Friday.",
    correct: "This must be completed by Friday.",
    explanation: "In passive voice: 'must be + past participle', no 'to'."
  },
  {
    incorrect: "We should can implement both features.",
    correct: "We should be able to implement both features.",
    explanation: "Use 'be able to' instead of combining modals."
  }
];
