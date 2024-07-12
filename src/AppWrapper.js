import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';

const AppWrapper = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default AppWrapper;
