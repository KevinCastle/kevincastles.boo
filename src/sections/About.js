import Card from '@/components/Card'
import Layout from '@/components/Layout'
import { customLink as Link } from '@/components/Link'
import Tooltip from '@/components/Tooltip'
import { PiUserCircleFill, PiBriefcase, PiCode, PiPushPinSimple } from 'react-icons/pi'
import { SiNintendo3Ds, SiJavascript, SiReact, SiVuedotjs, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const About = () => {
    return (
        <section id="about" className="w-full pt-10">
            <Layout>
                <Card className='!bg-secondary-500/50 mb-4'>
                    <div className='flex items-center'>
                        <PiUserCircleFill size="2rem" />
                        <h2 className='text-3xl font-bold ml-4'>About me</h2>
                        <Link href={""} className={"text-xl font-semibold ml-auto"}>Resume</Link>
                    </div>
                </Card>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div className='md:col-span-2'>
                        <Card>
                            <p className='leading-relaxed mt-2'>Hi, this is Kevin, a <span className='font-semibold'>self-taught web developer</span> based in Santiago, Chile. I&apos;m truly passionate about <span className='font-semibold'>coding</span> and bringing things to life on the internet
                                (even if that means occasionally breaking them). </p>
                            <p className='leading-relaxed mt-2'>My <span className='font-semibold'>web development journey</span> began in 2015 when I met a JavaScript enthusiast friend who
                                challenged my perception of the language. I used to be solely focused on Python and didn&apos;t consider JS as a &quot;real&quot; programming language.
                                However, that encounter changed everything when he invited me to a <Link href={"/"} className={"font-semibold"}>freecodecamp</Link> meeting. Since that day, I&apos;ve been head over heels in love with web development.</p>
                            <p className='leading-relaxed mt-2'>Over time, had the privilege of working as a freelancer and eventually found my way to <Link href={""} className={"font-semibold"}>Modyo</Link>, where I currently enjoy my day-to-day work. Currently deeply interested in the role of a <span className='font-semibold'>developer advocate</span>.
                                That way, I get to combine my passion for <span className='font-semibold'>coding</span> with my desire to share knowledge with fellow developers.</p>
                        </Card>
                        <Card className='mt-4'>
                            <p className='text-lg'>Few Technologies I&apos;ve been working with:</p>
                            <div className='flex justify-around items-center mt-3'>
                                <Tooltip message={"JavaScript"}>
                                    <SiJavascript size={"2rem"} className='hover:text-primary-500  cursor-s-resize' />
                                </Tooltip>
                                <Tooltip message={"React"}>
                                    <SiReact size={"2rem"} className='hover:text-blue-300  cursor-s-resize' />
                                </Tooltip>
                                <Tooltip message={"Vue.js"}>
                                    <SiVuedotjs size={"2rem"} className='hover:text-green-500  cursor-s-resize' />
                                </Tooltip>
                                <Tooltip message={"Next.js"}>
                                    <SiNextdotjs size={"2rem"} className='hover:text-gray-800  cursor-s-resize' />
                                </Tooltip>
                                <Tooltip message={"Tailwindcss"}>
                                    <SiTailwindcss size={"2rem"} className='hover:text-blue-400  cursor-s-resize' />
                                </Tooltip>
                            </div>
                        </Card>
                    </div>
                    <div className='md:col-span-1 grid grid-cols-2 md:grid-cols-1 gap-4'>
                        <Card className='!bg-secondary-700/75 md:max-lg:px-0'>
                            <div className='flex items-center justify-around'>
                                <PiBriefcase size="3rem" />
                                <div className='ml-2'>
                                    <p className='font-semibold'>Currently working</p>
                                    <span>at <Link href="/">Modyo</Link></span>
                                </div>
                            </div>
                        </Card>
                        <Card className='!bg-primary-500/75 md:max-lg:px-0'>
                            <div className='flex items-center justify-around'>
                                <SiNintendo3Ds size="3rem" />
                                <div className='ml-2'>
                                    <p className='font-semibold'>Currently playing</p>
                                    <Link href="/">Zelda: TOTK</Link>
                                </div>
                            </div>
                        </Card>
                        <Card className='!bg-tertiary-300/75 md:max-lg:px-0'>
                            <div className='flex items-center justify-around'>
                                <PiCode size="3rem" />
                                <div className='ml-2'>
                                    <p className='font-semibold'>Currently Coding</p>
                                    <Link href="/">This page</Link>
                                </div>
                            </div>
                        </Card>
                        <Card className='!bg-gray-300/75 md:max-lg:px-0'>
                            <div className='flex items-center justify-around'>
                                <PiPushPinSimple size="3rem" />
                                <div className='ml-2'>
                                    <p className='font-semibold'>Currently Living</p>
                                    <span>in <Link href="/">Chile</Link></span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Layout>
        </section>
    )
}

export default About