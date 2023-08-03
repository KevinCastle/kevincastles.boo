import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import {
    PiHouseFill,
    PiNotePencilFill,
    PiSunFill,
    PiMoonStarsFill,
} from "react-icons/pi"
import Link from "next/link";

const NavBar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("");

    useEffect(() => {
        setCurrentTheme(theme === 'system' ? systemTheme : theme);
    }, [theme, systemTheme]);

    return (
        <div className="fixed bottom-0 sm:bottom-4 left-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-auto z-50">
            <nav className="bg-gray-400/30 rounded-t-3xl sm:rounded-full border border-solid border-light/[0.18] drop-shadow-md backdrop-blur-sm p-5">
                <ul className="flex justify-center items-center">
                    <li className="nav-item">
                        <Link
                            className="flex items-center justify-center hover:text-tertiary-400"
                            href="/"
                        >
                            <PiHouseFill size="2rem" />
                            <span className="inline-block text-base ml-1">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item border-r-2 border-solid border-white px-4">
                        <Link
                            className="flex items-center justify-center hover:text-tertiary-400"
                            href="/"
                        >
                            <PiNotePencilFill size="2rem" />
                            <span className="inline-block text-base ml-1">Blog</span>
                        </Link>
                    </li>
                    <li>

                    </li>
                    <li className="nav-item px-4">
                        <button
                            className="flex items-center justify-center text-secondary-700 dark:text-primary-100 hover:text-secondary-500 dark:hover:text-primary-500"
                            onClick={() => currentTheme == "dark" ? setTheme('light') : setTheme("dark")}
                        >
                            {currentTheme == "dark" ? <PiSunFill size="2rem" /> : <PiMoonStarsFill size="2rem" />}
                            <span className="inline-block text-base ml-1">
                                {currentTheme == "dark" ? "Light" : "dark"}
                            </span>
                        </button>
                    </li>
                    <li className="nav-item">
                        ES/EN
                    </li>
                </ul>
            </nav>
        </div>
    )

    // LOGO
    // ----
    // HOME
    // BLOG
    // 
    // ----
    // ES/ENG
    // LIGHT/DARK
}

export default NavBar
