// Q&A pairs for the chatbot
export const qaPairs = [
  {
    category: 'fun',
    pairs: [
      {
        q: /what.*(can|do) you do|how.*(can|do) you help|what.*(are|'re) your (capabilities|features)|help|capabilities|features|tell me about yourself/i,
        a: "🤖 I'm your friendly AI portfolio guide! I can:\n\n• Share details about Sachin's skills & projects\n• Tell you about his work experience\n• Show his technical expertise\n• Share some tech jokes (if you dare!)\n\nWhat would you like to know more about?"
      },
      {
        q: /why.*(hire|choose|consider|pick) sachin|what.*makes sachin (special|unique|different|stand out)|why is sachin (good|great|best)|what.*sachin('s|s) (strengths|advantages)/i,
        a: "🌟 Here's why Sachin stands out:\n\n• Proven track record with major companies\n• Expertise in AI & modern web technologies\n• Focus on scalable, maintainable solutions\n• Strong problem-solving abilities\n\nWould you like specific examples of his work or technical expertise?"
      },
      {
        q: /(who|what).*(made|created|built|developed|designed) you|who.*('s|is|are) you|who.*('s| is) your (creator|developer|builder)|how were you (made|created|built)/i,
        a: "I'm an AI assistant created by Sachin using Next.js and a custom Q&A system! 🤖 I'm actually one of his featured projects, showcasing his skills in:\n\n• AI implementation\n• Modern web development\n• User experience design\n\nWould you like to know more about how I was built or see his other projects?"
      },
      {
        q: /(are you smart|smarter than|intelligence|AI|artificial intelligence)/i,
        a: "Not yet... but give me enough caffeine and I might catch up ☕⚡ For now, I'm just really good at telling you about Sachin's skills and experience!"
      },
      {
        q: /bye|goodbye|see you|farewell|nice talking|take care/i,
        a: "It was great chatting with you! Feel free to come back anytime to learn more about Sachin. Wishing you a wonderful day! 👋"
      },
      {
        q: /thanks|thank you|awesome|great|cool|nice/i,
        a: "You're welcome! I enjoy sharing about Sachin's skills and experiences. Don't hesitate to ask if you have more questions! 😊"
      },
      {
        q: /joke|funny|make me laugh/i,
        a: "Here's a developer joke: Why do programmers prefer dark mode? Because light attracts bugs! 😄 Speaking of bug-free code, Sachin's pretty good at that!"
      }
    ]
  },
  {
    category: 'personal',
    pairs: [
      { 
        q: /name|who are you|your name/i, 
        a: "Hey! I'm Sachin Jadhav. I'm a Senior Full Stack Developer specializing in React, Next.js, and AI-powered applications. I love building things that work great and look even better! 🚀" 
      },
      { 
        q: /location|where.*live|based/i, 
        a: "I'm currently based in Aurora, Illinois, but I'm open to remote opportunities and exciting projects worldwide! 🌎" 
      },
      { 
        q: /email|contact/i, 
        a: "You can always reach me at sachinj31@hotmail.com. Happy to connect!" 
      },
      { 
        q: /github/i, 
        a: "Sure! My GitHub is github.com/sachinjadh. Feel free to check out my projects or say hi there." 
      },
      { 
        q: /hobbies|interests/i, 
        a: "I'm an outdoor enthusiast! Love hiking, biking, and camping. Also enjoy cricket, pickleball, and working out. When not coding or exploring outdoors, you'll find me chilling with friends, listening to music, or building creative web projects." 
      }
    ]
  },
  {
    category: 'professional',
    pairs: [
      { 
        q: /(tell me about|what('s| is)|describe) (sachin|your|the) (background|profile|summary|story)|who is sachin|about (sachin|you|background)|summary|profile/i, 
        a: "👋 Let me tell you about Sachin!\n\n💻 Professional Overview:\n• Senior Full Stack Developer with 10+ years experience\n• Specialized in AI-powered web applications\n• Expert in React, Next.js, and cloud technologies\n\n🎯 Core Strengths:\n• High-performance application architecture\n• AI/ML integration specialist\n• Clean code advocate\n\nWant to know more about his projects or specific skills?" 
      },
      { 
        q: /^experience$|(what|tell me about|describe) (your|sachin's) experience|how (long|many years)|work history|past (work|jobs|roles)|previous experience|career journey/i, 
        a: "💼 Here's Sachin's professional journey:\n\n🏢 Recent Roles:\n• Ryerson: Led multi-brand e-commerce development\n• Carmax: Spearheaded full-stack initiatives\n• ATI Physical Therapy: Innovated healthcare solutions\n• Allstate: Revolutionized data visualization\n\n🌟 Key Achievements:\n• Reduced load times by 40%\n• Implemented AI-driven features\n• Led successful cloud migrations\n\nWould you like details about a specific role or project?" 
      },
      { 
        q: /education|degree|school|university/i, 
        a: "I earned my MS in Information Systems from Murray State University (Kentucky, USA) and my BE in Computer Science from Pune University (India)." 
      }
    ]
  },
  {
    category: 'skills',
    pairs: [
      { 
        q: /^(skills|expertise|tech|technologies|stack)$|^specific skills$|(what|tell me about|list) (your|sachin's) (skills|technologies|tech stack|expertise)|what.*(know|work with|specialize in)|technical (skills|abilities|expertise)|what technologies/i, 
        a: "🛠️ Sachin's Technical Arsenal:\n\n💻 Frontend Excellence:\n• React & Next.js expert\n• TypeScript advocate\n• Modern UI/UX implementation\n\n⚙️ Backend Power:\n• Node.js & Express\n• API architecture\n• Database design\n\n🤖 AI/ML Integration:\n• OpenAI implementation\n• Hugging Face Transformers\n• Custom ML solutions\n\n☁️ Cloud & DevOps:\n• AWS & Azure certified\n• CI/CD automation\n• Performance optimization\n\nWant to deep dive into any of these areas?" 
      },
      { 
        q: /(tell me about|what about|how about) (cloud|devops|deployment|infrastructure)|experience with (aws|azure|cloud)|cloud (expertise|experience|skills)|devops (knowledge|skills)/i, 
        a: "☁️ Cloud & DevOps Mastery:\n\n🌐 Cloud Platforms:\n• AWS (Lambda, S3, EC2, CloudFront)\n• Azure (Functions, App Service, Cognitive Services)\n• Vercel (Edge Functions, Analytics)\n\n🔄 DevOps Practices:\n• Automated CI/CD pipelines\n• Docker containerization\n• Infrastructure as Code\n\n📊 Monitoring & Performance:\n• Real-time metrics tracking\n• Performance optimization\n• Cost optimization\n\nInterested in specific cloud solutions or DevOps practices?" 
      },
      { 
        q: /frontend|css|html|ui/i, 
        a: "Frontend is my playground: React, Next.js, Angular, TypeScript for the core, plus HTML5, CSS3, SCSS, Styled Components, Emotion, Bootstrap, Kendo UI, Bit.dev—you name it, I've probably worked with it!" 
      },
      { 
        q: /testing|test|qa/i, 
        a: "Testing is important! I use Jest, Jasmine, Karma, Cypress, Protractor, and Artillery to make sure everything works as it should." 
      },
      { 
        q: /database|db|sql|mongo|mysql|oracle/i, 
        a: "I've worked with MS SQL Server, MySQL, MongoDB, and Oracle. Data should be fast and reliable!" 
      },
      { 
        q: /cms|contentful|analytics|seo/i, 
        a: "I have experience with Contentful, Google Tag Manager, Adobe Site Catalyst, and SEO optimization. I like making sites that people (and search engines) love." 
      },
      { 
        q: /integrations|salesforce|sap|paypal|service bus/i, 
        a: "I've integrated with Salesforce, SAP, PayPal, credit card gateways, Service Bus, and live chat tools. Connecting systems is fun!" 
      },
      { 
        q: /tools|webpack|babel|figma|jira/i, 
        a: "I use tools like Git, Webpack, Babel, VS Code, Figma, Zeplin, Jira, TFS, and SVN to get the job done efficiently." 
      }
    ]
  },
  {
    category: 'companies',
    pairs: [
      { 
        q: /ryerson/i, 
        a: "At Ryerson, I built a multi-brand e-commerce platform with React and Next.js, and set up serverless microservices. I also created a shared Bit.dev component library and worked on lots of integrations and automation." 
      },
      { 
        q: /carmax/i, 
        a: "At CarMax, I built a modular React web app with a .NET Core backend, set up a monorepo, and led automated testing. I also worked on APIs and cool personalization features." 
      },
      { 
        q: /ati|physical therapy/i, 
        a: "At ATI Physical Therapy, I built cross-platform apps with Angular 7 and .NET, and even made a real-time e-signature app. I love making things easier for users!" 
      },
      { 
        q: /allstate/i, 
        a: "At Allstate Insurance, I created dashboards with Angular and Highcharts, migrated legacy code to AngularJS, and worked on secure backend integrations." 
      },
      { 
        q: /freelance|web designer/i, 
        a: "As a freelancer, I've delivered 10+ custom websites for small businesses, designed logos and banners, and made sure everything is mobile-friendly and SEO-optimized." 
      }
    ]
  },
  {
    category: 'projects',
    pairs: [
      { 
        q: /^(projects|portfolio|work)$|(what|tell me about|show me|describe) (your|sachin's) (projects|work|portfolio)|what.*(working on|built|developed|created)|showcase|recent projects|cool stuff/i, 
        a: "🚀 Sachin's Featured Projects:\n\n1. 🤖 AI Resume Chatbot (That's me!)\n   • Interactive portfolio assistant\n   • Next.js & custom NLP system\n   • Real-time response generation\n\n2. 📖 OnceUponAI\n   • AI story generator for kids\n   • OpenAI GPT integration\n   • React & Node.js backend\n\n3. 🎯 Sentiment Analysis Platform\n   • Real-time emotion detection\n   • ML model implementation\n   • Multi-language support\n\nWant to explore any of these projects in detail? Or see the live demos?" 
      },
      {
        q: /(how|what) did you build this|tech (stack|details)|implementation details|architecture|built with what/i,
        a: "🛠️ Here's how I (the AI Resume Chatbot) was built:\n\n💻 Frontend:\n• Next.js for the UI\n• TailwindCSS for styling\n• Real-time chat interface\n\n🤖 AI Features:\n• Custom Q&A system\n• Regex pattern matching\n• Natural language processing\n\n☁️ Deployment:\n• Vercel edge functions\n• Automated CI/CD\n• Real-time analytics\n\nWant to see the code or learn about specific features?"
      },
      { 
        q: /^(yes|sure|yeah|ok|okay|yep|tell me more)$/i, 
        a: "Great! Which project interests you most? The AI Resume Chatbot, OnceUponAI Story App, or the Sentiment Analysis App? Just mention the one you'd like to know more about!" 
      },
      { 
        q: /chatbot|personal ai resume chatbot|resume chatbot|ai chatbot/i, 
        a: "The Personal AI Resume Chatbot is what you're interacting with right now! 🤖 It's designed to answer everything about me (Sachin Jadhav) — both personal and professional. I built it using Next.js and a rule-based Q&A system.\n\n🔗 Check it out live: https://sachin-portfolio.vercel.app\n💻 GitHub: https://github.com/sachinjadh/portfolio_full\n\nWant to know about the technical implementation or any other projects?" 
      },
      { 
        q: /(technical implementation|how does it work|how built|tech stack).*(chatbot|resume bot)/i, 
        a: "Let me tell you about the technical side of this chatbot! 🛠️\n\n- Frontend: Next.js + TailwindCSS for the UI\n- Chat Logic: Custom rule-based Q&A system using regex patterns\n- Deployment: Hosted on Vercel\n- No external AI APIs needed - completely free to run!\n\nWould you like to see the source code or know about the deployment process?" 
      },
      { 
        q: /onceuponai|story app|story generation app|kids story app/i, 
        a: "The **OnceUponAI – Story Generation App** creates personalized bedtime stories for kids using AI! 📖 Enter a child's name and favorite animal, and it generates an engaging story where they're the hero. Built with React, OpenAI API, and MongoDB for story persistence.\n\n🌐 Try it out: https://onceuponai.vercel.app\n💻 GitHub: https://github.com/sachinjadh/onceuponai\n\nWould you like to generate a story or learn more about how it works?" 
      },
      { 
        q: /(how works|technical details|tell more|generate story).*(story|onceuponai)/i, 
        a: "Here's how OnceUponAI works its magic! ✨\n\n- Frontend: React with a kid-friendly UI\n- Backend: Node.js + Express\n- AI: OpenAI's GPT for story generation\n- Database: MongoDB for saving favorite stories\n- Special features: Age-appropriate content filters, educational themes\n\nWant to try creating a story or see some example stories?" 
      },
      { 
        q: /sentiment analysis app|sentiment app|emotion detection app/i, 
        a: "The **Sentiment Analysis App** uses AI to analyze emotions in text! 😊/😔 Perfect for understanding customer feedback or social media sentiment. Built with Streamlit and Hugging Face Transformers.\n\n🎯 Live Demo: https://sentiment-analyzer.streamlit.app\n💻 GitHub: https://github.com/sachinjadh/sentiment-analysis\n\nWant to try analyzing some text or learn about the ML model behind it?" 
      },
      { 
        q: /(technical details|ml model|how works|analyze text).*(sentiment|analysis|emotion)/i, 
        a: "Let me break down the Sentiment Analysis app's technical stack! 🤖\n\n- Framework: Streamlit for the web interface\n- ML Model: DistilBERT from Hugging Face\n- Features: Multi-language support, emotion scores, real-time analysis\n- Deployment: Hosted on Streamlit Cloud\n\nWould you like to see some example analyses or learn about the accuracy rates?" 
      }
    ]
  }
];

// Fallback response when no match is found
export const fallbackResponse = "I'm here to chat about Sachin's skills and experience! Try asking about his background, projects, or technologies he loves to work with. You can also say goodbye when you're done! 👋";

// Helper function to find the best matching response
export function findAnswer(userText) {
  for (const category of qaPairs) {
    for (const pair of category.pairs) {
      if (pair.q.test(userText)) {
        return pair.a;
      }
    }
  }
  return fallbackResponse;
}