import styled from "styled-components";

export const Main = styled.main`
  gap: 240px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CodeSection = styled.section`
  width: 32px 12px;
  gap: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_L};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;

export const InputBox = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  width: 260px;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 10px;
  outline: none;

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_XL};
  font-weight: ${({ theme }) => theme.font.weightRegular};
  letter-spacing: 8px;
  text-align: center;
  text-transform: uppercase;
`;

export const WarningMassage = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.description};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;
