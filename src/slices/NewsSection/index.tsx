import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { NewsCard } from "~slices/NewsSection/NewsCard";

/**
 * Props for `NewsSection`.
 */
export type NewsSectionProps = SliceComponentProps<Content.NewsSectionSlice>;

/**
 * Component for "NewsSection" Slices.
 */
const NewsSection = ({ slice }: NewsSectionProps): JSX.Element => {
  const { items } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center gap-[30px] pb-[220px]"
    >
      {items.map(({ image, title, subtitle, text, footer }, idx) => (
        <NewsCard
          key={idx}
          image={image}
          title={title?.toString() ?? ""}
          subtitle={subtitle?.toString() ?? ""}
          text={text?.toString() ?? ""}
          footer={footer?.toString()}
        />
      ))}
    </section>
  );
};

export default NewsSection;
