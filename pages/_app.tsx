import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/global.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Amplify from "aws-amplify";
import config from "../src/aws-exports";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
Amplify.configure({ ...config, srr: true });

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Authenticator signUpAttributes={["phone_number"]}>
      {({ signOut, user }) => (
        <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
      )}
    </Authenticator>
  );
}

export default MyApp;
