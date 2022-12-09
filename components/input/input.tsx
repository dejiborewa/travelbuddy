import type { FC } from "react";
import type InputPropsType from "./input.props";
import styles from "./input.module.scss";

const Input: FC<InputPropsType> = ({
  value,
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <input
      className={`${styles.base}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
