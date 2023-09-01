import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { NavBar } from "~/components/NavBar";
const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <NavBar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};
export default api.withTRPC(MyApp);
