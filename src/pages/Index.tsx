import { motion } from "framer-motion";
import { ArrowRight, Warehouse, Cog, BarChart3, Box, Phone, Mail, MapPin, Quote, Boxes, ArrowUpFromLine, Lightbulb, ArrowRightLeft, Bot, FileText, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-warehouse.jpg";
import asrsImg from "@/assets/asrs-product.jpg";
import logo from "@/assets/logo.png";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };
const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } };
const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } } };

const products = [
  { icon: Boxes, title: "ASRS Systems", desc: "High-density automated storage with precision crane/shuttle retrieval." },
  { icon: ArrowUpFromLine, title: "Vertical Lift Module", desc: "Enclosed vertical storage delivering goods to ergonomic pick windows." },
  { icon: Lightbulb, title: "Pick-to-Light", desc: "LED-guided picking for ultra-fast, accurate order fulfillment." },
  { icon: ArrowRightLeft, title: "Conveyor Systems", desc: "Automated material transport and sorting for streamlined flow." },
  { icon: Bot, title: "Warehouse Robots", desc: "AMR/AGV solutions for intelligent material handling." },
];

const services = [
  { icon: Warehouse, title: "Storage Solutions", desc: "Custom storage rack systems integrated with robust data management." },
  { icon: Cog, title: "Business Automation", desc: "Process automation for better productivity and increased sales." },
  { icon: BarChart3, title: "Production Automation", desc: "Technology upscaling integrated with supply chain systems." },
];

const testimonials = [
  { quote: "CareYu's ASRS solution transformed our warehouse capacity by 3x while cutting labor costs significantly.", company: "Leading E-commerce Company", role: "Head of Operations" },
  { quote: "The pick-to-light system reduced our error rate to near zero. ROI was visible within months.", company: "Pharmaceutical Distributor", role: "Warehouse Manager" },
  { quote: "Professional team with deep automation expertise. Delivered on time and within budget.", company: "Automotive Parts Manufacturer", role: "VP Supply Chain" },
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="CareYu Automation | ASRS & Storage Automation Solutions India"
        description="CareYu Automation delivers cutting-edge ASRS, storage automation, warehouse management, and industrial automation solutions. 350+ happy customers across India."
        keywords="ASRS, automated storage and retrieval system, warehouse automation, storage solutions, industrial automation, CareYu, Chennai"
        canonical="https://careyuautomation.com"
      />

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
          <button onClick={() => scrollTo("home")} className="shrink-0">
            <img src={logo} alt="CareYu Automation Logo" className="h-10 md:h-14 w-auto" />
          </button>
          <nav className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href.slice(1))}
                className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
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

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Automated warehouse" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.div variants={fadeInUp} className="inline-block bg-primary/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="font-heading text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/90">
                Automation Industry Leaders
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
              Innovation in Motion: The Future of
              <span className="block text-accent"> Automation</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Precision and Performance through Automation. Transforming storage systems with pioneering solutions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo("products")} className="font-heading font-semibold uppercase tracking-wide h-12 px-8">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("contact")} className="font-heading font-semibold uppercase tracking-wide border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                Get Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4">
            {[
              { num: "350+", label: "Happy Customers" },
              { num: "500+", label: "Projects Delivered" },
              { num: "15+", label: "Years Experience" },
              { num: "50+", label: "Team Members" },
            ].map((stat, i) => (
              <motion.div key={stat.label} variants={scaleIn} className={`text-center py-10 md:py-14 ${i < 3 ? "border-r border-primary-foreground/10" : ""}`}>
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">{stat.num}</div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <div className="relative">
                <img src={asrsImg} alt="ASRS system" className="w-full h-[380px] object-cover rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl p-4 text-primary-foreground shadow-lg">
                  <div className="font-heading text-3xl font-bold">85%</div>
                  <div className="text-xs uppercase tracking-wide opacity-80">Space Saved</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">About CareYu</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pioneering Storage Automation Since 2009
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                CareYu Automation is a Chennai-based industrial automation company specializing in ASRS and storage automation solutions. We design, manufacture, and integrate automated storage systems for warehouses, factories, and distribution centers across India.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With 350+ satisfied clients and 500+ successful projects, we deliver precision, efficiency, and innovation that transforms operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Our Products</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">Automation Solutions</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <motion.div key={p.title} variants={fadeInUp} whileHover={{ y: -6 }} className="bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <p.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">What We Do</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Services</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <motion.div key={svc.title} variants={fadeInUp} whileHover={{ y: -6 }} className="bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <svc.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{svc.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Testimonials</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">What Our Clients Say</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -4 }} className="bg-card rounded-xl p-8 border border-border relative">
                <Quote className="h-8 w-8 text-primary/15 absolute top-6 right-6" />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-bold text-foreground text-sm">{t.company}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explore More — Links to sub-pages */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Explore More</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">Resources & Opportunities</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileText, title: "Blog & Insights", desc: "Expert articles on ASRS, warehouse automation, and industry trends.", to: "/blog" },
              { icon: Briefcase, title: "Careers", desc: "Join our team and build the future of industrial automation.", to: "/careers" },
              { icon: Users, title: "Case Studies", desc: "Real-world projects showcasing measurable results and ROI.", to: "/case-studies" },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} whileHover={{ y: -6 }}>
                <Link to={item.to} className="block bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-xl transition-all group text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                    <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-4">Get In Touch</motion.h2>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 max-w-xl mx-auto">Ready to transform your operations? Contact us for a free consultation.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Phone, label: "Call Us", value: "+91-9941014234", href: "tel:+919941014234" },
              { icon: Mail, label: "Email", value: "bernardpious@careyuautomation.com", href: "mailto:bernardpious@careyuautomation.com" },
              { icon: MapPin, label: "Visit Us", value: "28/2, 2nd Main Rd, Mogappair, Chennai - 600050", href: undefined },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeInUp} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-navy-foreground mb-1">{item.label}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm text-navy-foreground/70 hover:text-primary transition-colors break-all">{item.value}</a>
                ) : (
                  <p className="text-sm text-navy-foreground/70">{item.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-navy-foreground/10 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-navy-foreground/50">
          <span>© {new Date().getFullYear()} CareYu Automation. All rights reserved.</span>
          <span>Powered by <a href="https://digisailor.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">DigiSailor</a></span>
        </div>
      </footer>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Organization", name: "CareYu Automation",
        url: "https://careyuautomation.com", description: "Industrial automation company specializing in ASRS and storage automation solutions.",
        address: { "@type": "PostalAddress", streetAddress: "28/2, 2nd Main Road, Olympic Colony, Mogappair", addressLocality: "Chennai", postalCode: "600050", addressCountry: "IN" },
        telephone: "+91-9941014234", email: "bernardpious@careyuautomation.com",
      }) }} />
    </div>
  );
};

export default Index;
