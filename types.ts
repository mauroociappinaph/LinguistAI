
export enum Difficulty {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

export interface UserState {
  name: string;
  currentLevel: Difficulty;
  xp: number;
  streak: number;
  badges: string[];
  completedLessons: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  level: Difficulty;
  lessons: Lesson[];
}

export enum View {
  DASHBOARD = 'DASHBOARD',
  LESSON = 'LESSON',
  CHAT = 'CHAT',
  EXPLORER = 'EXPLORER',
  CURRICULUM = 'CURRICULUM'
}

// --- Rich Content Interfaces ---

export interface GrammarRule {
  from: string;
  to: string;
}

export interface CommonMistake {
  incorrect: string;
  correct: string;
  explanation: string;
}

export interface InteractiveExercise {
  type: string;
  question: string;
  options: string[];
  answer: string;
}

export interface GrammarSection {
  title: string;
  explanation: string;
  usage: string;
  rules: GrammarRule[];
  examples: string[];
  commonMistakes: CommonMistake[];
  interactiveExercise: InteractiveExercise;
}

export interface VocabularyItem {
  item: string;
  explanation: string;
  example: string;
  pronunciation: string;
}

export interface FunctionalChunk {
  chunk: string;
  usage: string;
}

export interface Question {
  question: string;
  answer: string;
}

export interface ReadingActivity {
  title: string;
  text: string;
  comprehensionQuestions: Question[];
}

export interface ListeningActivity {
  title: string;
  audioSrc: string;
  transcript: string;
  comprehensionQuestions: Question[];
}

export interface PronunciationTip {
  term: string;
  phonetic: string;
  tip: string;
}

export interface AccentSample {
  accent: string;
  speakerBio: string;
  audioSrc: string;
  transcript: string;
}

export interface RolePlayScenario {
  title: string;
  objective: string;
  aiPersona: string;
  initialMessage: string;
}

export interface Lesson {
  id: string;
  title: string;
  description?: string; // Optional summary
  level: Difficulty;   // Mapped from "difficulty" string in JSON

  // Rich Content Sections
  grammar: GrammarSection;
  didYouKnow: string;
  vocabulary: VocabularyItem[];
  phrasalVerbs: VocabularyItem[];
  compoundWords: VocabularyItem[];
  functionalChunks: {
    title: string;
    chunks: FunctionalChunk[];
  };
  scenario: string;
  speaking: string;
  speakingPracticeMode: string;
  readingActivity: ReadingActivity;
  listeningActivity: ListeningActivity;
  pronunciationClinic: {
    title: string;
    explanation: string;
    examples: PronunciationTip[];
  };
  globalAccentLab: AccentSample[];
  rolePlay: RolePlayScenario;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isSearchGrounded?: boolean;
  sources?: { uri: string; title: string }[];
}
