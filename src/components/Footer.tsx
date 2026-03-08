import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="CareYu Automation" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm text-navy-foreground/70 leading-relaxed">
              Precision and Performance through Automation. Transforming storage systems with pioneering automation solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 uppercase tracking-wide">Our Solutions</h4>
            <ul className="space-y-2 text-sm text-navy-foreground/70">
              <li>ASRS Systems</li>
              <li>Storage Automation</li>
              <li>Warehouse Management</li>
              <li>Pick-to-Light Systems</li>
              <li>Industrial Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-sm text-navy-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="tel:+919941014234" className="hover:text-primary transition-colors">+91-9941014234</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:bernardpious@careyuautomation.com" className="hover:text-primary transition-colors break-all">
                  bernardpious@careyuautomation.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>28/2, 2nd Main Road, Olympic Colony, Mogappair, Chennai - 600050</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy-foreground/10 text-center text-sm text-navy-foreground/50">
          © {new Date().getFullYear()} CareYu Automation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
