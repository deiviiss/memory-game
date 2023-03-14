import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar () {
  return (
    <div className='flex justify-between p-2'>
<h1 className='text-4xl'>Memorama Time</h1>
      <ul className='flex text-center items-center'>
        <li className='hover:bg-red-800 rounded p-1'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-slate-800' : ''}>
            Home
          </NavLink>
        </li>
        <li className='hover:bg-red-800 rounded p-1'>
          <NavLink to={'/games'} className={({ isActive }) => isActive ? 'text-slate-800' : ''}>Games</NavLink>
        </li>
      </ul>
    </div>
  )
}
