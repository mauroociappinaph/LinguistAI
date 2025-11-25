import { VocabularyItem, FunctionalChunk } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  { item: "have / has", explanation: "To possess, own, or hold.", example: "I have a mechanical keyboard.", pronunciation: "/hæv/ /hæz/" },

  { item: "hold", explanation: "To have or keep something. It can also mean 'to contain'.", example: "This variable holds the user's ID.", pronunciation: "/hoʊld/" },

  { item: "currently", explanation: "At the present time.", example: "This is the laptop I am currently using.", pronunciation: "/ˈkɜːrəntli/" },

  { item: "this / that", explanation: "Demonstratives for singular objects. 'This' is near, 'that' is far.",
    example: "This is my mouse. That is your charger.", pronunciation: "/ðɪs/ /ðæt/" },

  { item: "these / those", explanation: "Demonstratives for plural objects. 'These' are near, 'those' are far.",
    example: "These are my headphones. Those are the old speakers.", pronunciation: "/ðiːz/ /ðoʊz/" },

  { item: "monitor", explanation: "A screen used to display output from a computer.",
    example: "I need a second monitor for work.", pronunciation: "/ˈmɒnɪtər/" },

  { item: "keyboard", explanation: "A panel of keys for typing.",
    example: "This keyboard has RGB lighting.", pronunciation: "/ˈkiːbɔːrd/" },

  { item: "mouse", explanation: "A handheld pointing device.",
    example: "My mouse isn't working.", pronunciation: "/maʊs/" },

  { item: "laptop", explanation: "A portable computer.",
    example: "My company gave me a new laptop.", pronunciation: "/ˈlæpˌtɒp/" },

  { item: "device", explanation: "A piece of electronic equipment.",
    example: "This device has great battery life.", pronunciation: "/dɪˈvaɪs/" },

  { item: "setup", explanation: "Your complete workspace arrangement.",
    example: "I have a dual-monitor setup.", pronunciation: "/ˈsɛtˌʌp/" },

  { item: "configuration", explanation: "The arrangement of system settings.",
    example: "This server has a complex configuration.", pronunciation: "/kənˌfɪɡjəˈreɪʃən/" },

  { item: "component", explanation: "A part of a system or device.",
    example: "These components belong to the new PC.", pronunciation: "/kəmˈpoʊnənt/" },
];



// --------------------
// ✅ PHRASAL VERBS
// --------------------

export const phrasalVerbs: VocabularyItem[] = [
  {
    item: "set up",
    explanation: "To arrange or prepare equipment or a system.",
    example: "I need to set up my new monitor.",
    pronunciation: "/ˈsɛt ʌp/"
  },
  {
    item: "plug in",
    explanation: "To connect a device to a power source.",
    example: "Plug in the charger.",
    pronunciation: "/plʌg ɪn/"
  },
  {
    item: "turn on / turn off",
    explanation: "To activate or deactivate a device.",
    example: "Turn on the laptop and check the updates.",
    pronunciation: "/tɜːrn ɒn/ /tɜːrn ɔːf/"
  },
  {
    item: "power up / power down",
    explanation: "To start or shut down a device.",
    example: "Power up the server to start the deployment.",
    pronunciation: "/ˈpaʊər ʌp/ /ˈpaʊər daʊn/"
  },
  {
    item: "log in / log out",
    explanation: "To access or exit a system using credentials.",
    example: "Log in to your account to check the settings.",
    pronunciation: "/lɔːg ɪn/ /lɔːg aʊt/"
  },
  {
    item: "run into",
    explanation: "To encounter a problem.",
    example: "I ran into a keyboard driver issue.",
    pronunciation: "/rʌn ˈɪntuː/"
  }
];


// --------------------
// ✅ COMPOUND WORDS
// --------------------

export const compoundWords: VocabularyItem[] = [
  {
    item: "home office",
    explanation: "A space in your home used for work.",
    example: "I have a comfortable home office setup.",
    pronunciation: "/ˈhoʊm ˌɒfɪs/"
  },

  {
    item: "workstation",
    explanation: "A desk and computer setup for work.",
    example: "This workstation has two monitors and a docking station.",
    pronunciation: "/ˈwɜːrkˌsteɪʃən/"
  },

  {
    item: "power cable",
    explanation: "A cable used to supply electricity.",
    example: "I can't find the power cable.",
    pronunciation: "/ˈpaʊər ˌkeɪbəl/"
  },

  {
    item: "USB port",
    explanation: "A slot for connecting USB devices.",
    example: "This laptop has three USB ports.",
    pronunciation: "/ˌjuːˌɛsˈbiː pɔːrt/"
  },

  {
    item: "docking station",
    explanation: "A device used to connect a laptop to multiple peripherals.",
    example: "I have a docking station for my monitors.",
    pronunciation: "/ˈdɒkɪŋ ˌsteɪʃən/"
  }
];


// --------------------
// ✅ FUNCTIONAL CHUNKS (SUPER ÚTILES)
// --------------------

export const functionalChunks: { title: string; chunks: FunctionalChunk[] } = {
  title: "Chunks for Describing Your Workspace & Equipment",
  chunks: [
    { chunk: "I have a [device/object]", usage: "General possession statement" },
    { chunk: "She/He has a [device/object]", usage: "Describing someone else’s equipment" },
    { chunk: "This is my [object]", usage: "Identifying a nearby item (singular, near)" },
    { chunk: "That is my [object] over there", usage: "Identifying a far item (singular, far)" },
    { chunk: "These are my [objects]", usage: "Identifying multiple nearby items" },
    { chunk: "Those are the old [objects]", usage: "Identifying multiple far items" },

    // WORKSPACE FUNCTIONALITY
    { chunk: "I have a setup with [items]", usage: "Describing your workspace configuration" },
    { chunk: "I work with [tools/equipment]", usage: "Explaining tools used daily" },
    { chunk: "My workstation has [items]", usage: "Describing what your desk or area includes" },

    // TALKING TO IT SUPPORT
    { chunk: "I have an issue with my [device]", usage: "Reporting a technical problem" },
    { chunk: "This device has a problem", usage: "Pointing out malfunctioning equipment" },
    { chunk: "I need a new [device] because [reason]", usage: "Requesting new equipment in professional context" }
  ]
};
