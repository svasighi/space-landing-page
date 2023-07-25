import React, { useLayoutEffect } from 'react'
import Button from '../components/Button/Button'
import UseBg from '../hooks/UseBg'

const Home = () => {

  useLayoutEffect(() => {
    UseBg('home');
  }, []);

  return (<div className='flex max-lg:flex-col my-10 md:my-32 justify-center items-center lg:justify-between'>
    <div className='flex flex-col max-w-[324px] md:max-w-[450px] items-center lg:items-start '>
      <p className='text-brand-secondary font-sans font-normal text-[16px] md:text-[20px] leading-[34px] text-center'>SO, YOU WANT TO TRAVEL TO</p>
      <p className='text-white font-serif font-normal text-[80px] md:text-[150px] text-center'>SPACE</p>
      <p className='text-brand-secondary font-sans font-normal text-[15px] md:text-[16px] leading-8 text-center lg:text-left'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>

    </div>
    <Button className='mt-8 md:mt-0 md:ml-10'>EXPLORE</Button>
  </div>)
}

export default Home