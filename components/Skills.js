import Image from "next/image";

const skills = [
  { name: "React", logo: "/logos/react.png" },
  { name: "Next.js", logo: "/logos/next.png" },
  { name: "C#", logo: "/logos/dotnet.png" },
  { name: "Angular", logo: "/logos/angular.png" },
  { name: "JavaScript", logo: "/logos/javascript.png" },
  { name: "TypeScript", logo: "/logos/typescript.png" },
  { name: "SQL", logo: "/logos/sql.png" },
  { name: "Firebase", logo: "/logos/java.png" },
  { name: "Git", logo: "/logos/git.png" },
  { name: "Algolia", logo: "/logos/lamda.png" },
];

export default function Skills() {
  return (
    <section id="skills" >
      
<h2 className="text-4xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Skills
        </span>
      </h2>

      {/* Scrolling container */}
      <div className="overflow-hidden relative">
        <div className="flex space-x-16 animate-scroll">
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="flex-shrink-0 group">
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
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}