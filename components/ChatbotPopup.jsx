import { useState } from 'react';

export default function ChatbotPopup() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am your AI resume assistant. Ask me anything about Sachin Jadhav.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Simple rule-based Q&A pairs
  const qaPairs = [
    { q: /name|who are you|your name/i, a: "Hey! I'm Sachin Jadhav. I'm a full stack developer who loves building things that work and look great." },
    { q: /location|where.*live|based/i, a: "I'm currently living in Aurora, Illinois." },
    { q: /email|contact/i, a: "You can always reach me at sachinj31@hotmail.com. Happy to connect!" },
    { q: /github/i, a: "Sure! My GitHub is github.com/sachinjadh. Feel free to check out my projects or say hi there." },
    { q: /summary|about you|profile/i, a: "I'm a passionate full stack developer with 10 years of experience. I love solving problems, building scalable apps, and making sure everything runs smoothly and securely. I enjoy working with React, Next.js, Node.js, and a bunch of other cool tech. If you want someone who cares about clean code and great user experiences, that's me!" },
    { q: /experience|years|how long/i, a: "I've been in the industry for about 10 years now, working on everything from e-commerce to enterprise apps." },
    { q: /skills|technologies|stack|technical skills/i, a: "I work with React, Next.js, Node.js, Angular, TypeScript, JavaScript, C#, .NET Core, Java, Spring Boot, and more. I also do DevOps, testing, and database work. If it's web or mobile, I've probably built it!" },
    { q: /cloud|devops|azure|aws|lambda/i, a: "I'm comfortable with cloud and DevOps tools like Azure Functions, AWS Lambda, Azure DevOps, GitHub Actions, CI/CD, Dynatrace, and Docker." },
    { q: /frontend|css|html|ui/i, a: "Frontend is my playground: HTML5, CSS3, SCSS, Styled Components, Emotion, Bootstrap, Kendo UI, Bit.dev—you name it." },
    { q: /testing|test|qa/i, a: "Testing is important! I use Jest, Jasmine, Karma, Cypress, Protractor, and Artillery to make sure everything works as it should." },
    { q: /database|db|sql|mongo|mysql|oracle/i, a: "I've worked with MS SQL Server, MySQL, MongoDB, and Oracle. Data should be fast and reliable!" },
    { q: /cms|contentful|analytics|seo/i, a: "I have experience with Contentful, Google Tag Manager, Adobe Site Catalyst, and SEO optimization. I like making sites that people (and search engines) love." },
    { q: /integrations|salesforce|sap|paypal|service bus/i, a: "I've integrated with Salesforce, SAP, PayPal, credit card gateways, Service Bus, and live chat tools. Connecting systems is fun!" },
    { q: /tools|webpack|babel|figma|jira/i, a: "I use tools like Git, Webpack, Babel, VS Code, Figma, Zeplin, Jira, TFS, and SVN to get the job done efficiently." },
    { q: /education|degree|school|university/i, a: "I earned my MS in Information Systems from Murray State University (Kentucky, USA) and my BE in Computer Science from Pune University (India)." },
    { q: /ryerson/i, a: "At Ryerson, I built a multi-brand e-commerce platform with React and Next.js, improved site speed by 40%, and set up serverless microservices. I also created a shared Bit.dev component library and worked on lots of integrations and automation." },
    { q: /carmax/i, a: "At CarMax, I built a modular React web app with a .NET Core backend, set up a monorepo, and led automated testing. I also worked on APIs and cool personalization features." },
    { q: /ati|physical therapy/i, a: "At ATI Physical Therapy, I built cross-platform apps with Angular 7 and .NET, and even made a real-time e-signature app. I love making things easier for users!" },
    { q: /allstate/i, a: "At Allstate Insurance, I created dashboards with Angular and Highcharts, migrated legacy code to AngularJS, and worked on secure backend integrations." },
    { q: /freelance|web designer/i, a: "As a freelancer, I've delivered 10+ custom websites for small businesses, designed logos and banners, and made sure everything is mobile-friendly and SEO-optimized." },
    { q: /hobbies|interests/i, a: "Outside of work, I love building creative web projects, learning new tech, and collaborating with awesome people." },
    // fallback
    { q: /.*/, a: "I'm here to chat about my resume, skills, and experience! Try asking about my background, projects, or what I love to build." }
  ];

  function getBotAnswer(userText) {
    const match = qaPairs.find(pair => pair.q.test(userText));
    return match ? match.a : qaPairs[qaPairs.length - 1].a;
  }

  async function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      const answer = getBotAnswer(userMsg.text);
      setMessages(msgs => [...msgs, { from: 'bot', text: answer }]);
      setLoading(false);
    }, 500);
  }

  return (
    <div>
      {/* Floating chat button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-label="Open Chatbot"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 5.92 2 10.5c0 2.54 1.61 4.81 4.11 6.28-.18.64-.7 2.47-.8 2.87-.13.52.38.95.86.7.36-.19 2.36-1.38 3.33-1.94.82.13 1.67.2 2.5.2 5.52 0 10-3.92 10-8.5S17.52 2 12 2Z"/></svg>
      </button>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white border border-gray-300 rounded-xl shadow-2xl flex flex-col">
          <div className="px-4 py-3 border-b font-bold bg-blue-600 text-white rounded-t-xl">AI Resume Chatbot</div>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 max-h-72">
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm ${msg.from === 'bot' ? 'text-left' : 'text-right'}`}>
                <span className={`inline-block px-3 py-2 rounded-lg ${msg.from === 'bot' ? 'bg-gray-100 text-gray-800' : 'bg-blue-500 text-white'}`}>{msg.text}</span>
              </div>
            ))}
            {loading && <div className="text-xs text-gray-400">Thinking...</div>}
          </div>
          <form onSubmit={sendMessage} className="flex border-t">
            <input
              className="flex-1 px-3 py-2 rounded-bl-xl focus:outline-none"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about Sachin's experience..."
              disabled={loading}
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-br-xl hover:bg-blue-700 disabled:opacity-50" disabled={loading || !input.trim()}>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
