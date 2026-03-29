import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="CareYu Automation Logo" className="h-10 md:h-14 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/blog" className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors">Blog</Link>
          <Link to="/careers" className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors">Careers</Link>
          <Link to="/case-studies" className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors">Case Studies</Link>
          <Button size="sm" asChild>
            <a href="tel:+919941014234" className="gap-2">
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
