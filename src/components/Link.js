import Link from 'next/link'
import React from 'react'

export const customLink = ({ className, children, href, ...props }) => {
  return (
      <Link href={href} className={`${className} text-tertiary-500 dark:text-tertiary-400 hover:text-tertiary-600 dark:hover:text-tertiary-200 relative group`} {...props}>
          {children}
          <span className='h-[3px] bg-gradient-to-r from-tertiary-400 via-tertiary-200 to-tertiary-400 absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease-in-out duration-300' />
      </Link>
  )
}