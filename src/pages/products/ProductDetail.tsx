import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Boxes, ArrowUpFromLine, Lightbulb, ArrowRightLeft, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { getProduct } from "@/data/products";
import vlmImg from "@/assets/home/product-vlm.jpg";
import ptlImg from "@/assets/home/product-ptl.jpg";
import conveyorImg from "@/assets/home/product-conveyor.jpg";
import robotsImg from "@/assets/home/product-robots.jpg";

const productImages: Record<string, string> = {
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

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (slug === "asrs") {
    return <Navigate to="/products/asrs" replace />;
  }

  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const Icon = iconMap[product.icon] || Boxes;

  return (
    <Layout>
      <SEOHead
        title={`${product.title} | CareYu Automation`}
        description={product.description}
        keywords={`${product.title}, automation, CareYu, industrial`}
        canonical={`https://careyuautomation.com/products/${product.slug}`}
      />

      {/* Hero */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
              <Link to="/products" className="text-sm text-navy-foreground/60 hover:text-primary transition-colors">Products</Link>
              <span className="text-navy-foreground/40">/</span>
              <span className="text-sm text-navy-foreground/80">{product.title}</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl font-bold text-navy-foreground mb-4">
              {product.title}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 text-lg">{product.description}</motion.p>
            <motion.div variants={fadeInUp} className="mt-6">
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide shadow-lg animate-glow">
                <Link to="/contact">Request Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features & Specs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Key Features</motion.h2>
              <motion.div variants={fadeInUp} className="space-y-3">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 hover:bg-secondary/50 p-2 rounded-lg transition-colors group">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 animate-pulse-slow group-hover:scale-110 transition-transform" />
                    <span className="text-foreground">{f}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeInUp} className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Technical Specifications</motion.h2>
              <motion.div variants={fadeInUp} className="bg-card rounded-xl border border-border overflow-hidden">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div key={key} className={`flex justify-between p-4 ${i % 2 === 0 ? "bg-card" : "bg-secondary"} ${i < Object.entries(product.specs).length - 1 ? "border-b border-border" : ""}`}>
                    <span className="text-sm text-muted-foreground">{key}</span>
                    <span className="text-sm font-semibold text-foreground">{value}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto text-center">
          {productImages[product.slug] ? (
            <img src={productImages[product.slug]} alt={product.title} className="w-full max-w-3xl mx-auto h-[350px] object-cover rounded-xl mb-8 animate-float" loading="lazy" />
          ) : (
            <Icon className="h-40 w-40 text-primary/15 mx-auto mb-8 animate-float" />
          )}
          <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide animate-glow">
            <Link to="/contact">Discuss Your Requirements <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
