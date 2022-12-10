import { FC } from "react";
import matchVariant from "../../utils/matchVariant";
import type HeadingPropsType from "./heading.props";
import styles from "./heading.module.scss";

const Heading: FC<HeadingPropsType<"h1" | "h2">> = ({
  variant = "h1",
  children,
  className
}) => {
  const Component = variant || "h1";
  const headingClassName = matchVariant(variant, {
    h1: styles.h1,
    h2: styles.h2,
    default: ""
  });

  return (
    <Component className={`${headingClassName} ${className || ""}`}>
      {children}
    </Component>
  );
};

export default Heading;
