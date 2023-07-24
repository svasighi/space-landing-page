import Header from '../components/Header';
import { Outlet, matchPath, useLocation } from "react-router-dom";
import { bgConfig } from 'constants/Global';
import classNames from 'classnames';

const Main = () => {
  const location = useLocation()
  const currentRouteBgIndex = bgConfig.filter((data) =>
    matchPath(data.name, location.pathname)
  );
  const mobileBg = currentRouteBgIndex[0]['mobile'];
  const tabletBg = currentRouteBgIndex[0]['tablet'];
  const desktopBg = currentRouteBgIndex[0]['desktop'];


  return (
    <div className={classNames('bg-clip-content bg-cover bg-no-repeat bg-right-bottom absolute w-full h-full', mobileBg, tabletBg, desktopBg)} >
      < Header />
      <div className="container">
        <Outlet />
      </div>
    </div >
  )
};


export default Main;