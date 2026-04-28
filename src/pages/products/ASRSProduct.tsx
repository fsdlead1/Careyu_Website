import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import asrsImg from "@/assets/home/asrs-product.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const asrsTypes = [
  {
    name: "Unit-Load AS/RS",
    description: "Full pallet load handling with automated cranes reaching heights of 30+ meters. Ideal for high-volume distribution.",
    bestFor: "Distribution centers, bulk storage",
    capacity: "Up to 2,500 kg/pallet",
    height: "Up to 40m",
    throughput: "20-40 pallets/hr per aisle",
  },
  {
    name: "Mini-Load AS/RS",
    description: "Handles totes, trays, and cartons for smaller items. Perfect for parts distribution and e-commerce.",
    bestFor: "E-commerce, spare parts, pharma",
    capacity: "Up to 100 kg/tote",
    height: "Up to 20m",
    throughput: "100-300 totes/hr per aisle",
  },
  {
    name: "Vertical Lift Module",
    description: "Enclosed vertical storage delivering trays to an ergonomic pick window. Maximum space savings.",
    bestFor: "Small parts, tools, electronics",
    capacity: "Up to 750 kg/tray",
    height: "Up to 16m",
    throughput: "120+ trays/hr",
  },
  {
    name: "Shuttle System",
    description: "Multi-level shuttle cars for ultra-high throughput. Each level operates independently for maximum speed.",
    bestFor: "High-speed fulfillment, cold storage",
    capacity: "Up to 50 kg/tote",
    height: "Up to 25m",
    throughput: "500-1000+ totes/hr",
  },
];

const specs = [
  { label: "Maximum Height", value: "40+ meters" },
  { label: "Load Capacity", value: "50 – 2,500 kg" },
  { label: "Throughput", value: "Up to 1,000+ cycles/hr" },
  { label: "Picking Accuracy", value: "99.99%" },
  { label: "Temperature Range", value: "-30°C to +40°C" },
  { label: "Control System", value: "PLC + WMS/WCS" },
  { label: "Power System", value: "Energy-regenerative drives" },
  { label: "Safety", value: "CE, SIL2, ISO 13849" },
  { label: "Communication", value: "Profinet / Ethernet IP" },
  { label: "Maintenance", value: "Predictive via IoT" },
  { label: "Expected Lifespan", value: "20+ years" },
  { label: "Installation Time", value: "3-9 months" },
];

const benefits = [
  { icon: Zap, title: "85% Space Savings", desc: "Maximize vertical storage, free up floor space for other operations." },
  { icon: TrendingUp, title: "3x Throughput", desc: "Automated retrieval is 2-3x faster than manual forklift operations." },
  { icon: Shield, title: "99.99% Accuracy", desc: "Eliminate picking errors with computer-controlled precision." },
  { icon: Clock, title: "24/7 Operation", desc: "Systems run continuously without breaks, shifts, or fatigue." },
];

const ASRSProduct = () => {
  return (
    <Layout>
      <SEOHead
        title="ASRS Systems India | Automated Storage & Retrieval | CareYu"
        description="CareYu's ASRS solutions deliver 85% space savings, 99.99% accuracy, and 24/7 automated operation. Unit-load, mini-load, VLM, and shuttle systems available."
        keywords="ASRS India, automated storage retrieval system, unit load ASRS, mini load ASRS, vertical lift module, warehouse automation, CareYu"
        canonical="https://careyuautomation.com/products/asrs"
      />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={asrsImg} alt="ASRS automated storage and retrieval system" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay animate-pulse-slow" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl">
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 font-semibold mb-2">Our Flagship Product</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              ASRS — Automated Storage & Retrieval Systems
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg">
              High-density automated storage with precision crane/shuttle retrieval for maximum space utilization and operational efficiency.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-6">
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide shadow-lg animate-glow">
                <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4 animate-float">
                  <b.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-primary-foreground/70">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ASRS Types Comparison */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">System Types</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              ASRS System Comparison
            </motion.h2>
          </motion.div>

          {/* Comparison Table */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left p-4 font-heading text-sm uppercase tracking-wide text-navy-foreground">System Type</th>
                  <th className="text-left p-4 font-heading text-sm uppercase tracking-wide text-navy-foreground">Best For</th>
                  <th className="text-left p-4 font-heading text-sm uppercase tracking-wide text-navy-foreground">Capacity</th>
                  <th className="text-left p-4 font-heading text-sm uppercase tracking-wide text-navy-foreground">Max Height</th>
                  <th className="text-left p-4 font-heading text-sm uppercase tracking-wide text-navy-foreground">Throughput</th>
                </tr>
              </thead>
              <tbody>
                {asrsTypes.map((type, i) => (
                  <tr key={type.name} className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-secondary"}`}>
                    <td className="p-4 font-heading font-bold text-foreground">{type.name}</td>
                    <td className="p-4 text-sm text-muted-foreground">{type.bestFor}</td>
                    <td className="p-4 text-sm text-foreground font-medium">{type.capacity}</td>
                    <td className="p-4 text-sm text-foreground font-medium">{type.height}</td>
                    <td className="p-4 text-sm text-foreground font-medium">{type.throughput}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ASRS Types Detail Cards */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {asrsTypes.map((type) => (
              <motion.div key={type.name} variants={fadeInUp} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all hover:animate-pulse-slow">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{type.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{type.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Capacity</p>
                    <p className="text-sm font-semibold text-foreground">{type.capacity}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Height</p>
                    <p className="text-sm font-semibold text-foreground">{type.height}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Throughput</p>
                    <p className="text-sm font-semibold text-foreground">{type.throughput}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Specifications</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Technical Specifications
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {specs.map((spec) => (
              <motion.div key={spec.label} variants={fadeInUp} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border hover:animate-pulse-slow transition-colors">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 animate-pulse-slow" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{spec.label}</p>
                  <p className="font-heading font-bold text-foreground">{spec.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How ASRS Works — Process */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground">
              How ASRS Works
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Inbound", desc: "Goods arrive and are scanned into the WMS. The system assigns an optimal storage location." },
              { step: "02", title: "Storage", desc: "Automated crane or shuttle transports the load to its designated position in the rack." },
              { step: "03", title: "Retrieval", desc: "When an order is placed, the system retrieves the item and delivers it to the pick station." },
              { step: "04", title: "Outbound", desc: "Items are conveyed to packing/shipping areas, with real-time inventory updates." },
            ].map((s) => (
              <motion.div key={s.step} variants={fadeInUp} className="bg-navy-foreground/5 rounded-lg p-6 border border-navy-foreground/10 hover:animate-glow transition-all">
                <div className="font-heading text-4xl font-bold text-primary mb-3 animate-float-delayed">{s.step}</div>
                <h3 className="font-heading text-lg font-bold text-navy-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-navy-foreground/70">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Warehouse with ASRS?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Get a free consultation and discover how ASRS can save you 85% floor space while boosting throughput 3x.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold uppercase tracking-wide border-primary-foreground/30 hover:text-primary-foreground/100 hover:bg-primary-foreground/10 hover:animate-glow">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold uppercase tracking-wide border-primary-foreground/30 hover:text-primary-foreground/100 hover:bg-primary-foreground/10 hover:animate-glow">
                <Link to="/products">View All Products</Link>
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
            "@type": "Product",
            name: "ASRS - Automated Storage & Retrieval System",
            brand: { "@type": "Brand", name: "CareYu Automation" },
            description: "High-density automated storage and retrieval system for warehouses with 85% space savings and 99.99% accuracy.",
            category: "Industrial Automation Equipment",
          }),
        }}
      />
    </Layout>
  );
};

export default ASRSProduct;
