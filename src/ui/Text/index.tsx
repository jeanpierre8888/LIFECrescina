import clsx from "clsx";
import { HTMLProps, PropsWithChildren } from "react";

import { TextTag, TextTagEnum, textTagMap } from "~ui/TextTag";

export type TextProps = {
  variation: "h1" | "20" | "text";
  textColor?: string;
  fontWeight?: "font-bold" | "font-normal";
  tag?: TextTagEnum;
};

export const Text = ({
  children,
  className = "",
  fontWeight,
  tag,
  textColor,
  variation,
}: PropsWithChildren<
  TextProps & Pick<HTMLProps<HTMLDivElement>, "className">
>) => {
  let headingVariation;

  switch (variation) {
    case "h1":
      headingVariation = TextTagEnum.H1;
      break;
    case "20":
    case "text":
      headingVariation = TextTagEnum.p;
      break;
  }

  if (tag) {
    headingVariation = textTagMap[tag] as TextTagEnum;
  }

  return (
    <TextTag
      variation={headingVariation}
      className={clsx(className, {
        "text-34px": variation === "h1",
        "text-20px": variation === "20",
        "text-16px": variation === "text",
        [textColor!]: textColor,
        "text-gris": !textColor,
        [fontWeight!]: fontWeight,
      })}
    >
      {children}
    </TextTag>
  );
};
