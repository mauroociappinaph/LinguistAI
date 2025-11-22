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
  everyDayWorkLifeLesson08
} from './lessons/A1/index';

// Import work environment lessons directly from their files (avoiding module index issues)
import { lesson01 as workEnvironmentLesson01 } from './lessons/A1/work-environment/lesson-01';
import { lesson02 as workEnvironmentLesson02 } from './lessons/A1/work-environment/lesson-02';
import { lesson03 as workEnvironmentLesson03 } from './lessons/A1/work-environment/lesson-03';
import { lesson04 as workEnvironmentLesson04 } from './lessons/A1/work-environment/lesson-04';
import { lesson06 as workEnvironmentLesson06 } from './lessons/A1/work-environment/lesson-06';

// Placeholder work environment lessons (only for lessons not created yet)
const workEnvironmentLesson05: Lesson = {
  id: "we5",
  title: "Needs and Abilities",
  level: Difficulty.A1,
  description: "Learn about company culture, team dynamics, and workplace relationships.",
  didYouKnow: "TODO: Placeholder content",
  grammar: {} as any,
  vocabulary: [],
  phrasalVerbs: [],
  compoundWords: [],
  functionalChunks: { title: "TODO", chunks: [] },
  scenario: "TODO",
  speaking: "TODO",
  speakingPracticeMode: "conversation",
  readingActivity: {} as any,
  listeningActivity: {} as any,
  pronunciationClinic: { title: "TODO", explanation: "TODO", examples: [] },
  globalAccentLab: [],
  rolePlay: {} as any
};


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
  }
  // Future modules can be added here as the curriculum expands
];
