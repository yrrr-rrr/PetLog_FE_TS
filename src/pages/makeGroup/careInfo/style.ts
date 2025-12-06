import styled from "styled-components";

export const Form = styled.form`
  padding: 3vh 3vh 0 3vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  position: relative;
`;

export const InputSection = styled.section`
  gap: 10vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Section = styled.section`
  gap: 5vw;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div`
  gap: 2vw;
  padding: 2vw 3vw;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray_4};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const InputInfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    margin-left: 1vw;
    color: ${({ theme }) => theme.color.red};
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.gray_4};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;

export const TimeBox = styled.div`
  gap: 3vw;
  display: flex;
  align-items: center;
  span {
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.body_S};
    font-weight: ${({ theme }) => theme.font.weightRegular};
  }
`;

export const TimeDiv = styled.div`
  gap: 1vw;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 2vw;
  width: 8vw;
  height: 2vh;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.gray_1};

  &&:focus {
    outline: ${({ theme }) => theme.color.yellow} solid 1px;
  }
`;

export const Note = styled.textarea`
  padding: 4vw;
  width: 100%;
  height: 22vh;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.gray_1};
  outline: none;
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.gray_4};
    font-size: ${({ theme }) => theme.font.body_S};
    font-weight: ${({ theme }) => theme.font.weightRegular};
  }
`;

export const WarningMassage = styled.p`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.body_XS};
  font-weight: ${({ theme }) => theme.font.weightRegular};
`;
