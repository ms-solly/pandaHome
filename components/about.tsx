"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-space font-bold mb-12 gradient-text"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-400"
        >
          <p className="text-xl">
            I'm Ghost, a passionate web developer with a creative soul. I thrive on exploring different frameworks and
            technology stacks, always eager to learn and implement new solutions. My journey in web development is
            driven by curiosity and the desire to create meaningful digital experiences.
          </p>
          <p className="text-xl">
            Beyond coding, I express myself through poetry, capturing thoughts and emotions in verses. I enjoy doodling
            in my free time, letting my creativity flow freely. Currently, I'm venturing into game development,
            combining my love for coding with interactive storytelling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-white font-space font-bold mb-3">Technical Interests</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Web Development</li>
                <li>Framework Exploration</li>
                <li>Game Development</li>
                <li>Interactive Experiences</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-white font-space font-bold mb-3">Creative Pursuits</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Poetry Writing</li>
                <li>Digital Art</li>
                <li>Doodling</li>
                <li>Memory Exploration</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

