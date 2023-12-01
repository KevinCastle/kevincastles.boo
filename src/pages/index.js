import Head from 'next/head';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Miscellaneous from '../sections/Miscellaneous';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kevin Castillo&apos;s Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio and blog" />
      </Head>

      <main className="bg-circles w-full h-full relative pb-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Miscellaneous />
        <Footer />
      </main>
    </>
  );
}
