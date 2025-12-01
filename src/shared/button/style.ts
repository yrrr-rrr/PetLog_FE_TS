import styled from "styled-components";

export const Btn = styled.button<{ $disabled: boolean; $color: string }>`
  width: 100px;
  height: 40px;
  border: 1px solid
    ${({ theme, $disabled }) =>
      $disabled ? theme.color.gray_4 : theme.color.black};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $disabled, $color }) =>
    $color !== ""
      ? $color == "yellow"
        ? theme.color.yellow
        : theme.color.gray_2
      : $disabled
        ? theme.color.gray_2
        : theme.color.yellow};

  color: ${({ theme, $disabled }) =>
    $disabled ? theme.color.gray_4 : theme.color.black};
  font-size: ${({ theme }) => theme.font.body_M};
  font-weight: ${({ theme }) => theme.font.weightBold};

  cursor: pointer;
`;
