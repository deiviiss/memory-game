import { useState, useEffect, useRef } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default function DropDown () {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener('click', handleOutsideClick)
    window.addEventListener('scroll', handleOutsideClick) // Agregar evento de scroll

    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
      window.removeEventListener('scroll', handleOutsideClick) // Remover evento de scroll
    }
  }, [ref])

  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Games', link: '/games' },
    { label: 'Login', link: '/login' },
  ]

  return (
    <div ref={ref} className="relative w-auto flex flex-col items-center rounded-md z-50">
      <button onClick={() => setIsOpen((prev) => !prev)} className="flex items-center justify-around border-transparent duration-400 active:text-secondary" >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 6l16 0"></path> <path d="M4 12l16 0"></path> <path d="M4 18l16 0"></path> </svg>
        {!isOpen ? <AiOutlineCaretDown className="h-2" /> : <AiOutlineCaretUp className="h-2" />}
      </button>
      {isOpen && (
        <ul className="bg-primary-gradient absolute mt-10 mr-6 p-2 w-24 overflow-x-hidden border border-primary rounded-md">
          {menuItems.map((item) => (
    <li className="w-full flex justify-center items-center" key={item.link}>
      <NavLink
        to={item.link}
        activeClassName=".active"
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
