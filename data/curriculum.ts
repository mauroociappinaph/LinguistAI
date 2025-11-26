import { Lesson, Module, Difficulty } from '../types';
import {
  gettingStartedLesson01,
  gettingStartedLesson02,
  gettingStartedLesson03,
  gettingStartedLesson04,
  gettingStartedLesson05,
  gettingStartedLesson06,
  gettingStartedLesson07,
  projectsCollaborationsLesson01,
  projectsCollaborationsLesson02,
  projectsCollaborationsLesson03,
  projectsCollaborationsLesson04,
  communicationLesson01,
  communicationLesson02,
  communicationLesson03,
  communicationLesson04,
  communicationLesson05,
  communicationLesson06,
  debuggingLesson01,
  debuggingLesson02,
  debuggingLesson03,
  debuggingLesson04,
  debuggingLesson05,
  debuggingLesson06,
  debuggingLesson07,
  debuggingLesson08,
  debuggingLesson09,
  debuggingLesson10,
  debuggingLesson11,

  debuggingLesson12,
  workEnvironmentLesson01,
  workEnvironmentLesson02,
  workEnvironmentLesson03,
  workEnvironmentLesson04,
  workEnvironmentLesson05,
  workEnvironmentLesson06
} from './lessons/A1/index';

// A2 Imports
import {
  intermediateWorkplaceLesson01,
  intermediateWorkplaceLesson02,
  intermediateWorkplaceLesson03,
  intermediateWorkplaceLesson04,
  intermediateWorkplaceLesson05,
  intermediateWorkplaceLesson06,
  intermediateWorkplaceLesson07,
  intermediateWorkplaceLesson08,
  intermediateWorkplaceLesson09
} from './lessons/A2/index';

import {
  explainingCodeLesson01,
  explainingCodeLesson02,
  explainingCodeLesson03,
  explainingCodeLesson04,
  explainingCodeLesson05,
  explainingCodeLesson06,
  explainingCodeLesson07,
  explainingCodeLesson08,
  explainingCodeLesson09
} from './lessons/B1/explaining-your-code/index';

import {
  feedbackCollaborationLesson01,
  feedbackCollaborationLesson02,
  feedbackCollaborationLesson03,
  feedbackCollaborationLesson04,
  feedbackCollaborationLesson05,
  feedbackCollaborationLesson06,
  feedbackCollaborationLesson07,
  feedbackCollaborationLesson08,
  feedbackCollaborationLesson09,
  feedbackCollaborationLesson10
} from './lessons/B1/feedback-collaboration/index';

import {
  techEcosystemTrendsLesson01,
  techEcosystemTrendsLesson02,
  techEcosystemTrendsLesson03,
  techEcosystemTrendsLesson04,
  techEcosystemTrendsLesson05,
  techEcosystemTrendsLesson06,
  techEcosystemTrendsLesson07
} from './lessons/B1/tech-ecosystem-trends/index';

import {
  careerDevelopmentLesson01,
  careerDevelopmentLesson02
} from './lessons/B1/career-development/index';

import {
  professionalHabitsLesson01,
  professionalHabitsLesson02,
  professionalHabitsLesson03,
  professionalHabitsLesson04,
  professionalHabitsLesson05,
  professionalHabitsLesson06,
  professionalHabitsLesson07,
  professionalHabitsLesson08
} from './lessons/B1/index';

// B2 Imports
import {
  lesson01 as projectManagementLesson01,
  technicalPresentationsLesson01
} from './lessons/B2/index';

// C1 Imports
import {
  lesson01 as advancedTechnicalWritingLesson01,
  lesson02 as advancedTechnicalWritingLesson02,
  advancedTechnicalWritingLesson03
} from './lessons/C1/index';




/**
 * Main curriculum structure that organizes all lessons into modules.
 * Each module contains a group of related lessons.
 */
export const CURRICULUM: Module[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Begin your English learning journey with basic introductions and essential communication skills for the tech industry.',
    level: Difficulty.A1,
    lessons: [
      gettingStartedLesson01,
      gettingStartedLesson02,
      gettingStartedLesson03,
      gettingStartedLesson04,
      gettingStartedLesson05,
      gettingStartedLesson06,
      gettingStartedLesson07
    ]
  },
  {
    id: 'work-environment',
    title: 'Work Environment',
    description: 'Master professional workplace communication and corporate culture in tech environments.',
    level: Difficulty.A1,
    lessons: [
      workEnvironmentLesson01,
      workEnvironmentLesson02,
      workEnvironmentLesson03,
      workEnvironmentLesson04,
      workEnvironmentLesson05,
      workEnvironmentLesson06
    ]
  },
  {
    id: 'projects-collaborations',
    title: 'Projects Collaborations',
    description: 'Master project collaboration skills including planning, code reviews, meetings, and issue tracking in tech environments.',
    level: Difficulty.A1,
    lessons: [
      projectsCollaborationsLesson01,
      projectsCollaborationsLesson02,
      projectsCollaborationsLesson03,
      projectsCollaborationsLesson04
    ]
  },
  {
    id: 'communication-at-work',
    title: 'Communication at Work',
    description: 'Master professional communication skills including emails, meetings, documentation, stakeholder updates, suggestions, and planning in tech workplace environments.',
    level: Difficulty.A1,
    lessons: [
      communicationLesson01,
      communicationLesson02,
      communicationLesson03,
      communicationLesson04,
      communicationLesson05,
      communicationLesson06
    ]
  },
  {
    id: 'debugging-problem-solving',
    title: 'Debugging & Problem Solving',
    description: 'Master systematic debugging techniques, problem-solving methodologies, and technical issue resolution in software development.',
    level: Difficulty.A1,
    lessons: [
      debuggingLesson01,
      debuggingLesson02,
      debuggingLesson03,
      debuggingLesson04,
      debuggingLesson05,
      debuggingLesson06,
      debuggingLesson07,
      debuggingLesson08,
      debuggingLesson09,
      debuggingLesson10,
      debuggingLesson11,
      debuggingLesson12
    ]
  },
  // A2 Modules
  {
    id: 'intermediate-workplace-communication',
    title: 'Intermediate Workplace Communication',
    description: 'Compare tools, analyze systems, and present technical proposals using comparatives, superlatives, and analogies.',
    level: Difficulty.A2,
    lessons: [
      intermediateWorkplaceLesson01,
      intermediateWorkplaceLesson02,
      intermediateWorkplaceLesson03,
      intermediateWorkplaceLesson04,
      intermediateWorkplaceLesson05,
      intermediateWorkplaceLesson06,
      intermediateWorkplaceLesson07,
      intermediateWorkplaceLesson08,
      intermediateWorkplaceLesson09
    ]
  },
  // B1 Modules
  {
    id: 'explaining-your-code',
    title: 'Explaining Your Code',
    description: 'Master advanced explanation skills for technical content using sophisticated tenses, connectors, and passive voice to communicate complex software concepts clearly.',
    level: Difficulty.B1,
    lessons: [
      explainingCodeLesson01,
      explainingCodeLesson02,
      explainingCodeLesson03,
      explainingCodeLesson04,
      explainingCodeLesson05,
      explainingCodeLesson06,
      explainingCodeLesson07,
      explainingCodeLesson08,
      explainingCodeLesson09
    ]
  },
  {
    id: 'feedback-collaboration',
    title: 'Feedback & Collaboration',
    description: 'Master professional communication skills for team collaboration, code reviews, debates, customer support, and asynchronous workflows in tech environments.',
    level: Difficulty.B1,
    lessons: [
      feedbackCollaborationLesson01,
      feedbackCollaborationLesson02,
      feedbackCollaborationLesson03,
      feedbackCollaborationLesson04,
      feedbackCollaborationLesson05,
      feedbackCollaborationLesson06,
      feedbackCollaborationLesson07,
      feedbackCollaborationLesson08,
      feedbackCollaborationLesson09,
      feedbackCollaborationLesson10
    ]
  },
  {
    id: 'professional-habits',
    title: 'Professional Habits & Efficiency',
    description: 'Master advanced adverbs, comparisons, and professional communication patterns for describing work efficiency and technical processes.',
    level: Difficulty.B1,
    lessons: [
      professionalHabitsLesson01,
      professionalHabitsLesson02,
      professionalHabitsLesson03,
      professionalHabitsLesson04,
      professionalHabitsLesson05,
      professionalHabitsLesson06,
      professionalHabitsLesson07,
      professionalHabitsLesson08
    ]
  },
  {
    id: 'tech-ecosystem-trends',
    title: 'Tech Ecosystem Trends',
    description: 'Master advanced technical communication for DevOps, AI, and formal documentation in advanced tech ecosystems.',
    level: Difficulty.B1,
    lessons: [
      techEcosystemTrendsLesson01,
      techEcosystemTrendsLesson02,
      techEcosystemTrendsLesson03,
      techEcosystemTrendsLesson04,
      techEcosystemTrendsLesson05,
      techEcosystemTrendsLesson06,
      techEcosystemTrendsLesson07
    ]
  },
  {
    id: 'career-development',
    title: 'Career & Professional Development',
    description: 'Master the essential skills for advancing your tech career, from crafting professional profiles and emails to networking effectively.',
    level: Difficulty.B1,
    lessons: [
      careerDevelopmentLesson01,
      careerDevelopmentLesson02
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management & Milestones',
    description: 'Master advanced tenses for reporting project milestones, sprint goals, and future deliverables in professional project management contexts.',
    level: Difficulty.B2,
    lessons: [
      projectManagementLesson01
    ]
  },
  {
    id: 'technical-presentations',
    title: 'Technical Presentations',
    description: 'Master the art of delivering clear, structured, and engaging technical presentations using signposting and logical transitions.',
    level: Difficulty.B2,
    lessons: [
      technicalPresentationsLesson01
    ]
  },
  {
    id: 'advanced-technical-writing',
    title: 'Advanced Technical Writing',
    description: 'Master sophisticated writing techniques including nominalization, inversion, and advanced grammatical structures for formal technical documentation and academic papers.',
    level: Difficulty.C1,
    lessons: [
      advancedTechnicalWritingLesson01,
      advancedTechnicalWritingLesson02,
      advancedTechnicalWritingLesson03
    ]
  }
  // Future modules can be added here as the curriculum expands
];
