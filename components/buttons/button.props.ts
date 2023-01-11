import type { HTMLProps } from "react";

interface ButtonPropsType extends HTMLProps<HTMLButtonElement> {
  text: string;
  type?: "submit" | "button" | "reset";
  className?: string;
  color?: string;
  hoverColor?: string;
  textColor?: string;
}

export default ButtonPropsType;
