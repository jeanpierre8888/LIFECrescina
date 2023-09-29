import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { Text } from "~ui/Text";
/**
 * Props for `SimpleBanner`.
 */
export type SimpleBannerProps = SliceComponentProps<Content.SimpleBannerSlice>;

/**
 * Component for "SimpleBanner" Slices.
 */
const SimpleBanner = ({ slice }: SimpleBannerProps): JSX.Element => {
  const {
    primary: { background, title },
  } = slice;

  const heightBanner = `h-[${background.dimensions?.height}px]`;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        "flex flex-col justify-center px-[396px] bg-no-repeat bg-cover bg-center-top",
        heightBanner
      )}
      style={{
        backgroundImage: `url(${background.url})`,
      }}
    >
      <div className="w-[695px]">
        <Text variation="48" textColor="text-secondary" fontWeight="font-bold">
          {title}
        </Text>
      </div>
    </section>
  );
};

export default SimpleBanner;
