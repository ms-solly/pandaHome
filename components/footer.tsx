import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

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
              <li><Link href="#projects" className="relative text-gray-400 hover:text-green-400 transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full">Projects</Link></li>
              <li><Link href="#about" className="relative text-gray-400 hover:text-green-400 transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full">About</Link></li>
              <li><Link href="/blog" className="relative text-gray-400 hover:text-green-400 transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full">Blog</Link></li>
              <li><Link href="#contact" className="relative text-gray-400 hover:text-green-400 transition-colors before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-green-400 before:transition-all before:duration-300 hover:before:w-full">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xl font-space font-bold text-white">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110 active:scale-90"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110 active:scale-90"
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110 active:scale-90"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {currentYear} PandaHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
