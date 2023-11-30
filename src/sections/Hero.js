import Image from 'next/image';
import {
  PiEnvelopeSimpleFill,
  PiGithubLogoFill,
  PiLinkedinLogoFill,
  PiInstagramLogoFill,
  PiTiktokLogoFill,
} from 'react-icons/pi';
import Link from 'next/link';
import Layout from '../components/Layout';
import profilePic from '../../public/images/profile/avatar.png';
import Card from '../components/Card';
import Map from '../components/Map';

function Hero() {
  return (
    <section id="hero" className="w-full">
      <Layout className="pt-20 lg:pt-32 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="order-2 md:col-span-6 lg:col-span-5 md:order-1 mt-auto xl:mt-0">
          <Card className="!bg-primary-500/[0.85] text-dark flex justify-center items-center text-center py-4">
            <div className="flex flex-col justify-center items-center">
              <p className="text-4xl xl:text-5xl font-bold">Kevin Castillo</p>
              <p className="text-xl mt-1 xl:mt-3">Frontend developer</p>
            </div>
          </Card>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Card className="!bg-accent/50 text-light flex justify-center items-center text-center py-6">
              <div>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-3xl xl:text-5xl font-bold">2+</p>
                  <p className="text-sm xl:text-lg break-words xl:break-normal">Years exp.</p>
                </div>
              </div>
            </Card>
            <Card className="!bg-pink-500/50 text-light flex justify-center items-center text-center py-6">
              <div className="flex flex-col justify-center items-center">
                <p className="text-3xl xl:text-5xl font-bold">8+</p>
                <p className="text-sm xl:text-lg">Projects</p>
              </div>
            </Card>
            <Link href="mailto:me@kevcastles.boo" target="_blank" className="w-full h-full">
              <Card link className="!bg-tertiary-300/50 hover:!bg-tertiary-300/60 text-light flex flex-col justify-center items-center text-center py-6">
                <PiEnvelopeSimpleFill className="w-[50%] h-auto mx-auto" />
                <p>Contact me</p>
              </Card>
            </Link>
          </div>
          <Card className="col-span-2 lg:col-span-1 mt-4 !bg-gray-600/50">
            <div className="d-flex flex-col lg:flex-row">
              <p className="text-xl xl:text-2xl">
                <span className="font-semibold">Geek, developer, writer</span>
                {' '}
                always hungry for growth. Passionate about
                <span className="font-semibold">code, community,</span>
                {' '}
                and embracing the
                <span className="font-semibold">joy of tech.</span>
                {' '}
                Building and sharing great solutions. 🚀
              </p>
            </div>
          </Card>
        </div>
        <div className="order-1 md:order-2 md:col-span-6 lg:col-span-4 grid grid-cols-1">
          <Card className="col-span-4 md:!p-0 !bg-accent/20">
            <div className="avatar relative flex justify-center align-center w-full h-full">
              <div className="w-[90%] md:w-full ease-in-out duration-300 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <svg className="animate-[spin_60s_linear_infinite]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                  <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                    <stop offset="0%" stopColor="#7f2f8e" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffd900" stopOpacity="1" />
                  </linearGradient>
                  <path fill="url(#PSgrad_0)">
                    <animate repeatCount="indefinite" attributeName="d" dur="5s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z" />
                  </path>
                </svg>
              </div>
              <div className="flex justify-center items-center">
                <div className="avatar__mask w-[75%] md:w-[80%] pointer-events-none">
                  <Image src={profilePic} priority alt="Kevin Castillo" className="object-cover" />
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="order-3 md:col-span-12 lg:col-span-3 grid grid-cols-2 lg:grid-cols-none lg:grid-rows-2 gap-4">
          <Card className="!p-0">
            <Map className="w-full h-full" />
          </Card>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://github.com/KevinCastle" target="_blank" className="w-full h-full">
              <Card link className="flex justify-center items-center text-center !bg-gray-700/50 hover:!bg-gray-700/60 h-full w-full">
                <PiGithubLogoFill size="3rem" aria-label="Github" role="img" className="mx-auto" />
              </Card>
            </Link>
            <Link href="https://www.linkedin.com/in/kevin-castillo11/" target="_blank" className="w-full h-full">
              <Card link className="flex justify-center items-center text-center !bg-[#0A66C2]/50 hover:!bg-[#0A66C2]/60 h-full w-full">
                <PiLinkedinLogoFill size="3rem" aria-label="Linkedin" role="img" className="mx-auto" />
              </Card>
            </Link>
            <Link href="https://www.instagram.com/kevcastles.dev/" target="_blank" className="w-full h-full">
              <Card link className="flex justify-center items-center text-center !bg-[#d62976]/50 hover:!bg-[#d62976]/60 h-full w-full">
                <PiInstagramLogoFill size="3rem" aria-label="Instagram" role="img" className="mx-auto" />
              </Card>
            </Link>
            <Link href="https://tiktok.com/@kevcastles.dev" target="_blank" className="w-full h-full">
              <Card link className="flex justify-center items-center text-center !bg-[#00F2EA]/50 hover:!bg-[#00F2EA]/60 h-full w-full">
                <PiTiktokLogoFill size="3rem" aria-label="Tiktok" role="img" className="mx-auto" />
              </Card>
            </Link>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default Hero;
