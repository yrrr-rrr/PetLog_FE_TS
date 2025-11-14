import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Ul = styled.ul`
  padding: 20px 32px 0 32px;
  gap: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Li = styled.li`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};

  cursor: pointer;
`;

export const Toggle = styled.div<{ $toggle: boolean }>`
  padding: 0 5px;
  width: 72px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: ${({ $toggle }) => ($toggle ? "end" : "start")};
  background-color: ${({ theme, $toggle }) =>
    $toggle ? theme.color.yellow : theme.color.gray_3};

  div {
    width: 20px;
    height: 20px;
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.color.white};
    cursor: pointer;
  }
`;

export const WithdrawBox = styled.p`
  padding: 0 32px;
  margin-top: 72px;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};

  cursor: pointer;
`;
