export {};

declare global {
  interface Window {
    webkit?: {
      messageHandlers?: {
        bridge?: {
          postMessage: (data: any) => void;
        };
      };
    };
    onNativeTokenUpdate?: (newToken: string) => void;
  }
}
