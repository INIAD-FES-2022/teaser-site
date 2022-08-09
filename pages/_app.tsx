import { NextComponentType, NextPageContext } from "next";
import { ReactNode, FC } from "react";
import type { AppProps } from "next/app";

import "../styles/variables.scss";
import "../styles/globals.scss";

type Props<P = Record<string, unknown>> = {
    Component: NextComponentType<NextPageContext, unknown, P>;
    pageProps: ReactNode;
};

const MyApp: FC<Props> = ({ Component, pageProps }) => (
    <Component>{pageProps}</Component>
);

// eslint-disable-next-line import/no-default-export
export default MyApp;
