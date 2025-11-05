import { create } from "zustand";

type ModalType = {
  isOpen: boolean;
  warningMessage: string;
  openModal: (warningMessage: string) => void;
  closeModal: () => void;
};

export const useWarningModal = create<ModalType>((set) => ({
  isOpen: false,
  warningMessage: "",
  openModal: (warningMessage) =>
    set(() => ({
      isOpen: true,
      warningMessage: warningMessage,
    })),
  closeModal: () =>
    set(() => ({
      isOpen: false,
    })),
}));
