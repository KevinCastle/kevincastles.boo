import Link from 'next/link'
import React from 'react'

export const customLink = ({ className, children, href }) => {
  return (
      <Link href={href} className={`${className} text-tertiary-500 dark:text-tertiary-300 hover:text-tertiary-600 dark:hover:text-tertiary-500 relative group`}>
          {children}
          <span className='h-[3px] bg-gradient-to-r from-tertiary-500 via-tertiary-300 to-tertiary-500 absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease-in-out duration-300' />
      </Link>
  )
}