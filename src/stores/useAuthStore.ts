import { create } from 'zustand';

interface FormType {
  form: {
    [key: string]: string;
  };
  setForm: (field: string, value: string) => void;
  resetForm: () => void;
}

export const useAuthStore = create<FormType>((set) => ({
  form: {},
  setForm: (field, value) =>
    set((state) => ({
      form: { ...state.form, [field]: value },
    })),
  resetForm: () => set({ form: {} }),
}));
