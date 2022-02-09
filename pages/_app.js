/* eslint-disable @next/next/no-page-custom-font */
import "styles/globals.css";

import App from "next/app";
import Head from "next/head";
import Router from "next/router";

import { useState } from "react";
//CONTEXT
import { Logged } from "context/loginType";
import { DriverType } from "context/driverType";
import { DriveProcess } from "context/process";
import { Status } from "context/onlineStatus";
import { OrderFound } from "context/orderFound";
import { ButtonType } from "context/buttonType";

import NProgress from "nprogress";
import { SWRConfig } from "swr";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", (url) => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  const [online, setOnline] = useState(false);
  const [orderFound, setOrderFound] = useState("finding");
  const [type, setType] = useState("");
  const [progress, setProgress] = useState("input-outlet-pin");
  const [isDriver, setIsDriver] = useState("partner");
  const [logged, setLogged] = useState("login");
  const value = {
    //SET DATA
    set: {
      setOnline: setOnline,
      setOrderFound: setOrderFound,
      setType: setType,
      setProgress: setProgress,
      setIsDriver: setIsDriver,
      setLogged: setLogged,
    },
    //DATA
    data: {
      online: online,
      orderFound: orderFound,
      type: type,
      progress: progress,
      isDriver: isDriver,
      logged: logged,
    },
  };

  return (
    <>
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <SWRConfig
        value={{
          fetcher: fetch,
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <Logged.Provider value={value}>
          <DriverType.Provider value={value}>
            <DriveProcess.Provider value={value}>
              <ButtonType.Provider value={value}>
                <OrderFound.Provider value={value}>
                  <Status.Provider value={value}>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </Status.Provider>
                </OrderFound.Provider>
              </ButtonType.Provider>
            </DriveProcess.Provider>
          </DriverType.Provider>
        </Logged.Provider>
      </SWRConfig>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
