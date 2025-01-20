import { motion } from "framer-motion"

const projects = [
  { id: 1, title: "Project 1", description: "Description of Project 1" },
  { id: 2, title: "Project 2", description: "Description of Project 2" },
  { id: 3, title: "Project 3", description: "Description of Project 3" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-press-start mb-12 text-center text-green-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-700 rounded-lg p-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3 className="text-2xl font-press-start mb-4">{project.title}</h3>
              <p className="font-inter">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

