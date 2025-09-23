import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from "../components/Education"
import Projects from "../components/Projects"
import Services from "../components/Services"
import WorkWithMe from "../components/WorkWithMe"
import ChatbotPopup from "../components/ChatbotPopup"
import DevMetrics from "../components/DevMetrics"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-6 space-y-10">
        <header className="relative text-center space-y-4">
          <h1 className="text-4xl font-bold"></h1>
          <div className="flex items-center justify-center mb-4 gap-4">
              <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Senior Full Stack Developer
              </span>
              <img
                src="/logos/profile.jpeg"
                alt="Profile"
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white"
              style={{ marginLeft: '8px' }}
              />
            </div>

            <p className="mt-6 text-base font-semibold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-transparent bg-clip-text drop-shadow-lg flex items-center justify-center gap-1">
            <span role="img" aria-label="spark" className="text-sm">✨</span>
            .class you define me &lt;body&gt; I need to lose weight &lt;div&gt; lets be together
            <span role="img" aria-label="spark" className="text-sm">✨</span>
          </p>        
          {/* <div className="flex justify-center mb-8 mt-16">
            <img
              src="/logos/creative.gif"
              alt="Creative Developer"
              className="w-20 h-20 rounded-full shadow-lg border-4 border-white animate-bounce"
              title="Creative Developer"
            />
          </div> */}
        </header>

        <section className="text-base sm:text-lg px-2 sm:px-0">
          <h2 className="text-4xl font-extrabold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              About Me
            </span>
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="mb-4 italic text-gray-800" style={{ fontFamily: 'Georgia, \"Times New Roman\", Times, serif' }}>
              I'm a problem-solver at heart and a developer by craft. I bring ideas to life with clean code and smart architecture. My goal is simple: create digital experiences that load fast, rank high, and make an impact.
            </p>
            <p className="mb-4 italic text-gray-800" style={{ fontFamily: 'Georgia, \"Times New Roman\", Times, serif' }}>
              If you're looking for someone who blends code quality, innovation, and AI capabilities — that's exactly what I do.
            </p>
          </div>
        </section>

        <Services />
        <Skills />
        <Experience />
        <Projects />
        <DevMetrics />
        <Education />
        <WorkWithMe />
      </main>
      <ChatbotPopup />
    </div>
  )
}