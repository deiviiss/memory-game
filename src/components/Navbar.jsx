import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import cardLogo from "../../public/imgs/cardIcon.svg"

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between p-2 shadow">
      <Link to="/." className="w-2/3 pl-2 text-3xl">
        <img src={cardLogo} alt="Logo" className="w-10 h-12 rounded-md "/>
      </Link>
      <ul className="w-1/3 flex flex-row text-center items-center justify-around">
        <li className="duration-400 active:text-secondary hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </li>
        <DropDown />
      </ul>
    </nav>
  )
}
