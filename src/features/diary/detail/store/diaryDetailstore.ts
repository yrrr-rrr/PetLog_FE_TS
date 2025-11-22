import { create } from "zustand";

export type DiaryDetailType = {
  title: string;
  content: string;
  images: string[];
  writtenAt: string;
  writerName: string;
};

type DiaryDetailStoreType = {
  diaryDetail: DiaryDetailType;
  setDiaryDetail: (obj: DiaryDetailType) => void;
};

export const useDiaryDetail = create<DiaryDetailStoreType>((set) => ({
  diaryDetail: {
    title: "",
    content: "",
    images: [],
    writtenAt: "",
    writerName: "",
  },
  setDiaryDetail: (obj) =>
    set(() => ({
      diaryDetail: obj,
    })),
}));
