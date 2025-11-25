import { VocabularyItem } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
    {
        item: "layout",
        explanation: "The arrangement of visual elements on a page.",
        example: "The mobile layout is different from the desktop version.",
        pronunciation: "/ˈleɪaʊt/",
    },
    {
        item: "navbar",
        explanation: "Navigation bar, usually at the top.",
        example: "Click the link in the navbar.",
        pronunciation: "/ˈnævbɑːr/",
    },
    {
        item: "sidebar",
        explanation: "A vertical column on the side of the page.",
        example: "The settings are in the sidebar.",
        pronunciation: "/ˈsaɪdbɑːr/",
    },
    {
        item: "footer",
        explanation: "The section at the bottom of the page.",
        example: "Contact info is in the footer.",
        pronunciation: "/ˈfʊtər/",
    },
    {
        item: "modal",
        explanation: "A popup window that appears on top of the content.",
        example: "Close the modal to continue.",
        pronunciation: "/ˈmoʊdl/",
    },
    {
        item: "alignment",
        explanation: "How elements are positioned relative to each other.",
        example: "Check the vertical alignment of the icons.",
        pronunciation: "/əˈlaɪnmənt/",
    },
];

export const phrasalVerbs: VocabularyItem[] = [];
export const compoundWords: VocabularyItem[] = [];

export const functionalChunks = {
    title: "Describing Layouts",
    chunks: [
        {
            chunk: "It should be [preposition]...",
            usage: "Suggesting a position."
        },
        {
            chunk: "Move it to the [direction]...",
            usage: "Giving layout instructions."
        },
        {
            chunk: "It looks aligned with...",
            usage: "Checking alignment."
        }
    ]
};
