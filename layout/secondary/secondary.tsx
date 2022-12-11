import type { FC, PropsWithChildren } from "react";
import styles from "./secondary.module.scss";
import SecondaryPropsType from "./secondary.props";

const Secondary: FC<PropsWithChildren<SecondaryPropsType>> = ({
  children,
  backgroundImage
}) => {
  return (
    <section className={`${backgroundImage} ${styles.base}`}>
      {children}
    </section>
  );
};

export default Secondary;
