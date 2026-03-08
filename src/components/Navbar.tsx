import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  {
    label: "Products",
    children: [
      { to: "/products", label: "All Products" },
      { to: "/products/asrs", label: "ASRS Systems" },
      { to: "/products/vertical-lift-module", label: "Vertical Lift Module" },
      { to: "/products/pick-to-light", label: "Pick-to-Light" },
      { to: "/products/conveyor-systems", label: "Conveyor Systems" },
      { to: "/products/warehouse-robots", label: "Warehouse Robots" },
    ],
  },
  { to: "/solutions", label: "Solutions" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (to?: string) => to ? location.pathname === to || location.pathname.startsWith(to + "/") : false;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="CareYu Automation Logo" className="h-10 md:h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  className={`font-heading text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary flex items-center gap-1 ${
                    isActive("/products") ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {dropdownOpen === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-card rounded-lg border border-border shadow-lg py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-secondary hover:text-primary ${
                            location.pathname === child.to ? "text-primary bg-secondary" : "text-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to!}
                className={`font-heading text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Button size="sm" asChild>
            <a href="tel:+919941014234" className="gap-2">
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="lg:hidden bg-card border-b border-border px-4 pb-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setDropdownOpen(dropdownOpen === link.label ? null : link.label)}
                  className="w-full text-left py-3 font-heading text-base font-semibold uppercase tracking-wide text-foreground flex items-center justify-between"
                >
                  {link.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen === link.label ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen === link.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => { setIsOpen(false); setDropdownOpen(null); }}
                        className={`block py-2 text-sm transition-colors hover:text-primary ${
                          location.pathname === child.to ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to!}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-heading text-base font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Button asChild className="w-full mt-2">
            <a href="tel:+919941014234" className="gap-2">
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
