import { Module, Difficulty } from '../types';
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
  }
  // Future modules can be added here as the curriculum expands
];
