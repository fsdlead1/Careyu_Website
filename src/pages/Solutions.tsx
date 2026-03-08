import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Warehouse, ShoppingCart, Factory, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { solutions } from "@/data/solutions";
import heroWarehouse from "@/assets/hero-warehouse.jpg";
import ecommerceImg from "@/assets/solution-ecommerce.jpg";
import manufacturingImg from "@/assets/solution-manufacturing.jpg";
import coldstorageImg from "@/assets/solution-coldstorage.jpg";

const solutionImages: Record<string, string> = {
  "warehouse-automation": heroWarehouse,
  "e-commerce-fulfillment": ecommerceImg,
  "manufacturing-automation": manufacturingImg,
  "cold-storage-automation": coldstorageImg,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const iconMap: Record<string, React.ElementType> = {
  Warehouse,
  ShoppingCart,
  Factory,
  Snowflake,
};

const Solutions = () => {
  return (
    <Layout>
      <SEOHead
        title="Automation Solutions | Warehouse, E-Commerce, Manufacturing | CareYu"
        description="Industry-specific automation solutions by CareYu. Warehouse automation, e-commerce fulfillment, manufacturing automation, and cold storage solutions."
        keywords="warehouse automation solutions, e-commerce fulfillment, manufacturing automation, cold storage automation, industrial solutions India"
        canonical="https://careyuautomation.com/solutions"
      />

      <section className="section-padding bg-navy">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-navy-foreground/60 font-semibold mb-2">Solutions</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-navy-foreground mb-4">
              Industry-Specific Automation Solutions
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 text-lg max-w-2xl mx-auto">
              Tailored automation strategies for your industry's unique challenges and operational requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-20">
          {solutions.map((sol, i) => {
            const Icon = iconMap[sol.icon] || Warehouse;
            return (
              <motion.div key={sol.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <div className="grid lg:grid-cols-2 gap-10">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-primary">{sol.subtitle}</p>
                    </motion.div>
                    <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{sol.title}</motion.h2>
                    <motion.p variants={fadeInUp} className="text-muted-foreground leading-relaxed mb-6">{sol.description}</motion.p>

                    <motion.div variants={fadeInUp} className="mb-6">
                      <h4 className="font-heading font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Challenges We Solve</h4>
                      <ul className="space-y-2">
                        {sol.challenges.map((c) => (
                          <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-destructive mt-0.5">✕</span> {c}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <Button asChild className="font-heading font-semibold uppercase tracking-wide">
                        <Link to="/contact">Discuss This Solution <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </motion.div>
                  </div>

                  <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <motion.div variants={fadeInUp}>
                      <img src={solutionImages[sol.slug]} alt={sol.title} className="w-full h-[200px] object-cover rounded-xl" loading="lazy" />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="bg-card rounded-xl p-6 border border-border">
                      <h4 className="font-heading font-bold text-foreground mb-3 text-sm uppercase tracking-wide">How We Help</h4>
                      <ul className="space-y-2">
                        {sol.howWeHelp.map((h) => (
                          <li key={h} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-primary">→</span> {h}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                      <h4 className="font-heading font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Expected Results</h4>
                      <ul className="space-y-2">
                        {sol.benefits.map((b) => (
                          <li key={b} className="text-sm text-foreground flex items-start gap-2 font-medium">
                            <span className="text-primary">✓</span> {b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
                {i < solutions.length - 1 && <div className="border-t border-border mt-16" />}
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Don't See Your Industry?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              We design custom automation solutions for any industry. Let's discuss your unique requirements.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold uppercase tracking-wide border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
