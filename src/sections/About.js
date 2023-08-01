import Card from '@/components/Card'
import Layout from '@/components/Layout'
import Tooltip from '@/components/Tooltip'
import { PiCodeLight, PiBooksLight, PiEyeglassesLight, PiReadCvLogoFill } from 'react-icons/pi'
import { SiNintendo3Ds, SiJavascript, SiReact, SiVuedotjs, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi'
import Spotify from '@/components/Spotify'
import Link from 'next/link'
import { Caveat } from 'next/font/google'
import Image from 'next/image'
import ZeldaBg from '../../public/images/backgrounds/zelda-breath-of-the-wild2.gif';
import CodeBg from '../../public/images/backgrounds/coding.gif';
import StormlightBg from '../../public/images/backgrounds/the-stormlight-archive.gif';
import RoleBg from '../../public/images/backgrounds/role-cat.gif';
import NuphyBg from '../../public/images/backgrounds/nuphy-75.jpg'

const caveat = Caveat({
    subsets: ["latin"],
    weight: ['400', '700'],
    style: ['normal'],
});

const About = () => {
    return (
        <section id="about" className="w-full pt-10">
            <Layout>
                <div className='grid grid-cols-12 grid-rows-2 md:grid-rows-none gap-4'>
                    <Card link={true} className='col-span-8 row-span-2 md:row-auto md:col-span-6 flex flex-col justify-center'>
                        <p className={`font-bold text-4xl lg:text-5xl pb-2 ${caveat.className}`}>Journey before destination</p>
                        <p className='text-lg text-balance'>A short personal history about pride, enthusiasm, downfall, and resilience. A story about how I started to be a web developer and where I am now.</p>
                    </Card>
                    <Link href={"/"} className='col-span-4 row-span-1 md:row-auto md:col-span-2 w-full h-full'>
                        <Card link={true} className='!bg-primary-500/50 hover:!bg-primary-500/60 flex flex-col justify-center items-center text-center h-full w-full py-6'>
                            <PiReadCvLogoFill className='w-[50%] h-auto mx-auto' />
                            <p>Resume</p>
                        </Card>
                    </Link>
                    <Card link={true} className='row-span-1 md:row-auto col-span-4'>
                        <p>BLOG POST :D</p>
                    </Card>
                </div>
                <div className='grid grid-cols-12 gap-4 mt-4'>
                    <Card link={true} className='h-[180px] md:h-full col-span-12 md:col-span-4 xl:col-span-5'>
                        <Spotify />
                    </Card>
                    <div className='col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-5 xl:col-span-4 grid grid-cols-4 gap-4'>
                        <Link href="/" target='_blank' className='col-span-2 w-full h-full'>
                        <Card link={true}  className='flex flex-col justify-center items-center text-center h-full w-full py-6 aspect-square'>
                                <Image
                                    src={ZeldaBg}
                                    alt="Playing"
                                    fill={true}
                                    className="object-cover overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-200"

                                />
                                <div className="absolute z-10 top-0 left-0 w-full h-full p-5">
                            <SiNintendo3Ds size="3rem" className='h-auto mx-auto mb-2' />
                            <p className='font-semibold'>PLaying</p>
                            <p className='text-sm'>The Legend of Zelda: TOTK</p>
                            </div>
                        </Card>
                        </Link>
                        <Link href="/" target='_blank' className='col-span-2 w-full h-full'>
                        <Card link={true}  className='flex flex-col justify-center items-center text-center h-full w-full py-6 aspect-square'>
                                <Image
                                    src={CodeBg}
                                    alt="Coding"
                                    fill={true}
                                    className="object-cover overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-200"

                                />
                                <div className="absolute z-10 top-0 left-0 w-full h-full p-5">
                            <PiCodeLight size="3rem" className='h-auto mx-auto mb-2' />
                            <p className='font-semibold'>Coding</p>
                            <p className='text-sm'>This Page</p>
                            </div>
                        </Card>
                        </Link>
                        <Link href="/" target='_blank' className='col-span-2 w-full h-full'>
                        <Card link={true}  className='flex flex-col justify-center items-center text-center h-full w-full py-6 aspect-square'>
                                <Image
                                    src={StormlightBg}
                                    alt="Reading"
                                    fill={true}
                                    className="object-cover overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-200"

                                />
                                <div className="absolute z-10 top-0 left-0 w-full h-full p-5">
                            <PiBooksLight size="3rem" className='h-auto mx-auto mb-2' />
                            <p className='font-semibold'>Reading</p>
                            <p className='text-sm'>The Stormlight Archive</p>
                            </div>
                        </Card>
                        </Link>
                        <Link href="/" target='_blank' className='col-span-2 w-full h-full'>
                        <Card link={true}  className='flex flex-col justify-center items-center text-center h-full w-full py-6 aspect-square'>
                                <Image
                                    src={RoleBg}
                                    alt="Roleplaying"
                                    fill={true}
                                    className="object-cover overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-200"

                                />
                                <div className="absolute z-10 top-0 left-0 w-full h-full p-5">
                                    <GiDiceTwentyFacesTwenty size="3rem" className='h-auto mx-auto mb-2' />
                            <p className='font-semibold'>Roleplaying</p>
                            <p className='text-sm'>Sly - Warlock Half-Elf</p>
                            </div>
                        </Card>
                        </Link>
                    </div>
                    <Link href="/" target='_blank' className='col-span-12 sm:col-span-4 md:col-span-2 lg:col-span-3 w-full h-full'>
                    <Card link={true} className='w-full h-full'>
                        <Image
                            src={NuphyBg}
                            alt="Roleplaying"
                            fill={true}
                            className="object-cover overflow-hidden opacity-20 group-hover:opacity-30 transition-opacity duration-200"

                        />
                        <div className="absolute z-10 top-0 left-0 w-full h-full">
                        <p className='absolute bottom-5 right-5 font-bold text-3xl'>SETUP</p>
                        {/* TODO: COLOCAR LETRAS BOTTOM RIGHT, UNA IMAGEN DE FONDO DEL TECLADO Y REDIRIGE A BENTO */}
                        </div>
                    </Card>
                    </Link>
                </div>
            </Layout>
        </section>
    )
}

export default About

/*
Hi, this is Kevin, a self-taught web developer based in Santiago, Chile. I'm truly passionate about coding and bringing things to life on the internet (even if that means occasionally breaking them).

My web development journey began in 2015 when I met a JavaScript enthusiast friend who challenged my perception of the language. I used to be solely focused on Python and didn't consider JS as a "real" programming language. However, that encounter changed everything when he invited me to a freecodecamp meeting. Since that day, I've been head over heels in love with web development.

Over time, had the privilege of working as a freelancer and eventually found my way to Modyo, where I currently enjoy my day-to-day work. Currently deeply interested in the role of a developer advocate. That way, I get to combine my passion for coding with my desire to share knowledge with fellow developers.
*/