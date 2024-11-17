export interface SolveQuizRequest {
  quiz: string;
  answer: string;
}

export type levelType = 'EASY' | 'ONE' | 'TWO' | 'THREE' | 'FOUR';

export interface QuizDetailResponse {
  quizId: number;
  title: string;
  question: string;
  level: Array<levelType>;
  area: Array<number>;
  codes: Array<number>;
}

export interface QuizListResponse {
  quizResponse: QuizResponse[]
}

export interface QuizResponse {
  quizId: number;
  title: string;
  question: string;
  areaIds: Array<number>;
  level: Array<levelType>;
  avgScore: number
}

export interface CategoryListResponse {
  codeIds: Code[];
  areaIds: Area[];
}

export interface Code {
  id: number;
  codeName: string;
}

export interface Area {
  id: number;
  areaName: string;
}

export type quizType = 'BEGINNER' | 'RECENT' | 'TEMPORARY' | 'MOST_SOLVED';