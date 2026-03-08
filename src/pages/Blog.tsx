import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import asrsImg from "@/assets/asrs-product.jpg";
import warehouseImg from "@/assets/hero-warehouse.jpg";
import ptlImg from "@/assets/product-ptl.jpg";
import servicesImg from "@/assets/services-hero.jpg";
import manufacturingImg from "@/assets/solution-manufacturing.jpg";

const blogImages: Record<string, string> = {
  asrs: asrsImg,
  warehouse: warehouseImg,
  picktolight: ptlImg,
  storage: servicesImg,
  industry: manufacturingImg,
};

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SEOHead
        title="Blog | Warehouse Automation & ASRS Insights | CareYu"
        description="Read expert insights on ASRS, warehouse automation, storage solutions, and Industry 4.0 trends from CareYu Automation."
        keywords="warehouse automation blog, ASRS articles, storage automation insights, industrial automation trends"
        canonical="https://careyuautomation.com/blog"
      />

      <section className="section-padding bg-navy pb-12">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-navy-foreground/60 font-semibold mb-3">Insights & Resources</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-navy-foreground mb-4">
              Blog & Resources
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 text-lg max-w-2xl mx-auto mb-8">
              Expert insights on warehouse automation, ASRS, storage solutions, and industry trends.
            </motion.p>
            <motion.div variants={fadeInUp} className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card/10 border-navy-foreground/20 text-navy-foreground placeholder:text-navy-foreground/40"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Category Filter */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-heading font-semibold uppercase tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured post */}
          {activeCategory === "All" && searchQuery === "" && (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-14">
              <div className="grid md:grid-cols-2 gap-0 bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow">
                <div className="overflow-hidden min-h-[300px] relative group">
                  <img src={blogImages[blogPosts[0].image]} alt={blogPosts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide rounded-full px-3 py-1">{blogPosts[0].category}</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">{blogPosts[0].title}</h2>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(blogPosts[0].date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {blogPosts[0].readTime}</span>
                  </div>
                  <Button asChild className="w-fit font-heading font-semibold uppercase tracking-wide">
                    <Link to={`/blog/${blogPosts[0].slug}`}>Read Article <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* All posts */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" && searchQuery === "" ? filteredPosts.slice(1) : filteredPosts).map((post) => (
              <motion.article
                key={post.slug}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="h-[200px] overflow-hidden relative">
                  <img src={blogImages[post.image]} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-primary/90 text-primary-foreground text-[10px] font-semibold uppercase tracking-wide rounded-full px-2.5 py-0.5">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "short" })}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline">Read →</Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="mt-4">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
