import React from 'react';

function Tooltip({ message, children, top = false }) {
  return (
    <div className="group/tooltip relative flex">
      {children}
      <span className={`absolute hidden lg:block  ${top ? 'lg:top-[-60%] 2xl:top-[-50%]' : 'lg:bottom-[-60%] 2xl:bottom-[-50%]'} left-1/2 -translate-x-1/2 scale-0 transition-all rounded bg-secondary-700 p-2 text-xs text-light group-hover/tooltip:scale-100`}>
        <span className={`absolute left-1/2 -translate-x-1/2 border-solid border-x-[4px] border-transparent ${top ? 'bottom-[-8px] border-t-[8px] border-b-0 border-t-secondary-700' : 'top-[-8px] border-t-0 border-b-[8px] border-b-secondary-800'}`} />
        {message}
      </span>
    </div>
  );
}

export default Tooltip;
