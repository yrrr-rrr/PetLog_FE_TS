import styled from "styled-components";

export const Form = styled.form`
  padding-top: 50px;
  gap: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Section = styled.section`
  gap: 24px;
  width: 340px;
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div`
  gap: 8px;
  padding: 8px 12px;
  width: 100%;
  height: 75px;
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
    margin-left: 4px;
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
  gap: 4px;
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.font.body_S};
    font-weight: ${({ theme }) => theme.font.weightRegular};
  }
`;

export const Input = styled.input`
  padding: 8px;
  width: 32px;
  height: 20px;
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
  padding: 16px;
  width: 300px;
  height: 200px;
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

export const BtnBox = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
`;
