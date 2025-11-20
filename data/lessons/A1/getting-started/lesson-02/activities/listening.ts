import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Listening: Onboarding Call",
  audioSrc: "", // Cleared to trigger AI Gen
  transcript: "Hi Alex, welcome to the company! I'm Sarah from HR. For your profile, I just need to confirm your position and your department. You're a developer in the engineering department, right?",
  comprehensionQuestions: [
    { question: "Who is Sarah?", answer: "She is from HR." },
    {
      question: "What information does she need to confirm?",
      answer: "Alex's position and department."
    }
  ]
};
