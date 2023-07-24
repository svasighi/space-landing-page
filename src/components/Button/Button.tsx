import React from 'react'

const Button = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className='flex items-center justify-center hover:before:content[" "] hover:before:h-[450px] hover:before:w-[450px] hover:before:bg-white hover:before:bg-opacity-10 hover:before:absolute hover:before:block hover:before:rounded-full'>
      <div className='flex text-center items-center justify-center font-serif text-[2rem] tracking-widest font-normal text-brand-primary bg-white rounded-full h-[247px] w-[247px]   z-10'>{children}</div>
    </div>)
}

export default Button