
import { VocabularyItem, FunctionalChunk } from '../../../../../types';

export const vocabulary: VocabularyItem[] = [
  {
    item: "name",
    explanation: "Your full name as it appears on your work ID, commits, and email signature. Use your preferred name if appropriate. (Tu nombre completo tal como aparece en tu identificación laboral, commits y firma de correo. Usa tu nombre preferido si es apropiado).",
    example: "My name is Alex Johnson. You might know me as 'AJ' on Slack.",
    pronunciation: "/neɪm/"
  },
  {
    item: "professional background",
    explanation: "Your career path, previous roles, and key experiences that shape your current work. (Tu trayectoria profesional, roles anteriores y experiencias clave que definen tu trabajo actual).",
    example: "My professional background includes five years in backend development before transitioning to full-stack.",
    pronunciation: "/prəˈfeʃənl ˈbækɡraʊnd/"
  },
  {
    item: "current role",
    explanation: "Your job title, responsibilities, and seniority level. (Tu cargo actual, responsabilidades y nivel de antigüedad).",
    example: "My current role is Senior Software Engineer, focusing on API design and team leadership.",
    pronunciation: "/ˈkɜːrənt roʊl/"
  },
  {
    item: "technical expertise",
    explanation: "The technologies, frameworks, and tools you specialize in. (Las tecnologías, frameworks y herramientas en las que te especializas).",
    example: "My technical expertise centers on React, Node.js, and cloud architectures.",
    pronunciation: "/ˈteknɪkl ˌɛkspɜːrˈtiːz/"
  },
  {
    item: "work location",
    explanation: "Whether you're in-office, remote, or hybrid, and your general location if relevant. (Si trabajas en oficina, remoto o híbrido, y tu ubicación general si es relevante).",
    example: "I work remotely from São Paulo, Brazil, and collaborate across three time zones.",
    pronunciation: "/wɜːrk loʊˈkeɪʃən/"
  }
];

export const phrasalVerbs: VocabularyItem[] = [
  {
    item: "log in",
    explanation: "Access digital systems, applications, or accounts with credentials.",
    example: "I need to log in to the development environment before we start debugging.",
    pronunciation: "/lɒɡ ɪn/"
  },
  {
    item: "sign up",
    explanation: "Create new accounts or register for services and platforms.",
    example: "New team members need to sign up for our internal tools during onboarding.",
    pronunciation: "/saɪn ʌp/"
  },
  {
    item: "check in",
    explanation: "Report your status, location, or availability in both security and collaborative contexts.",
    example: "Remember to check in with your location when working from client sites.",
    pronunciation: "/tʃɛk ɪn/"
  }
];

export const compoundWords: VocabularyItem[] = [
  {
    item: "workstation",
    explanation: "Your physical or virtual work environment and equipment setup.",
    example: "My workstation includes dual monitors, a mechanical keyboard, and noise-canceling headphones.",
    pronunciation: "/ˈwɜːrkˈsteɪʃən/"
  },
  {
    item: "development environment",
    explanation: "The technical setup, tools, and servers used for building and testing software.",
    example: "Our development environment supports multiple programming languages and database systems.",
    pronunciation: "/dɪˈvɛləpmənt ɛnˈvaɪərənmənt/"
  },
  {
    item: "team member",
    explanation: "A colleague within your work group or project team.",
    example: "As a team member, you have access to our shared documentation and code repositories.",
    pronunciation: "/tim ˈmɛmbər/"
  }
];

export const functionalChunks: { title: string; chunks: FunctionalChunk[] } = {
  title: "Introduction Phrases for Professional Settings",
  chunks: [
    { chunk: "I am [Name] and I am [Role]", usage: "Core self-introduction formula" },
    { chunk: "My background is in [Field]", usage: "Sharing relevant professional experience" },
    { chunk: "I have [X] years of experience", usage: "Quantifying your professional level" },
    { chunk: "Currently, I am working on [Project]", usage: "Describing immediate responsibilities" },
    { chunk: "I specialize in [Technology/Field]", usage: "Highlighting key expertise areas" },
    { chunk: "I work remotely/from [Location]", usage: "Setting expectations for availability and collaboration style" }
  ]
};
