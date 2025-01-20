"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";


function NavLink({ href, children, ...props }) {
  return (
    <Link href={href} className="relative block py-2 text-sm text-gray-400 hover:text-green-400 transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full" {...props}>
      {children}
    </Link>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/70 backdrop-blur-md" : ""}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-space font-bold text-white">
            PandaHome
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ImCross size={24} /> : <MdMenu size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4">
            <NavLink href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#about" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
