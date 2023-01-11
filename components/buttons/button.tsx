import type { FC } from "react";
import type ButtonPropsType from "./button.props";

const Button: FC<ButtonPropsType> = ({
  text,
  color = "bg-primary",
  hoverColor = "bg-btnHover",
  textColor = "text-white",
  type = "button",
  className,
  ...rest
}) => {
  return (
    <div>
      <button
        type={type}
        className={`${color} ${
          color === "bg-[#C4C5C5]/70" ? "cursor-not-allowed" : "cursor-pointer"
        } border-0 outline-0 mt-4 p-4 w-full font-mukta ${textColor} rounded-[12px] text-base hover:${hoverColor} active:${hoverColor} ${className}`}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
