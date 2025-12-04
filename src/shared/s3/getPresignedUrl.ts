import { requestTokenRefresh } from "@/features/nativeBootstrap/lib/nativeBridge";

export async function getPresignedUrl(
  fileType: FileType,
  fileNames: string[],
  acc: string,
) {
  try {
    let response = await fetch(
      "https://dev.petlog.site/api/s3/presigned-urls",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${acc}`,
        },
        body: JSON.stringify({
          fileType: fileType,
          fileNames: fileNames,
        }),
      },
    );

    if (response.status === 401) {
      const newToken = await requestTokenRefresh();

      response = await fetch("https://dev.petlog.site/api/s3/presigned-urls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
        },
        body: JSON.stringify({
          fileType: fileType,
          fileNames: fileNames,
        }),
      });
    }

    if (!response.ok) {
      console.log("err");
    }

    const data = await response.json();
    return data.data.presignedUrlItems;
  } catch (e) {
    console.log(e);
  }
}

export type FileType = "PROFILE_IMAGE" | "DIARY_IMAGE";
