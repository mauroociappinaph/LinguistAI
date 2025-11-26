import { Module, Difficulty } from '../types';

/**
 * Curriculum Metadata
 * Estructura ligera del currículum que solo contiene metadatos de módulos y lecciones
 * El contenido completo de las lecciones se carga dinámicamente cuando es necesario
 */

export interface LessonMetadata {
  id: string;
  title: string;
  level: string;
  moduleId: string;
}

export interface ModuleMetadata {
  id: string;
  title: string;
  description: string;
  level: Difficulty;
  lessons: LessonMetadata[];
}

/**
 * Estructura del currículum con solo metadatos
 * Esto reduce drásticamente el tamaño del bundle inicial
 */
export const CURRICULUM_METADATA: ModuleMetadata[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Begin your English learning journey with basic introductions and essential communication skills for the tech industry.',
    level: Difficulty.A1,
    lessons: [
      { id: 'gs1', title: 'Introduction to Tech English', level: 'A1', moduleId: 'getting-started' },
      { id: 'gs2', title: 'Introducing Yourself Professionally', level: 'A1', moduleId: 'getting-started' },
      { id: 'gs3', title: 'Describing Your Tech Role', level: 'A1', moduleId: 'getting-started' },
      { id: 'gs4', title: 'Talking About Your Projects', level: 'A1', moduleId: 'getting-started' },
      { id: 'gs5', title: 'Gerunds vs Infinitives in Tech', level: 'A1', moduleId: 'getting-started' },
      { id: 'gs6', title: 'Comparatives and Superlatives', level: 'A1', moduleId: 'getting-started' },
      { id: 'gs7', title: 'Asking Questions in Tech Contexts', level: 'A1', moduleId: 'getting-started' },
    ]
  },
  {
    id: 'work-environment',
    title: 'Work Environment',
    description: 'Master professional workplace communication and corporate culture in tech environments.',
    level: Difficulty.A1,
    lessons: [
      { id: 'we1', title: 'Describing Your Workspace', level: 'A1', moduleId: 'work-environment' },
      { id: 'we2', title: 'Tech Tools and Equipment', level: 'A1', moduleId: 'work-environment' },
      { id: 'we3', title: 'Workplace Interactions', level: 'A1', moduleId: 'work-environment' },
      { id: 'we4', title: 'Permissions and Requests', level: 'A1', moduleId: 'work-environment' },
      { id: 'we5', title: 'Needs and Abilities in Tech Work', level: 'A1', moduleId: 'work-environment' },
      { id: 'we6', title: 'Roles and Responsibilities', level: 'A1', moduleId: 'work-environment' },
    ]
  },
  {
    id: 'projects-collaborations',
    title: 'Projects Collaborations',
    description: 'Master project collaboration skills including planning, code reviews, meetings, and issue tracking in tech environments.',
    level: Difficulty.A1,
    lessons: [
      { id: 'pc1', title: 'Project Planning & Sprint Management', level: 'A1', moduleId: 'projects-collaborations' },
      { id: 'pc2', title: 'Code Reviews & Feedback', level: 'A1', moduleId: 'projects-collaborations' },
      { id: 'pc3', title: 'Team Meetings & Presentations', level: 'A1', moduleId: 'projects-collaborations' },
      { id: 'pc4', title: 'Issue Tracking & Problem Solving', level: 'A1', moduleId: 'projects-collaborations' },
    ]
  },
  {
    id: 'communication-at-work',
    title: 'Communication at Work',
    description: 'Master professional communication skills including emails, meetings, documentation, stakeholder updates, suggestions, and planning in tech workplace environments.',
    level: Difficulty.A1,
    lessons: [
      { id: 'com1', title: 'Professional Emails & Written Communication', level: 'A1', moduleId: 'communication-at-work' },
      { id: 'com2', title: 'Meeting Communication & Presentations', level: 'A1', moduleId: 'communication-at-work' },
      { id: 'com3', title: 'Code Comments & Documentation', level: 'A1', moduleId: 'communication-at-work' },
      { id: 'com4', title: 'Stakeholder Communication & Updates', level: 'A1', moduleId: 'communication-at-work' },
      { id: 'com5', title: 'Making Suggestions & Recommendations', level: 'A1', moduleId: 'communication-at-work' },
      { id: 'com6', title: 'Planning & Coordination', level: 'A1', moduleId: 'communication-at-work' },
    ]
  },
  {
    id: 'debugging-problem-solving',
    title: 'Debugging & Problem Solving',
    description: 'Master systematic debugging techniques, problem-solving methodologies, and technical issue resolution in software development.',
    level: Difficulty.A1,
    lessons: [
      { id: 'db1', title: 'Bug Discovery & Reporting', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db2', title: 'Asking for Debug Help', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db3', title: 'Explaining Issues Clearly', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db4', title: 'Bug Reports & Checklists', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db5', title: 'Bug Investigation', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db6', title: 'Code Review Debugging', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db7', title: 'UI States & Data Issues', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db8', title: 'Bug Prioritization', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db9', title: 'Data Flow Debugging', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db10', title: 'Root Cause Analysis', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db11', title: 'Performance Debugging', level: 'A1', moduleId: 'debugging-problem-solving' },
      { id: 'db12', title: 'Post-Mortem & Prevention', level: 'A1', moduleId: 'debugging-problem-solving' },
    ]
  },
  {
    id: 'intermediate-workplace-communication',
    title: 'Intermediate Workplace Communication',
    description: 'Compare tools, analyze systems, and present technical proposals using comparatives, superlatives, and analogies.',
    level: Difficulty.A2,
    lessons: [
      { id: 'iwc01', title: 'Comparative Adjectives for Technical Decisions', level: 'A2', moduleId: 'intermediate-workplace-communication' },
      { id: 'iwc02', title: 'Superlative Adjectives for Technology Rankings', level: 'A2', moduleId: 'intermediate-workplace-communication' },
      { id: 'iwc03', title: 'Defining Relative Clauses for API Descriptions', level: 'A2', moduleId: 'intermediate-workplace-communication' },
      { id: 'iwc04', title: 'Framework Comparisons: Integrated Analysis', level: 'A2', moduleId: 'intermediate-workplace-communication' },
      { id: 'iwc05', title: 'Ecosystem Trade-offs: While and Although', level: 'A2', moduleId: 'intermediate-workplace-communication' },
      { id: 'iwc06', title: 'System Analysis with Present Perfect', level: 'A2', moduleId: 'intermediate-workplace-communication' },
      { id: 'iwc07', title: 'Basic Proposals with Modal Verbs', level: 'A2', moduleId: 'intermediate-workplace-communication' },
      { id: 'iwc08', title: 'Technical Metaphors and Analogies', level: 'A2', moduleId: 'intermediate-workplace-communication' },
      { id: 'iwc9', title: 'Describing Experience: Present Perfect Continuous', level: 'A2', moduleId: 'intermediate-workplace-communication' },
    ]
  },
  {
    id: 'explaining-your-code',
    title: 'Explaining Your Code',
    description: 'Master advanced explanation skills for technical content using sophisticated tenses, connectors, and passive voice to communicate complex software concepts clearly.',
    level: Difficulty.B1,
    lessons: [
      { id: 'eyc1', title: 'Passive Voice in Technical Contexts', level: 'B1', moduleId: 'explaining-your-code' },
      { id: 'eyc2', title: 'Presenting Your Work', level: 'B1', moduleId: 'explaining-your-code' },
      { id: 'eyc3', title: 'Cause, Effect & Contrast in Problem Solving', level: 'B1', moduleId: 'explaining-your-code' },
      { id: 'eyc4', title: 'Legacy Systems & Deprecation', level: 'B1', moduleId: 'explaining-your-code' },
      { id: 'eyc5', title: 'Global State Concepts', level: 'B1', moduleId: 'explaining-your-code' },
      { id: 'eyc6', title: 'Software Development Lifecycle', level: 'B1', moduleId: 'explaining-your-code' },
      { id: 'eyc7', title: 'Narrating Professional Experiences', level: 'B1', moduleId: 'explaining-your-code' },
      { id: 'eyc8', title: 'Debugging Communication Strategies', level: 'B1', moduleId: 'explaining-your-code' },
      { id: 'eyc9', title: 'Technology Stack Explanations', level: 'B1', moduleId: 'explaining-your-code' },
    ]
  },
  {
    id: 'feedback-collaboration',
    title: 'Feedback & Collaboration',
    description: 'Master professional communication skills for team collaboration, code reviews, debates, customer support, and asynchronous workflows in tech environments.',
    level: Difficulty.B1,
    lessons: [
      { id: 'ffc1', title: 'Giving Feedback', level: 'B1', moduleId: 'feedback-collaboration' },
      { id: 'ffc2', title: 'Agreeing, Disagreeing & Comparing', level: 'B1', moduleId: 'feedback-collaboration' },
      { id: 'ffc3', title: 'Reporting Meetings & Discussions', level: 'B1', moduleId: 'feedback-collaboration' },
      { id: 'ffc4', title: 'Constructive Feedback & Reviews', level: 'B1', moduleId: 'feedback-collaboration' },
      { id: 'ffc5', title: 'Remote & Asynchronous Workflows', level: 'B1', moduleId: 'feedback-collaboration' },
      { id: 'ffc8', title: 'Technical Debates & Argumentation', level: 'B1', moduleId: 'feedback-collaboration' },
    ]
  },
  {
    id: 'professional-habits',
    title: 'Professional Habits & Efficiency',
    description: 'Master advanced adverbs, comparisons, and professional communication patterns for describing work efficiency and technical processes.',
    level: Difficulty.B1,
    lessons: [
      { id: 'edwl-1', title: 'Daily Routine in Tech', level: 'B1', moduleId: 'professional-habits' },
      { id: 'edwl-2', title: 'Current Actions', level: 'B1', moduleId: 'professional-habits' },
      { id: 'edwl-3', title: 'Following Instructions', level: 'B1', moduleId: 'professional-habits' },
      { id: 'edwl-4', title: 'UI Layouts & Prepositions', level: 'B1', moduleId: 'professional-habits' },
      { id: 'edwl-5', title: 'Navigating Applications & UI', level: 'B1', moduleId: 'professional-habits' },
      { id: 'edwl-6', title: 'IT Routines & Reporting', level: 'B1', moduleId: 'professional-habits' },
      { id: 'edwl-7', title: 'Basic Documentation & Notes', level: 'B1', moduleId: 'professional-habits' },
      { id: 'edwl-8', title: 'Describing Your Tech Setup', level: 'B1', moduleId: 'professional-habits' },
    ]
  },
  {
    id: 'tech-ecosystem-trends',
    title: 'Tech Ecosystem Trends',
    description: 'Master advanced technical communication for DevOps, AI, and formal documentation in advanced tech ecosystems.',
    level: Difficulty.B1,
    lessons: [
      { id: 'tet1', title: 'DevOps & Cloud Infrastructure', level: 'B1', moduleId: 'tech-ecosystem-trends' },
      { id: 'tet2', title: 'AI & Machine Learning Concepts', level: 'B1', moduleId: 'tech-ecosystem-trends' },
      { id: 'tet3', title: 'Technical Papers & Proposals', level: 'B1', moduleId: 'tech-ecosystem-trends' },
      { id: 'tet4', title: 'API Documentation & Standards', level: 'B1', moduleId: 'tech-ecosystem-trends' },
      { id: 'tet5', title: 'Project Roadmaps & Future Milestones', level: 'B1', moduleId: 'tech-ecosystem-trends' },
      { id: 'tet6', title: 'Writing API Docs: Imperative Tone', level: 'B1', moduleId: 'tech-ecosystem-trends' },
      { id: 'tet7', title: 'Accessible & Inclusive Documentation', level: 'B1', moduleId: 'tech-ecosystem-trends' },
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management & Milestones',
    description: 'Master advanced tenses for reporting project milestones, sprint goals, and future deliverables in professional project management contexts.',
    level: Difficulty.B2,
    lessons: [
      { id: 'pm1', title: 'Future Perfect Passive: Reporting Future Milestones', level: 'B2', moduleId: 'project-management' },
    ]
  },
  {
    id: 'advanced-technical-writing',
    title: 'Advanced Technical Writing',
    description: 'Master sophisticated writing techniques including nominalization, inversion, and advanced grammatical structures for formal technical documentation and academic papers.',
    level: Difficulty.C1,
    lessons: [
      { id: 'atw1', title: 'Formal Technical Writing: Nominalization & Inversion', level: 'C1', moduleId: 'advanced-technical-writing' },
      { id: 'atw2', title: 'Advanced Structures for Formal Writing', level: 'C1', moduleId: 'advanced-technical-writing' },
    ]
  },
];

/**
 * Mantener compatibilidad con código existente
 * Exportar como CURRICULUM para que los componentes actuales sigan funcionando
 */
export const CURRICULUM = CURRICULUM_METADATA as unknown as Module[];
