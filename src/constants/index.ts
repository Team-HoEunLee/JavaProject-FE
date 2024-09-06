import { AuthDataType } from 'models';
import { Box, Check, Lock, User } from '../assets/Auth/index';

export const AuthLogin: AuthDataType[] = [
  {
    name: 'userId',
    placeholder: '아이디를 입력해주세요',
    icon: Box,
  },
  {
    name: 'password',
    placeholder: '비밀번호를 입력해주세요',
    icon: Lock,
  },
];

export const AuthSignUp: AuthDataType[] = [
  {
    name: 'userId',
    placeholder: '아이디를 입력해주세요',
    icon: Box,
  },
  {
    name: 'password',
    placeholder: '비밀번호를 입력해주세요',
    icon: Lock,
  },
  {
    name: 'passwordCheck',
    placeholder: '비밀번호를 재입력해주세요',
    icon: Lock,
  },
];

export const AuthSignUpNext: AuthDataType[] = [
  {
    name: 'nickName',
    placeholder: '닉네임을 입력해주세요',
    icon: User,
  },
  {
    name: 'introduce',
    placeholder: '자기소개를 입력해주세요 (선택)',
    icon: Check,
  },
];

export const Major = [
  '백엔드',
  '프론트엔드',
  '아이오에스',
  '안드로이드',
  '플러터',
  '게임',
  '데브옵스',
  '보안',
  '인공지능',
  '디자인',
  '임베디드',
  'PM',
];

export const QuestionField = [
  '백엔드',
  '프론트엔드',
  '아이오에스',
  '안드로이드',
  '플러터',
  '게임',
  '데브옵스',
  '보안',
  '인공지능',
  '디자인',
  '임베디드',
  'PM',
  '데이터베이스',
  '운영체제',
  '자료구조',
  '네트워크',
  '컴퓨터구조',
];
