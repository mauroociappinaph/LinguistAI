import { Lesson, Module, Difficulty } from '../types';
import {
  gettingStartedLesson01,
  gettingStartedLesson02,
  gettingStartedLesson03,
  gettingStartedLesson04,
  gettingStartedLesson05,
  gettingStartedLesson06,
  everyDayWorkLifeLesson01,
  everyDayWorkLifeLesson02,
  everyDayWorkLifeLesson03,
  everyDayWorkLifeLesson04,
  everyDayWorkLifeLesson05,
  everyDayWorkLifeLesson06,
  everyDayWorkLifeLesson07,
  everyDayWorkLifeLesson08,
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
  debuggingLesson12
} from './lessons/A1/index';

// Import work environment lessons directly from their files (avoiding module index issues)
import { lesson01 as workEnvironmentLesson01 } from './lessons/A1/work-environment/lesson-01';
import { lesson02 as workEnvironmentLesson02 } from './lessons/A1/work-environment/lesson-02';
import { lesson03 as workEnvironmentLesson03 } from './lessons/A1/work-environment/lesson-03';
import { lesson04 as workEnvironmentLesson04 } from './lessons/A1/work-environment/lesson-04';
import { lesson05 as workEnvironmentLesson05 } from './lessons/A1/work-environment/lesson-05';
import { lesson06 as workEnvironmentLesson06 } from './lessons/A1/work-environment/lesson-06';


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
      gettingStartedLesson06
    ]
  },
  {
    id: 'every-day-work-life',
    title: 'Every Day Work Life',
    description: 'Master daily routines, workplace communication, and professional vocabulary used in everyday tech environments.',
    level: Difficulty.A1,
    lessons: [
      everyDayWorkLifeLesson01,
      everyDayWorkLifeLesson02,
      everyDayWorkLifeLesson03,
      everyDayWorkLifeLesson04,
      everyDayWorkLifeLesson05,
      everyDayWorkLifeLesson06,
      everyDayWorkLifeLesson07,
      everyDayWorkLifeLesson08
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
  }
  // Future modules can be added here as the curriculum expands
];
