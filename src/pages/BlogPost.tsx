import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { getBlogPost, blogPosts } from "@/data/blogPosts";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith("### "))
        return <h3 key={i} className="font-heading text-xl font-bold text-foreground mt-8 mb-3">{trimmed.slice(4)}</h3>;
      if (trimmed.startsWith("## "))
        return <h2 key={i} className="font-heading text-2xl font-bold text-foreground mt-10 mb-4">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith("- **"))
        return (
          <li key={i} className="ml-4 mb-2 text-foreground">
            <strong>{trimmed.slice(4, trimmed.indexOf("**", 4))}</strong>
            {trimmed.slice(trimmed.indexOf("**", 4) + 2)}
          </li>
        );
      if (trimmed.startsWith("- "))
        return <li key={i} className="ml-4 mb-1 text-muted-foreground">{trimmed.slice(2)}</li>;
      return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{trimmed}</p>;
    });
  };

  return (
    <Layout>
      <SEOHead
        title={`${post.title} | CareYu Automation Blog`}
        description={post.excerpt}
        keywords={`${post.category}, warehouse automation, ASRS, CareYu blog`}
        canonical={`https://careyuautomation.com/blog/${post.slug}`}
      />

      <section className="section-padding bg-navy">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-navy-foreground/60 hover:text-primary transition-colors mb-6">
                <ArrowLeft className="h-4 w-4" /> Back to Blog
              </Link>
            </motion.div>
            <motion.span variants={fadeInUp} className="inline-block bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wide rounded px-2 py-1 mb-4">{post.category}</motion.span>
            <motion.h1 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground leading-tight mb-6">
              {post.title}
            </motion.h1>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 text-sm text-navy-foreground/60">
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="prose-custom">
            {renderContent(post.content)}
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} to={`/blog/${rp.slug}`} className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow group">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide rounded px-2 py-1 mb-3">{rp.category}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{rp.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{rp.excerpt}</p>
                <p className="text-xs text-muted-foreground mt-3">{rp.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Organization", name: "CareYu Automation" },
            datePublished: post.date,
            publisher: { "@type": "Organization", name: "CareYu Automation" },
          }),
        }}
      />
    </Layout>
  );
};

export default BlogPost;
