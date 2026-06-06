interface PostCardProps {
  title: string
  imgSrc: string
  children: React.ReactNode
}

function PostCard({ title, imgSrc, children }: PostCardProps) {
  return (
    <article className="py-8">
      <h2 className="text-2xl font-light text-gray-800 mb-4">{title}</h2>
      <div className="space-y-3 text-gray-500 leading-relaxed">{children}</div>
      <img
        src={imgSrc}
        alt=""
        width={400}
        height={400}
        className="mt-6 max-w-full h-auto rounded"
      />
    </article>
  )
}

export default PostCard
