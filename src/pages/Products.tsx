import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, ArrowUpFromLine, Lightbulb, ArrowRightLeft, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { products } from "@/data/products";
import asrsImg from "@/assets/asrs-product.jpg";
import vlmImg from "@/assets/product-vlm.jpg";
import ptlImg from "@/assets/product-ptl.jpg";
import conveyorImg from "@/assets/product-conveyor.jpg";
import robotsImg from "@/assets/product-robots.jpg";

const productImages: Record<string, string> = {
  asrs: asrsImg,
  "vertical-lift-module": vlmImg,
  "pick-to-light": ptlImg,
  "conveyor-systems": conveyorImg,
  "warehouse-robots": robotsImg,
};

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const iconMap: Record<string, React.ElementType> = {
  Boxes,
  ArrowUpFromLine,
  Lightbulb,
  ArrowRightLeft,
  Bot,
};

const Products = () => {
  return (
    <Layout>
      <SEOHead
        title="Automation Products | ASRS, VLM, Pick-to-Light | CareYu"
        description="Explore CareYu's range of automation products: ASRS, Vertical Lift Modules, Pick-to-Light, Conveyor Systems, and Warehouse Robots."
        keywords="automation products, ASRS, vertical lift module, pick to light, conveyor systems, warehouse robots, industrial automation"
        canonical="https://careyuautomation.com/products"
      />

      {/* Hero */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-navy-foreground/60 font-semibold mb-3">Our Products</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-navy-foreground mb-4">
              Automation Products & Systems
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 text-lg max-w-2xl mx-auto">
              From ASRS to robotic systems — explore our complete product portfolio designed for modern warehouses and factories.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-background">
        <div className="container mx-auto">
          {products.map((product, i) => {
            const Icon = iconMap[product.icon] || Boxes;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={product.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center section-padding ${i > 0 ? "border-t border-border" : ""}`}
              >
                <motion.div variants={isEven ? fadeInLeft : fadeInRight} className={!isEven ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">Product {String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{product.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {product.features.slice(0, 6).map((f) => (
                      <p key={f} className="text-sm text-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> {f}
                      </p>
                    ))}
                  </div>
                  <Button asChild size="lg" className="font-heading font-semibold uppercase tracking-wide">
                    <Link to={`/products/${product.slug}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div variants={isEven ? fadeInRight : fadeInLeft} className={`relative group ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={productImages[product.slug]}
                      alt={product.title}
                      className="w-full h-[350px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-card rounded-xl p-3 border border-border shadow-lg hidden md:block">
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Starting from</div>
                    <div className="font-heading font-bold text-primary text-lg">Custom Quote</div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Need Help Choosing the Right System?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Our experts will assess your needs and recommend the best automation solution for your operations.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold uppercase tracking-wide border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8">
                <Link to="/contact">Get Expert Advice <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
