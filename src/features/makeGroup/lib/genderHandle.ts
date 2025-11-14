import type React from "react";

export function genderHandle(
  gender: string,
  setGenderChecked: React.Dispatch<
    React.SetStateAction<{ female: boolean; male: boolean }>
  >,
) {
  setGenderChecked((prev) => {
    const newObj = { ...prev };
    newObj.female = gender == "female" ? true : false;
    newObj.male = gender == "female" ? false : true;
    return newObj;
  });
}
