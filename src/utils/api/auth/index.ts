import instance from 'utils/api/axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { TokenResponse, SignupRequest, LoginRequest } from 'models/auth';
import { setToken } from 'utils/api/function/TokenManage';

const path = '/users';

export const useSignUp = () => {
  return useMutation<TokenResponse, Error, SignupRequest>({
    mutationFn: async (data: SignupRequest) => {
      const response = await instance.post<TokenResponse>(`${path}/signup`, data);
      return response.data;
    },
    onError: (error: any) => {
      console.error('회원가입 에러', error?.response?.data);
    },
  });
};

export const useLogin = async () => {
  return useMutation<TokenResponse, Error, LoginRequest>({
    mutationFn: async (data: LoginRequest) => {
      const response = await instance.post<TokenResponse>(`${path}/login`, data);
      return response.data;
    },
    onSuccess: (data) => {
      setToken(data.accessToken, data.refreshToken);
    },
    onError: (error: any) => {
      console.error('로그인 에러', error?.response?.data);
    },
  });
};

export const useInfo = () => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const { data } = await instance.get(`${path}/info`);
      return data.response;
    },
  });
};
