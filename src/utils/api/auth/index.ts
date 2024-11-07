import instance from "utils/api/axios";
import { useMutation } from "@tanstack/react-query";
import { TokenResponse, SignupRequest, LoginRequest } from "models/auth";

const path = "/users";

export const signUp = () => {
  return useMutation<TokenResponse, Error, SignupRequest>({
    mutationFn: async (data: SignupRequest) => {
      const response = await instance.post<TokenResponse>(`${path}/signup`, data);
      return response.data;
    },
    onError: (error: any) => {
      console.error("회원가입 에러", error?.response?.data);
    }
  });
};

export const login = async (data: LoginRequest) => {
  const response = await instance.post<TokenResponse>(`${path}/login`, data);
  return response.data;
};
