import { create } from 'zustand';

interface FieldType {
  fields: string[] | null;
  addFields: (selected: string) => void;
  updateFields: (selected: string) => void;
  resetFields: () => void;
}

interface LevelType {
  levels: number[] | '모든 난이도';
  addLevels: (selected: number) => void;
  updateLevels: (selected: number) => void;
  resetLevels: () => void;
}

interface SolveType {
  solves: string;
  updateSolves: (selected: string) => void;
  resetSolves: () => void;
}

export const useFieldStore = create<FieldType>((set) => ({
  fields: [],
  addFields: (selected: string) =>
    set((state) => ({ fields: [...(state.fields || []), selected] })),
  updateFields: (selected: string) =>
    set((state) => ({ fields: state.fields?.filter((item) => item !== selected) })),
  resetFields: () => set({ fields: [] }),
}));

export const useLevelStore = create<LevelType>((set) => ({
  levels: '모든 난이도',
  addLevels: (selected: number) =>
    set((state) => ({
      levels:
        state.levels === '모든 난이도' ? [selected] : [...(state.levels as number[]), selected],
    })),
  updateLevels: (selected: number) =>
    set((state) => ({
      levels:
        state.levels === '모든 난이도'
          ? []
          : (state.levels as number[]).filter((item) => item !== selected),
    })),
  resetLevels: () => set({ levels: '모든 난이도' }),
}));

export const useSolveStore = create<SolveType>((set) => ({
  solves: '모든 상태',
  updateSolves: (selected: string) => set({ solves: selected }),
  resetSolves: () => set({ solves: '모든 상태' }),
}));
