import { create } from "zustand";

type ModalStoreType = {
  isOpen: boolean;
  setIsOpen: () => void;
  setClose: () => void;
};

export const useModal = create<ModalStoreType>((set) => ({
  isOpen: false,
  setIsOpen: () =>
    set(() => ({
      isOpen: true,
    })),
  setClose: () =>
    set(() => ({
      isOpen: false,
    })),
}));
