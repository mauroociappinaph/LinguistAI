import { VocabularyItem } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  {
    item: "retrospective",
    explanation: "A meeting to discuss what went well and what could improve.",
    example: "In the retrospective, the team said they needed better documentation.",
    pronunciation: "/ˌretrəˈspektɪv/"
  },
  {
    item: "stakeholder",
    explanation: "A person with interest or concern in a project.",
    example: "The stakeholder mentioned that they wanted weekly updates.",
    pronunciation: "/ˈsteɪkhoʊldər/"
  },
  {
    item: "action item",
    explanation: "A task that needs to be completed following a meeting.",
    example: "The manager said the action items would be sent via email.",
    pronunciation: "/ˈækʃən ˌaɪtəm/"
  },
  {
    item: "meeting minutes",
    explanation: "Official written record of what was discussed and decided in a meeting.",
    example: "Sarah said she would share the meeting minutes by end of day.",
    pronunciation: "/ˈmitɪŋ ˈmɪnɪts/"
  },
  {
    item: "takeaway",
    explanation: "A key point or conclusion from a discussion or meeting.",
    example: "The main takeaway was that we needed to improve our testing process.",
    pronunciation: "/ˈteɪkəˌweɪ/"
  },
  {
    item: "consensus",
    explanation: "General agreement among a group.",
    example: "The team reached consensus that the feature should be prioritized.",
    pronunciation: "/kənˈsensəs/"
  }
];

export const phrasalVerbs: VocabularyItem[] = [];
export const compoundWords: VocabularyItem[] = [];

export const functionalChunks = {
  title: "Reporting Meeting Outcomes",
  chunks: [
    {
      chunk: "The team **agreed that** [decision].",
      usage: "Reporting consensus"
    },
    {
      chunk: "[Person] **mentioned that** [information].",
      usage: "Reporting what someone said"
    },
    {
      chunk: "Everyone **stated they would** [action].",
      usage: "Reporting commitments"
    },
    {
      chunk: "The PM **explained that** [reason].",
      usage: "Reporting explanations"
    },
    {
      chunk: "[Person] **suggested we should** [recommendation].",
      usage: "Reporting suggestions"
    }
  ]
};
