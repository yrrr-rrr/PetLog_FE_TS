import type React from "react";
import type { CareFormType, PetInfo } from "../type";
import { checkDate } from "./checkDate";

export function handleForm<T extends PetInfo | CareFormType, K extends keyof T>(
  type: K,
  value: T[K],
  setForm: React.Dispatch<React.SetStateAction<T>>,
) {
  setForm((prev) => {
    const newObj = { ...prev };
    newObj[type] = value;
    return newObj;
  });
}

export function handleOnChange<T extends keyof PetInfo | keyof CareFormType>(
  type: T,
  value: string | number,
  setInputwarning: React.Dispatch<React.SetStateAction<Record<T, boolean>>>,
) {
  setInputwarning((prev) => {
    const newObj = { ...prev };
    if (!value) {
      newObj[type] = true;
    } else {
      newObj[type] = false;
    }
    if (typeof value === "number") {
      newObj[type] = !checkDate(type, value);
    }
    return newObj;
  });
}
