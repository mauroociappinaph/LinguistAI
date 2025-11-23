import { VocabularyItem } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  {
    item: "roadmap",
    explanation: "A strategic plan that defines goals and major milestones over time.",
    example: "Our product roadmap shows the feature will have been released by Q3.",
    pronunciation: "/ˈroʊdˌmæp/"
  },
  {
    item: "milestone",
    explanation: "A significant point or event in a project timeline.",
    example: "All milestones will have been achieved by the end of the year.",
    pronunciation: "/ˈmaɪlˌstoʊn/"
  },
  {
    item: "deliverable",
    explanation: "A tangible or intangible output that must be delivered as part of a project.",
    example: "The key deliverables will have been submitted by Friday.",
    pronunciation: "/dɪˈlɪvərəbəl/"
  },
  {
    item: "quarter (Q1-Q4)",
    explanation: "A three-month period in a business year (Q1: Jan-Mar, Q2: Apr-Jun, Q3: Jul-Sep, Q4: Oct-Dec).",
    example: "By Q2, the infrastructure will have been upgraded.",
    pronunciation: "/ˈkwɔrtər/"
  },
  {
    item: "release cycle",
    explanation: "The time between successive releases of software.",
    example: "Our release cycle shows the app will have been updated three times by December.",
    pronunciation: "/rɪˈlis ˈsaɪkəl/"
  },
  {
    item: "go-live",
    explanation: "The moment when a system or feature becomes operational.",
    example: "By go-live, all testing will have been completed.",
    pronunciation: "/ɡoʊ laɪv/"
  }
];

export const phrasalVerbs: VocabularyItem[] = [];
export const compoundWords: VocabularyItem[] = [];

export const functionalChunks = {
  title: "Reporting Future Milestones",
  chunks: [
    {
      chunk: "By [time/date], [feature] **will have been** [past participle].",
      usage: "Reporting completion milestones"
    },
    {
      chunk: "All [items] **will have been** [action] before [deadline].",
      usage: "Emphasizing pre-deadline completion"
    },
    {
      chunk: "By [date], we **will have been** [verb-ing] for [duration].",
      usage: "Emphasizing project duration (advanced)"
    }
  ]
};
