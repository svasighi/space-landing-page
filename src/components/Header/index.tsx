import NavBar from "../Navbar/NavBar"
import { logo } from '../../constants/Global'

const Header = ({ }): JSX.Element => {

  return (
    <div className="flex justify-between items-center lg:ml-32 lg:mt-10 md:mt-0 md:ml-10 mt-6 ml-6">
      <a>
        <img src={logo} alt="logo"></img>
      </a>
      <NavBar />
    </div >
  )
}

export default Header