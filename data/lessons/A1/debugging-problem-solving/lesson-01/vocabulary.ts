export const vocabulary = [
    {
      item: "bug",
      explanation: "An error or flaw in a computer program that causes it to behave in an unexpected way.",
      example: "We found a serious bug in the login function.",
      pronunciation: "/bʌɡ/"
    },
    {
      item: "crash",
      explanation: "When a program stops working suddenly and has to be restarted.",
      example: "The app crashed when I clicked the save button.",
      pronunciation: "/kræʃ/"
    },
    {
      item: "error message",
      explanation: "A message that appears on screen when something goes wrong.",
      example: "An error message appeared saying 'Connection failed'.",
      pronunciation: "/ˈɛrər ˈmɛsɪdʒ/"
    },
    {
      item: "freeze",
      explanation: "When a program stops responding and becomes unresponsive.",
      example: "The interface froze and wouldn't accept any input.",
      pronunciation: "/friz/"
    },
    {
      item: "hang",
      explanation: "When an application stops responding but doesn't completely crash.",
      example: "The browser tab was hanging and taking forever to load.",
      pronunciation: "/hæŋ/"
    },
    {
      item: "reproduce",
      explanation: "To make the same problem happen again in order to test or debug it.",
      example: "I wasn't able to reproduce the issue on my machine.",
      pronunciation: "/ˌriprəˈdus/"
    },
    {
      item: "unexpected behavior",
      explanation: "When software acts in a way that wasn't planned or intended.",
      example: "The button showed unexpected behavior when clicked repeatedly.",
      pronunciation: "/ˌʌnɪkˈspɛktɪd bɪˈheɪvjər/"
    },
    {
      item: "report a bug",
      explanation: "To tell someone about a problem found in software.",
      example: "Users can report bugs through our support portal.",
      pronunciation: "/rɪˈpɔrt ə bʌɡ/"
    },
    {
      item: "steps to reproduce",
      explanation: "The specific actions needed to make a bug happen again.",
      example: "The bug report included detailed steps to reproduce the issue.",
      pronunciation: "/stɛps tə ˌriprəˈdus/"
    },
    {
      item: "occurred",
      explanation: "What happened or took place at a particular time.",
      example: "The error occurred when I opened multiple tabs simultaneously.",
      pronunciation: "/əˈkɜrd/"
    },
    {
      item: "appeared",
      explanation: "Became visible on screen or in the interface.",
      example: "A red error message appeared when I submitted the form.",
      pronunciation: "/əˈpɪrd/"
    },
    {
      item: "disappeared",
      explanation: "Stopped being visible or vanished from the screen.",
      example: "The submit button disappeared after I clicked it.",
      pronunciation: "/ˌdɪsəˈpɪrd/"
    },
    {
      item: "happened",
      explanation: "Took place or occurred at a specific time.",
      example: "What happened when you clicked the download button?",
      pronunciation: "/ˈhæpənd/"
    },
    {
      item: "broke",
      explanation: "Stopped working properly or failed to function.",
      example: "The search feature broke after the latest deployment.",
      pronunciation: "/broʊk/"
    }
  ];

export const phrasalVerbs = [];
export const compoundWords = [];

export const functionalChunks = [{
    title: "Bug Reporting Communication Patterns",
    chunks: [
      {
        chunk: "When I ___ [action], the app ___ [problem].",
        usage: "Describing what happened during bug discovery"
      },
      {
        chunk: "The error ___ when I ___ [trigger action].",
        usage: "Explaining the conditions that caused the bug"
      },
      {
        chunk: "I ___ [repro steps], but ___ [what should happen].",
        usage: "Providing steps to reproduce issues"
      },
      {
        chunk: "___ error message ___ [appeared/said].",
        usage: "Reporting what messages appeared"
      },
      {
        chunk: "The issue ___ in [version/browser/device] but not in ___.",
        usage: "Describing when the bug occurs vs. doesn't occur"
      }
    ]
  }];
