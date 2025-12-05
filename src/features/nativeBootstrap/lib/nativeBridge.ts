import { useNative } from "../store/wkwebviewStore";

export type Routes = "/diary" | "/setting" | "/start" | "/설정 안됨";

export type SwiftToReactProtocolType = {
  nativeRoute: Routes;
  accessToken: string;
  isNative: boolean;
};

export type MessageType =
  | "CLOSE_WEBVIEW"
  | "ONBOARDING_FINISHED"
  | "REQUEST_TOKEN_REFRESH"
  | "LOGOUT"
  | "DELETE_ACCOOUNT";

export type ReactToSwiftMessage = {
  type: MessageType;
};

export function setUpNativeInit(): SwiftToReactProtocolType {
  const init = (window as any).__NATIVE_INIT__;

  // if (!init) {
  //   console.log("네이티브 초기화 x");
  //   return {
  //     nativeRoute: "/설정 안됨",
  //     accessToken: "",
  //     isNative: false,
  //   };
  // }

  // console.log("네이티브 초기화 O");
  return {
    nativeRoute: init.native_route,
    accessToken: init.accessToken,
    isNative: true,
  };
}

export function sendToNative(message: MessageType) {
  console.log(message, "요청");
  window.webkit?.messageHandlers?.bridge?.postMessage({
    type: message,
  });
}

let refreshPromise: Promise<string> | null = null;

export function requestTokenRefresh() {
  if (!refreshPromise) {
    refreshPromise = new Promise((resolve) => {
      window.onNativeTokenUpdate = (newToken: string) => {
        useNative.getState().setAcc(newToken);
        resolve(newToken);
        refreshPromise = null;
      };
    });

    sendToNative("REQUEST_TOKEN_REFRESH");
  }

  return refreshPromise;
}
