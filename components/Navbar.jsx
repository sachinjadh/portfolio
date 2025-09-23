export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-800 shadow z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center px-2 sm:px-4 py-2 sm:py-4 gap-y-2">
        <h1 className="text-lg sm:text-xl font-bold text-white">Sachin Jadhav</h1>
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          <a href="#skills" className="hover:text-teal-400 text-white text-base sm:text-lg">Skills</a>
          <a href="#experience" className="hover:text-teal-400 text-white text-base sm:text-lg">Experience</a>
          <a href="#projects" className="hover:text-teal-400 text-white text-base sm:text-lg">Projects</a>
          <a href="#metrics" className="hover:text-teal-400 text-white text-base sm:text-lg">Metrics</a>
          <a href="#bottom" className="hover:text-teal-400 text-white text-base sm:text-lg">Contact</a>
        </div>
      </div>
    </nav>
  )
}
