
import { ReadingActivity } from '../../../../../types';

export const readingActivity: ReadingActivity = {
  title: "Reading: Team Schedule",
  text: "Hi Team,\n\nHere is the schedule for this week.\n\nThe sprint planning meeting is **on** Monday **at** 10:00 a.m. The deadline for task number 123 is **on** Wednesday.\n\nWe have a project review **in** the afternoon **on** Thursday, **at** 4 p.m. The final sprint deadline is **on** Friday **at** 5:00 p.m.\n\nOur next sprint starts **in** July.",
  comprehensionQuestions: [
    {
      question: "What is on Thursday afternoon?",
      answer: "There is a project review at 4 p.m."
    },
    {
      question: "When is the final sprint deadline?",
      answer: "It is on Friday at 5:00 p.m."
    },
    {
      question: "When does the next sprint start?",
      answer: "It starts in July."
    }
  ]
};
