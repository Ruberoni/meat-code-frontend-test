import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Caveat, Open_Sans } from "@next/font/google";

const caveatFont = Caveat({ subsets: ["latin"], variable: "--caveat-font" });
const openSansFont = Open_Sans({
  subsets: ["latin"],
  variable: "--open-sans-font",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={caveatFont.variable + " " + openSansFont.variable}>
      <Component {...pageProps} />
    </main>
  );
}
