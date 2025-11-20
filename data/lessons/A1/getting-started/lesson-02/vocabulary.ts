
import { VocabularyItem, FunctionalChunk } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  {
    item: "company",
    explanation: "La organización para la que trabajas.",
    example: "I work for a tech company.",
    pronunciation: "/ˈkʌmpəni/"
  },
  {
    item: "position",
    explanation: "Tu rol o puesto en la empresa. Similar a 'job title'.",
    example: "My position is backend developer.",
    pronunciation: "/pəˈzɪʃən/"
  },
  {
    item: "team",
    explanation: "El grupo de personas con las que trabajas.",
    example: "Our team has five members.",
    pronunciation: "/tiːm/"
  },
  {
    item: "project",
    explanation: "Una iniciativa de trabajo con un objetivo específico.",
    example: "We are starting a new project next month.",
    pronunciation: "/ˈprɒdʒɛkt/"
  },
  {
    item: "email address",
    explanation: "Tu dirección de correo electrónico.",
    example: "My email address is example@company.com.",
    pronunciation: "/ˈiːmeɪl əˈdres/"
  },
  {
    item: "department",
    explanation: "Una división de una organización, como 'Engineering' o 'Marketing'.",
    example: "I work in the Engineering department.",
    pronunciation: "/dɪˈpɑːrtmənt/"
  },
  {
    item: "Could you repeat that, please?",
    explanation: "Pide que repitan información que no escuchaste, como el nombre de una empresa.",
    example: "A: 'I work for Atlassian.' B: 'Sorry, could you repeat that, please?'",
    pronunciation: "/kʊd juː rɪˈpiːt ðæt pliːz/"
  },
  {
    item: "Could you spell that?",
    explanation: "Pide que deletreen el nombre de una empresa o proyecto.",
    example: "A: 'The project is called 'Odyssey'.' B: 'Could you spell that?'",
    pronunciation: "/kʊd juː spɛl ðæt/"
  },
  {
    item: "What does 'department' mean?",
    explanation: "Pide una aclaración sobre un término del entorno laboral.",
    example: "What is the difference between a 'department' and a 'team'?",
    pronunciation: "/wɒt dʌz dɪˈpɑːrtmənt miːn/"
  }
];

export const phrasalVerbs: VocabularyItem[] = [
  {
    item: "fill out",
    explanation: "Completar un formulario con información.",
    example: "Please fill out this form with your details.",
    pronunciation: "/fɪl aʊt/"
  },
  {
    item: "write down",
    explanation: "Escribir algo en papel o en un documento.",
    example: "Let me write down your phone number.",
    pronunciation: "/raɪt daʊn/"
  }
];

export const compoundWords: VocabularyItem[] = [];

export const functionalChunks: { title: string; chunks: FunctionalChunk[] } = {
  title: "Functional Chunks: Sharing Information",
  chunks: [
    {
      chunk: "Let me check.",
      usage: "Use this phrase to say you need a moment to find information."
    },
    {
      chunk: "I'll get back to you.",
      usage: "Use this to promise you will provide an answer later."
    },
    {
      chunk: "Just to confirm...",
      usage: "Use this to verify that the information you have is correct."
    }
  ]
};
