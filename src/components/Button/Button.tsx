import classNames from 'classnames'
import React from 'react'

const Button = ({ children, className }: { children: React.ReactNode } & React.HTMLAttributes<HTMLOrSVGElement>): JSX.Element => {
  return (
    <div className={classNames(className, 'flex items-center justify-center hover:before:content[" "] hover:before:h-[280px] hover:before:w-[280px] hover:before:content[" "] md:hover:before:h-[400px] md:hover:before:w-[400px] hover:before:bg-white hover:before:bg-opacity-10 hover:before:absolute hover:before:block hover:before:rounded-full')}>
      <div className='flex text-center items-center justify-center font-serif text-[1.25rem] md:text-[2rem] tracking-widest font-normal text-brand-primary bg-white rounded-full h-[150px] w-[150px] md:w-[247px] md:h-[247px] z-10'>{children}</div>
    </div>)
}

export default Button