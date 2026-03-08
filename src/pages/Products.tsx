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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

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
      <section className="section-padding bg-navy">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-navy-foreground/60 font-semibold mb-2">Our Products</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-navy-foreground mb-4">
              Automation Products & Systems
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 text-lg max-w-2xl mx-auto">
              From ASRS to robotic systems — explore our complete product portfolio designed for modern warehouses and factories.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-12">
            {products.map((product, i) => {
              const Icon = iconMap[product.icon] || Boxes;
              return (
                <motion.div
                  key={product.slug}
                  variants={fadeInUp}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{product.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.slice(0, 6).map((f) => (
                        <p key={f} className="text-sm text-foreground flex items-start gap-1.5">
                          <span className="text-primary mt-1">•</span> {f}
                        </p>
                      ))}
                    </div>
                    <Button asChild className="font-heading font-semibold uppercase tracking-wide">
                      <Link to={`/products/${product.slug}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`rounded-xl overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <img
                      src={productImages[product.slug]}
                      alt={product.title}
                      className="w-full h-[300px] object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Help Choosing the Right System?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Our experts will assess your needs and recommend the best automation solution for your operations.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold uppercase tracking-wide border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Get Expert Advice</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
