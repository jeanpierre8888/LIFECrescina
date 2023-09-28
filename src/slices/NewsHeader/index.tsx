import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

import { Text } from "~ui/Text";

/**
 * Props for `NewsHeader`.
 */
export type NewsHeaderProps = SliceComponentProps<Content.NewsHeaderSlice>;

/**
 * Component for "NewsHeader" Slices.
 */
const NewsHeader = ({ slice }: NewsHeaderProps): JSX.Element => {
  const {
    primary: { logo, title, text },
  } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center pt-[140px] pb-[48px] gap-[44px]"
    >
      <PrismicImage
        className="pb-[44px]"
        field={logo}
        width={logo.dimensions?.width}
        height={logo.dimensions?.height}
      />
      <div className="w-2/5 text-center">
        <Text variation="h1" fontWeight="font-bold" textColor="text-secondary">
          {title}
        </Text>
      </div>
      <div className="border-b-3 border-primary w-[100px]"></div>
      <div className="w-1/2 text-center">
        <Text variation="20" textColor="text-secondary">
          {text}
        </Text>
      </div>
    </section>
  );
};

export default NewsHeader;
