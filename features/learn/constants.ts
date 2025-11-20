
export type Section = 'INTRO' | 'GRAMMAR' | 'VOCAB' | 'READING' | 'LISTENING' | 'SPEAKING' | 'ACCENTS' | 'ROLE_PLAY' | 'QUIZ';

export const SECTIONS: { id: Section; label: string }[] = [
    { id: 'INTRO', label: 'Start' },
    { id: 'GRAMMAR', label: 'Grammar' },
    { id: 'VOCAB', label: 'Vocabulary' },
    { id: 'READING', label: 'Reading' },
    { id: 'LISTENING', label: 'Listening' },
    { id: 'SPEAKING', label: 'Speaking' },
    { id: 'ACCENTS', label: 'Pronunciation' },
    { id: 'ROLE_PLAY', label: 'Role Play' },
    { id: 'QUIZ', label: 'Practice' },
];
