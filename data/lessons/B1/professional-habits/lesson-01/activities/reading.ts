import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
  title: "A Day in Tech",
  text: "John is a software developer. He always starts his day at 9 AM with a stand-up meeting. During the meeting, his team usually discusses what they did yesterday and what they plan to do today. John sometimes works from home, but he never misses the daily stand-up. After the meeting, he reviews his emails and checks his task list. He often pairs with another developer to solve complex problems. In the afternoon, he usually works on feature development or bug fixes. He rarely deploys code on Mondays because the team prefers mid-week deployments. At the end of the day, he always commits his code and pushes it to the remote repository.",
  comprehensionQuestions: [
    {
      question: "What time does John start his day?",
      answer: "9 AM"
    },
    {
      question: "Does John ever miss the stand-up meeting?",
      answer: "No, he never misses it."
    },
    {
      question: "When does the team prefer to deploy code?",
      answer: "Mid-week (not on Mondays)."
    },
    {
      question: "What does John do at the end of the day?",
      answer: "He commits and pushes his code."
    }
  ]
};
