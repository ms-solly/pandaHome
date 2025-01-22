"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <Link
    href={href}
    className="relative block py-2 text-sm text-gray-400 hover:text-green-400 transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full custom-cursor-none"
    onClick={onClick}
  >
    {children}
  </Link>
)

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          >
            PandaHome
          </Link>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none z-50 relative"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isOpen && !isScrolled && <div className="absolute top-0 right-0 bottom-0 w-16 bg-black"></div>}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg z-40 ${
              !isScrolled ? "pt-4" : ""
            }`}
          >
            <nav className="flex flex-col space-y-4 p-4">
              <NavLink href="/projects" onClick={toggleMenu}>
                Projects
              </NavLink>
              <NavLink href="/about" onClick={toggleMenu}>
                About
              </NavLink>
              <NavLink href="/blog" onClick={toggleMenu}>
                Blog
              </NavLink>
              <NavLink href="/contact" onClick={toggleMenu}>
                Contact
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

