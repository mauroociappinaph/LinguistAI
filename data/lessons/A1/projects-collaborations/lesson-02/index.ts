import { Lesson, Difficulty } from '../../../../../types';

export const lesson02: Lesson = {
  id: "pc2",
  title: "Code Reviews & Feedback",
  level: Difficulty.A1,
  description: "Learn to participate in code reviews and give/receive constructive feedback using modal verbs and technical communication patterns.",
  didYouKnow: "Code review is one of the most effective ways to catch bugs early - studies show it can reduce defect rates by up to 30%. Modern development teams use tools like GitHub Pull Requests, GitLab, and Azure DevOps to facilitate asynchronous reviews. The average developer now spends about 1-2 hours per day on code reviews.",

  grammar: {
    title: "Modal Verbs: Should/Could/Might for Suggestions and Possibilities",
    explanation:
      "**'Should'** expresses recommendations and best practices: 'You **should** add error handling'. **'Could'** suggests options: 'You **could** refactor this function'. **'Might'** indicates possibilities: 'This **might** cause performance issues'.\n\nIn code reviews: 'This **should** follow our style guide', 'You **could** extract this to a separate method', 'The database call **might** timeout here'.",
    usage:
      "Use these modals to provide constructive feedback:\n\n✅ **Recommendations**: 'You **should** add unit tests'\n💡 **Suggestions**: 'This **could** be optimized'\n⚠️ **Concerns**: 'This **might** cause issues'\n\nBe specific and provide context for better feedback.",
    rules: [
      {
        from: "Strong recommendations",
        to: "should + infinitive (You should comment this code)"
      },
      {
        from: "Possible improvements",
        to: "could + infinitive (You could use a different algorithm)"
      },
      {
        from: "Potential issues",
        to: "might + infinitive (This might break under load)"
      }
    ],
    examples: [
      "You **should** add input validation to prevent security issues.",
      "This function **could** be made more readable with better variable names.",
      "The API call **might** fail if the network is slow.",
      "We **should** follow the existing code patterns in this project.",
      "You **could** consider using a design pattern for this solution."
    ],
    commonMistakes: [
      {
        incorrect: "This code must be rewritten!",
        correct: "You should consider rewriting this code.",
        explanation:
          "Use 'should' for recommendations rather than imperatives like 'must', which sound too demanding."
      },
      {
        incorrect: "Add tests here.",
        correct: "You should add tests here.",
        explanation:
          "Include 'you' and 'should' to make feedback more collaborative and less direct."
      },
      {
        incorrect: "This could break.",
        correct: "This might break under some conditions.",
        explanation:
          "Use 'might' instead of 'could' when describing potential problems, 'could' implies capability."
      }
    ],
    interactiveExercise: {
      type: "fill-in-the-blank",
      question: "The error handling ___ be improved with logging.",
      options: ["should", "could", "might"],
      answer: "should"
    }
  },
  vocabulary: [
    {
      item: "code review",
      explanation: "The process of examining someone's code to check for mistakes and suggest improvements.",
      example: "All pull requests require at least two code reviews.",
      pronunciation: "/koʊd rɪˈvju/"
    },
    {
      item: "pull request",
      explanation: "A request to merge code changes into the main branch of a repository.",
      example: "Please submit a pull request when your feature is ready.",
      pronunciation: "/pʊl rɪˈkwɛst/"
    },
    {
      item: "commit message",
      explanation: "A short description of the changes made in a code commit.",
      example: "Use clear commit messages to explain what changed and why.",
      pronunciation: "/kəˈmɪt ˈmɛsɪdʒ/"
    },
    {
      item: "refactor",
      explanation: "To restructure existing code without changing its functionality.",
      example: "We should refactor this method to improve readability.",
      pronunciation: "/ˈrifæktər/"
    },
    {
      item: "merge conflict",
      explanation: "A situation when changes in different branches conflict and can't be merged automatically.",
      example: "Resolve the merge conflict before submitting the pull request.",
      pronunciation: "/mɜrdʒ ˈkɒnflɪkt/"
    },
    {
      item: "code coverage",
      explanation: "A metric that shows how much of the code is tested.",
      example: "We aim for at least 80% code coverage on new features.",
      pronunciation: "/koʊd ˈkʌvərɪdʒ/"
    },
    {
      item: "linting",
      explanation: "The process of running automated tools to check code quality and style.",
      example: "The linter caught several style violations in your code.",
      pronunciation: "/ˈlɪntɪŋ/"
    },
    {
      item: "edge case",
      explanation: "A scenario that occurs outside of normal operating parameters.",
      example: "Consider what happens with empty arrays - that's an edge case.",
      pronunciation: "/ɛdʒ keɪs/"
    },
    {
      item: "best practice",
      explanation: "A method or technique recognized as most effective.",
      example: "This follows JavaScript best practices for error handling.",
      pronunciation: "/bɛst ˈpræktɪs/"
    },
    {
      item: "technical debt",
      explanation: "The extra development work that results from choosing quick solutions now instead of better solutions later.",
      example: "Adding this quick fix will create technical debt for later.",
      pronunciation: "/ˈtɛknɪkəl dɛt/"
    },
    {
      item: "accept change",
      explanation: "To approve and incorporate a suggested code modification.",
      example: "I'll accept your change and commit it to the branch.",
      pronunciation: "/əkˈsɛpt tʃeɪndʒ/"
    },
    {
      item: "resolve thread",
      explanation: "To mark a discussion comment as addressed in a code review.",
      example: "Please resolve the thread once the issue is fixed.",
      pronunciation: "/rɪˈzɑlv θrɛd/"
    },
    {
      item: "blocking issue",
      explanation: "A critical problem that prevents code from being merged or deployed.",
      example: "This security vulnerability is a blocking issue for deployment.",
      pronunciation: "/ˈblɑkɪŋ ˈɪʃu/"
    },
    {
      item: "nitpick",
      explanation: "A minor, unimportant criticism, often about coding style.",
      example: "I'll leave this as a nitpick - the extra semicolon isn't critical.",
      pronunciation: "/ˈnɪtˌpɪk/"
    }
  ],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: {
    title: "Code Review Communication Patterns",
    chunks: [
      {
        chunk: "This ___ be simplified/extracted/improved.",
        usage: "Suggesting code improvements"
      },
      {
        chunk: "Consider adding ___ for [reason].",
        usage: "Making specific recommendations"
      },
      {
        chunk: "This ___ cause issues with [concern].",
        usage: "Highlighting potential problems"
      },
      {
        chunk: "What do you think about ___ instead?",
        usage: "Offering alternative approaches"
      },
      {
        chunk: "Great work on ___, just need to ___ here.",
        usage: "Balanced feedback (positive + suggestion)"
      }
    ]
  },
  scenario: "Conducting a code review on a team member's pull request and providing constructive feedback.",
  speaking: "This code looks good overall, but you should consider extracting this logic into a separate function. Also, this might cause issues with null values. What do you think about adding input validation?",
  speakingPracticeMode: "conversation",

  readingActivity: {
    title: "Reading: Effective Code Review Guidelines",
    text: "Effective code reviews combine technical feedback with constructive communication. **Reviewers should** focus on the code, not the person - approach criticism collaboratively. **Consider** suggesting improvements while acknowledging good practices. **Ask** questions when something is unclear rather than assuming mistakes. **Use** tools appropriately for automated checks. **Provide** specific examples when suggesting changes. **Balance** positive feedback with actionable recommendations.",
    comprehensionQuestions: [
      {
        question: "What should reviewers focus on?",
        answer: "The code, not the person."
      },
      {
        question: "How should criticism be approached?",
        answer: "Collaboratively."
      },
      {
        question: "What should you do when something is unclear?",
        answer: "Ask questions."
      }
    ],
  },

  listeningActivity: {
    title: "Listening: Code Review Discussion",
    transcript: "Let me review this pull request. The new authentication logic looks solid, but you should consider adding error handling for network failures. This function could be simplified by extracting the validation logic. Also, this might cause issues if the user token expires. What do you think about using the existing helper function instead? Overall great work on handling the edge cases properly.",
    comprehensionQuestions: [
      {
        question: "What looks solid in the code?",
        answer: "The new authentication logic."
      },
      {
        question: "What should be added for network failures?",
        answer: "Error handling."
      },
      {
        question: "What might cause issues?",
        answer: "If the user token expires."
      }
    ],
    audioSrc: "",
  },

  pronunciationClinic: {
    title: "Pronunciation Clinic: Development & Code Review Terms",
    explanation: "Master the pronunciation of key terms used in software development, code reviews, and version control conversations.",
    examples: [
      {
        term: "refactor",
        phonetic: "/ˈrifæktər/",
        tip: "Three syllables: 'ree-fack-ter'. Stress on first syllable. Don't say 'ref-act-ter'."
      },
      {
        term: "commit",
        phonetic: "/kəˈmɪt/",
        tip: "Two syllables: 'com-mit'. Stress on second syllable. Short 'i' sound."
      },
      {
        term: "pull request",
        phonetic: "/pʊl rɪˈkwɛst/",
        tip: "Three syllables: 'pull re-quest'. Stress on second syllable. 'Pull' like in tug-of-war."
      },
      {
        term: "merge conflict",
        phonetic: "/mɜrdʒ ˈkɒnflɪkt/",
        tip: "Three syllables: 'merge con-flict'. Stress on first word, then second. 'Conflict' like argue."
      },
      {
        term: "technical debt",
        phonetic: "/ˈtɛknɪkəl dɛt/",
        tip: "Four syllables: 'tech-ni-cal debt'. Stress on first syllable, then third. 'Debt' as in money owed."
      }
    ]
  },

  globalAccentLab: [
    {
      accent: "American English (Tech)",
      speakerBio: "Mike, Senior Developer from Austin",
      audioSrc: "",
      transcript: "Alright, let me take a look at this PR. The authentication flow is solid, but you should definitely add error handling for those edge cases. This could be simplified by using the existing auth helper we have. Might wanna consider adding some tests too."
    },
    {
      accent: "Australian English (Sydney)",
      speakerBio: "Lisa, Tech Lead from Sydney",
      audioSrc: "",
      transcript: "Good work on this feature, mate. The API integration looks ace, but you should consider refactoring that nested function. This might cause performance issues down the track. What do you reckon about adding some caching here?"
    }
  ],

  rolePlay: {
    title: "Code Review Session",
    objective: "Review a colleague's code submission and provide constructive feedback using appropriate modal verbs and professional communication patterns.",
    aiPersona: "Junior developer whose code is being reviewed",
    initialMessage: "I've submitted the user registration feature for review. What do you think? Are there any issues I should address before we merge it?"
  }
};
