import { CommonMistake } from '../../../../../types';

export const commonMistakes: CommonMistake[] = [
  {
    incorrect: "The system crashed yesterday.",
    correct: "The system has crashed. (if still relevant)",
    explanation: "Use Present Perfect when the past event affects the present. Use Simple Past with specific time markers like 'yesterday'."
  },
  {
    incorrect: "We have deployed the fix yesterday.",
    correct: "We deployed the fix yesterday.",
    explanation: "Don't use Present Perfect with specific past time markers (yesterday, last week, in 2023)."
  },
  {
    incorrect: "The service is down since 3 PM.",
    correct: "The service has been down since 3 PM.",
    explanation: "Use Present Perfect (not present simple) with 'since' and 'for'."
  },
  {
    incorrect: "How long the database is slow?",
    correct: "How long has the database been slow?",
    explanation: "Use Present Perfect for duration questions: 'How long has...?'"
  },
  {
    incorrect: "We already have fixed the bug.",
    correct: "We have already fixed the bug. OR We've already fixed the bug.",
    explanation: "'Already' goes between 'have' and the past participle."
  },
  {
    incorrect: "The API didn't recover yet.",
    correct: "The API hasn't recovered yet.",
    explanation: "Use Present Perfect (not Simple Past) with 'yet' in negative sentences."
  },
  {
    incorrect: "When have you deployed the update?",
    correct: "When did you deploy the update?",
    explanation: "Use Simple Past (not Present Perfect) for 'when' questions asking about specific times."
  },
  {
    incorrect: "The database is slow since Monday.",
    correct: "The database has been slow since Monday.",
    explanation: "Use Present Perfect (has/have been) with 'since' for states that started in the past and continue now."
  },
  {
    incorrect: "The service has been down since two hours.",
    correct: "The service has been down for two hours.",
    explanation: "Use 'for' (not 'since') with duration (two hours, three days). Use 'since' with a point in time (Monday, 3 PM)."
  },
  {
    incorrect: "We work on this bug since last week.",
    correct: "We've been working on this bug since last week.",
    explanation: "Use Present Perfect Continuous (have been working) for ongoing actions that started in the past."
  },
  {
    incorrect: "We just have deployed the fix.",
    correct: "We've just deployed the fix. OR We have just deployed the fix.",
    explanation: "'Just' goes between 'have/has' and the past participle to indicate very recent actions."
  },
  {
    incorrect: "How long the system is down?",
    correct: "How long has the system been down?",
    explanation: "Use Present Perfect for 'how long' questions about duration from past to present."
  },
  {
    incorrect: "The performance problem exists for three days.",
    correct: "The performance problem has existed for three days.",
    explanation: "Use Present Perfect (not present simple) with state verbs when expressing duration."
  },
  {
    incorrect: "The service crashed five times in the last 24 hours yesterday.",
    correct: "The service has crashed five times in the last 24 hours.",
    explanation: "Use Present Perfect for events in unfinished time periods (today, this week, in the last 24 hours)."
  },
  {
    incorrect: "We had three incidents this week.",
    correct: "We've had three incidents this week.",
    explanation: "Use Present Perfect (not Simple Past) for time periods that include the present (today, this week, this month)."
  },
  {
    incorrect: "Although the tool is good, however it's expensive.",
    correct: "Although the tool is good, it's expensive.",
    explanation: "Don't use 'however' after 'although'—choose one contrast word."
  },
  {
    incorrect: "While React is popular, but Vue is easier.",
    correct: "While React is popular, Vue is easier.",
    explanation: "Don't use 'but' after 'while'—'while' already expresses contrast."
  }
];
