import { create } from "zustand";

export type PetInfo = {
  imgUrl: string;
  name: string;
  age: string;
  weight: string;
  gender: string;
};

export type CareInfo = {
  feedingCycle: number;
  lastFeedingTime: Date;
  wateringCycle: number;
  lastWateringTime: Date;
  note: string | null;
};

type FormType = {
  petInfo: PetInfo;
  setInfo: (data: PetInfo) => void;
  step: number;
  setStep: (command: string) => void;
};

export const useForm = create<FormType>((set) => ({
  petInfo: {
    imgUrl: "",
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
