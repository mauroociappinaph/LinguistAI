import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
  title: "Reading: A Simple Q&A Chat",
  text: "Alex: Hi Maria, I have a question. Is this the right server?\n\nMaria: Hi Alex. No, it isn't. That is the old server.\n\nAlex: Oh, okay. Do you have the new server address?\n\nMaria: Yes, I do. I will send it to you now.\n\nAlex: Thank you! One more question. When is the deadline for this task?\n\nMaria: The deadline is tomorrow at 5 p.m.",
  comprehensionQuestions: [
    {
      question: "Does Maria have the new server address?",
      answer: "Yes, she does.",
    },
  ],
};
