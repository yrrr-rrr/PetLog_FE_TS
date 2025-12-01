import { GetIcon } from "@/shared/getIcon/getIcon";
import styled from "styled-components";

export const Header = styled.header`
  padding: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const Logo = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_L};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
  cursor: pointer;
`;

export const IconDiv = styled.div`
  gap: 28px;
  display: flex;
`;

export const Icon = styled(GetIcon)`
  cursor: pointer;
`;
