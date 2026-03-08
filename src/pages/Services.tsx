import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, LayoutGrid, Maximize, CheckCircle2, Warehouse, Cpu, Navigation, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import servicesHero from "@/assets/services-hero.jpg";
import asrsImg from "@/assets/asrs-product.jpg";
import heroWarehouse from "@/assets/hero-warehouse.jpg";
import businessImg from "@/assets/service-business.jpg";

const serviceImages = [asrsImg, heroWarehouse, businessImg];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const mainServices = [
  {
    icon: Boxes,
    title: "ASRS — Automated Storage & Retrieval Systems",
    desc: "Our flagship solution — fully automated systems for storing and retrieving goods with precision. ASRS optimizes vertical space utilization, reduces labor costs, and dramatically improves throughput in warehouses and distribution centers.",
    features: ["Vertical lift modules", "Mini-load systems", "Unit-load AS/RS", "Carousel systems", "Real-time inventory tracking"],
  },
  {
    icon: LayoutGrid,
    title: "Storage Automation Solutions",
    desc: "End-to-end storage solutions from floor layout design to rack manufacturing and DMS integration. We evaluate your space, design optimal layouts, and implement automated storage that maximizes every square foot.",
    features: ["Custom floor layout design", "Storage rack manufacturing", "Data Management System (DMS)", "Space optimization", "Scalable systems"],
  },
  {
    icon: Maximize,
    title: "Order Picking & Consolidation",
    desc: "Advanced automated order picking using robotics and AI. We support batch, zone, and wave picking strategies with seamless WMS integration for real-time inventory updates.",
    features: ["Batch picking", "Zone picking", "Wave picking", "AI-driven accuracy", "WMS integration"],
  },
];

const additionalServices = [
  { icon: Warehouse, title: "Warehouse Management", desc: "Advanced software for inventory control, order processing, and warehouse optimization." },
  { icon: Navigation, title: "AR-Based Indoor Navigation", desc: "Augmented reality-driven navigation and wayfinding for large facilities." },
  { icon: Lightbulb, title: "Pick-to-Light System", desc: "LED-guided picking technology that enhances accuracy and speeds up order fulfillment." },
  { icon: Cpu, title: "Industrial Automation", desc: "Smart solutions for manufacturing, production lines, and process control." },
];

const processSteps = [
  { step: "01", title: "Design of Floor Layout", desc: "From greenfield space, we design layouts maximizing productivity and ease of material handling." },
  { step: "02", title: "Rack System Selection", desc: "Choosing the right storage rack type based on your inventory, throughput, and space requirements." },
  { step: "03", title: "Manufacturing & Installation", desc: "Precision manufacturing and professional installation with minimal operational disruption." },
  { step: "04", title: "System Integration", desc: "Seamless integration with WMS, ERP, and data management systems for full visibility." },
];

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="ASRS & Storage Automation Services | CareYu Automation"
        description="CareYu offers ASRS, storage automation, warehouse management, pick-to-light systems, and industrial automation solutions. Custom storage design to implementation."
        keywords="ASRS services, storage automation, warehouse automation, pick-to-light, order picking automation, storage rack systems, industrial automation India"
        canonical="https://careyuautomation.com/services"
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesHero} alt="Industrial storage automation facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 font-semibold mb-2">Our Services</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground max-w-3xl leading-tight">
              Optimizing Space, Streamlining Operations
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg mt-4 max-w-2xl">
              Bespoke storage solutions tailored from concept to implementation, addressing your unique operational needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-16">
            {mainServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                variants={fadeInUp}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svc.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{svc.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-secondary rounded-xl p-8 flex items-center justify-center min-h-[250px] ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <svc.icon className="h-32 w-32 text-primary/20" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Our Process</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Storage Solution Steps
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s) => (
              <motion.div key={s.step} variants={fadeInUp} className="bg-card rounded-lg p-6 border border-border relative">
                <div className="font-heading text-4xl font-bold text-primary/15 mb-2">{s.step}</div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">More Solutions</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Additional Capabilities
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((s) => (
              <motion.div key={s.title} variants={fadeInUp} className="bg-card rounded-lg p-6 border border-border text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
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
              Ready to Automate Your Storage?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 max-w-2xl mx-auto mb-8 text-lg">
              Let us design the perfect automation solution for your business. From concept to implementation — we've got you covered.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide">
                <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
