"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone, Calendar } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`sticky top-0 bg-white text-black w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-white py-4"
        }`}
    >
      <div className="max-w-7xl bg-white text-black mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <img src='/icon.png' width={150} height={120} className="rounded" />

          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#process"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">

            <Link
              href="#book"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md transition-colors flex items-center font-medium"
            >
              <Phone size={18} className="mr-2" />
              +977 9704607031
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-gray-700 hover:text-blue-600 transition-colors"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-6 p-8">
          <Link
            href="#"
            className="text-xl text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-xl text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="#process"
            className="text-xl text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={closeMenu}
          >
            How It Works
          </Link>
          <Link
            href="#faq"
            className="text-xl text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={closeMenu}
          >
            FAQs
          </Link>
          <Link
            href="#contact"
            className="text-xl text-gray-700 hover:text-blue-600 font-medium transition-colors"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <div className="pt-6 border-t border-gray-200">
            <Link
              href="tel:+1234567890"
              className="flex items-center text-blue-900 font-medium hover:text-blue-700 mb-4"
              onClick={closeMenu}
            >
              <Phone size={18} className="mr-2" />
              +977 9704607031
            </Link>
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md transition-colors flex items-center justify-center font-medium w-full"
              onClick={closeMenu}
            >
              <Calendar size={18} className="mr-2" />
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
