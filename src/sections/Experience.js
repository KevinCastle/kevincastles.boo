// TODO: BORRAR ESTA RULE CUANDO LOS HREF SI TENGAN LINKS
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { PiReadCvLogoFill } from 'react-icons/pi';
import Card from '../components/Card';
import Layout from '../components/Layout';
// TODO:  PROYECTOS VA A SER UN CARRUSEL

function Experience() {
  return (
    <section id="experience" className="w-full mt-4">
      <Layout className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-9 h-full">
          <Link href="" target="">
            <Card link className="!bg-secondary-500/70 hover:!bg-secondary-500/90 h-full flex flex-col justify-center">
              <p className="text-2xl font-semibold">Where I&apos;ve worked</p>
              <p className="text-4xl text-[#65D6A6] font-semibold">modyo</p>
              <p className="text-xs -mt-2">2020 - Present</p>
              <p className="text-sm mt-2">
                Have worked with a team of
                <span className="font-semibold">skilled develeopers</span>
                {' '}
                on a wide range of projects where I
                <span className="font-semibold">developed components or even a large part of the application.</span>
                {' '}
                Over the past few years, I have transitioned into a
                <span className="font-semibold">leadership position of Frontend developers.</span>
              </p>
            </Card>
          </Link>
        </div>
        <Link href="/" className="col-span-12 sm:col-span-3 w-full h-full">
          <Card link className="!bg-primary-500/50 hover:!bg-primary-500/60 flex flex-col justify-center items-center text-center h-full w-full py-6">
            <PiReadCvLogoFill className="w-[20%] sm:w-[50%] h-auto mx-auto" />
            <p>Resume</p>
          </Card>
        </Link>
      </Layout>
    </section>
  );
}

export default Experience;
