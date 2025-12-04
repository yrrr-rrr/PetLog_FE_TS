import styled from "styled-components";

export const Form = styled.form`
  gap: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProfileBox = styled.section`
  gap: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FileInput = styled.input`
  display: none;
`;
export const FileUploadBtn = styled.div`
  color: ${({ theme }) => theme.color.gray_4};
  font-size: ${({ theme }) => theme.font.body_S};
  font-weight: ${({ theme }) => theme.font.weightRegular};

  cursor: pointer;
`;
export const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`;

export const WritingSection = styled.section`
  gap: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputBox = styled.div`
  gap: 8px;
  width: 340px;
  height: 75px;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};

  span {
    margin-left: 4px;
    color: ${({ theme }) => theme.color.red};
  }
`;

export const InputDiv = styled.div`
  gap: 8px;
  padding: 8px 12px;
  width: 100%;
  height: auto;
  border: 1px solid ${({ theme }) => theme.color.gray_4};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.gray_4};
    font-size: ${({ theme }) => theme.font.body_S};
    font-weight: ${({ theme }) => theme.font.weightRegular};
  }
`;
export const WarningMassage = styled.p`
  padding: 0 8px;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;

export const GenderSection = styled.section`
  gap: 12px;
  padding: 8px 12px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;
export const GenderLabel = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;
export const GenderBox = styled.div`
  gap: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const GenderBtn = styled.div<{
  $checked: boolean;
  $gender: string;
}>`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, $checked, $gender }) =>
    $checked
      ? $gender == "female"
        ? theme.color.pink
        : theme.color.blue
      : theme.color.gray_3};

  cursor: pointer;
`;

export const BtnBox = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
`;
