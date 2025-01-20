import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#home" className="text-xl font-press-start hover:text-green-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-xl font-press-start hover:text-green-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-xl font-press-start hover:text-green-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-xl font-press-start hover:text-green-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

