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
  groupId: number;
  diaryId: number;
  setDiaryId: (did: number) => void;
  setGroupId: (gid: number) => void;
  setAllDiary: (arr: DiaryType[]) => void;
  initDiary: () => void;
};

export const useDiary = create<DiaryStoreType>((set) => ({
  allDiary: [],
  groupId: 0,
  diaryId: 0,
  setGroupId: (gid) =>
    set(() => ({
      groupId: gid,
    })),
  setDiaryId: (did) =>
    set(() => ({
      diaryId: did,
    })),
  setAllDiary: (arr) =>
    set(() => ({
      allDiary: arr,
    })),
  initDiary: () =>
    set(() => ({
      allDiary: [],
    })),
}));
