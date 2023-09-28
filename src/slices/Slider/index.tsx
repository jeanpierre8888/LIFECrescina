"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ButtonControl } from "~slices/Slider/ButtonControl";
import { Button } from "~ui/Button";
import { Text } from "~ui/Text";

/**
 * Props for `Slider`.
 */
export type SliderProps = SliceComponentProps<Content.SliderSlice>;

/**
 * Component for "Slider" Slices.
 */
const Slider = ({ slice }: SliderProps): JSX.Element => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const { items } = slice;

  return (
    <section>
      <Swiper
        effect={"fade"}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.realIndex)}
        autoplay={{ delay: 8000 }}
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        className="flex items-center"
      >
        {items.map(
          ({ background_image, main_text, button_text, button_link }, idx) => (
            <SwiperSlide
              key={idx}
              data-slice-type={slice.slice_type}
              data-slice-variation={slice.variation}
            >
              <div
                className="flex flex-col items-start justify-center px-[200px] gap-[26px] bg-no-repeat bg-cover bg-center-top h-[915px]"
                style={{
                  backgroundImage: `url(${background_image.url})`,
                }}
              >
                <div className="w-full max-w-[635px]">
                  <Text
                    variation="h1"
                    textColor="text-secondary"
                    fontWeight="font-bold"
                  >
                    {main_text}
                  </Text>
                </div>
                <PrismicLink field={button_link}>
                  <Button variant="primary">
                    <Text
                      variation="text"
                      textColor="text-white"
                      fontWeight="font-bold"
                    >
                      {button_text}
                    </Text>
                  </Button>
                </PrismicLink>
                <ButtonControl
                  direction="left"
                  isDisabled={currentSlideIndex === 0}
                />
                <ButtonControl
                  direction="right"
                  isDisabled={currentSlideIndex === items.length - 1}
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default Slider;
