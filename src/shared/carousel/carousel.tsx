import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import * as s from "./style";
import { useDotBtn } from "./dotBtn";

export function Carousel(props: { imgs: string[]; width: number }) {
  const { imgs, width } = props;
  const options: EmblaOptionsType = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotBtn(emblaApi);

  return (
    <s.Embla $width={width}>
      <s.EmblaViewport ref={emblaRef}>
        <s.EmblaContainer>
          {imgs.map((img, idx) => (
            <s.EmblaSlide key={idx}>
              <s.Img src={img} $width={width} />
            </s.EmblaSlide>
          ))}
        </s.EmblaContainer>
      </s.EmblaViewport>
      <s.BtnBox>
        {scrollSnaps.map((_, idx) => (
          <s.DotBtn
            key={idx}
            $currentIdx={idx}
            $selectIdx={selectedIndex}
            onClick={() => onDotButtonClick(idx)}
          ></s.DotBtn>
        ))}
      </s.BtnBox>
    </s.Embla>
  );
}
