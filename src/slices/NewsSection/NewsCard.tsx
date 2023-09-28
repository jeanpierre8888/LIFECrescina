import { PrismicImage } from "@prismicio/react";
import { ImageField } from "@prismicio/types";

import { Text } from "~ui/Text";

type NewsCardProps = {
  image: ImageField;
  title: string;
  subtitle: string;
  text: string;
  footer?: string;
};

export const NewsCard = ({
  image,
  title,
  subtitle,
  text,
  footer,
}: NewsCardProps) => {
  return (
    <div className="w-[370px] rounded-[5px] pb-[27px] bg-lightgray">
      <PrismicImage field={image} />

      <div className="flex flex-col pt-[56px] gap-[18px] px-[32px]">
        <Text variation="40" fontWeight="font-bold" textColor="text-primary">
          {title}
        </Text>
        <div className="min-h-[75px]">
          <Text variation="h6" fontWeight="font-bold" textColor="text-primary">
            {subtitle}
          </Text>
        </div>
        <Text variation="text" textColor="text-secondary">
          {text}
        </Text>
        {footer && (
          <Text variation="12" textColor="text-secondary" fontStyle="italic">
            {footer}
          </Text>
        )}
      </div>
    </div>
  );
};
