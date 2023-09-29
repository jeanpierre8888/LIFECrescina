import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import { Fragment } from "react";

import { Text } from "~ui/Text";
/**
 * Props for `RecomendacionesSection`.
 */
export type RecomendacionesSectionProps =
  SliceComponentProps<Content.RecomendacionesSectionSlice>;

/**
 * Component for "RecomendacionesSection" Slices.
 */
const RecomendacionesSection = ({
  slice,
}: RecomendacionesSectionProps): JSX.Element => {
  const {
    primary: { image, title },
    items,
  } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex">
        <PrismicImage
          field={image}
          width={image.dimensions?.width}
          height={image.dimensions?.height}
        />
        <div className="flex flex-col justify-center bg-lightgray pl-[193px] gap-[60px] w-full">
          <Text variation="h1" textColor="text-primary" fontWeight="font-bold">
            {title}
          </Text>
          <div className="border-b-3 border-primary w-[100px]"></div>
          <div className="flex flex-col gap-[30px] w-[550px]">
            {items.map(({ text }, idx) => (
              <div key={idx} className="flex items-center gap-[30px]">
                <div className="flex items-center justify-center w-[70px] h-[70px] rounded-[70px] bg-primary min-w-[70px]">
                  <Text
                    variation="32"
                    textColor="text-white"
                    fontWeight="font-bold"
                  >
                    {idx + 1}
                  </Text>
                </div>
                <Text variation="text" textColor="text-secondary">
                  {text}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecomendacionesSection;
