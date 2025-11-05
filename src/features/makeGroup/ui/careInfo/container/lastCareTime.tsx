import * as s from "@/features/makeGroup/ui/careInfo/style";
import type React from "react";
import type { CareDisabledObj } from "../type";
import { useEffect, useMemo, useState } from "react";
import type { CareInfo } from "@/features/makeGroup/store/formStore";

export function LastCareTime(props: Props) {
  const { label, type, setForm, setDisabled } = props;
  const [warning, setWarning] = useState([true, true]);
  const [writeCnt, setWriteCnt] = useState(0);
  const [time, setTime] = useState({
    h: 0,
    m: 0,
  });

  const noWarning = useMemo(
    () => Object.entries(warning).every(([_, v]) => v === false),
    [warning],
  );

  useEffect(() => {
    const now = new Date();
    if (writeCnt === 2) {
      const wroteTime = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        time.h,
        time.m,
      );
      setForm((prev) => {
        if (type === "meal") {
          return { ...prev, lastFeedingTime: wroteTime };
        }
        return { ...prev, lastWateringTime: wroteTime };
      });
    }
  }, [setForm, time, type, writeCnt]);

  useEffect(() => {
    if (writeCnt == 2 && noWarning) {
      setDisabled((prev) => {
        if (type === "meal") {
          if (prev.lastFeedingTime === false) {
            return prev;
          }
          return { ...prev, lastFeedingTime: false };
        } else {
          if (prev.lastWateringTime === false) {
            return prev;
          }
          return { ...prev, lastWateringTime: false };
        }
      });
    } else {
      setDisabled((prev) => {
        if (type === "meal") {
          if (prev.lastFeedingTime === true) {
            return prev;
          }
          return { ...prev, lastFeedingTime: true };
        } else {
          if (prev.lastWateringTime === true) {
            return prev;
          }
          return { ...prev, lastWateringTime: true };
        }
      });
    }
  }, [writeCnt, setDisabled, type, noWarning]);

  return (
    <s.InputBox>
      <s.InputInfoBox>
        <s.Label>
          {label}
          <span>*</span>
        </s.Label>
        <s.Description>
          시간은 24시간 기준으로 작성해 주세요 (ex 17:30)
        </s.Description>
      </s.InputInfoBox>
      <s.TimeBox>
        <s.Input
          maxLength={2}
          type="text"
          onFocus={() => {
            setWriteCnt((prev) => {
              if (prev == 2) {
                return prev;
              }
              return prev + 1;
            });
          }}
          onChange={(e) => {
            const value = Number(e.target.value);
            setTime((prev) => {
              const newObj = { ...prev };
              newObj.h = value;
              return newObj;
            });
            setWarning((prev) => {
              const newArr = [...prev];
              newArr[0] = value ? false : true;
              return newArr;
            });
          }}
        />
        <span>:</span>
        <s.Input
          maxLength={2}
          type="text"
          onFocus={() => {
            setWriteCnt((prev) => {
              if (prev == 2) {
                return prev;
              }
              return prev + 1;
            });
          }}
          onChange={(e) => {
            const value = Number(e.target.value);
            setTime((prev) => {
              const newObj = { ...prev };
              newObj.m = value;
              return newObj;
            });
            setWarning((prev) => {
              const newArr = [...prev];
              newArr[1] = value ? false : true;
              return newArr;
            });
          }}
        />
      </s.TimeBox>
      {writeCnt == 2 && !noWarning && (
        <s.WarningMassage>
          해당 항목은 비워두거나 한글을 입력할 수 없습니다
        </s.WarningMassage>
      )}
    </s.InputBox>
  );
}

type Props = {
  label: string;
  type: string;
  setForm: React.Dispatch<React.SetStateAction<CareInfo>>;
  setDisabled: React.Dispatch<React.SetStateAction<CareDisabledObj>>;
};
