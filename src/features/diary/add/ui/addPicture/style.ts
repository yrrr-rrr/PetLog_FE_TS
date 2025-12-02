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

export const HelperText = styled.p`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_L};
  font-weight: ${({ theme }) => theme.font.weightBold};
`;

export const BtnBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
