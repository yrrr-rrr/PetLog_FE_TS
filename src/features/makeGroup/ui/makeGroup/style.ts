import { GetIcon } from "@/shared/getIcon/getIcon";
import styled from "styled-components";

export const Main = styled.main`
  padding: 20px 20px;
  gap: 28px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const PageTitleSection = styled.section`
  gap: 8px;
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const BackBtn = styled(GetIcon)`
  cursor: pointer;
`;

export const TextSection = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;

export const Notice = styled.p`
  padding-left: 36px;
  color: ${({ theme }) => theme.color.gray_4};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};

  span {
    color: ${({ theme }) => theme.color.red};
  }
`;
