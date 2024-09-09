import { atom } from 'recoil';

export const selectedFelidState = atom<string[] | null>({
  key: 'selectedFelidState',
  default: [],
});

export const selectedLevelState = atom<number | null>({
  key: 'selectedLevelState',
  default: 0,
});

export const selectedSolveState = atom<string>({
  key: 'selectedSolveState',
  default: '모든 상태',
});
