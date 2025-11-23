import { VocabularyItem } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
    {
        item: "code",
        explanation: "To write computer programs. (Escribir código/programar).",
        example: "I can code in TypeScript.",
        pronunciation: "/koʊd/",
    },
    {
        item: "debug",
        explanation: "To find and fix errors. (Depurar/Corregir errores).",
        example: "Can you debug this function?",
        pronunciation: "/diːˈbʌɡ/",
    },
    {
        item: "deploy",
        explanation: "To put code onto a server/production. (Desplegar).",
        example: "We can deploy the app now.",
        pronunciation: "/dɪˈplɔɪ/",
    },
    {
        item: "test",
        explanation: "To check if code works correctly. (Probar/Testear).",
        example: "I can test the API endpoints.",
        pronunciation: "/tɛst/",
    },
    {
        item: "design",
        explanation: "To plan the look or structure. (Diseñar).",
        example: "She can design the database schema.",
        pronunciation: "/dɪˈzaɪn/",
    },
    {
        item: "manage",
        explanation: "To control or be in charge of. (Gestionar/Administrar).",
        example: "He can manage the project timeline.",
        pronunciation: "/ˈmænɪdʒ/",
    },
];

export const phrasalVerbs: VocabularyItem[] = [];
export const compoundWords: VocabularyItem[] = [];

export const functionalChunks = {
    title: "Talking about Skills",
    chunks: [
        {
            chunk: "I can [verb]...",
            usage: "Stating a skill."
        },
        {
            chunk: "I can't [verb] yet...",
            usage: "Admitting a gap in knowledge."
        },
        {
            chunk: "Can you [verb]...?",
            usage: "Asking for ability or help."
        }
    ]
};
