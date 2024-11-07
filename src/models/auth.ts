export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface SignupRequest {
  accountId: string;
  email: string;
  password: string;
  name: string;
  introduction: string;
  areaId: number;
}

export interface LoginRequest {
  accountId: string;
  password: string;
}
