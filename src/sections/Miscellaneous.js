import Card from '@/components/Card'
import Layout from '@/components/Layout'
import { PiCodeLight, PiBooksLight } from 'react-icons/pi'
import { SiNintendo3Ds } from 'react-icons/si'
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi'
import Spotify from '@/components/Spotify'
import Link from 'next/link'
import Image from 'next/image'
import ZeldaBg from '../../public/images/backgrounds/zelda-breath-of-the-wild2.gif';
import CodeBg from '../../public/images/backgrounds/coding.gif';
import StormlightBg from '../../public/images/backgrounds/the-stormlight-archive.gif';
import RoleBg from '../../public/images/backgrounds/role-cat.gif';
import NuphyBg from '../../public/images/backgrounds/nuphy-75.jpg'

const Miscellaneous = () => {
    return (
        <section id="miscellaneous" className="w-full mt-4">
            <Layout className='grid grid-cols-12 gap-4'>
                <Card link={true} className='h-[180px] md:h-full col-span-12 md:col-span-4 xl:col-span-5'>
                    <Spotify />
                </Card>
                <div className='col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-5 xl:col-span-4 grid grid-cols-4 gap-4'>
                    <Link href="/" target='_blank' className='col-span-2 w-full h-full'>
                        <Card link={true} className='flex flex-col justify-center items-center text-center h-full w-full py-6 aspect-square'>
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
                        <Card link={true} className='flex flex-col justify-center items-center text-center h-full w-full py-6 aspect-square'>
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
                        <Card link={true} className='flex flex-col justify-center items-center text-center h-full w-full py-6 aspect-square'>
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
                        <Card link={true} className='flex flex-col justify-center items-center text-center h-full w-full py-6 aspect-square'>
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
                        <div className="sm:absolute z-10 sm:top-0 sm:left-0 w-full h-full">
                            <p className='sm:absolute sm:bottom-5 sm:right-5 font-bold text-xl lg:text-3xl p-4 sm:p-0'>SETUP</p>
                        </div>
                    </Card>
                </Link>
            </Layout>
        </section>
    )
}

export default Miscellaneous