import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Daily Routine",
  audioSrc: "/audio/every-day-work-life/lesson-01/daily-routine.mp3",
  transcript: "I usually start my day by checking my emails. Then I always attend the stand-up meeting at 9:30. After that, I sometimes work on new features, but I often fix bugs from the previous sprint. In the afternoon, I rarely have meetings, so I can focus on deep work. I occasionally pair program with junior developers to help them learn. At the end of the day, I never forget to commit my changes and update my task tracker.",
  comprehensionQuestions: [
    {
      question: "What does the speaker do first?",
      answer: "Check emails"
    },
    {
      question: "When is the stand-up meeting?",
      answer: "9:30"
    },
    {
      question: "What does the speaker often do?",
      answer: "Fix bugs"
    },
    {
      question: "What does the speaker do at the end of the day?",
      answer: "Commit changes and update task tracker"
    }
  ]
};
