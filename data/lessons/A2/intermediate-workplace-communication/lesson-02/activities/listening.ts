import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Cloud Platform Evaluation",
  transcript:
    "Hi everyone, I've finished our cloud platform evaluation, and I want to share the results.\n\n" +
    "We analyzed AWS, Azure, and Google Cloud Platform across five criteria: pricing, features, performance, ecosystem, and ease of use.\n\n" +
    "AWS came out as the largest platform with the most comprehensive service offering. They have the biggest market share at 32%, making them the dominant player. AWS also has the largest ecosystem with the widest selection of third-party integrations. However, they're not the cheapest option—that title goes to Google Cloud Platform.\n\n" +
    "Azure is the best choice for organizations already invested in the Microsoft ecosystem. It offers the smoothest integration with Office 365, Active Directory, and other Microsoft products. Azure is also growing the fastest among enterprises, making it one of the most rapidly expanding platforms.\n\n" +
    "Google Cloud Platform excels in specific areas. It has the most advanced AI and machine learning tools, particularly for data analysis. GCP also offers the most competitive pricing for compute resources. However, it has the smallest market share among the three, which means the least mature third-party ecosystem.\n\n" +
    "In terms of performance, all three are industry leaders. AWS has the most global regions, ensuring the lowest latency worldwide. Azure has the most data center locations in Europe, making it the best option for EU compliance.\n\n" +
    "For our specific needs—heavy cloud-native development with strong DevOps practices—I recommend AWS as the best overall choice. It's the safest bet given its market leadership and the most extensive documentation available.",

  comprehensionQuestions: [
    {
      question: "Which cloud platform has the biggest market share?",
      answer: "AWS has the biggest market share at 32%."
    },
    {
      question: "Which platform is the cheapest?",
      answer: "Google Cloud Platform is the cheapest option."
    },
    {
      question: "What makes Azure the best choice for Microsoft users?",
      answer: "Azure offers the smoothest integration with Microsoft products like Office 365 and Active Directory."
    },
    {
      question: "Which platform has the most advanced AI tools?",
      answer: "Google Cloud Platform has the most advanced AI and machine learning tools."
    },
    {
      question: "Why is AWS recommended for the team?",
      answer: "AWS is the safest bet due to market leadership and the most extensive documentation."
    }
  ],

  audioSrc: ""
};
