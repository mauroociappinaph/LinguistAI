import { GrammarSection } from '../../../../../types';
import { interactiveExercise } from './interactiveExercise';

export const grammar: GrammarSection = {
  title: "Explicit vs. Implicit Learning",
  explanation: "Think of your brain as having two ways of learning, like two different processing modes for acquiring a new skill, such as English.\n\n1.  **Top-Down Learning (Explicit)**: This is your analytical brain. You are **taught** a rule, you think about it **consciously**, and then you apply it. It’s like learning a design pattern from a book. It can be slow and **effortful** at first.\n\n2.  **Bottom-Up Learning (Implicit)**: This is your intuitive brain. You learn naturally by seeing patterns in context, without **realizing it**. You learn to **spot** what 'feels right' **instinctively**, much like how you learned your first language. This process makes your language use **smoothly** and **accurately**.",
  usage: "This course is designed to train both systems. We give you explicit rules, but we also provide many contextual examples and accent labs to help your brain absorb the patterns implicitly. The goal is fluency, where English feels automatic.",
  examples: [
    "**Explicit**: The rule says 'add -s for plural'. You learn this rule and then apply it: 'bugs', 'features', 'sprints'.",
    "**Implicit**: You read and hear 'the code **is** running', 'the server **is** down', 'she **is** the designer' hundreds of times. Your brain learns the pattern without thinking about it.",
    "Think about learning a new framework. You can read the documentation (explicit), but you only really **get the hang of it** after writing and reading a lot of code (implicit)."
  ],
  commonMistakes: [
    {
      incorrect: "The code runs accurate.",
      correct: "The code runs accurately.",
      explanation: "Use an adverb (accurately) to describe a verb (runs), not an adjective (accurate)."
    },
    {
      incorrect: "He learns instinctive new patterns.",
      correct: "He instinctively learns new patterns.",
      explanation: "The adverb 'instinctively' should describe the verb 'learns'."
    }
  ],
  interactiveExercise,
  rules: []
};
