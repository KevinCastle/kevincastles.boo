import { PiCodeLight, PiBooksLight } from 'react-icons/pi';
import { SiNintendo3Ds } from 'react-icons/si';
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi';
import Link from 'next/link';
import Image from 'next/image';
import Spotify from '../components/Spotify';
import Layout from '../components/Layout';
import Card from '../components/Card';
import NuphyBg from '../../public/images/backgrounds/nuphy-75.webp';

function Video({ src, ...props }) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="object-cover overflow-hidden opacity-50 group-hover:opacity-70 dark:opacity-30 dark:group-hover:opacity-60 transition-opacity duration-200 w-full h-full absolute top-0 left-0 right-0 bottom-0"
      {...props}
    >
      <source
        src={src}
        type="video/webm"
      />
    </video>
  );
}

function Miscellaneous() {
  return (
    <section id="miscellaneous" className="w-full mt-4">
      <Layout className="grid grid-cols-12 gap-4">
        <Card link className="h-[180px] md:h-full col-span-12 md:col-span-4 xl:col-span-5 !p-0">
          <Spotify className="p-5" />
        </Card>
        <div className="col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-5 xl:col-span-4 grid grid-cols-4 gap-4">
          <Link href="/" target="_blank" className="col-span-2 w-full h-full">
            <Card link className="h-full w-full py-6 aspect-square">
              <Video src="/videos/backgrounds/persona-5.webm" />
              <div className="absolute z-10 top-0 left-0 flex flex-col justify-center items-center text-center w-full h-full p-5">
                <SiNintendo3Ds size="3rem" className="h-auto mx-auto mb-2" />
                <p className="font-semibold">PLaying</p>
                <p className="text-sm">Persona 5 Royal</p>
              </div>
            </Card>
          </Link>
          <Link href="/" target="_blank" className="col-span-2 w-full h-full">
            <Card link className="h-full w-full py-6 aspect-square">
              <Video src="/videos/backgrounds/coding.webm" />
              <div className="absolute z-10 top-0 left-0 flex flex-col justify-center items-center text-center w-full h-full p-5">
                <PiCodeLight size="3rem" className="h-auto mx-auto mb-2" />
                <p className="font-semibold">Coding</p>
                <p className="text-sm">This Page</p>
              </div>
            </Card>
          </Link>
          <Link href="/" target="_blank" className="col-span-2 w-full h-full">
            <Card link className="h-full w-full py-6 aspect-square">
              <Video src="/videos/backgrounds/the-stormlight-archive.webm" />
              <div className="absolute z-10 top-0 left-0 flex flex-col justify-center items-center text-center w-full h-full p-5">
                <PiBooksLight size="3rem" className="h-auto mx-auto mb-2" />
                <p className="font-semibold">Reading</p>
                <p className="text-sm">The Stormlight Archive</p>
              </div>
            </Card>
          </Link>
          <Link href="/" target="_blank" className="col-span-2 w-full h-full">
            <Card link className="h-full w-full py-6 aspect-square">
              <Video src="/videos/backgrounds/role-cat.webm" />
              <div className="absolute z-10 top-0 left-0 flex flex-col justify-center items-center text-center w-full h-full p-5">
                <GiDiceTwentyFacesTwenty size="3rem" className="h-auto mx-auto mb-2" />
                <p className="font-semibold">Roleplaying</p>
                <p className="text-sm">Sly - Warlock Half-Elf</p>
              </div>
            </Card>
          </Link>
        </div>
        <Link href="/" target="_blank" className="col-span-12 sm:col-span-4 md:col-span-2 lg:col-span-3 w-full h-full">
          <Card link className="w-full h-full">
            <Image
              src={NuphyBg}
              alt="Roleplaying"
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 30vw, 20vw"
              priority
              className="object-cover overflow-hidden opacity-50 group-hover:opacity-70 dark:opacity-30 dark:group-hover:opacity-60 transition-opacity duration-200"
            />
            <div className="sm:absolute z-10 sm:top-0 sm:left-0 w-full h-full">
              <p className="sm:absolute sm:bottom-5 sm:right-5 font-bold text-xl lg:text-3xl p-4 sm:p-0">SETUP</p>
            </div>
          </Card>
        </Link>
      </Layout>
    </section>
  );
}

export default Miscellaneous;
