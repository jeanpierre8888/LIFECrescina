import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Text } from "~ui/Text";
/**
 * Props for `StaticBanner`.
 */
export type StaticBannerProps = SliceComponentProps<Content.StaticBannerSlice>;

/**
 * Component for "StaticBanner" Slices.
 */
const StaticBanner = ({ slice }: StaticBannerProps): JSX.Element => {
  const {
    primary: { background_image, main_title, secondary_title, main_text },
  } = slice;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center p-[88px] gap-[35px] bg-no-repeat bg-cover bg-center-top h-[397px]"
      style={{
        backgroundImage: `url(${background_image.url})`,
      }}
    >
      <div>
        <Text variation="h1" textColor="text-primary" fontWeight="font-bold">
          {main_title}
        </Text>
        <Text variation="h1" textColor="text-secondary" fontWeight="font-bold">
          {secondary_title}
        </Text>
      </div>
      <div className="w-[548px] text-center">
        <Text variation="text" textColor="text-secondary">
          {main_text}
        </Text>
      </div>
    </section>
  );
};

export default StaticBanner;
