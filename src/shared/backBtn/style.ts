import styled from "styled-components";

export const BackBtn = styled.div`
  gap: 3vw;
  padding: 5vw 8vw;
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  z-index: 1;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;
