export default function Services() {
  return (
    <section id="services" className="py-10 bg-white rounded-xl shadow-lg mt-0">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Services I Offer
        </span>
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow flex items-center">
          <span className="text-3xl mr-4">💻</span>
          <div>
            <h3 className="text-xl font-bold mb-1">Frontend Web & Mobile Development</h3>
            <p className="text-gray-700">Modern, responsive websites and mobile apps using React, Next.js, and more.</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow flex items-center">
          <span className="text-3xl mr-4">🌐</span>
          <div>
            <h3 className="text-xl font-bold mb-1">Full-Stack Development</h3>
            <p className="text-gray-700">End-to-end solutions from UI to backend, tailored for your business needs.</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow flex items-center">
          <span className="text-3xl mr-4">📝</span>
          <div>
            <h3 className="text-xl font-bold mb-1">Landing Page & Blog</h3>
            <p className="text-gray-700">SEO-optimized landing pages and blogs to boost your online presence.</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow flex items-center">
          <span className="text-3xl mr-4">🗄️</span>
          <div>
            <h3 className="text-xl font-bold mb-1">Database & Backend (RESTful APIs)</h3>
            <p className="text-gray-700">Robust databases and scalable RESTful APIs, including AWS/Azure serverless solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
