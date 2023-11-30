// TODO: BORRAR ESTA RULE CUANDO HAGA EL ABOUT
/* eslint-disable max-len */
import { PiReadCvLogoFill } from 'react-icons/pi';
import Link from 'next/link';
import { Caveat } from 'next/font/google';
import Layout from '../components/Layout';
import Card from '../components/Card';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

function About() {
  return (
    <section id="about" className="w-full mt-4">
      <Layout className="grid grid-cols-12 grid-rows-2 md:grid-rows-none gap-4">
        <Card link className="col-span-8 row-span-2 md:row-auto md:col-span-6 xl:col-span-5 flex flex-col justify-center">
          <p className={`font-semibold antialiased text-4xl lg:text-5xl pb-2 ${caveat.className}`}>Journey before destination</p>
          <p className="text-lg text-balance">A short personal history about pride, enthusiasm, downfall, and resilience. A story about how I started to be a web developer and where I am now.</p>
        </Card>
        <Link href="/" className="col-span-4 row-span-1 md:row-auto md:col-span-2 w-full h-full">
          <Card link className="!bg-primary-500/50 hover:!bg-primary-500/60 flex flex-col justify-center items-center text-center h-full w-full py-6">
            <PiReadCvLogoFill className="w-[50%] h-auto mx-auto" />
            <p>Resume</p>
          </Card>
        </Link>
        <Card link className="row-span-1 md:row-auto col-span-4 xl:col-span-5">
          <p>BLOG POST :D</p>
        </Card>
      </Layout>
    </section>
  );
}

export default About;

/*
Hi, this is Kevin, a self-taught web developer based in Santiago, Chile. I'm truly passionate about coding and bringing things to life on the internet (even if that means occasionally breaking them).

My web development journey began in 2015 when I met a JavaScript enthusiast friend who challenged my perception of the language. I used to be solely focused on Python and didn't consider JS as a "real" programming language. However, that encounter changed everything when he invited me to a freecodecamp meeting. Since that day, I've been head over heels in love with web development.

Over time, had the privilege of working as a freelancer and eventually found my way to Modyo, where I currently enjoy my day-to-day work. Currently deeply interested in the role of a developer advocate. That way, I get to combine my passion for coding with my desire to share knowledge with fellow developers.
*/
