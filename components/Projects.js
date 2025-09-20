import { openChatbot } from '../utils/chatbotControl';

export default function Projects() {
  const handleChatbotClick = () => {
    openChatbot();
  };

  return (
  <section id="projects" className="py-10 bg-white rounded-xl shadow-lg mt-0">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          My Projects
        </span>
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            Personal AI Resume Chatbot
            <span className="ml-2 text-blue-500">🤖</span>
          </h3>
          <p className="text-gray-700 mb-4">An interactive resume assistant built with Next.js and a rule-based Q&A system. It provides personalized responses about my professional experience, skills, and projects without relying on external AI APIs.</p>
          <div className="flex space-x-4">
            <button 
              onClick={handleChatbotClick}
              className="text-blue-600 hover:text-blue-800 flex items-center cursor-pointer transition-colors duration-200"
            >
              <span className="mr-1">🤖</span> Click here to chat with me!
            </button>
            <a href="https://github.com/sachinjadh/portfolio_full" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
              <span className="mr-1">💻</span> Source Code
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            OnceUponAI – Story Generation App
            <span className="ml-2 text-blue-500">📖</span>
          </h3>
          <p className="text-gray-700 mb-4">A kid-friendly story generation app that creates personalized bedtime stories. Built with React, Node.js, and OpenAI's GPT, it generates unique stories based on the child's name and favorite animal while incorporating educational themes.</p>
          <div className="flex space-x-4">
            <a href="https://onceuponai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
              <span className="mr-1">🌐</span> Try it Out
            </a>
            <a href="https://github.com/sachinjadh/onceuponai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
              <span className="mr-1">💻</span> Source Code
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            Sentiment Analysis App
            <span className="ml-2 text-blue-500">😊/😔</span>
          </h3>
          <p className="text-gray-700 mb-4">A streamlined web application that analyzes text emotions using AI. Built with Streamlit and Hugging Face Transformers, it provides real-time sentiment analysis with multi-language support and detailed emotion scores.</p>
          <div className="flex space-x-4">
            <a href="https://sentiment-analyzer.streamlit.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
              <span className="mr-1">🎯</span> Live Demo
            </a>
            <a href="https://github.com/sachinjadh/sentiment-analysis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
              <span className="mr-1">💻</span> Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
