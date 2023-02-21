import "@/styles/globals.css";
import { Noto_Sans } from "@next/font/google";
import type { AppProps } from "next/app";

const NotoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={NotoSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
