import { Module, Difficulty } from '../types';
import {
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06
} from './lessons/A1/getting-started/index';

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
      lesson01,
      lesson02,
      lesson03,
      lesson04,
      lesson05,
      lesson06
    ]
  }
  // Future modules can be added here as the curriculum expands
];
