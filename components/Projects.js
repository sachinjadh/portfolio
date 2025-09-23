import { openChatbot } from '../utils/chatbotControl';
import LighthouseBadge from './LighthouseBadge';

const projectData = [
  {
    title: "Personal AI Resume Chatbot",
    emoji: "🤖",
    description: "An interactive resume assistant built with Next.js and a rule-based Q&A system. It provides personalized responses about my professional experience, skills, and projects without relying on external AI APIs.",
    lighthouse: {
      performance: 98,
      accessibility: 100,
      seo: 100,
      bestPractices: 95
    },
    links: {
      demo: null,
      code: "https://github.com/sachinjadh/portfolio_full"
    }
  },
  {
    title: "OnceUponAI – Story Generation App",
    emoji: "📖",
    description: "A kid-friendly story generation app that creates personalized bedtime stories. Built with React, Node.js, and OpenAI's GPT, it generates unique stories based on the child's name and favorite animal while incorporating educational themes.",
    lighthouse: {
      performance: 95,
      accessibility: 98,
      seo: 100,
      bestPractices: 92
    },
    links: {
      demo: "https://onceuponai.vercel.app",
      code: "https://github.com/sachinjadh/onceuponai"
    }
  },
  {
    title: "Sentiment Analysis App",
    emoji: "😊/😔",
    description: "A streamlined web application that analyzes text emotions using AI. Built with Streamlit and Hugging Face Transformers, it provides real-time sentiment analysis with multi-language support and detailed emotion scores.",
    lighthouse: {
      performance: 96,
      accessibility: 97,
      seo: 98,
      bestPractices: 94
    },
    links: {
      demo: "https://sentiment-analyzer.streamlit.app",
      code: "https://github.com/sachinjadh/sentiment-analysis"
    }
  }
];

export default function Projects() {
  const handleChatbotClick = () => {
    openChatbot();
  };

  return (
    <section id="projects" className="py-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-center mb-10">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          My Projects
        </span>
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {projectData.map((project, index) => (
          <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              {project.title}
              <span className="ml-2 text-blue-500">{project.emoji}</span>
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            {/* Lighthouse Scores */}
            <div className="flex flex-wrap mb-4">
              <LighthouseBadge score={project.lighthouse.performance} category="Performance" />
              <LighthouseBadge score={project.lighthouse.accessibility} category="Accessibility" />
              <LighthouseBadge score={project.lighthouse.seo} category="SEO" />
              <LighthouseBadge score={project.lighthouse.bestPractices} category="Best Practices" />
            </div>

            <div className="flex space-x-4">
              {project.title === "Personal AI Resume Chatbot" ? (
                <button 
                  onClick={handleChatbotClick}
                  className="text-blue-600 hover:text-blue-800 flex items-center cursor-pointer transition-colors duration-200"
                >
                  <span className="mr-1">🤖</span> Click here to chat with me!
                </button>
              ) : project.links.demo && (
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <span className="mr-1">�</span> {project.title === "OnceUponAI – Story Generation App" ? "Try it Out" : "Live Demo"}
                </a>
              )}
              <a 
                href={project.links.code} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="mr-1">💻</span> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
