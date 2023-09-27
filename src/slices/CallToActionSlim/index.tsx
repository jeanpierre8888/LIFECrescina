import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

import { Button } from "~ui/Button";
import { Text } from "~ui/Text";
/**
 * Props for `CallToActionSlim`.
 */
export type CallToActionSlimProps =
  SliceComponentProps<Content.CallToActionSlimSlice>;

/**
 * Component for "CallToActionSlim" Slices.
 */
const CallToActionSlim = ({ slice }: CallToActionSlimProps): JSX.Element => {
  const {
    primary: { main_text, button_text, button_link },
  } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center justify-center bg-primary h-[117px]"
    >
      <div className="flex items-center justify-between w-full max-w-[1170px]">
        <Text variation="20" fontWeight="font-bold" textColor="text-white">
          {main_text}
        </Text>
        <PrismicLink field={button_link}>
          <Button variant="secondary">
            <Text
              variation="text"
              textColor="text-white"
              fontWeight="font-bold"
            >
              {button_text}
            </Text>
          </Button>
        </PrismicLink>
      </div>
    </section>
  );
};

export default CallToActionSlim;
