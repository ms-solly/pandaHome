"use client"

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RiTwitterXFill } from "react-icons/ri";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-space font-bold text-green-400">PandaHome</h3>
            <p className="text-gray-400">Crafting digital experiences with creativity and code.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-space font-bold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/projects" className="relative text-gray-400 hover:text-green-400 transition-colors">Projects</Link></li>
              <li><Link href="/about" className="relative text-gray-400 hover:text-green-400 transition-colors">About</Link></li>
              <li><Link href="/blog" className="relative text-gray-400 hover:text-green-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="relative text-gray-400 hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-space font-bold text-white">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com/ms-solly" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110">
                <FaGithub size={24} />
              </Link>
              <Link href="https://x.com/aditiJ0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110">
                <RiTwitterXFill size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/aditi-j-57b64526a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} PandaHome. Crafted with{' '}
            <motion.svg
              className="mx-1 w-6 h-6 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              initial={{ scale: 1 }}
              animate={{
                scale: 1, 
                rotate: 0, 
              }}
              transition={{
                duration: 0,
                repeat: 0,
              }}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
              <motion.path
                d="M12 13c-1.5 0-2.5-1.5-2.5-3s1-3 2.5-3c1.5 0 2.5 1.5 2.5 3s-1 3-2.5 3z"
                fill="currentColor"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.svg>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
