import { motion } from "framer-motion"
import ReactMarkdown from "react-markdown"

interface Post {
  title: string
  date: string
  content: string
}

interface BlogPostProps {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <motion.article initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-space font-bold mb-4 gradient-text">{post.title}</h1>
      <p className="text-gray-400 mb-8">{post.date}</p>
      <div className="prose prose-invert prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </motion.article>
  )
}

