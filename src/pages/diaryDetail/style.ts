import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DiarySection = styled.section`
  margin-top: 60px;
  padding: 60px 20px;
  gap: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;

export const ActionBox = styled.div`
  gap: 20px;
  display: flex;

  color: ${({ theme }) => theme.color.gray_4};
  font-size: ${({ theme }) => theme.font.body_S};
  font-weight: ${({ theme }) => theme.font.weightRegular};

  p {
    cursor: pointer;
  }
`;

export const DateText = styled.p`
  margin: 8px 0 20px 0;
  color: ${({ theme }) => theme.color.gray_4};
  font-size: ${({ theme }) => theme.font.body_M};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_M};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;
