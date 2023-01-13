import type { FC } from "react";
import Loader from "../Loader";
import type ButtonPropsType from "./button.props";

const Button: FC<ButtonPropsType> = ({
  text,
  color = "bg-primary",
  hoverColor = "bg-btnHover",
  textColor = "text-white",
  type = "button",
  className,
  loading,
  ...rest
}) => {
  return (
    <div>
      <button
        type={type}
        className={`${color} ${
          color === "bg-[#C4C5C5]/70" || loading === true
            ? "cursor-not-allowed"
            : "cursor-pointer"
        } border-0 outline-0 mt-4 p-4 w-full font-mukta ${textColor} rounded-[12px] text-base hover:${hoverColor} active:${hoverColor} ${className}`}
        {...rest}
      >
        {loading ? <Loader /> : text}
      </button>
    </div>
  );
};

export default Button;
