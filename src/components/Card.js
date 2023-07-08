import {customLink as Link} from './Link';

function Card ({ children, className = "" }) {
    return (
        <div className={`bg-lightless/30 dark:bg-darkless/50 border border-solid border-light/[0.18] dark:border-dark/[0.18] backdrop-blur-sm p-5 rounded-2xl drop-shadow-md hover:-translate-y-1 transition duration-300 ${className}`}>
            <div className='h-full w-full flex items-center justify-center'>
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Card