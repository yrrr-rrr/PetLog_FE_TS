import { create } from "zustand";

export type AddDiaryType = {
  title: string;
  writeAt: Date;
  content: string;
};

type AddDiaryStoreType = {
  addDiary: AddDiaryType;
  fileImgs: File[];
  previewImgs: string[];
  setPreviewImgs: (imgs: string[]) => void;
  setImgs: (imgs: File[]) => void;
  setDiary: (obj: AddDiaryType) => void;
};

export const useAddDiary = create<AddDiaryStoreType>((set) => ({
  addDiary: {
    title: "",
    writeAt: new Date(),
    content: "",
  },
  fileImgs: [],
  previewImgs: [],
  setPreviewImgs: (imgs) =>
    set(() => ({
      previewImgs: imgs,
    })),
  setImgs: (imgs) =>
    set(() => ({
      fileImgs: imgs,
    })),
  setDiary: (obj) =>
    set(() => ({
      addDiary: obj,
    })),
}));
