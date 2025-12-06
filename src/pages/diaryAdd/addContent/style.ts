import { GetIcon } from "@/shared/getIcon/getIcon";
import styled from "styled-components";

export const Main = styled.main`
  padding: 0 5vw 5vw 5vw;
  gap: 4vh;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  position: relative;
`;

export const ContentSection = styled.section`
  margin-top: 9vh;
  gap: 4vh;
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  gap: 1vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleDiv = styled.div`
  padding: 2vh 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.input`
  width: 80%;
  min-width: 220px;
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
  width: 100%;
  height: 28vh;
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
