import { Navbar } from "./assets/layout/Navbar"
import { Hero } from "./assets/sections/Hero"
import { About } from "./assets/sections/About"
import { Certificates } from "./assets/sections/Certificates"
import { Experience } from "./assets/sections/Experience"
import { Testimonials } from "./assets/sections/Testimonials"
import { Contact } from "./assets/sections/Contact"
import { Footer } from "./assets/layout/Footer"

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
          <Hero />
          <About />
          <Experience />
          <Certificates />
          <Testimonials />
          <Contact />
      </main>
      <Footer/>
    </div>
  )
}

export default App
