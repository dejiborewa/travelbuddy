import type { HTMLProps } from 'react';

interface ButtonPropsType extends HTMLProps<HTMLButtonElement> {
  text: string;
  type: 'submit' | 'button' | 'reset';
}

export default ButtonPropsType;
