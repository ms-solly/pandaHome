"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          Contact Me
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed text-lg"
        >
          <p>
            I’d like to hear from you! Whether you're looking to collaborate, have any questions, or just want to chat about what I am currently learning, feel free to reach out. You can contact me via email or through my social media links below.
          </p>

          <div className="flex flex-col md:flex-row justify-start gap-6 mt-8">
            {/* Social Media Links */}
            <div className="flex flex-wrap justify-start gap-6">
              <Link href="https://github.com/ms-solly" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-xl text-gray-300 hover:text-green-400"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </motion.div>
              </Link>
              <Link href="https://www.linkedin.com/in/aditi-j-57b64526a/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-xl text-gray-300 hover:text-green-400"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </motion.div>
              </Link>
              <Link href="https://x.com/aditiJ0" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-xl text-gray-300 hover:text-green-400"
                >
                  <RiTwitterXFill className="mr-2" />
                  Twitter
                </motion.div>
              </Link>
              <Link href="https://www.instagram.com/ghostsoul7452/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center text-xl text-gray-300 hover:text-green-400"
                >
                  <FaInstagram className="mr-2" />
                  Instagram
                </motion.div>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-white">Email</h3>
            <p className="text-lg text-gray-300 mt-4">
              You can also reach me via email at:{" "}
              <Link href="mailto:aditij0979@gmail.com" className="text-green-400 hover:text-green-500">
              aditij0979@gmail.com
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
