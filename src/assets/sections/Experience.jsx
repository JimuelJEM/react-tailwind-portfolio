const experiences = [
  {
    period: "Jun 2023 – May 2026",
    role: "Junior Applications Developer",
    company: "iRely Philippines.",
    description: [
      "Developed and maintained enterprise applications using C#, JavaScript, and SQL",
      "Collaborated with cross-functional teams to deliver scalable and reliable solutions.",
      "Optimized performance and enhanced user experience.",
      "Participated in agile development and code reviews.",
    ],
    technologies: ["C#.NET", "JavaScript", "EXT JS", "Sencha Architect", "SQL Server"],
    current: true,
  },
  {
    period: "Feb 2023 – Mar 2023",
    role: "FREELANCE WEB DEVELOPER",
    company: "Tutor On The Go",
    description: [
      "Designed landing page with school brand design.",
      "Built user registration form and admin dashboard to manage user details.",
      "Integrated email notifications for contact and hire tutor requests.",
    ],
    technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    current: false,
  },
  {
    period: "(Apr 2021, Feb 2023)",
    role: "FREELANCE WEB DEVELOPER",
    company: "Levine & Associates",
    description: [
      "Managed and maintained 11 websites.",
      "Redesigned layouts and fixed bugs.",
      "Created internal company website with handbook, notices, and user task monitoring.",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "HTML5", "CSS"],
    current: false,
  },
  
  {
    period: "May 2022 – Aug 2022",
    role: "Consultant Programmer",
    company: "Philippines First Insurance Co. Inc",
    description: [
      "Built service request system from prototype.",
      "Enhanced claims system and QR functionality.",
      "Developed exam system and payroll improvements.",
      "Integrated SharePoint with Power Automate and APIs.",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    current: false,
  },
  {
    period: "Oct 2019 – May 2022",
    role: "Junior Programmer",
    company: "Philippines First Insurance Co. Inc",
    description: [
      "Developed web applications for business operations.",
      "Gathered requirements and delivered solutions.",
      "Supported system implementation and debugging.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    current: false,
  },
  {
    period: "Dec 2018 – Mar 2019",
    role: "Android Front-End Intern",
    company: "Controtek Solutions Inc.",
    description: [
      "Assisted in Android UI development.",
      "Designed dashboard templates and prototypes.",
    ],
    technologies: ["Java", "XML", "Android SDK", "Android Studio"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">

      <div className="absolute top-20 left-4 ms:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[32rem] h-80 sm:h-[32rem] bg-teal-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 ms:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            A story of continuous{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              learning and growth.
            </span>

          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Explore the milestones that shaped my career, from my first professional role to developing enterprise applications used by businesses every day.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-left"
                      : "md:col-start-2 md:pl-16"
                  }  transition-all duration-300 hover:scale-105 hover:-translate-y-2`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <ul className="text-sm text-muted-foreground mt-4 space-y-2">
                      {exp.description.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground  transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};