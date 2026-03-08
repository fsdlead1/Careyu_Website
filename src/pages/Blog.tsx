import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Blog | Warehouse Automation & ASRS Insights | CareYu"
        description="Read expert insights on ASRS, warehouse automation, storage solutions, and Industry 4.0 trends from CareYu Automation."
        keywords="warehouse automation blog, ASRS articles, storage automation insights, industrial automation trends"
        canonical="https://careyuautomation.com/blog"
      />

      <section className="section-padding bg-navy">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-navy-foreground/60 font-semibold mb-2">Insights</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-navy-foreground mb-4">
              Blog & Resources
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 text-lg max-w-2xl mx-auto">
              Expert insights on warehouse automation, ASRS, storage solutions, and industry trends.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Featured post */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <div className="grid md:grid-cols-2 gap-8 bg-card rounded-xl border border-border overflow-hidden">
              <div className="overflow-hidden min-h-[300px]">
                <img src={blogImages[blogPosts[0].image]} alt={blogPosts[0].title} className="w-full h-full object-cover" />
              </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide rounded px-2 py-1 mb-3 w-fit">{blogPosts[0].category}</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(blogPosts[0].date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {blogPosts[0].readTime}</span>
                </div>
                <Button asChild className="w-fit font-heading font-semibold uppercase tracking-wide">
                  <Link to={`/blog/${blogPosts[0].slug}`}>Read Article <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* All posts */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <motion.article key={post.slug} variants={fadeInUp} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-[180px] overflow-hidden">
                  <img src={blogImages[post.image]} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide rounded px-2 py-1 mb-3">{post.category}</span>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
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
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
