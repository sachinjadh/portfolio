export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-800 shadow z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-white">Sachin Jadhav</h1>
        <div className="space-x-6">
          <a href="#skills" className="hover:text-teal-400 text-white">Skills</a>
          <a href="#experience" className="hover:text-teal-400 text-white">Experience</a>
          <a href="#hobbies" className="hover:text-teal-400 text-white">Hobbies</a>
        </div>
      </div>
    </nav>
  )
}
