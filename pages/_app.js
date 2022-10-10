import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from 'react-bootstrap/SSRProvider';

import Layout from '../components/Layout/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default MyApp
