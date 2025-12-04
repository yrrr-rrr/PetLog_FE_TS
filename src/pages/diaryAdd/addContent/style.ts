import { GetIcon } from "@/shared/getIcon/getIcon";
import styled from "styled-components";

export const Main = styled.main`
  gap: 40px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ContentSection = styled.section`
  margin-top: 80px;
  gap: 40px;
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  gap: 8px;
  padding: 0 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.input`
  border: none;
  outline: none;

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_L};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray_4};
    font-size: ${({ theme }) => theme.font.heading_L};
    font-weight: ${({ theme }) => theme.font.weightSemiBold};
  }
`;

export const CalendarInput = styled.input`
  display: none;
`;

export const CalendarIcon = styled(GetIcon)`
  cursor: pointer;
`;

export const Date = styled.p`
  width: 100%;

  color: ${({ theme }) => theme.color.gray_4};
  font-size: ${({ theme }) => theme.font.body_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;

export const Content = styled.textarea`
  padding: 12px;
  width: 400px;
  height: 256px;
  border: none;
  outline: none;
  resize: none;
  background-color: ${({ theme }) => theme.color.gray_1};

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray_4};
    font-size: ${({ theme }) => theme.font.body_M};
    font-weight: ${({ theme }) => theme.font.weightSemiBold};
  }
`;

export const BtnBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
