import { Content, FilledContentRelationshipField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Text } from "~ui/Text";
/**
 * Props for `InstructionsSection`.
 */
export type InstructionsSectionProps =
  SliceComponentProps<Content.InstructionsSectionSlice>;

/**
 * Component for "InstructionsSection" Slices.
 */
const InstructionsSection = ({
  slice,
}: InstructionsSectionProps): JSX.Element => {
  const {
    primary: { title, video_url },
    items,
  } = slice;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col items-center py-[147px]"
    >
      <div className="flex flex-col gap-[57px]">
        <Text variation="h1" textColor="text-primary" fontWeight="font-bold">
          {title}
        </Text>
        <div className="border-b-3 border-primary w-[100px]"></div>
        <div className="flex gap-[87px] w-[1170px]">
          <div className="flex flex-col gap-[40px] w-1/2">
            {items.map(({ text }, idx) => (
              <div key={idx} className="flex gap-[7px]">
                <Text variation="text" textColor="text-secondary">
                  {idx + 1}.
                </Text>
                <Text variation="text" textColor="text-secondary">
                  {text}
                </Text>
              </div>
            ))}
          </div>
          <div className="w-1/2">
            <video
              src={(video_url as FilledContentRelationshipField).url}
              controls
              width={540}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection;
