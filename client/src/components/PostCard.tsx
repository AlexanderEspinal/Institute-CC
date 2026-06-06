interface PostCardProps {
  title: string
  imgSrc: string
  imgAlt: string
  children: React.ReactNode
}

function PostCard({ title, imgSrc, imgAlt, children }: PostCardProps) {
  return (
    <article className="flex flex-col">
      <h2 className="text-xl font-light text-gray-800 dark:text-gray-100 mb-3">{title}</h2>
      <div className="space-y-3 text-gray-500 dark:text-gray-400 leading-relaxed text-sm flex-1">{children}</div>
      <img
        src={imgSrc}
        alt={imgAlt}
        width={400}
        height={400}
        loading="lazy"
        className="mt-4 max-w-full h-auto rounded"
      />
    </article>
  )
}

export default PostCard
