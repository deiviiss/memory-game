import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar () {
  return (
    <div className='flex'>
<h1 >Memorama Time</h1>
      <ul className='bg-red-200'>
        <li>
          <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/games'} className={({ isActive }) => isActive ? 'active' : ''}>Games</NavLink>
        </li>
      </ul>
    </div>
  )
}
