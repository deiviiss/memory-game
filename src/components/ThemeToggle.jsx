import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='flex justify-center items-center space-x-1 transition ease-in-out duration-500 rounded-full p-2 cursor-pointer' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <span className='block md:hidden'>Darkmode</span>
      {theme === 'dark'
        ? (
          <FaSun
            className='text-red text-2xl hidden md:block dark:text-blue'
          />
          )
        : (
          <FaMoon
            className='text-red text-2xl hidden md:block dark:text-blue'
          />
          )}
    </div>
  )
}

export default Toggle
