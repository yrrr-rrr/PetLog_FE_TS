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

export const AddSection = styled.section`
  padding: 20px;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HelperText = styled.p`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_L};
  font-weight: ${({ theme }) => theme.font.weightBold};
`;

export const ImgDiv = styled.div`
  margin-bottom: 52px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BtnBox = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
