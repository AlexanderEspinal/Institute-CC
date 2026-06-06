import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(prev => !prev)}
      aria-label="Alternar modo oscuro"
      className="fixed top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full
                 text-gray-400 hover:text-gray-600 hover:bg-gray-100
                 dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-gray-800
                 transition-colors text-lg"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle
