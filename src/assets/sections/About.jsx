import { useEffect, useState } from "react";
import { FaPerson } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";

const highlight = [
  {
    icon: GrTechnology,
    title: 'Technical Skills',
    description: [
      'Debugging and problem-solving.',
      'Troubleshooting and resolving technical issues.',
      'Programming & Front-end/ Back-end Coding.',
      'Database Management and Optimization',
    ],
  },
  {
    icon: FaPerson,
    title: 'Personal Skills',
    description: [
      'Motivated and always willing to learn new things.',
      'Independent and self-sufficient in handling tasks',
      'Collaborative and able to work in teams.',
      'Good problem-solving skills.'
    ],
  }
]

export const About = () => {
  //section hover effect code
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMousemove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMousemove);

    return () => window.removeEventListener("mousemove", handleMousemove);
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden">

      <div className="absolute inset-0 opacity-30"
        style={
          {
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(255, 255, 255), transparent 30%)`
          }
        }
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Always learning.
              <span className="font-serif italic font-normal text-white">
                {" "}
                Always improving.
              </span>
            </h2>


            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an Applications Developer with over 4+ years of experience building enterprise web applications using C#, .NET, SQL Server, and JavaScript. I enjoy creating scalable, efficient solutions that improve business processes and deliver reliable user experiences.
              </p>
              <p>
                I'm also expanding my expertise in modern frontend development with React, Tailwind CSS, and Vite, continuously learning and building applications that combine clean code with practical, user-focused design.
              </p>
            </div>

            <div className="glass rounded-2xl animate-fade-in animation-delay-400">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/typing.gif"
                  alt="Typing reaction GIF"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {highlight.map((item, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {item.description.map((desc, descIdx) => (
                      <li key={descIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="glass p-6 rounded-2xl animate-fade-in animation-delay-300">
              <h3 className="text-xl font-semibold mb-4 text-secondary-foreground">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">Bachelor of Science in Information Technology</h4>
                  <p className="text-sm text-muted-foreground">STI Colleges, Tanauan Batangas • 2015 – 2019</p>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
};