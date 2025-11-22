import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import * as s from "./style";
import { useDotBtn } from "./dotBtn";

export function Carousel(props: { imgs: string[] }) {
  const { imgs } = props;
  const options: EmblaOptionsType = {};
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotBtn(emblaApi);

  return (
    <s.Embla>
      <s.EmblaViewport ref={emblaRef}>
        <s.EmblaContainer>
          {imgs.map((img) => (
            <s.EmblaSlide key={img}>
              <s.Img src={img} />
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
