import {
  AuthDataType,
  MainItemsDataType,
  QuestionKeywordDataType,
  QuestionListDataTypes,
  MainTableHeaderDataType,
  RankingListDataType,
} from 'models';
import { Box, Check, Lock, User } from '../assets/Auth/index';
import { Bulb, HandShake, Map, Sprout } from '../assets/Main/index';

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

export const MainItemsCategory: MainItemsDataType[] = [
  {
    name: 'Beginner Question',
    title: '초보자를 위한 입문용 문제',
    info: '다영을 처음 접하는 분들을 위한 문제를 선정했어요!',
    icon: Sprout,
    backColor: 'bg-green300',
  },
  {
    name: 'No Perfect Score',
    title: '아직 만점자가 없는 문제',
    info: '아무도 풀지 못한 문제들을 가져왔어요!',
    icon: Map,
    backColor: 'bg-pointPurple',
  },
  {
    name: 'Before Interview',
    title: '면접 보기 전 꼭 봐야할 문제',
    info: '합격하기 위한 핵심의 문제들을 풀어보세요!',
    icon: HandShake,
    backColor: 'bg-pointBlue',
  },
  {
    name: 'Many Solve',
    title: '풀이자가 가장 많은 문제',
    info: '사용자들이 많이 풀어본 문제에 도전해보세요!',
    icon: Bulb,
    backColor: 'bg-pointPink',
  },
];

export const QuestionKeyword: QuestionKeywordDataType[] = [
  {
    name: 'Felid',
    title: '분야',
    keywords: [
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
    ],
  },
  {
    name: 'Level',
    title: '난이도',
    keywords: ['모든 난이도'],
  },
  {
    name: 'Solved',
    title: '풀이여부',
    keywords: ['모든 상태', '풀지 못한 문제', '푼 문제'],
  },
];

//더미값 임시용
export const QuestionListDummyValue: QuestionListDataTypes[] = [
  {
    checked: true,
    title: '시간복잡도와 공간복잡도 무엇인가요? 시간복잡도와 공간복잡도 무엇인가요?',
    felid: ['알고리즘', '자료구조', '데이터베이스'],
    level: 1,
    avgScore: 140,
  },
  {
    checked: false,
    title: '정규화란 무엇이고 대표적인 장단점은 무엇인가요?',
    felid: ['데이터베이스'],
    level: 0,
    avgScore: 50,
  },
  {
    checked: true,
    title: 'HTTPS의 원리를 설명',
    felid: ['알고리즘', '자료구조', '데이터베이스', '네트워크'],
    level: 3,
    avgScore: 140,
  },
];

export const MainTableHeader: MainTableHeaderDataType[] = [
  {
    width: 'w-[28px]',
    text: '상태',
  },
  {
    width: 'w-[410px]',
    text: '문제 제목',
  },
  {
    width: 'w-[180px]',
    text: '분야',
  },
  {
    width: 'w-[42px]',
    text: '난이도',
  },
  {
    width: 'w-[62px]',
    text: '평균 점수',
  },
];

export const RankingListDummyValue: RankingListDataType[] = [
  {
    name: '면접고수',
    score: 1234567,
  },
  {
    name: '강선',
    score: 800,
  },
  {
    name: '이은호다',
    score: 700,
  },
  {
    name: '가은킴',
    score: 600,
  },
  {
    name: '림다영',
    score: 500,
  },
  {
    name: '나다영',
    score: 400,
  },
  {
    name: '백준',
    score: 300,
  },
  {
    name: '개발자',
    score: 200,
  },
  {
    name: '이재영',
    score: 100,
  },
  {
    name: '어쩔',
    score: 10,
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
