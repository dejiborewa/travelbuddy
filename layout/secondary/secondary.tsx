import type { FC, PropsWithChildren } from "react";
import styles from "./secondary.module.scss";
import SecondaryPropsType from "./secondary.props";

const Secondary: FC<PropsWithChildren<SecondaryPropsType>> = ({
  children,
  className
}) => {
  return (
    <section className={`${styles.base} ${className}`}>{children}</section>
  );
};

export default Secondary;
