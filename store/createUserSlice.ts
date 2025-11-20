import { StateCreator } from 'zustand';
import { UserState, Difficulty } from '../types';

export interface UserSlice {
  user: UserState;
  darkMode: boolean;
  toggleDarkMode: () => void;
  completeLesson: (id: string, xp: number) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: {
    name: 'Alex',
    currentLevel: Difficulty.A1,
    xp: 1250,
    streak: 5,
    badges: ['Early Bird', 'Grammar Geek'],
    completedLessons: [],
  },
  darkMode: true,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  completeLesson: (id, xp) => set((state) => ({
    user: {
      ...state.user,
      xp: state.user.xp + xp,
      completedLessons: state.user.completedLessons.includes(id) 
        ? state.user.completedLessons 
        : [...state.user.completedLessons, id]
    }
  })),
});