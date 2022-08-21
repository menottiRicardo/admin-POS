import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/global.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Amplify from "aws-amplify";
import config from "../src/aws-exports";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import Head from "next/head";
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
        <RecoilRoot>
          <Head>
            <title>Admin</title>
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icon-512x512.png" />
            <link rel="icon" href="/icon-512x512.png" />
            <meta name="theme-color" content="#fff" />
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </RecoilRoot>
      )}
    </Authenticator>
  );
}

export default MyApp;
