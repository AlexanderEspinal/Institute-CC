function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2
                 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900
                 focus:outline-2 focus:outline-blue-600 focus:rounded"
    >
      Saltar al contenido principal
    </a>
  )
}

export default SkipLink
