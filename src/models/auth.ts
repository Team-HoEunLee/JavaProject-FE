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
