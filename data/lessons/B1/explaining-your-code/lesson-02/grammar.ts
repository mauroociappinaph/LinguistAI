import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Present Perfect for Professional Achievement",
  explanation: "**Present Perfect (have/has + past participle)**: Connects past actions with present relevance\n\n**Key Uses in Professional Settings:**\n- **Experience**: 'I have worked with React for 3 years'\n- **Achievements**: 'The team has delivered 5 major features'\n- **Current State**: 'We have implemented the new architecture'\n- **Unspecified Time**: 'I have encountered similar issues before'",
  usage: "Presentations & Code Walkthroughs:\n\n🎯 **Project Updates**: 'We have completed the backend migration'\n🏆 **Personal Branding**: 'I have optimized database performance by 40%'\n📈 **Team Achievements**: 'Our team has reduced deployment time'",
  rules: [
    {
      from: "Stative verbs in present perfect",
      to: "Have/has + past participle (have implemented, has improved)"
    },
    {
      from: "Duration with 'for/since'",
      to: "Have/has + past participle + for/since (for 2 years, since last month)"
    },
    {
      from: "Experience vs achievement",
      to: "Experience: ongoing capability, Achievement: specific completed work"
    }
  ],
  examples: [
    "**I have implemented** authentication systems for enterprise clients.",
    "**The team has delivered** 15 features in the current sprint.",
    "**We have reduced** response times by implementing caching strategies.",
    "**Project Alpha has exceeded** all performance benchmarks we established.",
    "**I have worked** with distributed systems for over 4 years.",
    "**The application has scaled** to handle 1M daily active users."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "Complete with present perfect: 'The development team ___ (deliver) three major releases ___ (since) the beginning of the year.'",
    options: ["has delivered, since", "delivered, since", "will deliver, for", "is delivering, in"],
    answer: "has delivered, since"
  }
};
