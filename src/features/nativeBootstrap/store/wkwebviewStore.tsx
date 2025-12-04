import type { SwiftToReactProtocolType } from "@/features/nativeBootstrap/lib/nativeBridge";
import { create } from "zustand";

export type NativeTyp = SwiftToReactProtocolType & {
  setNative: (obj: SwiftToReactProtocolType) => void;
  setAcc: (newAcc: string) => void;
};

export const useNative = create<NativeTyp>((set) => ({
  nativeRoute: "/diary",
  accessToken: "a",
  isNative: false,
  setNative: (obj) =>
    set(() => ({
      native_route: obj.nativeRoute,
      accessToken: obj.accessToken,
      isNative: obj.isNative,
    })),
  setAcc: (newAcc) =>
    set(() => ({
      accessToken: newAcc,
    })),
}));
