import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

import { Text } from "~ui/Text";

/**
 * Props for `FactSection`.
 */
export type FactSectionProps = SliceComponentProps<Content.FactSectionSlice>;

/**
 * Component for "FactSection" Slices.
 */
const FactSection = ({ slice }: FactSectionProps): JSX.Element => {
  const {
    variation,
    primary: { image, title, text },
  } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center pb-[67px]"
    >
      <div className="flex items-center justify-between gap-[150px] max-w-[1170px]">
        {variation == "image_left" && (
          <PrismicImage
            field={image}
            width={image.dimensions?.width}
            height={image.dimensions?.height}
          />
        )}

        <div className="flex flex-col gap-[30px]">
          <Text variation="28" fontWeight="font-bold" textColor="text-primary">
            {title}
          </Text>
          <div className="border-b-3 border-primary w-[100px]"></div>
          <Text variation="text" textColor="text-secondary">
            {text}
          </Text>
        </div>

        {variation == "image_right" && (
          <PrismicImage
            field={image}
            width={image.dimensions?.width}
            height={image.dimensions?.height}
          />
        )}
      </div>
    </section>
  );
};

export default FactSection;
