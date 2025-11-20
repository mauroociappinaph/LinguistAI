
import { AccentSample } from '../../../../../../types';

export const scenario = "Planificar la agenda de un sprint.";
export const speaking = "The deadline for task number 45 is on Wednesday at 5 PM.";
export const speakingPracticeMode = "feedback";

export const pronunciationClinic = {
    title: "Pronunciation: Dates & Times",
    explanation: "Focus on clear numbers and prepositions.",
    examples: [
        { term: "Wednesday", phonetic: "/ˈwɛnzdeɪ/", tip: "The 'd' is silent. Say 'Wenz-day'." },
        { term: "schedule", phonetic: "/ˈʃɛdjuːl/", tip: "Can be 'shed-yool' (UK) or 'sked-yool' (US)." }
    ]
};

export const globalAccentLab: AccentSample[] = [
  {
    accent: "American English (Midwest)",
    speakerBio: "John, Project Manager from Chicago",
    audioSrc: "",
    transcript: "Okay team, the deadline for this task is on Friday at 5 p.m. The sprint review meeting is scheduled for next Monday at 10 a.m."
  },
  {
    accent: "British English (Manchester)",
    speakerBio: "Susan, Scrum Master from Manchester",
    audioSrc: "",
    transcript: "Right, let's look at the schedule. We've got a meeting set up for three o'clock on Wednesday. The deadline for this sprint is Friday."
  },
  {
    accent: "German English (Hamburg)",
    speakerBio: "Heike, Engineer from Hamburg",
    audioSrc: "",
    transcript: "So, the task must be finished on Thursday. The meeting is at nine o'clock in the morning. Is this correct?"
  }
];
