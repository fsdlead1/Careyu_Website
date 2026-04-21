import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import { getSubProduct } from "@/data/catalog";
import { getCategoryIcon, getCategoryImage } from "@/lib/catalog-visuals";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const SubProductPage = () => {
  const { categorySlug, subSlug } = useParams<{ categorySlug: string; subSlug: string }>();
  const result = categorySlug && subSlug ? getSubProduct(categorySlug, subSlug) : undefined;

  if (!result) return <Navigate to="/" replace />;

  const { category, subProduct } = result;
  const Icon = getCategoryIcon(category.icon);
  const img = getCategoryImage(category.image);

  // If this subProduct acts as a parent for further subProducts (3 levels)
  const isNestedCategory = subProduct.subProducts && subProduct.subProducts.length > 0;

  // Related sub-products in same category
  const related = category.subProducts.filter((s) => s.slug !== subProduct.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`${subProduct.name} | ${category.name} | CareYu Automation`}
        description={subProduct.description}
        keywords={`${subProduct.name}, ${category.name}, automation, CareYu`}
        canonical={`https://careyuautomation.com/catalog/${category.slug}/${subProduct.slug}`}
      />
      <Navbar />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className={`bg-navy ${isNestedCategory ? "relative overflow-hidden" : ""}`}>
          {isNestedCategory && (
            <div className="absolute inset-0 opacity-90">
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
            </div>
          )}
          <div className="container mx-auto relative z-10 py-14 md:py-24">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="flex items-center gap-2 text-sm text-navy-foreground/60 mb-5 flex-wrap">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link to={`/catalog/${category.slug}`} className="hover:text-primary">{category.name}</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-navy-foreground/80">{subProduct.name}</span>
              </motion.div>

              {!isNestedCategory ? (
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <motion.div variants={fadeInUp} className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-4">
                      {subProduct.name}
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-navy-foreground/75 text-base md:text-lg leading-relaxed mb-6">
                      {subProduct.description}
                    </motion.p>
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                      <Button size="lg" asChild>
                        <a href="tel:+919941014234" className="gap-2">
                          <Phone className="h-4 w-4" /> Request Quote
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 hover:text-primary-foreground/100 hover:bg-primary-foreground/10">
                        <Link to={`/catalog/${category.slug}`}>
                          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Category
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                  <motion.div variants={fadeInUp}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img src={img} alt={subProduct.name} className="w-full h-[300px] md:h-[380px] object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                    </div>
                  </motion.div>
                </div>
              ) : (
                <div className="max-w-3xl">
                  <motion.div variants={fadeInUp} className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <motion.h1 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-4">
                    {subProduct.name}
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-primary font-semibold text-lg mb-3">
                    {category.name}
                  </motion.p>
                  <motion.p variants={fadeInUp} className="text-navy-foreground/75 text-base md:text-lg leading-relaxed">
                    {subProduct.description}
                  </motion.p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {isNestedCategory ? (
          /* Render grid of sub-products (acting as a category list) */
          <section className="section-padding bg-background">
            <div className="container mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Systems & Options</p>
                <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
                  {subProduct.subProducts!.length} Solutions in {subProduct.name}
                </h2>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subProduct.subProducts!.map((nested) => (
                  <motion.div key={nested.slug} variants={fadeInUp} whileHover={{ y: -6 }}>
                    <Link
                      to={`/catalog/${category.slug}/${subProduct.slug}/${nested.slug}`}
                      className="block bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all h-full group flex flex-col"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {nested.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{nested.short}</p>
                      <div className="flex justify-between items-start mb-5 gap-4">
                        <div className="">
                          <ul className="space-y-1.5 mb-4">
                            {nested.features.slice(0, 3).map((f) => (
                              <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                            Learn more <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                        <div className="w-40 h-40 rounded-lg overflow-hidden bg-muted shrink-0 shadow-sm border border-border/50">
                          <img src={nested.image || img} alt={nested.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 align-self-center" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-12 text-center">
                <Button variant="outline" asChild>
                  <Link to={`/catalog/${category.slug}`} className="gap-2">
                    <ArrowLeft className="h-4 w-4" /> Back to {category.name}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        ) : (
          /* Feature list for leaf node */
          <section className="section-padding bg-background">
            <div className="container mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl">
                <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Key Features</motion.p>
                <motion.h2 variants={fadeInUp} className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-8">
                  Why choose {subProduct.name}?
                </motion.h2>
                <motion.div variants={stagger} className="grid sm:grid-cols-2 gap-4">
                  {subProduct.features.map((f) => (
                    <motion.div key={f} variants={fadeInUp} className="flex items-start gap-3 bg-card p-5 rounded-xl border border-border">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{f}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Related (only display for simple products) */}
        {!isNestedCategory && related.length > 0 && (
          <section className="section-padding bg-secondary/40">
            <div className="container mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Related</p>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">More in {category.name}</h2>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((sub) => (
                  <motion.div key={sub.slug} variants={fadeInUp} whileHover={{ y: -4 }}>
                    <Link
                      to={`/catalog/${category.slug}/${sub.slug}`}
                      className="block bg-card rounded-xl p-5 border border-border hover:border-primary/50 hover:shadow-lg transition-all h-full group"
                    >
                      <h4 className="font-heading text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {sub.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">{sub.short}</p>
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

export default SubProductPage;
