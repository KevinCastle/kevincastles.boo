import { Poppins } from 'next/font/google';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Cursor from '../components/Cursor';
import '../styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <main className={poppins.className}>
        <Cursor />
        <ThemeProvider attribute="class">
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </main>
    </>
  );
}

export default Application;
