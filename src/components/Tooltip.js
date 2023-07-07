import React from 'react'

const Tooltip = ({ message, children }) => {
    return (
        <div className="group relative flex">
            {children}
            <span className="absolute top-10 left-[50%] translate-x-[-50%] scale-0 transition-all rounded bg-secondary-800 p-2 text-xs text-light group-hover:scale-100">{message}</span>
        </div>
    )
}

export default Tooltip