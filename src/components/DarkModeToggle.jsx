import { useState } from 'react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((currentMode) => {
      const nextMode = !currentMode
      document.documentElement.setAttribute('data-theme', nextMode ? 'dark' : 'light')
      return nextMode
    })
  }

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
