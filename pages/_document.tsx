import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          type="text/javascript"
          src="/hash-router-redirect.js"
        ></script>
      </Head>
      <body className="font-Raleway">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
