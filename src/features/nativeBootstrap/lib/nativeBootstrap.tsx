import {
  requestTokenRefresh,
  type SwiftToReactProtocolType,
} from "@/features/nativeBootstrap/lib/nativeBridge";
import { useEffect, type ReactNode } from "react";
import { useNative } from "../store/wkwebviewStore";

export function NativeBootstrap({
  nativeInit,
  children,
}: {
  nativeInit: SwiftToReactProtocolType;
  children: ReactNode;
}) {
  const { setNative } = useNative();
  useEffect(() => {
    setNative(nativeInit);
    requestTokenRefresh();
  }, [nativeInit, setNative]);

  return children;
}
