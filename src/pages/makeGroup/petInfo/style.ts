import styled from "styled-components";

export const Form = styled.form`
  padding: 0 3vh 0 3vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  position: relative;
`;

export const InputSection = styled.section`
  gap: 8vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileBox = styled.section`
  gap: 3vw;
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
  width: 37vw;
  height: 37vw;
  border-radius: 100%;
`;

export const WritingSection = styled.section`
  gap: 3vw;
  width: 100%;
  min-height: 216px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const InputBox = styled.div`
  gap: 2vw;
  width: 85vw;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};

  span {
    margin-left: 1vw;
    color: ${({ theme }) => theme.color.red};
  }
`;

export const InputDiv = styled.div`
  gap: 2vw;
  padding: 2vw 3vw;
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
  padding: 0 2vw;
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;

export const GenderSection = styled.section`
  gap: 3vw;
  padding: 2vw 3vw;
  width: 75vw;
  display: flex;
  flex-direction: column;
`;
export const GenderLabel = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;
export const GenderBox = styled.div`
  gap: 11vw;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const GenderBtn = styled.div<{
  $checked: boolean;
  $gender: string;
}>`
  width: 12vw;
  height: 12vw;
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
