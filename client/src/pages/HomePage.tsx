import PostCard from '../components/PostCard'

function HomePage() {
  return (
    <main id="main-content" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 py-4">
      <PostCard title="Titulo del post 1" imgSrc="/img/images.jpg" imgAlt="Imagen representativa del post 1">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda reiciendis sed. Quam id quaerat repellendus ipsa! Nam repudiandae aliquam impedit sunt, adipisci vitae totam eaque, saepe suscipit ea cupiditate.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio perferendis illum suscipit amet. Officiis, maiores. Omnis illum, mollitia totam, sunt distinctio optio animi officia sint, ducimus laboriosam vel voluptate.</p>
      </PostCard>

      <PostCard title="Titulo del post 2" imgSrc="/img/images2.jpg" imgAlt="Imagen representativa del post 2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda reiciendis sed. Quam id quaerat repellendus ipsa! Nam repudiandae aliquam impedit sunt, adipisci vitae totam eaque, saepe suscipit ea cupiditate.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio perferendis illum suscipit amet. Officiis, maiores. Omnis illum, mollitia totam, sunt distinctio optio animi officia sint, ducimus laboriosam vel voluptate.</p>
      </PostCard>
    </main>
  )
}

export default HomePage
