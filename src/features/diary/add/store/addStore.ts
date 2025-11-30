import { create } from "zustand";

export type AddDiaryType = {
  title: string;
  writeAt: Date;
  content: string;
};

type AddDiaryStoreType = {
  addDiary: AddDiaryType;
  setDiary: (obj: AddDiaryType) => void;
};

export const useAddDiary = create<AddDiaryStoreType>((set) => ({
  addDiary: {
    title: "",
    writeAt: new Date(),
    content: "",
  },
  setDiary: (obj) =>
    set(() => ({
      addDiary: obj,
    })),
}));
