import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, TrendingUp, Clock, Package, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import asrsImg from "@/assets/asrs-product.jpg";
import warehouseImg from "@/assets/hero-warehouse.jpg";
import manufacturingImg from "@/assets/solution-manufacturing.jpg";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const caseStudies = [
  {
    title: "E-Commerce Fulfillment Center — 3x Capacity Increase",
    client: "Leading E-Commerce Retailer",
    industry: "E-Commerce / Retail",
    location: "Mumbai, India",
    image: warehouseImg,
    challenge: "The client's 50,000 sq ft warehouse was maxing out at 8,000 orders per day with a 2.5% error rate. Growing order volumes and same-day delivery demands required a radical upgrade without relocating.",
    solution: "CareYu designed and implemented a full ASRS system with 12 crane units, integrated conveyor network, and pick-to-light stations. The WMS was fully integrated with the client's existing ERP.",
    results: [
      { metric: "3x", label: "Order Capacity", detail: "From 8,000 to 25,000+ orders/day" },
      { metric: "85%", label: "Space Savings", detail: "Freed up 40,000 sq ft of floor space" },
      { metric: "99.97%", label: "Picking Accuracy", detail: "Down from 2.5% to 0.03% error rate" },
      { metric: "18 mo", label: "ROI Payback", detail: "Full return on investment in 18 months" },
    ],
    testimonial: "CareYu's ASRS solution completely transformed our fulfillment operations. We tripled our capacity without adding a single square foot.",
    testimonialRole: "Head of Operations",
  },
  {
    title: "Cold Storage Pharma Warehouse — Zero Worker Exposure",
    client: "Major Pharmaceutical Distributor",
    industry: "Pharmaceutical / Cold Chain",
    location: "Chennai, India",
    image: manufacturingImg,
    challenge: "Workers in the -25°C deep-freeze zone could only operate for 15-minute shifts, severely limiting throughput. Strict GDP compliance required complete batch traceability, and energy costs were rising 12% year-over-year.",
    solution: "CareYu installed cold-rated ASRS with specialized lubricants and heated pick stations outside the cold zone. Air-lock integration minimized temperature loss, and batch tracking was built into the WMS.",
    results: [
      { metric: "90%", label: "Reduced Cold Exposure", detail: "Workers operate only at room-temp pick stations" },
      { metric: "30%", label: "Energy Savings", detail: "Fewer door openings, better insulation" },
      { metric: "2x", label: "Throughput", detail: "Doubled freezer zone throughput" },
      { metric: "100%", label: "GDP Compliance", detail: "Full batch traceability built-in" },
    ],
    testimonial: "Our workers are safer, our energy bills are lower, and we passed every GDP audit with flying colors since installation.",
    testimonialRole: "Warehouse Director",
  },
  {
    title: "Automotive Parts Manufacturer — Production Line Automation",
    client: "Tier-1 Automotive Supplier",
    industry: "Manufacturing / Automotive",
    location: "Pune, India",
    image: asrsImg,
    challenge: "Manual material handling between the parts warehouse and 6 production lines caused delays and WIP inventory chaos. Unplanned downtime from missing components averaged 4 hours per week.",
    solution: "CareYu implemented a mini-load ASRS for parts storage linked to AGV-based line feeding. IoT sensors on the production lines trigger automatic replenishment orders to the ASRS.",
    results: [
      { metric: "40%", label: "Less Downtime", detail: "Unplanned stops reduced from 4hr to under 30min/week" },
      { metric: "50%", label: "Labor Reduction", detail: "Material handling staff cut by half" },
      { metric: "Real-time", label: "WIP Visibility", detail: "Complete live tracking of all components" },
      { metric: "2 yrs", label: "ROI Payback", detail: "Full payback within 24 months" },
    ],
    testimonial: "The integration between ASRS and our production lines is seamless. We haven't had a missing-part stoppage in 6 months.",
    testimonialRole: "VP Supply Chain",
  },
  {
    title: "3PL Distribution Hub — Pick-to-Light Transformation",
    client: "National 3PL Provider",
    industry: "Logistics / 3PL",
    location: "Bengaluru, India",
    image: warehouseImg,
    challenge: "Managing 15,000+ SKUs for multiple clients with paper-based picking led to 3% error rates and high training costs. Seasonal peaks required 2x temporary staff with weeks of training.",
    solution: "CareYu deployed a 5,000-location pick-to-light system with zone-based picking. Multi-client WMS integration enabled simultaneous order processing for different clients.",
    results: [
      { metric: "55%", label: "Faster Picking", detail: "Picks per hour increased from 120 to 185" },
      { metric: "99.9%", label: "Accuracy", detail: "Error rate dropped from 3% to 0.1%" },
      { metric: "30 min", label: "Training Time", detail: "New workers productive in under 30 minutes" },
      { metric: "14 mo", label: "ROI Payback", detail: "Fastest payback across all projects" },
    ],
    testimonial: "Pick-to-light was a game-changer for our multi-client operations. Training new seasonal workers now takes minutes, not weeks.",
    testimonialRole: "Operations Manager",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <SEOHead
        title="Case Studies | CareYu Automation Success Stories"
        description="Explore real-world case studies of CareYu Automation's ASRS, pick-to-light, and warehouse automation implementations with measurable ROI."
        keywords="warehouse automation case studies, ASRS implementation, automation ROI, CareYu projects"
        canonical="https://careyuautomation.com/case-studies"
      />

      {/* Hero */}
      <section className="section-padding bg-navy pb-12">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-navy-foreground/60 font-semibold mb-3">Proven Results</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-navy-foreground mb-4">Case Studies</motion.h1>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 text-lg max-w-2xl mx-auto">
              Real-world automation projects with measurable outcomes. See how we've transformed operations for clients across industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-20">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stagger}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Header with image */}
              <div className="grid lg:grid-cols-2">
                <motion.div variants={fadeInUp} className="relative min-h-[280px]">
                  <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-transparent flex items-end p-8">
                    <div>
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide rounded-full px-3 py-1 mb-3">{cs.industry}</span>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground leading-tight">{cs.title}</h2>
                      <p className="text-primary-foreground/70 text-sm mt-1">{cs.client} • {cs.location}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Results grid */}
                <div className="grid grid-cols-2 gap-px bg-border">
                  {cs.results.map((r) => (
                    <motion.div key={r.label} variants={fadeInUp} className="bg-card p-6 text-center">
                      <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{r.metric}</div>
                      <div className="font-heading text-sm font-semibold text-foreground uppercase tracking-wide mt-1">{r.label}</div>
                      <p className="text-xs text-muted-foreground mt-1">{r.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInUp}>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 uppercase tracking-wide flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" /> The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{cs.challenge}</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 uppercase tracking-wide flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" /> Our Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{cs.solution}</p>
                </motion.div>
              </div>

              {/* Testimonial */}
              <div className="border-t border-border px-8 md:px-10 py-6 bg-secondary/30">
                <p className="text-muted-foreground italic text-sm">"{cs.testimonial}"</p>
                <p className="text-xs text-muted-foreground mt-2 font-semibold">{cs.testimonialRole}, {cs.client}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-4">
              Ready to Be Our Next Success Story?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 max-w-xl mx-auto mb-8 text-lg">
              Get a free consultation and custom ROI analysis for your facility.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide h-12 px-8">
                <a href="mailto:bernardpious@careyuautomation.com?subject=Case Study Inquiry">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold uppercase tracking-wide border-navy-foreground/20 text-navy-foreground hover:bg-navy-foreground/10 h-12 px-8">
                <Link to="/">Back to Home</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
