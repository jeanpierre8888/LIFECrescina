import clsx from "clsx";
import { HTMLProps, PropsWithChildren } from "react";

import { TextTag, TextTagEnum, textTagMap } from "~ui/TextTag";

export type TextProps = {
  variation: "h1" | "h6" | "12" | "20" | "40" | "text";
  textColor?: string;
  fontWeight?: "font-bold" | "font-normal";
  fontStyle?: "italic";
  tag?: TextTagEnum;
};

export const Text = ({
  children,
  className = "",
  fontWeight,
  fontStyle,
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
    case "h6":
      headingVariation = TextTagEnum.H6;
      break;
    case "12":
    case "20":
    case "40":
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
        "text-21px": variation === "h6",
        "text-12px": variation === "12",
        "text-20px": variation === "20",
        "text-40px": variation === "40",
        "text-16px": variation === "text",
        [textColor!]: textColor,
        "text-gris": !textColor,
        [fontWeight!]: fontWeight,
        italic: fontStyle === "italic",
      })}
    >
      {children}
    </TextTag>
  );
};
