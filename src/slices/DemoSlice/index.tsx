import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `DemoSlice`.
 */
export type DemoSliceProps = SliceComponentProps<Content.DemoSliceSlice>;

/**
 * Component for "DemoSlice" Slices.
 */
const DemoSlice = ({ slice }: DemoSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for demo_slice (variation: {slice.variation}) Slices
    </section>
  );
};

export default DemoSlice;
