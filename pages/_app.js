import Layout from '../components/layout/Layout';
//@styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}

export default MyApp
