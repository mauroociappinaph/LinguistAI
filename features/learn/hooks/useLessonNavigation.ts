
import { useState, useEffect } from 'react';
import { Section, SECTIONS } from '../constants';

export const useLessonNavigation = () => {
    const [activeSection, setActiveSection] = useState<Section>('INTRO');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const index = SECTIONS.findIndex(s => s.id === activeSection);
        setProgress(((index + 1) / SECTIONS.length) * 100);
    }, [activeSection]);

    return {
        activeSection,
        setActiveSection,
        progress,
        sections: SECTIONS
    };
};
