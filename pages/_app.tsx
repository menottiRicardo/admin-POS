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
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
            />
            <meta name="description" content="description of your project" />
            <meta name="theme-color" content="#000" />
            <title>Title of the project</title>
            <link rel="manifest" href="/manifest.json" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-icon.png"></link>
          </Head>
          {getLayout(<Component {...pageProps} />)}
        </RecoilRoot>
      )}
    </Authenticator>
  );
}

export default MyApp;
