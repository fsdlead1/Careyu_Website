import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { categories } from "@/data/catalog";
import { getCategoryIcon, getCategoryImage } from "@/lib/catalog-visuals";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } };
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const CatalogShowcase = () => {
  return (
    <section id="catalog" className="section-padding bg-secondary/40">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">
            Complete Catalog
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Products & Sub-Solutions
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto mt-3">
            Explore our four core capability areas and the specialised sub-products in each.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {categories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            const img = getCategoryImage(cat.image);
            return (
              <motion.div
                key={cat.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
              >
                {/* Category header */}
                <motion.div
                  variants={fadeInUp}
                  className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center mb-8"
                >
                  <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Category {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-2">
                      {cat.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3">{cat.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed mb-5">{cat.description}</p>
                    <Link
                      to={`/catalog/${cat.slug}`}
                      className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary hover:gap-3 transition-all"
                    >
                      Explore Category <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={img}
                        alt={cat.name}
                        loading="lazy"
                        className="w-full h-[260px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="text-xs font-semibold text-foreground">
                          {cat.subProducts.length} sub-products
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Sub-product grid */}
                <motion.div
                  variants={stagger}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                  {cat.subProducts.map((sub) => (
                    <motion.div key={sub.slug} variants={fadeInUp} whileHover={{ y: -4 }}>
                      <Link
                        to={`/catalog/${cat.slug}/${sub.slug}`}
                        className="block bg-card rounded-xl p-5 border border-border hover:border-primary/50 hover:shadow-lg transition-all h-full group"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <Icon className="h-5 w-5 text-primary/70 shrink-0" />
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                        <h4 className="font-heading text-base font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors">
                          {sub.name}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{sub.short}</p>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CatalogShowcase;
