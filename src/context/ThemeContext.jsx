import { useEffect, useState, createContext } from 'react'
import PropTypes from 'prop-types'

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPref = window.localStorage.getItem('color-theme')
    if (typeof storedPref === 'string') {
      return storedPref
    }

    const userMedia = window.matchMedia('prefers-color-scheme:dark')
    if (userMedia.matches) {
      return 'dark'
    }
    return 'light'
  }
}

export const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(rawTheme)
    localStorage.setItem('color-theme', rawTheme)
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.any
}
