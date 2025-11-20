import { GrammarSection } from '../../../../../types';
import { interactiveExercise } from './interactiveExercise';

export const grammar: GrammarSection = {
  title: "Simple Present: Verb 'to be'",
  explanation:
    "The verb **'to be'** is the foundation of all English communication. It helps you describe who you are, where you are, and what your current situation is. Think of it as your linguistic operating system — everything else builds on top of it.\n\n" +
    "**Why it's crucial in IT:**\n" +
    "- Introductions during stand-ups, onboarding, and networking\n" +
    "- Describing your job title, tech stack, or responsibilities\n" +
    "- Updating the status of tasks, servers, deployments, or tickets\n" +
    "- Communicating clearly with colleagues, clients, PMs, and stakeholders\n\n" +
    "The rule is simple and never changes in the present tense:\n\n" +
    "**I → am** | **You / We / They → are** | **He / She / It → is**\n\n" +
    "**Contractions matter:** In natural spoken English, full forms sound robotic. Always use **I'm, you're, we're, they're, he's, she's, it's** in everyday conversation — especially in meetings, interviews, and stand-ups.",

  usage:
    "'To be' is used constantly in the tech world. It's how you describe identity, role, location, availability, and status — all essential in modern teamwork.\n\n" +
    "**Written communications:** Emails, Slack/Teams updates, documentation, commit messages\n" +
    "**Verbal exchanges:** Daily stand-ups, sprint reviews, demos, retros, 1:1s\n" +
    "**Formal contexts:** Job interviews, performance reviews, client calls\n" +
    "**Informal contexts:** Team chats, onboarding new hires, quick project syncs\n\n" +
    "Whenever you're stating something that *is* true now — without describing an action — you're using the verb 'to be'.",

  rules: [
   { 
    from: "I", 
    to: "am",
   
  },
   { 
    from: "You", 
    to: "are",
   
  },
   { 
    from: "We", 
    to: "are",
   
  },
   { 
    from: "They", 
    to: "are",
   
  },
  { 
    from: "He/She/It", 
    to: "is",
    
  }
  ],

  examples: [
    "**Identity & Role:** " +
      "'I **am** a frontend developer.' / 'She **is** our new DevOps engineer.' / 'We **are** building a microservices architecture.'",

    "**Current Status:** " +
      "'The server **is** down for maintenance.' / 'You **are** working on the payment integration.' / 'They **are** in sprint planning.'",

    "**Team Composition:** " +
      "'Our team **is** distributed across three continents.' / 'I **am** the only woman in the engineering department.'",

    "**Location & Availability:** " +
      "'He **is** currently in San Francisco for a conference.' / 'We **are** available for calls between 9 AM and 5 PM EST.'",

    "**Characteristics & Quality:** " +
      "'The system **is** highly scalable.' / 'This codebase **is** well-documented.' / 'Our process **is** agile and efficient.'",

    "**Professional Identity (extra clarity):** " +
      "'You **are** part of the backend squad.' / 'It **is** a critical service in our architecture.'"
  ],

  commonMistakes: [
    {
      incorrect: "I is a developer.",
      correct: "I am a developer.",
      explanation:
        "Subject-verb agreement: 'I' always pairs with 'am'. This is the only exception in English where the first person doesn't follow a typical pattern."
    },
    {
      incorrect: "They is from the same team.",
      correct: "They are from the same team.",
      explanation:
        "'They' is treated as plural, even when referring to one person in modern English. It always uses 'are'."
    },
    {
      incorrect: "The team are working good.",
      correct: "The team is working well.",
      explanation:
        "In American English, collective nouns like 'team' are singular. Also, 'good' is an adjective — the correct adverb is 'well'."
    },
    {
      incorrect: "I am interesting in your API.",
      correct: "I am interested in your API.",
      explanation:
        "'Interesting' describes things. 'Interested' describes how a person feels. Never say 'I am interesting' unless you're complimenting yourself."
    }
  ],

  interactiveExercise
};