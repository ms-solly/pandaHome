"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Web Framework Explorer",
    description:
      "A collection of projects built with different web frameworks, showcasing various approaches to modern web development",
    image: "/project1.jpg",
    tags: ["Next.js", "React", "Vue", "Svelte"],
  },
  {
    title: "Poetry Portfolio",
    description: "An interactive platform showcasing my poetry collection with creative animations and typography",
    image: "/project2.jpg",
    tags: ["React", "Framer Motion", "Typography.js"],
  },
  {
    title: "Game Development Journey",
    description: "My first game development project, combining web technologies with game design principles",
    image: "/project3.jpg",
    tags: ["Unity", "C#", "WebGL"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-space font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-400/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-space font-bold mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

