import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import { getNestedSubProduct } from "@/data/catalog";
import { getCategoryIcon, getCategoryImage } from "@/lib/catalog-visuals";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const NestedSubProductPage = () => {
  const { categorySlug, subSlug, nestedSlug } = useParams<{ categorySlug: string; subSlug: string; nestedSlug: string }>();
  const result = categorySlug && subSlug && nestedSlug ? getNestedSubProduct(categorySlug, subSlug, nestedSlug) : undefined;

  if (!result) return <Navigate to="/" replace />;

  const { category, subProduct, nestedProduct } = result;
  // We can reuse the category visuals for the nested product
  const Icon = getCategoryIcon(category.icon);
  const img = getCategoryImage(category.image);

  // Related nested products
  const related = subProduct.subProducts!.filter((s) => s.slug !== nestedProduct.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`${nestedProduct.name} | ${subProduct.name} | CareYu Automation`}
        description={nestedProduct.description}
        keywords={`${nestedProduct.name}, ${subProduct.name}, automation, CareYu`}
        canonical={`https://careyuautomation.com/catalog/${category.slug}/${subProduct.slug}/${nestedProduct.slug}`}
      />
      <Navbar />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="bg-navy">
          <div className="container mx-auto py-14 md:py-20">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex items-center gap-2 text-sm text-navy-foreground/60 mb-5 flex-wrap">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link to={`/catalog/${category.slug}`} className="hover:text-primary">{category.name}</Link>
                <ChevronRight className="h-4 w-4" />
                <Link to={`/catalog/${category.slug}/${subProduct.slug}`} className="hover:text-primary">{subProduct.name}</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-navy-foreground/80">{nestedProduct.name}</span>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <motion.div variants={fadeInUp} className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-4">
                    {nestedProduct.name}
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-navy-foreground/75 text-base md:text-lg leading-relaxed mb-6">
                    {nestedProduct.description}
                  </motion.p>
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <a href="tel:+918925940389" className="gap-2">
                        <Phone className="h-4 w-4" /> Request Quote
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 hover:text-primary-foreground/100 hover:bg-primary-foreground/10">
                      <Link to={`/catalog/${category.slug}/${subProduct.slug}`}>
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to {subProduct.name}
                      </Link>
                    </Button>
                  </motion.div>
                </div>
                <motion.div variants={fadeInUp}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img src={nestedProduct.image} alt={nestedProduct.name} className="w-full h-[300px] md:h-[380px] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl">
              <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Key Features</motion.p>
              <motion.h2 variants={fadeInUp} className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-8">
                Why choose {nestedProduct.name}?
              </motion.h2>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
                {nestedProduct.features.map((f) => (
                  <motion.div key={f} variants={fadeInUp} className="flex items-start gap-3 bg-card p-5 rounded-xl border border-border">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{f}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section-padding bg-secondary/40">
            <div className="container mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Related</p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">More {subProduct.name}</h2>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((nested) => (
                  <motion.div key={nested.slug} variants={fadeInUp} whileHover={{ y: -4 }}>
                    <Link
                      to={`/catalog/${category.slug}/${subProduct.slug}/${nested.slug}`}
                      className="block bg-card rounded-xl p-5 border border-border hover:border-primary/50 hover:shadow-lg transition-all h-full group"
                    >
                      <h4 className="font-heading text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {nested.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">{nested.short}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        View <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-navy border-t border-navy-foreground/10 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-navy-foreground/50">
          <span>© {new Date().getFullYear()} CareYu Automation. All rights reserved.</span>
          <span>Powered by <a href="https://digisailor.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">DigiSailor</a></span>
        </div>
      </footer>
    </div>
  );
};

export default NestedSubProductPage;
