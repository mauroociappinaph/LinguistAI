import { GrammarSection } from '../../../../../types';
import { commonMistakes } from './commonMistakes';

export const grammar: GrammarSection = {
  title: "Narrative Tenses for Professional Experience",
  explanation: "**Present Perfect for Experience**: 'I have worked with React for 3 years' - shows current relevant expertise\n**Past Simple for Events**: 'I led the migration project last year' - specific completed events\n**Combined**: 'I have implemented 5 microservices and led the last deployment'",
  usage: "Professional Storytelling:\n\n📚 **Résumé/Bio**: 'I have developed scalable applications'\n🔄 **Specific Projects**: 'I redesigned the user interface in 2022'\n🎯 **Combined**: 'Since graduating, I have worked on 10 projects'",
  rules: [
    {
      from: "Current experience/expertise",
      to: "Have/has + past participle (have developed, has implemented)"
    },
    {
      from: "Specific past events",
      to: "Subject + past simple (developed, implemented)"
    },
    {
      from: "Timeline connection",
      to: "Since + time + have/has, For + period + have/has"
    }
  ],
  examples: [
    "**I have worked** as a full-stack developer **for 4 years** and **designed** the current architecture.",
    "**We have implemented** CI/CD pipelines **since 2021**, and **automated** the deployment process last quarter.",
    "**I have led** 15 code reviews **since joining** the team and **identified** critical bugs in important projects.",
    "**The team has achieved** 99.9% uptime **for the last 6 months**; **we resolved** the outage incident two weeks ago."
  ],
  commonMistakes,
  interactiveExercise: {
    type: "fill-in-the-blank",
    question: "Complete with present perfect or past simple: '___ you ___ (ever/use) microservices? ___ you ___ (implement) your first one last year?'",
    options: ["Have, ever used, Did, implement", "Has, ever used, Did, implement", "Have, ever use, Do, implement"],
    answer: "Have, ever used, Did, implement"
  }
};
