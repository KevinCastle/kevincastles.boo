import { PiArrowSquareOutBold } from 'react-icons/pi';

function Card({ children, className = '', link }) {
  return (
    <div className={`relative overflow-hidden bg-darkless/60 dark:bg-darkless/50 border border-solid border-light/[0.18] dark:border-gray-500/[0.18] text-white backdrop-blur-sm p-5 rounded-2xl drop-shadow-md lg:hover:-translate-y-1 transition duration-300 group ${className}`}>
      {link
        && (
        <div id="arrow-square-out" className="absolute top-2 right-2 pointer-events-none text-white/50 group-hover:text-white transition-colors duration-200 z-20">
          <PiArrowSquareOutBold size="1rem" />
        </div>
        )}
      {children}
    </div>
  );
}

export default Card;
