interface PostProps {
  title: string
  imgSrc: string
  children: React.ReactNode
}

function Post({ title, imgSrc, children }: PostProps) {
  return (
    <article className="mb-8 pb-4 border-b border-purple-200">
      <h2 className="text-2xl font-semibold text-purple-700 mb-2">{title}</h2>
      <div className="space-y-2 text-gray-700">{children}</div>
      <img src={imgSrc} alt="" width={400} height={400} className="rounded-lg mt-2 max-w-full h-auto" />
    </article>
  )
}

function App() {
  return (
    <div className="max-w-2xl mx-auto px-5">
      <header className="py-6">
        <h1 id="titulo" className="text-3xl font-bold text-purple-800">
          Blog de Cincinnatus
        </h1>
      </header>

      <section>
        <Post title="Titulo del post 1" imgSrc="/static/img/images.jpg">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda reiciendis sed. Quam id quaerat repellendus ipsa! Nam repudiandae aliquam impedit sunt, adipisci vitae totam eaque, saepe suscipit ea cupiditate.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio perferendis illum suscipit amet. Officiis, maiores. Omnis illum, mollitia totam, sunt distinctio optio animi officia sint, ducimus laboriosam vel voluptate.</p>
        </Post>

        <Post title="Titulo del post 2" imgSrc="/static/img/images2.jpg">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda reiciendis sed. Quam id quaerat repellendus ipsa! Nam repudiandae aliquam impedit sunt, adipisci vitae totam eaque, saepe suscipit ea cupiditate.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio perferendis illum suscipit amet. Officiis, maiores. Omnis illum, mollitia totam, sunt distinctio optio animi officia sint, ducimus laboriosam vel voluptate.</p>
        </Post>
      </section>

      <footer className="py-4 text-center">
        <br />
        <br />
        <a href="#titulo" className="text-purple-700 underline">Ir al inicio</a>
        <br />
        <a href="mailto:aespinal@cincinnatus.edu.do" className="text-purple-700 underline">Gmail</a>
        <p className="text-gray-500 mt-2">Copyright 2023</p>
      </footer>
    </div>
  )
}

export default App
