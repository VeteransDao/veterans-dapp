import Head from 'next/head';
import '../src/styles/reset.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppBar from '../src/components/AppBar';
import store from '../src/redux/store';
import { Provider } from 'react-redux';
// import App from 'next/app'

// Dark Color - rgb(30, 33, 37)
// Lighter Color - rgb(226, 229, 233)
// Font - White or opacity 0.5
// Fonts - Gothica, Inconsolata
const globalTheme = createTheme({
  palette: {
    primary: {
      main: '#1e2125',
      light: '#e2e5e9',
      dark: '#0f1011'
    },
    background: {
      paper: '#1e2125',
      default: '#1e2125'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7',
      disabled: 'rgba(255, 255, 255, 0.5',
      icon: 'rgba(255, 255, 255, 0.5'
    },
    divider: 'rgba(255, 255, 255, 0.12'
  }
});

function VetApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Veterans DAO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={globalTheme}>
        <AppBar />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
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
