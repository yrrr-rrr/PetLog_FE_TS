import { create } from "zustand";
import type { PetInfo } from "../type";

type FormType = {
  petInfo: PetInfo;
  setInfo: (data: PetInfo) => void;
  step: number;
  setStep: (command: string) => void;
};

export const useForm = create<FormType>((set) => ({
  petInfo: {
    imgUrl: null,
    name: "",
    age: "",
    weight: "",
    gender: "",
  },
  setInfo: (data) =>
    set(() => ({
      petInfo: data,
    })),
  step: 1,
  setStep: (command) =>
    set(() => ({
      step: command == "next" ? 2 : 1,
    })),
}));
