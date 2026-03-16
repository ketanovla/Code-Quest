import { Language } from '../game-context';

export type Difficulty = 'Complete Beginner' | 'Beginner' | 'Novice' | 'Intermediate' | 'Advanced' | 'Expert' | 'Master';

export interface CodingContent {
  lesson: string;
  task: string;
  startingCode: string;
  expectedOutput: string;
}

export interface QuizContent {
  lesson: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Level {
  id: number;
  type: 'coding' | 'quiz';
  title: string;
  difficulty: Difficulty;
  description: string;
  story: string;
  xpReward: number;
  content: Partial<Record<Language, CodingContent>> | QuizContent;
}
