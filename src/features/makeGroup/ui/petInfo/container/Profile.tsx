import type React from "react";
import { useState } from "react";
import { GetIcon } from "@/shared/getIcon/getIcon";
import type { PetInfo } from "@/features/makeGroup/type";
import * as s from "@/features/makeGroup/ui/petInfo/style";

export function Profile({
  setForm,
}: {
  setForm: React.Dispatch<React.SetStateAction<PetInfo>>;
}) {
  const [imgUrl, setImgUrl] = useState("");
  return (
    <s.ProfileBox>
      {imgUrl ? (
        <s.Profile src={imgUrl} />
      ) : (
        <GetIcon name="DefaultProfile" width={150} />
      )}
      <div>
        <label htmlFor="file">
          <s.FileUploadBtn>프로필 사진 변경</s.FileUploadBtn>
        </label>
        <s.FileInput
          type="file"
          id="file"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                if (reader.result) {
                  setForm((prev) => {
                    const newObj = { ...prev };
                    if (reader.result) {
                      newObj.imgUrl = reader.result.toString();
                    }
                    return newObj;
                  });
                  setImgUrl(reader.result.toString());
                }
              };
            }
          }}
        />
      </div>
    </s.ProfileBox>
  );
}
