import { create } from "zustand";

type LoginType = {
  acc: string;
  ref: string;
  setLogin: (acc: string, ref: string) => void;
};

export const useLogin = create<LoginType>((set) => ({
  acc: "",
  ref: "",
  setLogin: (acc, ref) =>
    set(() => ({
      acc: acc,
      ref: ref,
    })),
}));
