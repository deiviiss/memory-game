import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className='transition ease-in-out duration-500 rounded-full p-2'>
      {theme === 'dark'
        ? (
          <FaSun
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='text-red text-2xl dark:text-blue cursor-pointer'
          />
          )
        : (
          <FaMoon
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='text-red text-2xl dark:text-blue cursor-pointer'
          />
          )}
    </div>
  )
}

export default Toggle
