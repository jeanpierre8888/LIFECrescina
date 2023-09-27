import clsx from "clsx";
import { HTMLProps, PropsWithChildren } from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  type?: "button" | "submit";
};

type ButtonPropsWithChildren = PropsWithChildren<
  ButtonProps &
    Pick<HTMLProps<HTMLButtonElement>, "onClick" | "type" | "className">
>;

export const Button = ({
  variant,
  children,
  className = "",
  type = "button",
  ...rest
}: ButtonPropsWithChildren) => {
  return (
    <button
      {...rest}
      type={type}
      className={clsx(
        className,
        "pt-[19px] pb-[17px] px-[35px] rounded-[5px] text-white",
        {
          ["bg-primary"]: variant === "primary",
          ["bg-secondary"]: variant === "secondary",
        }
      )}
    >
      {children}
    </button>
  );
};
