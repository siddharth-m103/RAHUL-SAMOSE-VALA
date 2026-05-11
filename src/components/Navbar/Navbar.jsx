import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes,FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-samosa-orange rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">RS</span>
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-samosa-dark">Rahul Samosa</h1>
              <p className="text-xs text-samosa-orange">Since 1995</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-samosa-orange border-b-2 border-samosa-orange'
                    : 'text-gray-700 hover:text-samosa-orange'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Order Button */}
         <button
  onClick={() => {
    window.open(
      "https://wa.me/917526832341?text=Hello%20Rahul%20Samosa%2C%20I%20want%20to%20place%20an%20order.",
      "_blank"
    )
  }}
  className="hidden md:flex items-center gap-2 btn-primary text-sm"
>
  <FaWhatsapp />
  Order Now
</button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 font-semibold ${
                  isActive(link.path)
                    ? 'text-samosa-orange'
                    : 'text-gray-700 hover:text-samosa-orange'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary w-full mt-4">Order Now</button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar