import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <base href="/" />
        <link rel="icon" href="favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="stylesheet" href="config/theme.css" />
        <link rel="apple-touch-icon" href="android-chrome-192x192.png" />
        <link rel="manifest" href="manifest.json" />
        <meta
          name="description"
          content="Veterans DAO - NFTs by and for veterans."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
