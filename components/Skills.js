import Image from "next/image";

const skills = [
  { name: "React", logo: "/logos/react.png" },
  { name: "React Native", logo: "/logos/react.png" },
  { name: "Next.js", logo: "/logos/next.png" },
  { name: "Gatsby", logo: "/logos/react.png" },
  { name: "C#", logo: "/logos/dotnet.png" },
  { name: "Angular", logo: "/logos/angular.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "Node.js", logo: "/logos/node.png" },
  { name: "npm", logo: "/logos/npm.png" },
  { name: "yarn", logo: "/logos/yarn.png" },
  { name: "Bit.Dev", logo: "/logos/bit.png" },
  { name: "Adobe Target", logo: "/logos/react.png" },
  { name: "Google Analytics", logo: "/logos/react.png" },
  { name: "MongoDB", logo: "/logos/mongo.png" },
  { name: "Oracle", logo: "/logos/sql.png" },
  { name: "Jira", logo: "/logos/jira.png" },
  { name: "webpack", logo: "/logos/webpack.png" },
  { name: "Java", logo: "/logos/java.png" },
  { name: "Git", logo: "/logos/git.png" },
  { name: "AWS Lamda", logo: "/logos/lamda.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative">
      {/* Animated Icon Top Right */}

      <h2 className="text-4xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Skills
        </span>
      </h2>

      {/* Scrolling container */}
      <div className="overflow-x-hidden whitespace-nowrap py-4">
        <div className="inline-flex space-x-16 animate-scroll">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex-shrink-0 group cursor-pointer">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-20 h-20 mx-auto transition-transform duration-300 group-hover:scale-125"
              />
              <p className="mt-2 text-white-700 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
      `}</style>
    </section>
  );
}