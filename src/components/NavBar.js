import { useState } from 'react';
import {
    PiHouseBold,
    PiHouseFill,
    PiUserCircleBold,
    PiUserCircleFill,
    PiDesktopBold,
    PiDesktopFill,
    PiPencilCircleBold,
    PiPencilCircleFill,
    PiEnvelopeSimpleBold,
    PiListBold
} from "react-icons/pi"
import {
    MdOutlineCastle,
    MdCastle
} from "react-icons/md"
import { usePathname } from 'next/navigation'
import { customLink as Link } from './Link';
import ThemeButton from './ThemeButton';

const routes = [
    { name: 'Home', href: '/', icon: PiHouseBold, iconActive: PiHouseFill },
    { name: 'About', href: '/about', icon: PiUserCircleBold, iconActive: PiUserCircleFill },
    { name: 'Projects', href: '/projects', icon: PiDesktopBold, iconActive: PiDesktopFill },
    { name: 'Articles', href: '/articles', icon: PiPencilCircleBold, iconActive: PiPencilCircleFill },
]

const NavBar = () => {
    const pathname = usePathname();

    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div onClick={toggleExpanded} className={`h-screen w-full absolute top-0 left-0 z-10 ${isExpanded ? 'bg-dark/75' : 'pointer-events-none'} transition duration-200`}/>
            <button
                className={`fixed block lg:hidden top-4 z-20 ${isExpanded ? '-left-20' : 'left-4'} transition duration-200`}
                onClick={toggleExpanded}
            >
                <div className='rounded-full drop-shadow-sm bg-dark/50 dark:bg-secondary-900/50 p-2 flex justify-center items-center' >
                    <PiListBold size="2rem" />
                </div>
            </button>
            <nav
                className={`fixed top-[50%] translate-y-[-50%] rounded-e-xl py-4 z-20 bg-secondary-950/25 ${isExpanded ? 'w-44 bg-secondary-950/75 drop-shadow-lg' : ' w-0 lg:w-16 bg-secondary-950/25 drop-shadow-sm'} transition-width duration-300`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className='flex items-center justify-center my-2 px-4'>
                    {isExpanded ? <MdCastle size="2rem" /> : <MdOutlineCastle size="2rem" />}
                </div>
                <div className={`w-[80%] translate-x-[10%] h-[2px] ${isExpanded ? ' bg-light' : 'bg-light/25'} my-8`} />
                {routes.map((route) => {
                    const isActive = pathname.startsWith(route.href)

                    return (
                        <Link
                            className={`nav-item flex items-center justify-start my-2 px-4 h-12 cursor-pointer ${isActive ? 'text-tertiary-600 dark:text-tertiary-500' : 'text-dark dark:text-light'} hover:text-tertiary-600 dark:hover:text-tertiary-500`}
                            href={route.href}
                            key={route.name}
                            onClick={toggleExpanded}
                        >
                            {isActive ? <route.iconActive size="2rem" /> : <route.icon size="2rem" />}
                            <span className={`text-lg ${isExpanded ? 'ml-2' : 'hidden'}`}>{route.name}</span>
                        </Link>
                    )
                })}
                <div className={`w-[80%] translate-x-[10%] h-[2px] ${isExpanded ? ' bg-light' : 'bg-light/25'} my-8`} />
                <Link
                    className={`nav-item flex items-center justify-start my-2 px-4 h-12 cursor-pointer text-accent dark:text-accent hover:text-tertiary-600 dark:hover:text-tertiary-500`}
                    href={"mailto:kevinacastles@gmail.com"}
                    target={"_blank"}
                    onClick={toggleExpanded}>
                    <PiEnvelopeSimpleBold size="2rem" />
                    <span className={`text-lg ${isExpanded ? 'ml-2' : 'hidden'}`}>Contact</span>
                </Link>
                <div className='my-2 px-4 h-12'>
                    <ThemeButton isExpanded={isExpanded} onClick={toggleExpanded} />
                </div>
            </nav>
        </>
    )
}

export default NavBar