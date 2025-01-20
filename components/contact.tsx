"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-space font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-8 bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 transition-colors text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 transition-colors text-white"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) => setFormState((prev) => ({ ...prev, message: e.target.value }))}
              rows={6}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-green-400 transition-colors text-white resize-none"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-lg text-lg font-space font-bold hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

