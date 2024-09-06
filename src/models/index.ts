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
  backColor: string
}

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