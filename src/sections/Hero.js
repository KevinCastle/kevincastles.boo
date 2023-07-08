import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/avatar.png'
import Card from '@/components/Card'
import {
    PiGithubLogoBold,
    PiGithubLogoLight,
    PiLinkedinLogoBold,
    PiLinkedinLogoLight,
    PiInstagramLogoBold,
    PiInstagramLogoLight,
    PiTwitterLogoBold,
    PiTwitterLogoLight,
} from "react-icons/pi";
import { useState } from 'react'
import Link from 'next/link'

const Hero = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (icon) => {
        setHoveredIcon(icon);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };

    return (
        <section id="hero" className="w-full">
            <Layout>
                <div className="pt-20 lg:pt-32 grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className='order-2 md:col-span-6 md:order-1 mt-auto xl:mt-0'>
                        <Card className='!bg-primary-500/[0.85] text-dark flex justify-center items-center text-center py-4'>
                            <p className='text-4xl xl:text-5xl font-bold'>Kevin Castillo</p>
                            <p className='text-xl mt-1 xl:mt-3'>Frontend developer</p>
                        </Card>
                        <div className='grid grid-cols-3 gap-4 mt-4'>
                            <Card className='!bg-secondary-700/75 text-light flex justify-center items-center text-center py-6'>
                                <p className='text-3xl xl:text-5xl font-bold'>2+</p>
                                <p className='text-sm xl:text-xl break-words'>Years exp.</p>
                            </Card>
                            <Card className='!bg-tertiary-500/75 text-light flex justify-center items-center text-center py-6'>
                                <p className='text-3xl xl:text-5xl font-bold'>8+</p>
                                <p className='text-sm xl:text-xl '>Projects</p>
                            </Card>
                            <Card className='!bg-accent/50 text-light flex justify-center items-center text-center py-6'>
                                <p className='text-3xl xl:text-5xl font-bold'>1</p>
                                <p className='text-sm xl:text-xl break-words'>Achievement</p>
                            </Card>
                        </div>
                        <Card className='col-span-2 lg:col-span-1 mt-4'>
                            <div className='d-flex flex-col lg:flex-row'>
                                {/* <p className='text-xl text-gray-600 dark:text-gray-500'>Also:</p> */}
                                <p className='text-xl xl:text-2xl'>I am a <span className='font-semibold'>developer</span> who aims to grow and transition into a <span className='font-semibold'>Developer Advocate</span> role, actively working towards becoming an <span className='font-semibold'>esteemed professional</span> in the field.</p>
                            </div>
                        </Card>
                    </div>
                    <div className='order-1 md:order-2 md:col-span-6 grid grid-cols-1 xl:grid-cols-6'>
                        <div className='avatar col-span-5 relative flex justify-center align-center w-full h-full'>
                            <div className="w-[100%] xl:w-[85%] ease-in-out duration-300 absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
                                <svg className='animate-[spin_60s_linear_infinite]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 288 288">
                                    <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                                        <stop offset="0%" stopColor="#7f2f8e" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#ffd900" stopOpacity="1" />
                                    </linearGradient>
                                    <path fill="url(#PSgrad_0)">
                                        <animate repeatCount="indefinite" attributeName="d" dur="5s" values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	" />
                                    </path>
                                </svg>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className="avatar__mask w-[80%] xl:w-[70%] pointer-events-none">
                                    <Image src={profilePic} priority={true} alt="Kevin Castillo" className='object-cover' />
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 flex justify-center items-end xl:items-center mt-4 md:mt-0 lg:mt-4 xl:mt-0'>
                            <Card className='px-4 py-3 xl:py-5 w-full lg:w-auto'>
                                <div className='flex flex-row xl:flex-col gap-4 justify-around items-center'>
                                    <Link href="/" className="text-darkless">
                                        <div
                                            className='hero__social-network'
                                            onMouseEnter={() => handleMouseEnter('github')}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {hoveredIcon === 'github' ? <PiGithubLogoBold size="100%" className='w-[60%] xl:w-full' /> : <PiGithubLogoLight size="100%" className='w-[60%] xl:w-full' />}
                                        </div>
                                    </Link>
                                    <Link href="/" className="text-darkless">
                                        <div
                                            className='hero__social-network'
                                            onMouseEnter={() => handleMouseEnter('linkedin')}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {hoveredIcon === 'linkedin' ? <PiLinkedinLogoBold size="100%" className='w-[60%] xl:w-full' /> : <PiLinkedinLogoLight size="100%" className='w-[60%] xl:w-full' />}
                                        </div>
                                    </Link>
                                    <Link href="/" className="text-darkless">
                                        <div
                                            className='hero__social-network'
                                            onMouseEnter={() => handleMouseEnter('instagram')}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {hoveredIcon === 'instagram' ? <PiInstagramLogoBold size="100%" className='w-[60%] xl:w-full' /> : <PiInstagramLogoLight size="100%" className='w-[60%] xl:w-full' />}
                                        </div>
                                    </Link>
                                    <Link href="/" className="text-darkless">
                                        <div
                                            className='hero__social-network'
                                            onMouseEnter={() => handleMouseEnter('twitter')}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {hoveredIcon === 'twitter' ? <PiTwitterLogoBold size="100%" className='w-[60%] xl:w-full' /> : <PiTwitterLogoLight size="100%" className='w-[60%] xl:w-full' />}
                                        </div>
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    </div>
                    {/* <div className='order-3 md:col-span-1 flex justify-center items-center'>
                        <Card className='px-4'>
                            <div className='flex flex-row xl:flex-col gap-4 justify-around items-center'>
                                <Link href="/" className="text-darkless">
                                    <div
                                        className='hero__social-network'
                                        onMouseEnter={() => handleMouseEnter('github')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredIcon === 'github' ? <PiGithubLogoBold size="100%" /> : <PiGithubLogoLight size="100%" />}
                                    </div>
                                </Link>
                                <Link href="/" className="text-darkless">
                                    <div
                                        className='hero__social-network'
                                        onMouseEnter={() => handleMouseEnter('linkedin')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredIcon === 'linkedin' ? <PiLinkedinLogoBold size="100%" /> : <PiLinkedinLogoLight size="100%" />}
                                    </div>
                                </Link>
                                <Link href="/" className="text-darkless">
                                    <div
                                        className='hero__social-network'
                                        onMouseEnter={() => handleMouseEnter('instagram')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredIcon === 'instagram' ? <PiInstagramLogoBold size="100%" /> : <PiInstagramLogoLight size="100%" />}
                                    </div>
                                </Link>
                                <Link href="/" className="text-darkless">
                                    <div
                                        className='hero__social-network'
                                        onMouseEnter={() => handleMouseEnter('twitter')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        {hoveredIcon === 'twitter' ? <PiTwitterLogoBold size="100%" /> : <PiTwitterLogoLight size="100%" />}
                                    </div>
                                </Link>
                            </div>
                        </Card>
                    </div> */}
                </div>
            </Layout>
        </section>
    )
}

export default Hero