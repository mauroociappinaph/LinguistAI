import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Polite Requests & Delegation Structures in Remote Teams",
  explanation: "**Polite delegation**: 'Could you look into this issue?', 'Would you be able to handle X?'\n**Clear ownership**: 'I'll handle the frontend', 'Sarah will take care of testing'\n**Asynchronous follow-up**: 'Please let me know when it's ready', 'I'll review it tomorrow'\n**Status updates**: 'I've started working on it', 'The task is almost complete'",

  usage: "Remote Team Communication:\n\n🗣️ **Task assignment**: 'Could you review the pull request today?'\n🎯 **Delegation**: 'Please let me know if you need help'\n📋 **Status updates**: 'I've started the database migration'\n🤝 **Collaboration**: 'I suggest we schedule a quick sync to discuss this'",
  rules: [
    {
      from: "Polite question forms",
      to: "Could/Would + subject + verb (Could you update the documentation?)"
    },
    {
      from: "Future commitment",
      to: "Will + infinitive for task ownership (Sarah will handle the deployment)"
    },
    {
      from: "Present continuous for current work",
      to: "Is/am/are + -ing for current status (I'm working on the API)"
    },
    {
      from: "Going to for planned actions",
      to: "Going to + infinitive for scheduled tasks (I'm going to review it tomorrow)"
    }
  ],
  examples: [
    "**Could you handle the database optimization task next sprint?**",
    "**Maria will take care of the user authentication feature.**",
    "**I'm currently working on the API integration but can help with testing tomorrow.**",
    "**Would you be able to review my changes before the end of the day?**",
    "**The platform team is going to handle the infrastructure migration over the weekend.**",
    "**Could you please update the task status when you're done?**"
  ],
  commonMistakes,
  interactiveExercise: {
    type: "remote-communication",
    question: "Convert these direct commands into polite remote team communication:",
    options: [
      "Could you + verb, Would you be able to + verb, I'll let you know when",
      "Do it now, Handle this immediately, Start working on it soon",
      "I'm busy, Too much work, Cannot do it right now",
      "Not my responsibility, Ask someone else, Someone else should do it"
    ],
    answer: "Could you + verb, Would you be able to + verb, I'll let you know when"
  }
};
