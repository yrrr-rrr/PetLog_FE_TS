import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "styled-components";
import { theme } from "@/shared/styles/theme";
import { GlobalStyle } from "@/shared/styles/global";
import { setUpNativeInit } from "@/features/nativeBootstrap/lib/nativeBridge";
import { NativeBootstrap } from "@/features/nativeBootstrap/lib/nativeBootstrap";

const nativeInit = setUpNativeInit();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <NativeBootstrap nativeInit={nativeInit}>
      <RouterProvider router={router} />
    </NativeBootstrap>
  </ThemeProvider>,
);
