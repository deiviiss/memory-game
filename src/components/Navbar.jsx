import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar () {
  return (
    <div className='flex justify-between bg-zinc-500 text-slate-300 p-2'>
<h1 className='text-lg'>Memorama Time</h1>
      <ul className='flex text-center items-center'>
        <li className='hover:bg-red-800 rounded text-sm p-1'>
          <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-slate-800' : ''}>
            Home
          </NavLink>
        </li>
        <li className='hover:bg-red-800 rounded text-sm p-1'>
          <NavLink to={'/games'} className={({ isActive }) => isActive ? 'text-slate-800' : ''}>Games</NavLink>
        </li>
      </ul>
    </div>
  )
}
