import React from "react";
import { Link } from "react-router-dom";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container-fluid mx-auto flex items-center justify-between h-20 md:h-24 lg:h-28 px-4">
          <button onClick={() => { window.location.pathname == "/" ? scrollTo("home") : window.location.href = "/" }} className="shrink-0">
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

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] flex flex-col gap-6 pt-16">
                {window.location.pathname == "/" && navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href.slice(1))}
                      className="font-heading text-lg font-bold uppercase tracking-wide text-left text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
                {window.location.pathname != "/" && (
                  <SheetClose asChild>
                    <Link to="/" className="font-heading text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors">Home</Link>
                  </SheetClose>
                )}
                <SheetClose asChild>
                  <Link to="/blog" className="font-heading text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors">Blog</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/careers" className="font-heading text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors">Careers</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link to="/case-studies" className="font-heading text-lg font-bold uppercase tracking-wide text-foreground hover:text-primary transition-colors">Case Studies</Link>
                </SheetClose>
                <Button size="lg" className="font-heading text-base uppercase tracking-wide font-bold mt-4" asChild>
                  <a href="tel:+919941014234" className="gap-2">
                    <Phone className="h-5 w-5" /> Call Us
                  </a>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;