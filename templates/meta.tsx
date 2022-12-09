import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const Meta: FC<PropsWithChildren> = ({ children }) => {
  return <Head>{children}</Head>;
};

export default Meta;
