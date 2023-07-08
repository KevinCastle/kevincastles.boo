"use client"
import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import {
    PiSunDimLight,
    PiSunLight,
    PiMoonLight,
    PiMoonStarsLight,
} from "react-icons/pi";

const ThemeButton = ({ isExpanded }) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState("");

    useEffect(() => {
        setCurrentTheme(theme === 'system' ? systemTheme : theme);
    }, [theme, systemTheme]);

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <>
        <button
            className={`flex items-center justify-start text-left transition-all duration-100 text-secondary-400 dark:text-primary-100 hover:text-secondary-700 dark:hover:text-primary-500 ${isExpanded || 'w-0 lg:w-auto'}`}
            onClick={() => currentTheme == "dark" ? setTheme('light') : setTheme("dark")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
                {currentTheme == "dark" ? (hovered ? <PiSunLight size="2rem" /> : <PiSunDimLight size="2rem" />) : (hovered ? <PiMoonStarsLight size="2rem" /> : <PiMoonLight size="2rem" />)} 
                <span className={`text-md ${isExpanded ? 'ml-2' : 'hidden'}`}>{currentTheme == "dark" ? "Light mode" : "Dark mode"}</span>
        </button>
        </>
    )
}

export default ThemeButton