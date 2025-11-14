import type { NavigateFunction } from "react-router-dom";

export function logout(nav: NavigateFunction) {
  localStorage.removeItem("accessToken");
  nav(""); // 로그인 화면으로 넘어가는 코드 (동하 선배꺼)
}
