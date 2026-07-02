import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  {
    title: "HTML Certificate",
    description:
      "Completed an HTML course and strengthened my foundation in semantic markup and web structure.",
    image: "/certificates/html_Certificate-1.png",
    tags: ["HTML", "Web Basics", "Markup"],
  },
  {
    title: "CSS Certificate",
    description:
      "Built confidence in styling modern web pages with layout, responsiveness, and visual design techniques.",
    image: "/certificates/CSS_Certificate-1.png",
    tags: ["CSS", "Styling", "Responsive Design"],
  },
  {
    title: "JavaScript Certificate",
    description:
      "Developed stronger skills in JavaScript fundamentals, logic, and interactive front-end programming.",
    image: "/certificates/javascript_Certificate-1.png",
    tags: ["JavaScript", "Interactivity", "Programming"],
  },
  {
    title: "PHP Certificate",
    description:
      "Expanded backend knowledge through server-side scripting, dynamic pages, and web application logic.",
    image: "/certificates/PHP_Certificate-1.png",
    tags: ["PHP", "Backend", "Web Apps"],
  },
  {
    title: "SQL Certificate",
    description:
      "Learned core SQL concepts for querying, managing, and optimizing relational databases.",
    image: "/certificates/SQL_Certificate-1.png",
    tags: ["SQL", "Database", "Queries"],
  },
  {
    title: "ITSIVS Certificate",
    description:
      "Completed a recognized training certificate related to IT systems and software practices.",
    image: "/certificates/ITSIVSTECSHW11042020-071-1.png",
    tags: ["IT", "Systems", "Training"],
  },
  {
    title: "jQuery Certificate",
    description:
      "Strengthened my understanding of DOM manipulation and interactive web development with jQuery.",
    image: "/certificates/Jquert_Certificate-1.png",
    tags: ["jQuery", "Frontend", "DOM"],
  },
  {
    title: "Advance Bootstrap 4 Certificate",
    description:
      "Expanded knowledge of responsive UI development with advanced Bootstrap 4 components and layouts.",
    image: "/certificates/Udemy_CertificateforAdvanceBootstrap4-1.png",
    tags: ["Bootstrap", "UI", "Udemy"],
  },
  {
    title: "SQL Database Programming Certificate",
    description:
      "Built practical experience in database programming and structured query development.",
    image: "/certificates/Udemy_SQLDatabaseProgramming-1.png",
    tags: ["SQL", "Database", "Programming"],
  },
  {
    title: "SQL Introduction and Injection Certificate",
    description:
      "Learned about SQL fundamentals, security concepts, and injection risks in database-driven systems.",
    image: "/certificates/Udemy_SQLIntroductionandInjectionCertificate-1.png",
    tags: ["SQL", "Security", "Injection"],
  },
  {
    title: "Web Design Training with Elementor WordPress Certificate",
    description:
      "Developed visual design and website creation skills using WordPress and Elementor.",
    image: "/certificates/Udemy_WebDesignTrainingWithElementorWordPress-1.png",
    tags: ["WordPress", "Design", "Elementor"],
  },
];

export const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const activeCertificate = certificates[currentIndex];

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certificates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            A growing collection of
            <span className="font-serif italic font-normal text-white"> skills and achievements.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A quick look at the certifications and learning milestones that continue to shape my professional journey.
          </p>
        </div>

        <div className="glass p-6 md:p-8 rounded-3xl animate-fade-in animation-delay-300">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary">Featured Certificate</p>
              <h3 className="text-2xl font-semibold text-foreground mt-2">{activeCertificate.title}</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-primary/30 text-foreground hover:bg-primary/10 transition-colors"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-primary/30 text-foreground hover:bg-primary/10 transition-colors"
                aria-label="Next certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-background/50">
              <img
                src={activeCertificate.image}
                alt={activeCertificate.title}
                className="w-full h-[420px] object-contain bg-background/60"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground leading-7">{activeCertificate.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {activeCertificate.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-surface text-sm text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "w-8 bg-primary" : "w-2.5 bg-primary/30"
                }`}
                aria-label={`Show certificate ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};