"use client"
import React from 'react'
import { useTheme } from "next-themes";
import {
    PiSunDimFill,
    PiSunFill,
    PiMoonFill,
    PiMoonStarsFill,
} from "react-icons/pi";
import { useState } from 'react'

const ThemeButton = (props) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <button
            className={`flex items-center justify-start text-left transition-all duration-100 text-secondary-400 dark:text-primary-100 hover:text-secondary-700 dark:hover:text-primary-500 ${props.isExpanded || 'w-0 lg:w-auto'}`}
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {theme == "dark" ? (hovered ? <PiSunFill size="2rem" /> : <PiSunDimFill size="2rem" />) : (hovered ? <PiMoonStarsFill size="2rem" /> : <PiMoonFill size="2rem" />)}
            <span className={`text-md ${props.isExpanded ? 'ml-2' : 'hidden'}`}>{theme == "dark" ? "Light mode" : "Dark mode"}</span>
        </button>
    )
}

export default ThemeButton