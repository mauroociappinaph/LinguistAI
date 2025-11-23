import { Lesson, Difficulty } from '../../../../../types';

export const lesson07: Lesson = {
  id: "eyc7",
  title: "Narrating Professional Experiences",
  level: Difficulty.B1,
  description: "Learn to share professional experiences using narrative tenses - Present Perfect for ongoing experience and Past Simple for specific events.",

  grammar: {
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
    ]
  },
  vocabulary: [
    {
      item: "experience",
      explanation: "Knowledge or skill from doing or seeing things, or practical knowledge of something.",
      example: "I have 5 years of experience with distributed systems.",
      pronunciation: "/ɪkˈspɪriəns/"
    },
    {
      item: "expertise",
      explanation: "Special skill or knowledge that you get from experience.",
      example: "My expertise lies in database optimization techniques.",
      pronunciation: "/ˌɛkspɜrˈtiːz/"
    }
  ],
  scenario: "Sharing professional background during interviews or team introductions.",
  speaking: "I have worked in software development for 6 years. I led the transition to microservices at my previous company and have implemented continuous integration pipelines at three different organizations.",
  speakingPracticeMode: "narrative"
};
