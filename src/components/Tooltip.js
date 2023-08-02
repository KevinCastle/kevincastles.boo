import React from 'react'

const Tooltip = ({ message, children, top=false }) => {
    return (
        <div className="group/tooltip relative flex">
            {children}
            <span className={`absolute ${ top ? '-top-[60%]' : '-bottom-[60%]'} left-[50%] translate-x-[-50%] scale-0 transition-all rounded bg-secondary-700 p-2 text-xs text-light group-hover/tooltip:scale-100`}>
                <span className={`absolute left-[50%] translate-x-[-50%] border-solid border-x-[4px] border-transparent ${top ? 'bottom-[-8px] border-t-[8px] border-b-0 border-t-secondary-700' : 'top-[-8px] border-t-0 border-b-[8px] border-b-secondary-800'}`} />
                {message}
                </span>
        </div>
    )
}

export default Tooltip