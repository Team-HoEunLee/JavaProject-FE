import instance from 'utils/api/axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  SolveQuizRequest,
  QuizDetailResponse,
  QuizListResponse,
  CategoryListResponse,
  quizType,
} from 'models/quiz';

const path = 'quizzes';

// 문제 풀이
export const useSolveQuiz = ({ quiz, answer }: SolveQuizRequest) => {
  return useMutation<void, Error, { quizId: number }>({
    mutationFn: async ({ quizId }) => {
      const response = await instance.post(`${path}/solve/quiz_id=${quizId}`, {
        quiz,
        answer,
      });
      return response.data;
    },
    onError: (error: any) => {
      console.error('문제풀이 에러', error?.response?.data);
    },
  });
};

// 디테일 조회
export const useQuizDetail = (quizId: number) => {
  return useQuery<QuizDetailResponse, Error>({
    queryKey: ['QuizDetail', quizId],
    queryFn: async () => {
      const { data } = await instance.get<QuizDetailResponse>(`${path}/${quizId}`);
      return data;
    },
  });
};

// 리스트 조회
export const useQuizList = (params: any) => {
  return useQuery<QuizListResponse, Error>({
    queryKey: ['QuizList'],
    queryFn: async () => {
      const query = new URLSearchParams();

      if (params.title) query.append('title', params.title);
      if (params.area_ids) query.append('area_ids', JSON.stringify(params.area_ids));
      if (params.level) query.append('level', params.level.join(','));
      if (params.is_solved !== undefined) query.append('is_solved', params.is_solved.toString());
      if (params.page) query.append('page', params.page.toString());

      const { data } = await instance.get<QuizListResponse>(`/quiz/list?${query.toString()}`);
      return data;
    },
  });
};

// 카테고리 조회
export const useQuizCategory = () => {
  return useQuery<CategoryListResponse, Error>({
    queryKey: ['QuizCategory'],
    queryFn: async () => {
      const { data } = await instance.get(`${path}/category`);
      return data;
    },
  });
};

// 배너 조회
export const useQuizBanner = (quizType: quizType | null) => {
  return useQuery<QuizListResponse, Error>({
    queryKey: ['QuizBanner', quizType],
    queryFn: async () => {
      if (!quizType) return;
      const { data } = await instance.get(`${path}/banner/quizType=${quizType}`);
      return data;
    },
    enabled: !!quizType,
  });
};
