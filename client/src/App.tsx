import SkipLink from './components/SkipLink'
import Header from './components/Header'
import PostCard from './components/PostCard'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <>
      <SkipLink />
      <ThemeToggle />

      <div className="max-w-xl mx-auto px-6 divide-y divide-gray-100 dark:divide-gray-800 min-h-screen
                      bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors">
        <Header />

        <main id="main-content" className="divide-y divide-gray-100 dark:divide-gray-800">
          <PostCard title="Titulo del post 1" imgSrc="/img/images.jpg" imgAlt="Imagen representativa del post 1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda reiciendis sed. Quam id quaerat repellendus ipsa! Nam repudiandae aliquam impedit sunt, adipisci vitae totam eaque, saepe suscipit ea cupiditate.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio perferendis illum suscipit amet. Officiis, maiores. Omnis illum, mollitia totam, sunt distinctio optio animi officia sint, ducimus laboriosam vel voluptate.</p>
          </PostCard>

          <PostCard title="Titulo del post 2" imgSrc="/img/images2.jpg" imgAlt="Imagen representativa del post 2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda reiciendis sed. Quam id quaerat repellendus ipsa! Nam repudiandae aliquam impedit sunt, adipisci vitae totam eaque, saepe suscipit ea cupiditate.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla distinctio perferendis illum suscipit amet. Officiis, maiores. Omnis illum, mollitia totam, sunt distinctio optio animi officia sint, ducimus laboriosam vel voluptate.</p>
          </PostCard>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
