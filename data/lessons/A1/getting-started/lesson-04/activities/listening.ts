import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Listening: A Quick Question",
  audioSrc:
    "https://storage.googleapis.com/aistudio-public/prompts/media/tech-english-pro/a1_m01_l04_listening.mp3",
  transcript: "A: 'Excuse me, do you have a moment?' B: 'Yes, I do. What's up?' A: 'Where is the main meeting room?' B: 'It's on the second floor.'",
  comprehensionQuestions: [
    {
      question: "What does speaker A ask for?",
      answer: "The location of the main meeting room.",
    },
    {
      question: "Where is the meeting room?",
      answer: "On the second floor.",
    },
  ],
};
