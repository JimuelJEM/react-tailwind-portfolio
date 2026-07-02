import { Menu, X } from "lucide-react";
import { Button } from "../../components/Button";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#certificates", label: "Certificates" }
//   { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            }else {
                setIsScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
        
    }, []);

    const scrollToSection = (href) => {
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

    return(
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3": "bg-transparent py-5"}  z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    Jimuel <span className="text-primary">John</span>
                </a>

                {/* desktop Nav*/}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        { navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA  Button*/}
                <div className="hidden md:block">
                    <Button size="sm" onClick={() => scrollToSection("#contact")}>
                        Contact Me
                    </Button>
                </div>

                {/* Mobile Menu Button*/}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={()=>setMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24}/> : <Menu  size={24}/>}
                </button>
            </nav>

            {/* Mobile Menu*/}
            { isMobileMenuOpen && (
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                                <a href={link.href} key={index} onClick={(e)=> {e.preventDefault(); scrollToSection(link.href);}} className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}</a>
                            ))}

                        <Button onClick={() => scrollToSection("#contact")} >
                            Contact Me
                        </Button>
                    </div>
                </div>
            )}    
        </header>
    );
};