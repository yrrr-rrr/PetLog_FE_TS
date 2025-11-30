export async function login(setLogin: (acc: string, ref: string) => void) {
  try {
    const res = await fetch("https://dev.petlog.site/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        providerId: Math.random().toString(),
        name: "서예린",
        email: "seyerin12@naver.com",
      }),
    });
    if (!res.ok) {
      console.log("err");
    }
    const data = await res.json();
    // console.log(data.data.accessToken);
    setLogin(data.data.accessToken, data.data.refreshToken);
    localStorage.setItem("acc", data.data.accessToken);
  } catch (e) {
    console.log(e);
  }
}
