import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import { getCategory } from "@/data/catalog";
import { getCategoryIcon, getCategoryImage } from "@/lib/catalog-visuals";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? getCategory(categorySlug) : undefined;

  if (!category) return <Navigate to="/" replace />;

  const Icon = getCategoryIcon(category.icon);
  const img = getCategoryImage(category.image);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`${category.name} | CareYu Automation`}
        description={category.description}
        keywords={`${category.name}, automation, CareYu`}
        canonical={`https://careyuautomation.com/catalog/${category.slug}`}
      />
      <Navbar />

      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative bg-navy overflow-hidden">
          <div className="absolute inset-0 opacity-90">
            <img src={img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
          </div>
          <div className="container mx-auto relative z-10 py-16 md:py-24">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
              <motion.div variants={fadeInUp} className="flex items-center gap-2 text-sm text-navy-foreground/60 mb-4">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-navy-foreground/80">{category.name}</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="w-14 h-14 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-5">
                <Icon className="h-7 w-7 text-primary" />
              </motion.div>
              <motion.h1 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-4">
                {category.name}
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-primary font-semibold text-lg mb-3">
                {category.tagline}
              </motion.p>
              <motion.p variants={fadeInUp} className="text-navy-foreground/75 text-base md:text-lg leading-relaxed">
                {category.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Sub-products */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Sub-Products</p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground">
                {category.subProducts.length} Solutions in this Category
              </h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.subProducts.map((sub) => (
                <motion.div key={sub.slug} variants={fadeInUp} whileHover={{ y: -6 }}>
                  <Link
                    to={`/catalog/${category.slug}/${sub.slug}`}
                    className="block bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all h-full group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{sub.short}</p>
                    <ul className="space-y-1.5 mb-4">
                      {sub.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <Button variant="outline" asChild>
                <Link to="/#catalog" className="gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to All Categories
                </Link>
              </Button>
            </div>
          </div>
        </section>
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

export default CategoryPage;
