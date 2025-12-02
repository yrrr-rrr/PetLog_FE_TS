import { GetIcon } from "@/shared/getIcon/getIcon";
import type * as icons from "@/shared/getIcon/icons";
import * as s from "./style";
import { useNavigate, type NavigateFunction } from "react-router-dom";

export function GroupEtry() {
  const nav = useNavigate();
  return (
    <s.Main>
      <s.Title>반려 기록 시작하기</s.Title>
      <s.ChoiceSection>
        {getChoice(
          "Group",
          "그룹 만들기",
          "그룹을 만들고 다른 보호자를 초대해 보세요",
          "makeGroup",
          nav,
        )}
        {getChoice(
          "Key",
          "초대 코드로 참여하기",
          "그룹원에게 받은 초대 코드로 참여하세요",
          "joinGroup",
          nav,
        )}
      </s.ChoiceSection>
    </s.Main>
  );
}

function getChoice(
  icon: keyof typeof icons,
  title: string,
  description: string,
  type: string,
  nav: NavigateFunction,
) {
  return (
    <s.Choice
      onClick={() => {
        if (type === "makeGroup") {
          nav("/makegroup");
        } else {
          nav("/joingroup");
        }
      }}
    >
      <s.TextSection>
        <s.ChoiceTitle>
          <GetIcon name={icon} width={24} />
          <p>{title}</p>
        </s.ChoiceTitle>
        <s.Description>{description}</s.Description>
      </s.TextSection>
      <GetIcon name="RightArrow" width={24} />
    </s.Choice>
  );
}
