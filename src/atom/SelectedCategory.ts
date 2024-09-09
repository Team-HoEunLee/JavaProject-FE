import { atom } from 'recoil';

export const selectedLevelState = atom<number | null>({
  key: 'selectedLevelState',
  default: 0,
});
