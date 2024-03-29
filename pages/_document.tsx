import { Html, Head, Main, NextScript } from "next/document";
import  Providers  from "./Providers";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <body>
        <Providers>
          <Main />
          <NextScript />
        </Providers>
      </body>
    </Html>
  );
}
