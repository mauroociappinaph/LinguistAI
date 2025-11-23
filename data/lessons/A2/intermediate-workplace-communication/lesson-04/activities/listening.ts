import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Architecture Discussion: Choosing Our Frontend Stack",
  transcript:
    "Alright team, let's finalize our framework choice. I've prepared a comparison of React, Vue, and Svelte based on our evaluation criteria.\n\n" +
    "First, ecosystem and community support. React is clearly the winner here—it has the largest ecosystem by far. Vue, which has been growing rapidly, has a good ecosystem but it's smaller than React's. Svelte, which is the newest of the three, has the smallest community, which is a concern for long-term support.\n\n" +
    "For developer experience, Vue stands out. It's the easiest to learn and has the clearest documentation. React is more flexible than Vue, which some developers prefer, but it can also be overwhelming for beginners. Svelte has the most innovative approach—it compiles to vanilla JavaScript, which eliminates the runtime overhead that React and Vue have.\n\n" +
    "Performance-wise, Svelte is the fastest because it doesn't use a virtual DOM. However, for applications that aren't performance-critical, React and Vue are fast enough. React, which has been optimized over many years, performs excellently for large applications.\n\n" +
    "Hiring is another important factor. React developers are the easiest to find—there are more React developers than Vue and Svelte developers combined. This makes React the safest choice from a staffing perspective.\n\n" +
    "Now for my recommendation: While Svelte is technically the most impressive and the fastest, React is the better choice for us. React has the most mature ecosystem, which means we'll have solutions for problems that we haven't even encountered yet. For a startup that needs to move fast, React's ecosystem is more valuable than Svelte's performance benefits.\n\n" +
    "Vue would be a great choice if we had mostly junior developers who needed a gentler learning curve. But since our team is experienced, and we need the strongest ecosystem, React is undoubtedly the best option.\n\n" +
    "Any questions or concerns about this recommendation?",

  comprehensionQuestions: [
    {
      question: "Which framework has the largest ecosystem?",
      answer: "React has the largest ecosystem by far."
    },
    {
      question: "Why is Svelte the fastest?",
      answer: "Svelte is the fastest because it compiles to vanilla JavaScript and doesn't use a virtual DOM."
    },
    {
      question: "Which framework is the easiest to learn?",
      answer: "Vue is the easiest to learn and has the clearest documentation."
    },
    {
      question: "Why is React the safest choice for hiring?",
      answer: "React developers are the easiest to find—there are more React developers than Vue and Svelte developers combined."
    },
    {
      question: "What is the final recommendation and why?",
      answer: "React is recommended because it has the most mature ecosystem, which is more valuable than Svelte's performance benefits for a startup."
    }
  ],

  audioSrc: ""
};
