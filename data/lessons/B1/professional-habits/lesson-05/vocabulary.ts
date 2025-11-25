import { VocabularyItem, FunctionalChunk } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  {
    item: "navigating",
    explanation: "The act of moving through a website, application, or system.",
    example: "Navigating the new UI is very intuitive.",
    pronunciation: "/ˈnævɪɡeɪtɪŋ/"
  },
  {
    item: "button",
    explanation: "A UI element you click to perform an action.",
    example: "Click the blue button to continue.",
    pronunciation: "/ˈbʌtən/"
  },
  {
    item: "login / log in",
    explanation: "The process of accessing a system with your credentials.",
    example: "You need to log in to see your dashboard.",
    pronunciation: "/ˈlɔːɡɪn/ (noun), /lɔːɡ ɪn/ (verb)"
  },
  {
    item: "dashboard",
    explanation: "The main screen of an app that displays essential information.",
    example: "The dashboard shows your recent activity.",
    pronunciation: "/ˈdæʃbɔːrd/"
  },
  {
    item: "settings",
    explanation: "The section of an application where users adjust preferences.",
    example: "You can change your password in the settings.",
    pronunciation: "/ˈsɛtɪŋz/"
  },
  {
    item: "email",
    explanation: "Your digital address used for communication and logins.",
    example: "Enter your email to log in.",
    pronunciation: "/ˈiːmeɪl/"
  },
  {
    item: "username",
    explanation: "Your unique identifier for accessing a system.",
    example: "Your username is your email address.",
    pronunciation: "/ˈjuːzərneɪm/"
  },
  {
    item: "password",
    explanation: "A secret word or phrase used to access accounts.",
    example: "Don't share your password.",
    pronunciation: "/ˈpæsˌwɜːrd/"
  },
  {
    item: "icon",
    explanation: "A small symbol or image representing a function.",
    example: "Click the trash icon to delete the file.",
    pronunciation: "/ˈaɪkɒn/"
  },
  {
    item: "gear",
    explanation: "Common symbol for settings due to machinery reference.",
    example: "Click the gear icon to open settings.",
    pronunciation: "/ɡɪər/"
  },
  {
    item: "menu",
    explanation: "A list of actions or options available to the user.",
    example: "The main menu is on the left.",
    pronunciation: "/ˈmɛnjuː/"
  },
  {
    item: "modal",
    explanation: "A pop-up window requiring user action before continuing.",
    example: "A confirmation modal will appear after clicking delete.",
    pronunciation: "/ˈmoʊdəl/"
  },
  {
    item: "tooltip",
    explanation: "A small text box that appears when hovering over an element.",
    example: "Hover over the icon to see the tooltip.",
    pronunciation: "/ˈtuːltɪp/"
  },
  {
    item: "dropdown",
    explanation: "A UI element that expands to show more options.",
    example: "Select your role from the dropdown.",
    pronunciation: "/ˈdrɒpdaʊn/"
  },
  {
    item: "toggle",
    explanation: "A switch that can be turned on or off.",
    example: "Enable dark mode using the toggle.",
    pronunciation: "/ˈtɒɡəl/"
  }
];

export const phrasalVerbs: VocabularyItem[] = [
  {
    item: "log in",
    explanation: "To access a system using credentials.",
    example: "Please log in with your new password.",
    pronunciation: "/lɔːɡ ɪn/"
  },
  {
    item: "log out",
    explanation: "To exit your account from a system.",
    example: "Remember to log out when using a shared computer.",
    pronunciation: "/lɔːɡ aʊt/"
  },
  {
    item: "click on",
    explanation: "To press a mouse button on something.",
    example: "Click on the settings icon.",
    pronunciation: "/klɪk ɒn/"
  },
  {
    item: "scroll down",
    explanation: "To move downward on a screen.",
    example: "Scroll down to see more options.",
    pronunciation: "/skroʊl daʊn/"
  },
  {
    item: "scroll up",
    explanation: "To move upward on a screen.",
    example: "Scroll up to return to the top.",
    pronunciation: "/skroʊl ʌp/"
  },
  {
    item: "fill out",
    explanation: "To complete a form.",
    example: "Please fill out all required fields.",
    pronunciation: "/fɪl aʊt/"
  }
];

export const compoundWords: VocabularyItem[] = [
  {
    item: "user interface (UI)",
    explanation: "The visual part of an application that users interact with.",
    example: "The UI was redesigned to improve usability.",
    pronunciation: "/ˈjuːzər ˈɪntərfeɪs/"
  },
  {
    item: "login page",
    explanation: "The page where users enter credentials.",
    example: "The login page now supports OAuth.",
    pronunciation: "/ˈlɔːɡɪn peɪdʒ/"
  },
  {
    item: "loading screen",
    explanation: "A screen that appears while the system processes data.",
    example: "The loading screen lasts only a few seconds.",
    pronunciation: "/ˈloʊdɪŋ skriːn/"
  },
  {
    item: "dark mode",
    explanation: "A color theme with dark backgrounds and light text.",
    example: "Many users prefer dark mode at night.",
    pronunciation: "/dɑːrk moʊd/"
  },
  {
    item: "user profile",
    explanation: "A section containing personal information.",
    example: "Update your user profile to change your photo.",
    pronunciation: "/ˈjuːzər ˈproʊfaɪl/"
  }
];

export const functionalChunks: { title: string; chunks: FunctionalChunk[] } = {
  title: "Common UI Navigation Expressions",
  chunks: [
    {
      chunk: "Click on the [button/icon]",
      usage: "Used to give navigation instructions inside a UI"
    },
    {
      chunk: "Go to the [section/page]",
      usage: "To direct the user to a specific part of the app"
    },
    {
      chunk: "Enter your [email/password]",
      usage: "Typical instruction for login flows"
    },
    {
      chunk: "Navigate to the [settings/dashboard]",
      usage: "Formal instruction to move to another app section"
    },
    {
      chunk: "Scroll down/up to see more options",
      usage: "To guide the user through hidden or extended content"
    },
    {
      chunk: "Select the [option/item] from the menu",
      usage: "Choosing items within a navigation menu"
    }
  ]
};
