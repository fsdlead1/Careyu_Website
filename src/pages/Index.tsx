import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Warehouse, Cog, BarChart3, Box, Navigation, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import heroImg from "@/assets/hero-warehouse.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    icon: Warehouse,
    title: "Storage Solutions",
    desc: "We design your space from scratch — choosing and manufacturing the right storage rack system integrated through a robust data management system.",
  },
  {
    icon: Cog,
    title: "Business Automation",
    desc: "We evaluate and formulate the right business ecosystem that automates your processes for better productivity and increased sales.",
  },
  {
    icon: BarChart3,
    title: "Production Automation",
    desc: "We transform your product portfolio by upscaling technology and integrating it with supply chain access through a turnkey operational system.",
  },
];

const offerings = [
  { icon: Box, title: "Warehouse Management", desc: "Advanced software for inventory control and warehouse optimization." },
  { icon: Navigation, title: "AR-Based Navigation", desc: "Augmented reality-driven navigation for warehouses and large facilities." },
  { icon: Lightbulb, title: "Pick-to-Light System", desc: "Light-guided picking technology that enhances accuracy and speed." },
  { icon: Cog, title: "Robotics Automation", desc: "Robotics-driven automation for efficient material handling and logistics." },
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
            <motion.p variants={fadeInUp} className="font-heading text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">
              Automation Industry
            </motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Innovation in Motion: The Future of Automation
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
              Explore our range of automation solutions designed to meet your unique business needs, and embark on a journey towards a more efficient, productive, and innovative future.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide">
                <Link to="/services">
                  Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold uppercase tracking-wide border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/about">About Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary section-padding">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { num: "350+", label: "Happy Customers" },
              { num: "500+", label: "Projects Delivered" },
              { num: "15+", label: "Years Experience" },
              { num: "50+", label: "Team Members" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeInUp}>
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">{stat.num}</div>
                <div className="text-sm text-primary-foreground/70 mt-1 uppercase tracking-wide">{stat.label}</div>
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
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                variants={fadeInUp}
                className="bg-card rounded-lg p-8 border border-border hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{svc.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="section-padding bg-secondary">
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
                className="bg-card rounded-lg p-6 border border-border text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-6">
              Your Partner in Automation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
              Transform your operations with our advanced automation solutions. We deliver precision, efficiency, and innovation to elevate your business.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide">
                <Link to="/contact">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
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
            sameAs: [],
          }),
        }}
      />
    </Layout>
  );
};

export default Index;
