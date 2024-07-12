import '../styles/globals.css';
import AppWrapper from '../AppWrapper';

function MyApp({ Component, pageProps }) {
  return <AppWrapper Component={Component} pageProps={pageProps} />;
}

export default MyApp;
