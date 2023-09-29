import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

import { Text } from "~ui/Text";
/**
 * Props for `EscalaSection`.
 */
export type EscalaSectionProps =
  SliceComponentProps<Content.EscalaSectionSlice>;

/**
 * Component for "EscalaSection" Slices.
 */
const EscalaSection = ({ slice }: EscalaSectionProps): JSX.Element => {
  const {
    primary: { pretitle, title, description, image },
  } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center py-[107px]"
    >
      <div className="flex flex-col items-center gap-[25px] w-[1060px]">
        <div className="flex flex-col items-center text-center gap-[25px] w-[800px]">
          <Text variation="32" textColor="text-secondary">
            {pretitle}
          </Text>
          <Text variation="h4" fontWeight="font-bold" textColor="text-primary">
            {title}
          </Text>
          <Text variation="text" textColor="text-secondary">
            {description}
          </Text>
        </div>
        <PrismicImage
          field={image}
          width={image.dimensions?.width}
          height={image.dimensions?.height}
        />
      </div>
    </section>
  );
};

export default EscalaSection;
