import React from 'react';
import Image from 'next/image';
import CastleLogo from '../../public/images/backgrounds/kevcastles-logo.webp';

function Logo() {
  return (
    <div className="fixed top-5 left-5 z-50">
      <Image className="w-10 h-auto xl:w-14" src={CastleLogo} alt="Castle Logo" />
    </div>
  );
}

export default Logo;
