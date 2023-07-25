import NavBar from "../Navbar/NavBar"
import { logo } from '../../constants/Global'

const Header = ({ }): JSX.Element => {

  return (
    <div className="flex justify-between items-center container max-sm:h-[105px]">
      <a>
        <img src={logo} alt="logo"></img>
      </a>
      <NavBar />
    </div >
  )
}

export default Header