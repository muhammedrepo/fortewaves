'use client'
import { useEffect, useState } from 'react'
import Navbar from './navbar'
import MenuIcon from './menuIcon'
import MobileMenu from './mobileMenu'

const Header: React.FC = () => {
  const [showLinks, setShowLinks] = useState<boolean>(false)
  const [topBarScroll, setTopBarScroll] = useState<boolean>(false)

  const animateTopBar = () => {
    if (window.scrollY >= 100) {
      setTopBarScroll(true)
    } else {
      setTopBarScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', animateTopBar)
    return () => window.removeEventListener('scroll', animateTopBar)
  }, [])

  return (
    <>
      <header
        className={
          topBarScroll
            ? `fixed top-0 w-full bg-white shadow-sm z-50 transition-all duration-300 ease-in-out mt-0`
            : `bg-transparent mt-4 z-50`
        }>
        <div className="container mx-auto bg-transparent">
          <nav className="bg-transparent flex justify-between items-center py-3">
            <Navbar />

            <div className="lg:hidden z-10">
              <button
                className="navbar-burger flex items-center py-2 px-3 text-blue hover:text-blue rounded border border-blue hover:border-blue"
                onClick={() => setShowLinks(!showLinks)}>
                <MenuIcon />
              </button>
            </div>
          </nav>
        </div>
      </header>
      {showLinks && <MobileMenu />}
    </>
  )
}

export default Header
