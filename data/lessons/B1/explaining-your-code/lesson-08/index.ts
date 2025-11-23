import { Lesson, Difficulty } from '../../../../../types';

export const lesson08: Lesson = {
  id: "eyc8",
  title: "Debugging Communication Strategies",
  level: Difficulty.B1,
  description: "Learn to explain debugging processes and issue resolution using past tenses and present perfect for problem-solving scenarios.",

  grammar: {
    title: "Past Tenses for Troubleshooting",
    explanation: "**Past Simple**: Specific debugging steps - 'I identified the bug yesterday'\n**Present Perfect**: Ongoing investigation - 'We have found the root cause'\n**Past Continuous**: Process description - 'System was processing requests when crash occurred'",
    usage: "Debug Communication:\n\n🔍 **Issue Description**: 'Application crashed this morning'\n🔧 **Investigation**: 'We have checked the logs'\n✅ **Resolution**: 'Problem was resolved by updating dependencies'"
  },
  vocabulary: [
    {
      item: "debug",
      explanation: "To find and remove errors from software.",
      example: "I debugged the memory leak issue yesterday.",
      pronunciation: "/diˈbʌɡ/"
    },
    {
      item: "trace",
      explanation: "To follow the execution path of a program.",
      example: "We traced the error back to the database connection.",
      pronunciation: "/treɪs/"
    }
  ],
  scenario: "Explaining debugging process during stand-up meetings.",
  speaking: "I identified the performance issue yesterday. We have traced it to inefficient database queries. The problem was causing slow response times for users.",
  speakingPracticeMode: "explanation"
};
