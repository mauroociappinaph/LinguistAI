import { GrammarSection } from '../../../../../types';

export const grammar: GrammarSection = {
  title: "Reported Speech for Technical Discussions",
  explanation:
    "Reported Speech (also called Indirect Speech) allows you to report what someone said without using their exact words. " +
    "This is essential for summarizing meetings, reporting decisions, and documenting discussions.\n\n" +
    "**Key Changes:**\n" +
    "- Present → Past\n" +
    "- will → would\n" +
    "- can → could\n" +
    "- must → had to",

  usage:
    "Use Reported Speech to:\n\n" +
    "📋 **Summarize meetings**: 'The PM said **we would launch** next quarter.'\n" +
    "💬 **Report discussions**: 'Sarah mentioned **the API was down**.'\n" +
    "📝 **Document decisions**: 'The team agreed **they could optimize** the query.'",

  rules: [
    {
      from: "Direct: 'We will deploy tomorrow.'",
      to: "Reported: Sarah said they **would deploy** the next day."
    },
    {
      from: "Direct: 'The API is down.'",
      to: "Reported: Mike mentioned the API **was down**."
    },
    {
      from: "Direct: 'We can fix this bug.'",
      to: "Reported: The developer said they **could fix** that bug."
    }
  ],

  examples: [
    "The PM **said** we **would** release the feature next sprint.",
    "Sarah **mentioned** the database **was** slow.",
    "The client **stated** they **needed** the report by Friday.",
    "Mike **explained** that the system **had been** crashing intermittently.",
    "The team **agreed** they **could** refactor the code."
  ],

  commonMistakes: [
    {
      incorrect: "He said he will finish tomorrow.",
      correct: "He said he **would** finish the next day.",
      explanation: "Change 'will' to 'would' in reported speech."
    },
    {
      incorrect: "She told the API is down.",
      correct: "She **said** the API **was** down.",
      explanation: "Use 'said' (not 'told') when there's no indirect object, and shift present to past."
    },
    {
      incorrect: "The manager mentioned we will deploy today.",
      correct: "The manager mentioned we **would** deploy that day.",
      explanation: "Shift 'will' to 'would' and 'today' to 'that day' in reported speech."
    }
  ],

  interactiveExercise: {
    type: "transformation",
    question: "Direct: 'We can deploy tonight.' → Reported: The team said...",
    options: ["they can deploy tonight", "they could deploy that night", "we could deploy tonight"],
    answer: "they could deploy that night"
  }
};
