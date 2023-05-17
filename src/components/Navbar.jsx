import DropDown from './DropDown'
import { Link } from 'react-router-dom'
import cardLogo from '../../public/imgs/cardIcon.svg'
import darkCardLogo from '../../public/imgs/cardDarkIcon.svg'
import Toggle from './ThemeToggle'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

export default function Navbar () {
  const { theme } = useContext(ThemeContext)
  return (
    <nav className="w-full flex justify-between p-2 shadow">
      <Link to="/." className="w-2/3 pl-2 text-3xl">
        <img src={theme === 'dark' ? darkCardLogo : cardLogo} alt="Logo" className="w-10 h-12 rounded-md "/>
      </Link>
      <ul className="w-1/3 flex flex-row text-center items-center justify-around">
        <li className="duration-400 active:text-secondary hidden md:block">
          <Toggle />
        </li>
        <DropDown />
      </ul>
    </nav>
  )
}
