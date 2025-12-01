import styled from "styled-components";

export const Modal = styled.div`
  padding: 80px 20px 20px 20px;
  gap: 50px;
  width: 320px;
  height: 220px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
