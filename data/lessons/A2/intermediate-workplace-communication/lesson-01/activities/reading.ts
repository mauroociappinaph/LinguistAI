import { ReadingActivity } from '../../../../../../types';

export const readingActivity: ReadingActivity = {
  title: "Comparing Frontend Frameworks: React vs Vue",
  text:
    "Choosing the right frontend framework is crucial for modern web development. React and Vue are two of the most popular options, but they have different strengths.\n\n" +
    "React, developed by Meta (Facebook), is older and more established than Vue. It has a larger community and ecosystem, which means you'll find more libraries, tools, and learning resources. React is more flexible than Vue, allowing developers to structure their applications in many different ways. However, this flexibility can also make React more complex for beginners.\n\n" +
    "Vue, created by Evan You, is newer than React but has gained popularity quickly. Vue is easier to learn than React because it has simpler syntax and better documentation. The Vue framework is more opinionated than React, providing clear guidelines on how to structure applications. This makes Vue faster to get started with, especially for small to medium-sized projects.\n\n" +
    "From a performance perspective, both frameworks are highly performant, but Vue is slightly lighter than React in bundle size. React's virtual DOM is more mature than Vue's, but Vue's reactivity system is more straightforward.\n\n" +
    "For job opportunities, React is currently more popular than Vue in the market. Companies like Facebook, Instagram, Netflix, and Airbnb use React. Vue is used by companies like Alibaba, Xiaomi, and GitLab.\n\n" +
    "In conclusion, React is better than Vue for large-scale applications and teams that value flexibility. Vue is better than React for smaller projects and developers who want a simpler learning curve.",

  comprehensionQuestions: [
    {
      question: "Which framework is easier to learn according to the text?",
      answer: "Vue is easier to learn than React because it has simpler syntax and better documentation."
    },
    {
      question: "Why does React have more libraries and tools than Vue?",
      answer: "React has more libraries and tools because it's older and has a larger community and ecosystem."
    },
    {
      question: "Which framework is lighter in bundle size?",
      answer: "Vue is slightly lighter than React in bundle size."
    },
    {
      question: "What makes Vue faster to get started with?",
      answer: "Vue is more opinionated and provides clearer guidelines, making it faster to get started with."
    },
    {
      question: "Which framework is better for job opportunities?",
      answer: "React is more popular in the job market than Vue."
    }
  ]
};
