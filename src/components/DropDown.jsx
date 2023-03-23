import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-24 flex flex-col items-center rounded-md">
      <button onClick={() => setIsOpen((prev) => !prev)} className="flex items-center justify-around border-transparent hover:border-white duration-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
          {!isOpen ? ( <AiOutlineCaretDown className="h-2" />) : ( <AiOutlineCaretUp className="h-2" />)}
      </button>
      {isOpen && <div className="bg-primary-gradient absolute mt-10 max-w-full overflow-x-hidden">
        <li className='w-full flex justify-center items-center'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-white' : ''}>
            Home
          </NavLink>
        </li>
        <li className='w-full flex justify-center items-center'>
          <NavLink to={'/games'} className={({ isActive }) => isActive ? 'text-white' : ''}>
            Games
          </NavLink>
        </li>
        </div>}
    </div>
  )
}

export default DropDown;
