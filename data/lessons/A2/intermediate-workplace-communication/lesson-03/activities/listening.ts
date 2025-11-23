import { ListeningActivity } from '../../../../../../types';

export const listeningActivity: ListeningActivity = {
  title: "Team Standup: API Integration Issues",
  transcript:
    "Good morning team. Let's go through yesterday's work and today's plans.\n\n" +
    "Sarah, the API endpoint that you were working on—is it ready for testing?\n\n" +
    "Almost. The endpoint that handles user authentication is complete, but the middleware that validates JWT tokens needs more testing. I'm also working on the documentation that explains how to use the new endpoints.\n\n" +
    "Great. Mike, what about the database migration that we discussed last week?\n\n" +
    "The migration scripts that I wrote are ready. However, developers who want to test locally need to run the seed script that populates test data. The schema that defines the new tables includes foreign keys that reference the users table, so we need to migrate in the correct order.\n\n" +
    "Makes sense. Lisa, how's the frontend integration going?\n\n" +
    "I'm hitting an issue with the payload that the API returns. The response format that we agreed on in the spec doesn't match what the endpoint is actually sending. The data that I'm receiving has nested objects that weren't in the original design.\n\n" +
    "That's on me. I made changes to the response structure that I forgot to document. I'll update the API specification that we keep in Confluence. Developers who integrate with this endpoint should refer to version 2.1 of the spec.\n\n" +
    "Thanks Sarah. One more thing—the deployment pipeline that failed yesterday. Do we know what caused it?\n\n" +
    "Yes, it was the Docker container that runs the integration tests. The environment variables that it needs weren't set correctly. I've fixed the configuration file that Jenkins uses, so the issue that we saw won't happen again.\n\n" +
    "Perfect. Let's continue with the regular work.",

  comprehensionQuestions: [
    {
      question: "What endpoint is Sarah working on?",
      answer: "Sarah is working on the endpoint that handles user authentication."
    },
    {
      question: "What do developers who want to test locally need to run?",
      answer: "They need to run the seed script that populates test data."
    },
    {
      question: "What issue is Lisa experiencing?",
      answer: "The response format doesn't match what the endpoint is actually sending."
    },
    {
      question: "Which version of the spec should developers refer to?",
      answer: "Developers should refer to version 2.1 of the spec."
    },
    {
      question: "What caused the deployment pipeline to fail?",
      answer: "The Docker container that runs integration tests had incorrectly set environment variables."
    }
  ],

  audioSrc: ""
};
