import {customLink as Link} from './Link';
import React from 'react'

function CardPlaceholder ({ placeholder }) {
    return placeholder ? <p className='text-gray-600 dark:text-gray-500'>{placeholder}:</p> : null;
}

function CardLabel ({ label }) {
    return label ? <p className='text-lg font-bold'>{label}</p> : null;
}

function CardLink ({ children, link }) {
    return link ? 
    <Link href={link} className='text-lg font-semibold'>{children}</Link>
    : null;
}

function Card ({ children, className = "", link, linkText, label, placeholder }) {
    return (
        <div className={`bg-lightless dark:bg-darkless p-5 rounded-2xl drop-shadow-md hover: ${className} hover:-translate-y-1 transition duration-300`}>
            { (placeholder || label || link) && <div className="flex justify-between items-center h-full">
                <CardPlaceholder placeholder={placeholder} />
                <CardLabel label={label} />
                <CardLink link={link}>{linkText}</CardLink>
            </div> }
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card