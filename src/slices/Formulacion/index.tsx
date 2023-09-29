import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

import { Text } from "~ui/Text";
/**
 * Props for `Formulacion`.
 */
export type FormulacionProps = SliceComponentProps<Content.FormulacionSlice>;

/**
 * Component for "Formulacion" Slices.
 */
const Formulacion = ({ slice }: FormulacionProps): JSX.Element => {
  const {
    primary: { title, image },
    items,
  } = slice;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center gap-[48px] py-[92px] w-[1920px]"
    >
      <div className="text-center w-[600px]">
        <Text variation="h1" textColor="text-secondary" fontWeight="font-bold">
          {title}
        </Text>
      </div>
      <div className="border-b-3 border-primary w-[100px]"></div>
      <div className="flex">
        <div className="flex flex-col items-center w-[420px]">
          <PrismicImage
            field={image}
            width={image.dimensions?.width}
            height={image.dimensions?.height}
          />
        </div>
        <div className="flex flex-col gap-[38px] w-[420px]">
          {items.map(({ title, text }, idx) => (
            <div key={idx} className="flex items-center gap-[22px]">
              <div className="w-[19px] h-[19px] rounded-[19px] bg-primary"></div>
              <div>
                <Text
                  variation="24"
                  textColor="text-secondary"
                  fontWeight="font-bold"
                >
                  {title}
                </Text>
                <Text
                  variation="text"
                  textColor="text-primary"
                  fontWeight="font-bold"
                >
                  {text}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formulacion;
