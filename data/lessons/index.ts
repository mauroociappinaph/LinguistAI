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
    debuggingLesson12
} from './A1';

// A2 Imports
import {
    intermediateWorkplaceLesson01,
    intermediateWorkplaceLesson02,
    intermediateWorkplaceLesson03,
    intermediateWorkplaceLesson04,
    intermediateWorkplaceLesson05,
    intermediateWorkplaceLesson06,
    intermediateWorkplaceLesson07,
    intermediateWorkplaceLesson08
} from './A2';

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
} from './B1/explaining-your-code';

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
} from './B1/feedback-collaboration/index';

import {
    techEcosystemTrendsLesson01,
    techEcosystemTrendsLesson02,
    techEcosystemTrendsLesson03,
    techEcosystemTrendsLesson04,
    techEcosystemTrendsLesson05
} from './B1/tech-ecosystem-trends/index';

// B2 Imports
import {
    lesson01 as projectManagementLesson01
} from './B2/index';

// C1 Imports
import {
    lesson01 as advancedTechnicalWritingLesson01,
    lesson02 as advancedTechnicalWritingLesson02
} from './C1/index';

import { Lesson, Difficulty } from '../../types';

// Import work environment lessons directly from their files (avoiding module index issues)
import { lesson01 as workEnvironmentLesson01 } from './A1/work-environment/lesson-01';
import { lesson02 as workEnvironmentLesson02 } from './A1/work-environment/lesson-02';
import { lesson03 as workEnvironmentLesson03 } from './A1/work-environment/lesson-03';
import { lesson04 as workEnvironmentLesson04 } from './A1/work-environment/lesson-04';
import { lesson05 as workEnvironmentLesson05 } from './A1/work-environment/lesson-05';
import { lesson06 as workEnvironmentLesson06 } from './A1/work-environment/lesson-06';

// Placeholder work environment lessons for incomplete lessons

export const ALL_LESSONS = [
    gettingStartedLesson01,
    gettingStartedLesson02,
    gettingStartedLesson03,
    gettingStartedLesson04,
    gettingStartedLesson05,
    gettingStartedLesson06,
    workEnvironmentLesson01,
    workEnvironmentLesson02,
    workEnvironmentLesson03,
    workEnvironmentLesson04,
    workEnvironmentLesson05,
    workEnvironmentLesson06,
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
    // A2 Lessons
    intermediateWorkplaceLesson01,
    intermediateWorkplaceLesson02,
    intermediateWorkplaceLesson03,
    intermediateWorkplaceLesson04,
    intermediateWorkplaceLesson05,
    intermediateWorkplaceLesson06,
    intermediateWorkplaceLesson07,
    intermediateWorkplaceLesson08,
    // B1 Lessons
    explainingCodeLesson01,
    explainingCodeLesson02,
    explainingCodeLesson03,
    explainingCodeLesson04,
    explainingCodeLesson05,
    explainingCodeLesson06,
    explainingCodeLesson07,
    explainingCodeLesson08,
    explainingCodeLesson09,
    feedbackCollaborationLesson01,
    feedbackCollaborationLesson02,
    feedbackCollaborationLesson03,
    feedbackCollaborationLesson04,
    feedbackCollaborationLesson05,
    feedbackCollaborationLesson06,
    feedbackCollaborationLesson07,
    feedbackCollaborationLesson08,
    feedbackCollaborationLesson09,
    feedbackCollaborationLesson10,
    techEcosystemTrendsLesson01,
    techEcosystemTrendsLesson02,
    techEcosystemTrendsLesson03,
    techEcosystemTrendsLesson04,
    techEcosystemTrendsLesson05,
    // B2 Lessons
    projectManagementLesson01,
    // C1 Lessons
    advancedTechnicalWritingLesson01,
    advancedTechnicalWritingLesson02
];
