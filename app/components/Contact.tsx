import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-press-start mb-12 text-center text-green-400">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-xl font-press-start mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-xl font-press-start mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-xl font-press-start mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400 h-32 resize-none"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-green-400 text-gray-900 py-3 rounded-lg text-xl font-press-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  )
}

