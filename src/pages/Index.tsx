import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Warehouse, Cog, BarChart3, Box, Navigation, Lightbulb, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-warehouse.jpg";
import asrsImg from "@/assets/asrs-product.jpg";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

const services = [
  {
    icon: Warehouse,
    title: "Storage Solutions",
    desc: "We design your space from scratch — choosing and manufacturing the right storage rack system integrated through a robust data management system.",
    link: "/services",
  },
  {
    icon: Cog,
    title: "Business Automation",
    desc: "We evaluate and formulate the right business ecosystem that automates your processes for better productivity and increased sales.",
    link: "/services",
  },
  {
    icon: BarChart3,
    title: "Production Automation",
    desc: "We transform your product portfolio by upscaling technology and integrating it with supply chain access through a turnkey operational system.",
    link: "/services",
  },
];

const offerings = [
  { icon: Box, title: "Warehouse Management", desc: "Advanced software for inventory control and warehouse optimization.", link: "/products" },
  { icon: Navigation, title: "AR-Based Navigation", desc: "Augmented reality-driven navigation for warehouses and large facilities.", link: "/products" },
  { icon: Lightbulb, title: "Pick-to-Light System", desc: "Light-guided picking technology that enhances accuracy and speed.", link: "/products/pick-to-light" },
  { icon: Cog, title: "Robotics Automation", desc: "Robotics-driven automation for efficient material handling and logistics.", link: "/products/warehouse-robots" },
];

const testimonials = [
  { quote: "CareYu's ASRS solution transformed our warehouse capacity by 3x while cutting labor costs significantly.", company: "Leading E-commerce Company", role: "Head of Operations" },
  { quote: "The pick-to-light system reduced our error rate to near zero. Implementation was smooth and the ROI was visible within months.", company: "Pharmaceutical Distributor", role: "Warehouse Manager" },
  { quote: "Professional team with deep automation expertise. They delivered on time and within budget.", company: "Automotive Parts Manufacturer", role: "VP Supply Chain" },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="CareYu Automation | ASRS & Storage Automation Solutions India"
        description="CareYu Automation delivers cutting-edge ASRS, storage automation, warehouse management, and industrial automation solutions. 350+ happy customers across India."
        keywords="ASRS, automated storage and retrieval system, warehouse automation, storage solutions, industrial automation, CareYu, Chennai"
        canonical="https://careyuautomation.com"
      />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Automated warehouse with ASRS systems" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
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
              Explore our range of automation solutions designed to meet your unique business needs, and embark on a journey towards a more efficient, productive, and innovative future.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide h-12 px-8">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold uppercase tracking-wide border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-primary-foreground/60" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-0">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4"
          >
            {[
              { num: "350+", label: "Happy Customers" },
              { num: "500+", label: "Projects Delivered" },
              { num: "15+", label: "Years Experience" },
              { num: "50+", label: "Team Members" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className={`text-center py-10 md:py-14 ${i < 3 ? "border-r border-primary-foreground/10" : ""}`}
              >
                <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">{stat.num}</div>
                <div className="text-xs md:text-sm text-primary-foreground/60 mt-1 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">What We Do</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Comprehensive Automation Solutions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From storage design to full automation — we provide end-to-end solutions tailored to your industry.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <svc.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{svc.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">{svc.desc}</p>
                <Link to={svc.link} className="inline-flex items-center text-sm font-semibold text-primary hover:gap-2 transition-all gap-1">
                  Learn More <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Product — ASRS */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <div className="relative">
                <img src={asrsImg} alt="ASRS automated storage system" className="w-full h-[400px] object-cover rounded-2xl" />
                <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl p-4 text-primary-foreground shadow-lg">
                  <div className="font-heading text-3xl font-bold">85%</div>
                  <div className="text-xs uppercase tracking-wide opacity-80">Space Saved</div>
                </div>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Featured Product</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                ASRS — Automated Storage & Retrieval
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our flagship ASRS solutions maximize vertical space utilization while dramatically reducing labor costs. With 99.99% picking accuracy and 24/7 operational capability, transform your warehouse into a high-performance fulfillment center.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {["99.99% Accuracy", "24/7 Operation", "30m+ Height", "500+ Cycles/hr"].map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {feat}
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="font-heading font-semibold uppercase tracking-wide">
                <Link to="/products/asrs">Explore ASRS <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Key Offerings</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Our Automation Capabilities
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                <Link to={item.link} className="text-xs font-semibold text-primary hover:underline">Learn more →</Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Testimonials</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              What Our Clients Say
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl p-8 border border-border relative"
              >
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

      {/* CTA */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-6">
              Your Partner in Automation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
              Transform your operations with our advanced automation solutions. We deliver precision, efficiency, and innovation to elevate your business.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide h-12 px-8">
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold uppercase tracking-wide border-navy-foreground/20 text-navy-foreground hover:bg-navy-foreground/10 h-12 px-8">
                <Link to="/products">Browse Products</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CareYu Automation",
            url: "https://careyuautomation.com",
            logo: "https://careyuautomation.com/logo.png",
            description: "Industrial automation company specializing in ASRS and storage automation solutions.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "28/2, 2nd Main Road, Olympic Colony, Mogappair",
              addressLocality: "Chennai",
              postalCode: "600050",
              addressCountry: "IN",
            },
            telephone: "+91-9941014234",
            email: "bernardpious@careyuautomation.com",
          }),
        }}
      />
    </Layout>
  );
};

export default Index;
