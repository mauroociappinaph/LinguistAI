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
} from './A1';
import { Lesson, Difficulty } from '../../types';

// Import work environment lessons directly from their files (avoiding module index issues)
import { lesson01 as workEnvironmentLesson01 } from './A1/work-environment/lesson-01';
import { lesson02 as workEnvironmentLesson02 } from './A1/work-environment/lesson-02';
import { lesson03 as workEnvironmentLesson03 } from './A1/work-environment/lesson-03';
import { lesson06 as workEnvironmentLesson06 } from './A1/work-environment/lesson-06';

// Placeholder work environment lessons for incomplete lessons
const workEnvironmentLesson04: Lesson = {
    id: "we4",
    title: "Onboarding",
    level: Difficulty.A1,
    description: "Develop skills for virtual meetings, video calls, and remote team collaboration.",
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

export const ALL_LESSONS = [
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
    workEnvironmentLesson01,
    workEnvironmentLesson02,
    workEnvironmentLesson03,
    workEnvironmentLesson04,
    workEnvironmentLesson05,
    workEnvironmentLesson06
];
