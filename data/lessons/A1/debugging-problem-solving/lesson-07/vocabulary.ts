export const vocabulary = [
    {
      item: "UI states",
      explanation: "Different visual appearances and behaviors a user interface can have",
      example: "Check all UI states: loading, success, error, and disabled.",
      pronunciation: "/ˈjuː aɪ steɪts/"
    },
    {
      item: "loading spinner",
      explanation: "A visual element that shows something is being processed",
      example: "The loading spinner is spinning but never stops.",
      pronunciation: "/ˈloʊdɪŋ ˈspɪnər/"
    },
    {
      item: "real-time data",
      explanation: "Information that updates automatically and immediately",
      example: "Real-time data is not updating in the dashboard.",
      pronunciation: "/ˈriːəl taɪm ˈdeɪtə/"
    },
    {
      item: "rendering issue",
      explanation: "A problem with how content is displayed on screen",
      example: "There's a rendering issue with the menu items.",
      pronunciation: "/ˈrɛndərɪŋ ˈɪʃuː/"
    },
    {
      item: "race condition",
      explanation: "When multiple operations try to access shared resources simultaneously",
      example: "The race condition is causing data corruption.",
      pronunciation: "/reɪs kənˈdɪʃən/"
    },
    {
      item: "state management",
      explanation: "The process of handling and updating application state",
      example: "State management is failing when users navigate quickly.",
      pronunciation: "/steɪt ˈmænɪdʒmənt/"
    }
  ];

export const phrasalVerbs = [];
export const compoundWords = [];

export const functionalChunks = [{
    title: "UI Issue Description Patterns",
    chunks: [
      {
        chunk: "The [element] is ___ when it should ___",
        usage: "Describing incorrect UI behaviors"
      },
      {
        chunk: "[Data/component] is not ___ correctly",
        usage: "Identifying specific display problems"
      },
      {
        chunk: "When users [action], the [UI element] ___",
        usage: "Describing user-triggered UI issues"
      }
    ]
  }];
