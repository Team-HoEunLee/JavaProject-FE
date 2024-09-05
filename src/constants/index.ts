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

export const AuthSignup: AuthDataType[] = [
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

export const AuthSignupNext: AuthDataType[] = [
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
