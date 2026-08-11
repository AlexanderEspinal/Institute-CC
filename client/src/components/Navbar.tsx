import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center gap-6 py-4 text-sm">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? 'text-gray-900 dark:text-gray-100 font-medium'
            : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors'
        }
      >
        Inicio
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) =>
          isActive
            ? 'text-gray-900 dark:text-gray-100 font-medium'
            : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors'
        }
      >
        Usuarios
      </NavLink>
    </nav>
  )
}

export default Navbar
