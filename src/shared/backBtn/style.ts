import styled from "styled-components";

export const BackBtn = styled.div`
  gap: 12px;
  display: flex;
  cursor: pointer;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.heading_M};
  font-weight: ${({ theme }) => theme.font.weightSemiBold};
`;
