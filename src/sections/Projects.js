// TODO: BORRAR ESTA RULE CUANDO LOS HREF SI TENGAN LINKS
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact, SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
} from 'react-icons/si';
import Link from 'next/link';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Tooltip from '../components/Tooltip';
// TODO:  PROYECTOS VA A SER UN CARRUSEL

function Projects() {
  return (
    <section id="experience" className="w-full mt-4">
      <Layout className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7 xl:col-span-8 h-full">
          <Link href="" target="" className="h-full">
            <Card link className="h-full">
              <p className="text-2xl font-semibold">My personal projects</p>
              <p className="text-lg mt-2">Collection of some things I&apos;ve built on my freetime.</p>
            </Card>
          </Link>
        </div>
        <Card className="col-span-12 md:col-span-5 xl:col-span-4 !p-4 md:!p-6 lg:!p-8 !bg-gray-800/40">
          <div className="grid grid-cols-9 md:grid-cols-3 gap-2 md:gap-6 lg:gap-12 justify-content-center">

            <Tooltip message="HTML5">
              <SiHtml5 className="w-full h-full light:text-dark/30 dark:!text-light/30 hover:!text-[#F26529]/80 dark:hover:!text-[#F26529]/80 transition duration-300" />
            </Tooltip>
            <Tooltip message="JavaScript">
              <SiJavascript className="w-full h-full light:text-dark/30 dark:!text-light/30 hover:!text-[#F7E017]/80 dark:hover:!text-[#F7E017]/80 transition duration-300" />
            </Tooltip>
            <Tooltip message="TypeScript">
              <SiTypescript className="w-full h-full light:text-dark/30 dark:!text-light/30 hover:!text-[#2D79C7]/80 dark:hover:!text-[#2D79C7]/80 transition duration-300" />
            </Tooltip>

            <Tooltip message="Sass">
              <SiSass className="w-full h-full light:text-dark/30 dark:!text-light/30 hover:!text-[#CF639A]/80 dark:hover:!text-[#CF639A]/80 transition duration-300" />
            </Tooltip>
            <Tooltip message="Bootstrap">
              <SiBootstrap className="w-full h-full light:text-dark/30 dark:!text-light/30 hover:!text-[#7611F7]/80 dark:hover:!text-[#7611F7]/80 transition duration-300" />
            </Tooltip>
            <Tooltip message="Tailwind">
              <SiTailwindcss className="w-full h-full light:text-dark/30 dark:!text-light/30 hover:!text-[#41BDF8]/80 dark:hover:!text-[#41BDF8]/80 transition duration-300" />
            </Tooltip>

            <Tooltip message="React" top>
              <SiReact className="w-full h-full light:text-dark/30 dark:!text-light/30 hover:!text-[#349ECA]/80 dark:hover:!text-[#349ECA]/80 transition duration-300" />
            </Tooltip>
            <Tooltip message="Vue.JS" top>
              <SiVuedotjs className="w-full h-full light:text-dark/30 dark:!text-light/30 hover:!text-[#42B883]/80 dark:hover:!text-[#42B883]/80 transition duration-300" />
            </Tooltip>
            <Tooltip message="Next.JS" top>
              <SiNextdotjs className="w-full h-full light:text-dark/30 dark:!text-light/30 hover:!text-gray-600/80 dark:hover:!text-gray-950/80 transition duration-300" />
            </Tooltip>

          </div>
        </Card>
      </Layout>
    </section>
  );
}

export default Projects;
