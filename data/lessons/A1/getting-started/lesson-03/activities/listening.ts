
import { ListeningActivity } from '../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Listening: Scheduling Sync",
  audioSrc: "", // Triggers AI Gen
  transcript: "Hey, just wanted to confirm the timeline. The deployment is scheduled for Tuesday at 2 PM. We have a code freeze on Monday morning. The retro will be on Friday at 4 PM. Does that work for everyone?",
  comprehensionQuestions: [
    {
      question: "When is the deployment?",
      answer: "Tuesday at 2 PM."
    },
    {
      question: "What happens on Monday morning?",
      answer: "There is a code freeze."
    },
    {
      question: "What is scheduled for Friday?",
      answer: "The retro (retrospective)."
    }
  ]
};
