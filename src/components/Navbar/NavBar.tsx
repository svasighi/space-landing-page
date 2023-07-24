import classNames from 'classnames';
import { NavItem } from './NavItem';
import NavItems from 'constants/NavbarConfig';
import { useState } from 'react';
import { hamburger } from 'constants/Global';

const NavBar = () => {

  const [open, setOpen] = useState<boolean>(false);

  const handleOpenNavBar = () => {
    setOpen(!open);
  }

  return (
    <>
      <div className="flex items-center justify-between max-md:pr-10 md:justify-end z-10">
        <div className="bg-[#ffffff25] w-full h-px -mr-10 z-10 hidden md:block"></div>
        <div className={classNames('bg-[#ffffff0a] backdrop-blur-xl h-full md:relative absolute top-0 right-0 md:block', open ? "block" : "hidden")}>
          <ul className='flex flex-col md:px-4 pl-20 md:pt-0 pt-20 h-full md:flex-row md:space-x-4 lg:pl-28 lg:pr-24
          text-white text-base font-normal tracking-widest uppercase  '>
            {
              NavItems.map((item, index) => (
                <NavItem data={item} index={index} />
              ))
            }
          </ul>
        </div>
        <img onClick={handleOpenNavBar}
          className={classNames('text-white md:hidden', !open ? "block" : "hidden")
          } src={hamburger}></img>

      </div>
      <div
        className={classNames("top-0 left-0 w-full h-full cursor-pointer md:hidden absolute ", open ? "block" : "hidden")}
        onClick={() => {
          setOpen(false);
        }}
      ></div >
    </>
  );
}

export default NavBar



