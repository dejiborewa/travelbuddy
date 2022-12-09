import type { ChangeEvent, HTMLProps } from "react";

interface InputPropsType extends HTMLProps<HTMLInputElement> {
  value: string | number;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default InputPropsType;
