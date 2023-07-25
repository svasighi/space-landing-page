import classNames from 'classnames';
import { useState } from 'react';

import { NavItem } from './NavItem';


import NavItems from 'constants/NavbarConfig';
import { hamburger } from 'constants/Global';
import { close } from 'constants/Global';

const NavBar = () => {

  const [open, setOpen] = useState<boolean>(false);

  const handleOpenNavBar = () => {
    setOpen(!open);
  }

  return (
    <div className='md:h-28'>
      <div className="flex items-center justify-between md:justify-end z-20 md:absolute md:right-0">
        <div className="bg-[#ffffff25] w-full h-px -mr-10 hidden md:block"></div>
        <div className={classNames('bg-[#ffffff0a] backdrop-blur-xl h-full md:relative absolute top-0 right-0 md:block z-20', open ? "block" : "hidden")}>
          <ul className='flex flex-col md:px-4 pl-16 md:pt-0 pt-20 h-full md:flex-row md:space-x-4 lg:pl-28 lg:pr-24
          text-white text-base font-normal tracking-widest uppercase  '>
            {
              NavItems.map((item, index) => (
                <NavItem key={item.id} data={item} index={index} />
              ))
            }
          </ul>
        </div>
        <img onClick={handleOpenNavBar}
          className='text-white md:hidden cursor-pointer z-20 h-6'
          src={!open ? hamburger : close}
          alt={!open ? 'open' : 'close'}>

        </img>
      </div >
      <div
        className={classNames("top-0 left-0 w-full h-full cursor-pointer md:hidden absolute ", open ? "block" : "hidden")}
        onClick={() => {
          setOpen(false);
        }}
      ></div >
    </div>
  );
}

export default NavBar



