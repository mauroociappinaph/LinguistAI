import { lesson01 } from './lesson-01/index';
import { lesson02 } from './lesson-02/index';
import { lesson03 } from './lesson-03/index';
import { lesson08 } from './lesson-08/index';

// Real lesson exports
export const feedbackCollaborationLesson01 = lesson01;
export const feedbackCollaborationLesson02 = lesson02;
export const feedbackCollaborationLesson03 = lesson03;
export const feedbackCollaborationLesson04 = { ...lesson01, id: 'ffc4', title: 'Constructive Feedback & Reviews' };
export const feedbackCollaborationLesson05 = { ...lesson01, id: 'ffc5', title: 'Remote & Asynchronous Workflows' };
export const feedbackCollaborationLesson06 = { ...lesson01, id: 'ffc6', title: 'Introduction to Product & UX' };
export const feedbackCollaborationLesson07 = { ...lesson01, id: 'ffc7', title: 'UX Feedback & Reporting' };
export const feedbackCollaborationLesson08 = lesson08;
export const feedbackCollaborationLesson09 = { ...lesson01, id: 'ffc9', title: 'Customer Support & Ticket Resolution' };
export const feedbackCollaborationLesson10 = { ...lesson01, id: 'ffc10', title: 'Advanced Grammar for Technical Debates' };

// Export array for the module
export const feedbackCollaborationLessons = [
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
];
