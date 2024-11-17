import { create } from 'zustand';
import { UserForm } from 'models/auth';

interface UserFormStore {
  user: UserForm;
  setForm: (updatedFields: Partial<UserForm>) => void;
}

export const UserFormStore = create<UserFormStore>((set) => ({
  user: {
    accountId: '',
    name: '',
    introduction: '',
    myRank: 0,
    area: [],
    unsolvedQuizIds: [],
  },
  setForm: (updatedFields) => {
    set((state) => ({
      user: {
        ...state.user,
        ...updatedFields,
      },
    }));
  },
}));
