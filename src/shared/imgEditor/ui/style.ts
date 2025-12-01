import { GetIcon } from "@/shared/getIcon/getIcon";
import styled from "styled-components";

export const AddImgBox = styled.div`
  gap: 24px;
  margin-bottom: 52px;
  width: 368px;
  display: flex;
  flex-wrap: wrap;
`;

export const EmptyImg = styled.div`
  width: 172px;
  height: 172px;
  border: 5px dotted ${({ theme }) => theme.color.gray_4};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const InputFile = styled.input`
  display: none;
`;

export const ImgBox = styled.div`
  width: 172px;
  height: 172px;
  border-radius: 30px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export const DeleteBtn = styled(GetIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
