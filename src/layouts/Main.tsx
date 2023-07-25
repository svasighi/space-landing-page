import Header from '../components/Header';
import { Outlet } from "react-router-dom";

const Main = () => {

  return (
    <div className="container mx-auto sm:pt-6 md:pt-0 lg:pt-10  px-4">
      <Header />
      <Outlet />
    </div>
  )
};


export default Main;