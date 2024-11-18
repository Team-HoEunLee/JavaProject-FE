export interface AuthDataType {
  name: string;
  placeholder: string;
  icon: React.FC;
}

export interface MainItemsDataType {
  name: string;
  title: string;
  info: string;
  icon: React.FC;
  backColor: string;
  quizType: QuizType;
}

export type QuizType = 'BEGINNER' | 'RECENT' | 'TEMPORARY' | 'MOST_SOLVED';

export interface QuestionKeywordDataType {
  name: string;
  title: string;
  keywords: Array<string>;
}

export interface QuestionListDataTypes {
  checked: boolean;
  title: string;
  felid: Array<string>;
  level: number;
  avgScore: number;
}

export interface MainTableHeaderDataType {
  width: string;
  text: string;
}

export interface RankingListDataType {
  name: string;
  score: number;
}

export interface ProblemExampleDummyDataType {
  title: string;
  number: number;
  relatedField: Array<string>;
  level: number;
  solvePerson: number;
  percentCorrect: number;
  solveState: boolean;
  problemValue: string;
}

export interface ProblemDataType {
  relatedField: Array<string>;
  level: number;
  solvePerson: number;
  percentCorrect: number;
  solveState: boolean;
}
