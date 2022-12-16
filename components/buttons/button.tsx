import type { FC } from "react";
import type ButtonPropsType from "./button.props";

const Button: FC<ButtonPropsType> = ({
  text,
  type = "button",
  className,
  ...rest
}) => {
  return (
    <div>
      <button
        type={type}
        className={`bg-primary border-0 outline-0 mt-4 p-4 w-full font-mukta text-white rounded-[12px] text-base hover:bg-btnHover active:bg-btnHover ${className}`}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
