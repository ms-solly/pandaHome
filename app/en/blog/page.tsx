"use client";

import { motion } from "framer-motion";

export default function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          My Blog
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed text-lg"
        >
          <p>
            Welcome to my blog! I will share my thoughts, experiences, and insights
            here as I continue learning and exploring the world of technology, design,
            and more. Stay tuned for upcoming posts on topics that I find interesting,
            from web development to psychology, and even my personal projects.
          </p>

          <p>
            As I haven't published any blogs yet, feel free to check back later! I'm
            currently working on my first post and will be sharing it soon.
          </p>

          <p>
            In the meantime, feel free to connect with me or explore other sections of
            my website, such as the <a href="/projects" className="text-pink-600 hover:text-pink-700">Projects</a> page to learn more about what I'm working on.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
