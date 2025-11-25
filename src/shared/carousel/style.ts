import styled from "styled-components";

export const Img = styled.img<{ $width: number }>`
  width: ${({ $width }) => $width}px;
  height: ${({ $width }) => $width}px;
  border-radius: 20px;
  cursor: pointer;
`;

export const Embla = styled.section<{ $width: number }>`
  width: ${({ $width }) => $width}px;

  border-radius: 20px;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 100%;
`;

export const EmblaViewport = styled.div`
  overflow: hidden;
`;

export const EmblaContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
`;

export const EmblaSlide = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
`;

export const BtnBox = styled.div`
  margin-top: 28px;
  gap: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DotBtn = styled.button<{
  $currentIdx: number;
  $selectIdx: number;
}>`
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme, $currentIdx, $selectIdx }) =>
    $currentIdx == $selectIdx ? theme.color.yellow : theme.color.gray_3};
  cursor: pointer;
`;
