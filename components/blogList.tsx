import Link from "next/link"
import { motion } from "framer-motion"

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

interface BlogListProps {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-green-400/50 transition-colors"
        >
          <Link href={`/blog/${post.slug}`} className="block p-6">
            <h2 className="text-xl font-space font-bold mb-2 hover:text-green-400 transition-colors">{post.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{post.date}</p>
            <p className="text-gray-300">{post.excerpt}</p>
          </Link>
        </motion.article>
      ))}
    </div>
  )
}

