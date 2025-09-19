import { GraduationCap } from "lucide-react"
const education = [
    {
        school: "Murray State University, Kentucky, USA",
        degree: "Master of Computer Science and Information Systems",
        period: "",
        description: [
            "At the graduate level, I focused on advanced concepts in like, artificial intelligence, business analytics, Cybersecurity Management, Electrical systems, Database, Networking.", "I engaged in research and industry-oriented projects such as developing machine learning models, conducting business case studies, or working on engineering simulations. This experience allowed me to deepen my expertise in different technologies and gain hands-on exposure to tools, frameworks, or lab work.", "I also collaborated with peers and faculty on seminars, publications, or capstone projects, refining my analytical and professional skills."
        ]
    },
    {
        school: "Pune University, India",
        degree: "Bachelor of Engineering – Computer Science",
        period: "",
        description: [
            "During my undergraduate studies, I built a strong foundation in core subjects like computer science fundamentals, data structures, algorithms, and databases.", "I worked on academic projects involving web applications, mobile apps, or research-based assignments, which helped me strengthen my problem-solving and teamwork skills.", "My coursework also introduced me to tools/technologies that I learned, giving me practical experience alongside theoretical knowledge."
        ]
    }
]

export default function Education() {
    return (
    <section id="education" className="py-10 bg-white">
            <h2 className="text-4xl font-extrabold text-center mb-16">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    🎓 Education
                </span>
            </h2>

            <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
                {education.map((edu, i) => (
                    <div
                        key={i}
                        className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition transform duration-300"
                    >
                        {/* Icon */}
                        <div className="absolute -top-6 left-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg">
                            <GraduationCap size={28} />
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900">{edu.school}</h3>
                        <p className="text-indigo-600 font-medium">{edu.degree}</p>
                        <p className="text-sm text-gray-500 mb-4">{edu.period}</p>

                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {edu.description.map((line, j) => (
                                <li key={j} className="leading-relaxed">{line}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}


