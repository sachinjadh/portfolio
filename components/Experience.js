import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Application Developer",
    company: "Ryerson",
    logo: "/logos/ryerson.png",
    period: "",
    description:
      `🛒 E-Commerce Revamp – Boosted performance 40% and organic traffic 25% by rebuilding a multi-brand platform with React + Next.js. 

🎨 UI Component Library – Reduced code duplication 50% with a shared Bit.dev library, speeding up development across teams.

⚡ Serverless Services – Built Azure & AWS microservices for billing and payments, cutting costs and improving scalability.

🔍 Performance & QA – Cut QA time 30% with Cypress/Jest and enabled rapid A/B testing with GTM + monitoring tools.`,
  },
  {
    role: "Senior Full Stack Developer",
    company: "CarMax",
    logo: "/logos/carmax.png",
    period: "",
    description:
      `🖥️ Modular Web App – Built a React + .NET Core platform with Node.js proxy services for authentication and API orchestration.

⚙️ Monorepo & CI/CD – Set up a monorepo with independent CI pipelines, streamlining development and deployments.

🔗 Robust Integrations – Delivered APIs connecting SQL Server, SAP, and CRM systems, ensuring smooth data flow.

🎯 Personalized Experiences – Implemented Adobe Target location-based personalization, boosting engagement and conversions.`,
  },
  {
    role: "Senior UI Developer",
    company: "ATI Physical Therapy",
    logo: "/logos/ati.png",
    period: "",
    description:
      `📅 Clinic Workflow App – Built Angular + .NET apps that streamlined scheduling for 300+ clinics.

🖊️ E-Signature Platform – Developed a real-time e-signature app with WebSocket updates and dynamic charts.

🗺️ Smart Integrations – Integrated Google Maps, jsPDF, and Kendo UI for mapping and reporting.

⚡ Optimized Performance – Improved speed with lazy loading, modular builds, and robust Jasmine/Karma testing.`,
  },
  {
    role: "UI Developer",
    company: "Allstate Insurance",
    logo: "/logos/allstate.png",
    period: "",
    description:
      `📊 Driver Insights Dashboards – Built Angular + Highcharts dashboards for Allstate Drivewise, enhancing user insights and engagement.

♻️ Legacy Migration – Modernized a legacy front end by migrating to AngularJS with reusable, scalable components.

🔐 Secure Integrations – Connected backends with Spring Boot, Spring Security, JWT, and LDAP for secure data access.

🌐 SEO & Analytics – Improved SEO with Angular routing/meta services and enabled tracking via Adobe Site Catalyst + Google Maps APIs.`,
  },
  {
    role: "Freelance Web Designer / Developer",
    company: "Freelance",
    logo: "/logos/wordpress.png",
    period: "Ongoing",
    description:
      `🌐 Custom Websites – Delivered 10+ responsive websites for small businesses using WordPress, React, and JavaScript.

🎨 Brand Identity – Designed logos, banners, and branding materials to strengthen client presence.

📈 SEO & Growth – Implemented SEO best practices, mobile responsiveness, and social media integrations to boost visibility.`,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-10 bg-white text-white">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Experience
        </span>
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* vertical line only on md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-400 h-full rounded"></div>

        <div className="flex flex-col gap-8 md:gap-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full md:grid md:grid-cols-9 md:min-h-[180px]"
            >
              {/* Desktop view - even index (left side) */}
              {index % 2 === 0 ? (
                <>
                  <div className="hidden md:flex md:col-span-4 md:col-start-1 justify-end">
                    <div className="w-full md:w-[90%] bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition z-10">
                      <div className="flex items-center mb-4">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-12 h-12 object-contain mr-4 rounded bg-white p-1"
                        />
                        <div>
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                          <p className="text-sm text-blue-400 font-semibold">{exp.company}</p>
                          <p className="text-xs text-gray-400">{exp.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm whitespace-pre-line">{exp.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:col-span-1 md:col-start-5 items-center justify-center relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-md ring-4 ring-gray-950 z-20">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  </div>
                  <div className="hidden md:block md:col-span-4"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block md:col-span-4"></div>
                  <div className="hidden md:flex md:col-span-1 md:col-start-5 items-center justify-center relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-md ring-4 ring-gray-950 z-20">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                  </div>
                  <div className="hidden md:flex md:col-span-4 justify-start">
                    <div className="w-full md:w-[90%] bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition z-10">
                      <div className="flex items-center mb-4">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-12 h-12 object-contain mr-4 rounded bg-white p-1"
                        />
                        <div>
                          <h3 className="text-lg font-bold">{exp.role}</h3>
                          <p className="text-sm text-blue-400 font-semibold">{exp.company}</p>
                          <p className="text-xs text-gray-400">{exp.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm whitespace-pre-line">{exp.description}</p>
                    </div>
                  </div>
                </>
              )}
              
              {/* Mobile view */}
              <div className="md:hidden w-full">
                <div className="w-full bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition z-10">
                  <div className="flex items-center mb-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 object-contain mr-4 rounded bg-white p-1"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      <p className="text-sm text-blue-400 font-semibold">{exp.company}</p>
                      <p className="text-xs text-gray-400">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm whitespace-pre-line">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
