import clsx from "clsx";
import SVG from "react-inlinesvg";
import { useSwiper } from "swiper/react";

type ButtonControlProps = {
  direction: "left" | "right";
  isDisabled?: boolean;
};

export const ButtonControl = ({
  direction,
  isDisabled,
}: ButtonControlProps) => {
  const swiper = useSwiper();

  return (
    <button
      slot={direction === "left" ? "container-start" : "container-end"}
      className={clsx(
        "absolute flex items-center justify-center ease-out duration-320 z-30 w-[80px] h-[80px] rounded-[80px]",
        {
          "left-[48px]": direction === "left",
          "right-[48px]": direction === "right",
          "bg-primary": !isDisabled,
          "bg-secondary": isDisabled,
        }
      )}
      onClick={() =>
        direction === "left" ? swiper.slidePrev() : swiper.slideNext()
      }
    >
      {direction === "left" && (
        <SVG
          src="/images/chevron-left.svg"
          width="19"
          height="32"
          className="fill-white"
        />
      )}
      {direction === "right" && (
        <SVG
          src="/images/chevron-right.svg"
          width="19"
          height="32"
          className="fill-white"
        />
      )}
    </button>
  );
};
