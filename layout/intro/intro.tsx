import { FC, PropsWithChildren } from "react";
import styles from "./intro.module.scss";

const Intro: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.base}>{children}</main>;
};

export default Intro;
