import { create } from "zustand";

export type ImgType = {
  id: string;
  previewUrl: string; // 화면에 보여줄 이미지 src (S3든 local이든 상관X)
  status: "existing" | "new"; // 기존(DB)에서 온 이미지인지, 새로 추가된 이미지인지
  s3Url?: string; // 기존 이미지면 여기에 있다
  file?: File; // 새로 추가한 이미지면 여기에 있다
  isDeleted?: boolean; // 삭제 표시
};

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
