"use client";

import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed text-lg"
        >
          {/* Technical Side */}
          <p>
            Hi, I'm Ghost – a web developer who enjoys experimenting with technology and design. I don't limit myself to a single framework, having worked with Next.js, Solid.js, Astro, Hugo, and more. Over time, TypeScript has become one of my favorite tools; at first, it felt a bit overwhelming, but as I've worked with it more, its benefits became clear. Tailwind CSS is my go-to for styling, and I've recently begun exploring UnoCSS to further improve my development process.
          </p>

          <p>
            Currently, I'm building my own social media platform, VegaChat, while also experimenting with APIs like OpenDota for creating a game stats platform. I’ve contributed to various open-source projects since my first year in college, including participating in Hacktoberfest, which allowed me to collaborate with developers worldwide and contribute to meaningful projects.
          </p>

          <p>
            I enjoy using tools like **Shadcn UI** for their responsive and beautiful components, which speed up development while maintaining a flexible structure. The best part is that these components are highly customizable, which gives me the freedom to tweak them as per my project’s needs. This flexibility has proven invaluable in my workflow, especially when designing user interfaces.
          </p>

          <p>
            Right now, I’m diving deep into C++ and revisiting C. I prefer working with C-style C++ for its speed and simplicity. I'm also learning game development and experimenting with game asset creation. I thrive in the process of building things, solving problems, and figuring out how everything fits together. If you're curious about my work or tech interests, feel free to connect with me on LinkedIn.
          </p>

          {/* Creative Side */}
          <p>
            While tech is my primary focus, I also have a strong creative side. Writing, doodling, singing, and exploring digital art are just a few of the creative pursuits I enjoy. My creativity flows best when I can let go of rigid structures, whether it’s writing poetry or sketching designs. I’m particularly drawn to writing as a form of self-expression, and I’ve experimented with a variety of creative mediums over the years.
          </p>

          <p>
            Back in school, I used to read books on personal growth mostly, which helped me improve myself and motivated me to keep learning. Nowadays, my reading interests have become more spontaneous, picking up books on a variety of topics without any specific pattern, whatever feels interesting. From tech-related reads to random subjects that spark curiosity, I always find something to learn from whatever I pick up. Novels have also become a favorite, offering an escape into different worlds and a chance to see life from new perspectives, but sometimes also showing me the worst side of the world for which I will be working to change it for later half of my life(till death) but for now I am doing what's in my hand.
          </p>

          <p>
            I use AI tools like V0 and ChatGPT for technical tasks—helping me streamline workflows, solve coding challenges, and speed up development. However, when it comes to my creative endeavors, I prefer to work independently. Whether it's writing, poetry, or digital art, I find that my own creative instincts lead me the best. AI tools support me in my tech-related work, but I remain deeply connected to my personal way of creating art.
          </p>

          <p>
            If you’re interested in my work or want to discuss ideas, feel free to reach out via{" "}
            <Link href={"/contact"} className="font-medium text-pink-600 hover:text-pink-700">
              contacts
            </Link>
            .
          </p>

          {/* Combined Technical and Creative Interests */}
          <p>
            I also have a deep interest in human psychology—understanding how people think and what drives their actions. In my free time, I like combining my love for art and tech by exploring both creative and technical projects. Whether it’s experimenting with new frameworks or designing something that reflects my personal style, I aim to strike a balance between the logical and creative sides of myself.
          </p>

          <p>
            If you're looking to collaborate or explore creative ideas, let's connect and make something great together!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-white font-semibold mb-3 text-xl">Technical Interests</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Frontend Development</li>
                <li>OS Contribution</li>
              </ul>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-white font-semibold mb-3 text-xl">Creative Pursuits</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Poetry Writing</li>
                <li>Digital Art</li>
                <li>Doodling</li>
                <li>Singing</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
