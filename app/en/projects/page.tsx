"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          My Projects
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed text-lg"
        >
          <p>
            Welcome to my projects page! Here, I showcase the work I've done across
            various domains like web development, design, and other creative pursuits.
            However, this page is currently under construction. I’ll be updating this page regularly as
            I complete or make progress on various projects. I am still working on
            updating my older projects and will be adding them here soon.
          </p>

          <p>
            The website you are currently on, <b className="text-cyan-400">PandaHome</b>, is my ongoing project. I'm
            actively working on its development and plan to update this section with
            details about <b className="text-cyan-400">PandaHome</b> and other projects once they're ready.
          </p>

          <p>
            I appreciate your patience and understanding. As I continue building out
            this site and its features, check back later for more updates on my work.
            In the meantime, feel free to explore my <a href="/blog" className="text-pink-600 hover:text-pink-700">Blog</a> to see my latest thoughts and projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
