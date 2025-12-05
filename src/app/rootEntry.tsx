import { useNavigate } from "react-router-dom";
import { useNative } from "@/features/nativeBootstrap/store/wkwebviewStore";
import { useEffect } from "react";

export function RootEntry() {
  const nav = useNavigate();
  const { nativeRoute, isNative } = useNative();

  useEffect(() => {
    if (isNative) {
      nav(nativeRoute, { replace: true });
    } else {
      nav("/start", { replace: true });
    }
  });

  return <p>root</p>;
}
