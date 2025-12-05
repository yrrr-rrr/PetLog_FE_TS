import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black_dimmed};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
`;

export const Modal = styled.div`
  padding: 5vw;
  gap: 12vw;
  width: 320px;
  height: 210px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  background: var(--white, #fdfdfb);
  box-shadow: 0 0 15px 0 ${({ theme }) => theme.color.black_dimmed};

  position: absolute;
  top: 40%;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;

export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
