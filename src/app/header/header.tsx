import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./style";

export function Header() {
  const param = useLocation().pathname.split("/")[1];
  const nav = useNavigate();
  console.log(param);
  return (
    <s.Header>
      <s.Logo>반려기록</s.Logo>
      {param !== "groupentry" &&
        param !== "makegroup" &&
        param !== "joingroup" && (
          <s.IconDiv>
            <s.Icon name="Notice" width={24} />
            <s.Icon name="Invite" width={24} />
            <s.Icon
              name="Setting"
              width={24}
              onClick={() => {
                nav("/setting");
              }}
            />
          </s.IconDiv>
        )}
    </s.Header>
  );
}
