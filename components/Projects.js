export default function Projects() {
  return (
  <section id="projects" className="py-10 bg-white rounded-xl shadow-lg mt-0">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          My Projects
        </span>
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">AI Chatbot</h3>
          <p className="text-gray-700">An intelligent chatbot leveraging the latest in AI and NLP to provide smart, contextual responses and automate conversations.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">Sentiment Analysis App</h3>
          <p className="text-gray-700">A web app that analyzes user input and determines sentiment using machine learning models, providing real-time feedback and analytics.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">Car Comparison Tool (React App)</h3>
          <p className="text-gray-700">A React-based tool to compare features, specs, and prices of different cars, helping users make informed decisions.</p>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow text-center">
          <span
            className="relative inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full shadow-lg animate-pulse select-none"
          >
            <svg className="w-6 h-6 mr-2 animate-spin" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            More coming, stay tuned!
          </span>
        </div>
      </div>
    </section>
  );
}
