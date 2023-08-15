
'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppProps } from 'next/app'; // Importe AppProps

function MyApp({ Component, pageProps }: AppProps) { // Defina tipos para Component e pageProps
  
 
useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
