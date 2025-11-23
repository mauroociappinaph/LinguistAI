export const vocabulary = [
  {
    item: "implement",
    explanation: "To put a plan, decision, or agreed system into operation.",
    example: "The cryptography algorithm is implemented in the security module.",
    pronunciation: "/ˈɪmplɪˌmɛnt/"
  },
  {
    item: "configure",
    explanation: "To set up or arrange something in a particular way.",
    example: "The application is configured to handle high traffic loads.",
    pronunciation: "/kənˈfɪɡjər/"
  },
  {
    item: "optimize",
    explanation: "To make something as good or effective as possible.",
    example: "Database queries are optimized for better performance.",
    pronunciation: "/ˈɑptɪmaɪz/"
  },
  {
    item: "deploy",
    explanation: "To put software into production or use.",
    example: "The new release is deployed to all servers simultaneously.",
    pronunciation: "/dɪˈplɔɪ/"
  },
  {
    item: "integrate",
    explanation: "To combine or incorporate different systems or elements.",
    example: "Third-party services are integrated via RESTful APIs.",
    pronunciation: "/ˈɪntɪɡreɪt/"
  },
  {
    item: "validate",
    explanation: "To check or confirm that something is correct or acceptable.",
    example: "User input is validated before processing.",
    pronunciation: "/ˈvælɪdeɪt/"
  },
  {
    item: "maintain",
    explanation: "To keep something in good condition or working order.",
    example: "Code standards are maintained throughout the project.",
    pronunciation: "/meɪnˈteɪn/"
  },
  {
    item: "document",
    explanation: "To record or write information about something.",
    example: "All APIs are documented following OpenAPI specifications.",
    pronunciation: "/ˈdɑkjumənt/"
  }
];

export const phrasalVerbs = [];

export const compoundWords = [];

export const functionalChunks = {
  title: "Technical Documentation Patterns",
  chunks: [
    {
      chunk: "[Component/Process] is [action+past participle]",
      usage: "Describing current system states and configurations"
    },
    {
      chunk: "[Feature] was [action+past participle] to [purpose]",
      usage: "Explaining implementation decisions in code comments"
    },
    {
      chunk: "[Process] is handled [automatically/manually]",
      usage: "Documenting system behaviors and automation"
    }
  ]
};
