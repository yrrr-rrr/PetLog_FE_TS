import { create } from "zustand";

export type DiaryType = {
  writtenAt: Date;
  diaryInfo: [
    {
      diaryId: number;
      title: string;
      image: string | null;
    },
  ];
};

type DiaryStoreType = {
  allDiary: DiaryType[];
  selectId: number;
  groupId: number;
  setGroupId: (id: number) => void;
  setAllDiary: (arr: DiaryType[]) => void;
  setSelectId: (id: number) => void;
};

export const useDiary = create<DiaryStoreType>((set) => ({
  allDiary: [],
  selectId: 0,
  groupId: 0,
  setGroupId: (id) =>
    set(() => ({
      groupId: id,
    })),
  setAllDiary: (arr) =>
    set(() => ({
      allDiary: arr,
    })),
  setSelectId: (id) =>
    set(() => ({
      selectId: id,
    })),
}));
