import React, { HTMLProps, PropsWithChildren } from "react";

export enum TextTagEnum {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  p = "p",
}

export const textTagMap = {
  [TextTagEnum.H1]: "h1",
  [TextTagEnum.H2]: "h2",
  [TextTagEnum.H3]: "h3",
  [TextTagEnum.H4]: "h4",
  [TextTagEnum.H5]: "h5",
  [TextTagEnum.H6]: "h6",
  [TextTagEnum.p]: "p",
};

type TextTagProps = {
  variation: TextTagEnum;
};

export const TextTag = ({
  variation = TextTagEnum.H1,
  children,
  ...props
}: PropsWithChildren<TextTagProps & HTMLProps<HTMLBaseElement>>) => {
  return React.createElement(textTagMap[variation], props, children);
};
