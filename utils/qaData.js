// Q&A pairs for the chatbot
export const qaPairs = [
  {
    category: 'fun',
    pairs: [
      {
        q: /what can you do|help|capabilities|features/i,
        a: "I can walk you through Sachin's projects, skills, and even share a few bad jokes if you're brave enough 😅. Just ask me about his experience, projects, skills, education or say 'tell me a joke'!"
      },
      {
        q: /why (should I|should we|would I|would we|to) hire sachin|why is sachin good/i,
        a: "Because he builds scalable apps, clean APIs, and websites that don't crash when you click refresh 🔄. Plus, he's got 10 years of making complex things simple and buggy things stable. Want to hear about his specific projects?"
      },
      {
        q: /who (made|created|built|developed) you|who('s| is) your (creator|developer|builder)/i,
        a: "I was built by Sachin, a developer who loves crafting websites, mobile apps, and smart digital experiences. Basically, I'm his digital sidekick 🤖. Want to know what else he's built?"
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
        a: "Hey! I'm Sachin Jadhav. I'm a full stack developer who loves building things that work and look great." 
      },
      { 
        q: /location|where.*live|based/i, 
        a: "I'm currently living in Aurora, Illinois." 
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
        q: /summary|about you|about background|background|profile/i, 
        a: "I'm a passionate full stack developer with 10 years of experience. I love solving problems, building scalable apps, and making sure everything runs smoothly and securely. I enjoy working with React, Next.js, Node.js, and a bunch of other cool tech. If you want someone who cares about clean code and great user experiences, that's me!" 
      },
      { 
        q: /experience|years|how long/i, 
        a: "I've been in the industry for about 10 years now. I've served several clients like Ryerson, Carmax, ATI Physical Therapy, and Allstate. Would you like to hear more about my experience with any of these companies?" 
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
        q: /skills|technologies|stack|technical skills/i, 
        a: "I work with React, Next.js, Node.js, Angular, TypeScript, JavaScript, C#, .NET Core, Java, Spring Boot, and more. I also do DevOps, testing, and database work. If it's web or mobile, I've probably built it!" 
      },
      { 
        q: /cloud|devops|azure|aws|lambda/i, 
        a: "I'm comfortable with cloud and DevOps tools like Azure Functions, AWS Lambda, Azure DevOps, GitHub Actions, CI/CD, Dynatrace, and Docker." 
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
        q: /current projects|projects|working on|portfolio/i, 
        a: "I'm currently working on 3 exciting projects! 🚀\n\n1) Personal AI Resume Chatbot 🤖\n2) OnceUponAI – Story Generation App 📖\n3) Sentiment Analysis App 😊/😔\n\nWould you like me to tell you more about any of these projects in detail?" 
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