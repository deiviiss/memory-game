import { useState, useEffect, useRef } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default function DropDown () {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const buttonRef = useRef()

  function HandleMenu () {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Games', link: '/games' },
    { label: 'Login', link: '/login' }
  ]

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={ref} className="relative z-50 w-auto flex flex-col items-center rounded-md">
      <button ref={buttonRef} onClick={HandleMenu} className="flex items-center justify-around duration-400 active:text-secondary border-transparent" >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 6l16 0"></path> <path d="M4 12l16 0"></path> <path d="M4 18l16 0"></path> </svg>
        {!isOpen ? <AiOutlineCaretDown className="h-2" /> : <AiOutlineCaretUp className="h-2" />}
      </button>
      {isOpen && (
        <ul className="absolute w-24 mt-10 mr-6 p-2 overflow-x-hidden rounded-md bg-primary-gradient border border-primary dark:bg-dark-primary-gradient dark:border-secondary">
          {menuItems.map((item) => (
    <li className="w-full flex justify-center items-center" key={item.link}>
      <NavLink
        to={item.link}
        activeclassname=".active"
        className="hover:text-secondary"
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </NavLink>
    </li>
          ))}
        </ul>
      )}
    </div>
  )
}
