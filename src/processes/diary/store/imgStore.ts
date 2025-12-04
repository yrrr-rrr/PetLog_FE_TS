import { create } from "zustand";
import type { ImgType } from "./addStore";

type ImgStoreTypr = {
  imgs: ImgType[];
  setImgs: (img: ImgType) => void;
  isInit: boolean;
  setIsInit: (bool: boolean) => void;
  deleteImg: (id: string) => void;
  setInitStore: () => void;
};

export const useAddImgs = create<ImgStoreTypr>((set) => ({
  imgs: [],
  setImgs: (img) =>
    set((prev) => ({
      imgs: [...prev.imgs, img],
    })),
  isInit: false,
  setIsInit: (bool) =>
    set(() => ({
      isInit: bool,
    })),
  deleteImg: (id) =>
    set((prev) => ({
      imgs: prev.imgs.filter((x) => x.id !== id),
    })),
  setInitStore: () =>
    set(() => ({
      imgs: [],
      isInit: false,
    })),
}));
