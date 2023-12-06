import React, { useState } from 'react';
import { PiStarFill } from 'react-icons/pi';
import { SiBuymeacoffee } from 'react-icons/si';
import Link from 'next/link';
import Layout from './Layout';
import Github from './Github';
import { starRepo } from '../lib/github';

function Footer() {
  const [buttonText, setButtonText] = useState('Star my Portfolio!');
  const [buttonBg, setButtonBg] = useState('bg-gray-800/60 hover:bg-gray-800/90');
  const [starBg, setStarBg] = useState('text-white');

  const handleStarRepo = async () => {
    await starRepo();
    setButtonBg('bg-gray-500/90');
    setStarBg('text-primary-500');
    setButtonText('Thank you!');
  };

  return (
    <footer className="relative w-full z-20">
      <Layout className="flex flex-col lg:flex-row items-center justify-center text-sm py-8 lg:divide-x-2 lg:divide-gray-500">
        <p className="lg:px-4 lg:py-1">Designed & Built by Kevin Castillo</p>
        <div className="hidden lg:block px-4 py-1">
          <button
            type="button"
            className={`rounded-full ${buttonBg} text-white backdrop-blur-sm border border-solid border-gray-500/[0.18] drop-shadow-md flex items-center gap-2 py-2 px-4 transition-colors duration-300 ease-in-out`}
            onClick={handleStarRepo}
          >
            <span>{buttonText}</span>
            <PiStarFill className={`${starBg} transition-colors duration-300 ease-in-out`} />
          </button>
        </div>
        <Github className="lg:px-4 lg:py-1" />
        <div className="lg:px-4 py-1">
          <Link
            href="https://www.buymeacoffee.com/kevcastles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#d1a300]/90 hover:text-[#d1a300]/100 dark:text-[#FFDD00]/60 dark:hover:text-[#FFDD00]/100  transition-colors duration-300 ease-in-out"
          >
            Buy me a coffee
            <SiBuymeacoffee className="text-lg" />
          </Link>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
