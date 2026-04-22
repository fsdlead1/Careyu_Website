import React from "react";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#catalog", label: "Catalog" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <React.Fragment>
    {/* <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
       <div className="container mx-auto flex items-center justify-between h-20 md:h-24 lg:h-28 px-4">
         <Link to="/" className="flex items-center gap-2 shrink-0 hover:animate-pulse-slow">
           <img src={logo} alt="CareYu Automation Logo" className="h-14 md:h-16 lg:h-20 w-auto" />
         </Link>
         <nav className="hidden md:flex items-center gap-8 lg:gap-10">
           <Link to="/" className="font-heading text-base lg:text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors hover:animate-glow">Home</Link>
           <Link to="/blog" className="font-heading text-base lg:text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors hover:animate-glow">Blog</Link>
           <Link to="/careers" className="font-heading text-base lg:text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors hover:animate-glow">Careers</Link>
           <Link to="/case-studies" className="font-heading text-base lg:text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors hover:animate-glow">Case Studies</Link>
           <Button size="lg" className="font-heading text-base uppercase tracking-wide font-bold animate-glow" asChild>
             <a href="tel:+919941014234" className="gap-2">
               <Phone className="h-5 w-5" /> Call Us
             </a>
           </Button>
         </nav>
       </div>
      </header>*/}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-fluid mx-auto flex items-center justify-between h-20 md:h-24 lg:h-28 px-4">
          <button onClick={() => scrollTo("home")} className="shrink-0">
            <img src={logo} alt="CareYu Automation Logo" className="h-14 md:h-16 lg:h-20 w-auto" />
          </button>
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {window.location.pathname == "/" && navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href.slice(1))}
                className="font-heading text-base lg:text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors hover:animate-glow"
              >
                {link.label}
              </button>
            ))}
            {window.location.pathname != "/" && <Link to="/" className="font-heading text-base lg:text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors hover:animate-glow">Home</Link>}
            <Link to="/blog" className="font-heading text-base lg:text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors hover:animate-glow">Blog</Link>
            <Link to="/careers" className="font-heading text-base lg:text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors hover:animate-glow">Careers</Link>
            <Link to="/case-studies" className="font-heading text-base lg:text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors hover:animate-glow">Case Studies</Link>
            <Button size="lg" className="font-heading text-base uppercase tracking-wide font-bold animate-glow" asChild>
              <a href="tel:+919941014234" className="gap-2">
                <Phone className="h-5 w-5" /> Call Us
              </a>
            </Button>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;