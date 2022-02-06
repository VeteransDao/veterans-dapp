import Head from 'next/head';
import '../src/styles/reset.css';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import App from 'next/app'

function VetApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Veterans DAO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default VetApp;
