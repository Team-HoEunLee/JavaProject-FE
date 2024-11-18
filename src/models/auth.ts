export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface SignupRequest {
  accountId: string;
  password: string;
  name: string;
  introduction: string;
  areaId: Array<number>;
}

export interface LoginRequest {
  accountId: string;
  password: string;
}

export interface UpdateUserInfoRequest {
  accountId: string;
  name: string;
  areaId: Array<number>;
  introduction: string;
}

export interface RankListResponse {
  rankListResponse: RankResponse[];
  myName: string;
  myScore: number;
  myRank: number;
}

export interface RankResponse {
  name: string;
  score: number;
}

export interface UserForm {
  accountId: string;
  name: string;
  introduction: string;
  myRank: number;
  area: string[];
  unsolvedQuizIds: number[];
}
