import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
  title: "Reading: An Internal Profile",
  text: "Subject: Welcome to the Team!\n\nHello everyone,\n\nPlease welcome Maria and John to our company!\n\nMaria is our new QA Engineer. Her position is in the Engineering department. She is on the 'Phoenix' project.\n\nJohn is a developer on the same project. His team is also Maria's team. Their manager is Sarah.\n\nWe are excited to have them on our team. Their experience will be a great addition.",
  comprehensionQuestions: [
    { question: "Who is their manager?", answer: "Their manager is Sarah." },
    { question: "What is Maria's position?", answer: "She is a QA Engineer." },
    { question: "What is John's position?", answer: "He is a developer." },
    { question: "What is the name of the project?", answer: "The project is called 'Phoenix'." },
    { question: "What is the name of the department?", answer: "The department is Engineering." }
  ]
};
