import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { HelmetProvider } from 'react-helmet-async';

import '../src/static/css/main.scss';

// Scroll to top on route change
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  );
};

export default MyApp;
