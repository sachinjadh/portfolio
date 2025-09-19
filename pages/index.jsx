import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Hobbies from '../components/Hobbies'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6 space-y-20">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold"></h1>
<h1 className="text-4xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
               Sachin - Web Developer / Full Stack Developer
        </span>
      </h1>
          <p className="italic text-gray-400">.class you define me &lt;body&gt; I need to lose weight &lt;div&gt; lets be together</p>
        </header>
        <section className="text-lg">
          
<h2 className="text-4xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
               About Me
        </span>
      </h2>

          <p class="mb-4">I’m a problem-solver at heart and a developer by craft. I build websites, mobile apps, and APIs that don’t just work — they perform. From serverless backends to SEO-optimized frontends, I bring ideas to life with clean code and smart architecture. My goal is simple: create digital experiences that load fast, rank high, and make an impact. </p>

<p class="mb-4">If you’re looking for someone who blends clean code, innovation, and performance, that’s exactly what I do.</p>

        </section>
        <Skills />
        <Experience />
        <Hobbies />
      </main>
    </div>
  )
}
