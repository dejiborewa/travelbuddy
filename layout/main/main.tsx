import { FC, PropsWithChildren } from "react";
import styles from "./main.module.scss";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.base}>{children}</main>;
};

export default Main;
