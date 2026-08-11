import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SkipLink from './components/SkipLink'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'

function App() {
  return (
    <BrowserRouter>
      <SkipLink />
      <ThemeToggle />

      <div className="max-w-xl mx-auto px-6 divide-y divide-gray-100 dark:divide-gray-800 min-h-screen
                      bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors">
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
