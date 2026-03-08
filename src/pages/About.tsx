import { motion } from "framer-motion";
import { Shield, Heart, Star, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import aboutHero from "@/assets/about-hero.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const values = [
  { icon: Shield, title: "Integrity", desc: "Transparency and honesty in all our interactions, ensuring reliable and trustworthy storage solutions. Our ethical practices build lasting client relationships." },
  { icon: Heart, title: "Commitment", desc: "Dedicated to delivering top-notch storage solutions tailored to your needs. Every project completed with the highest standards of quality and timeliness." },
  { icon: Star, title: "Excellence", desc: "We strive for excellence in every aspect, setting new standards in the storage industry through continuous innovation and quality improvement." },
  { icon: Users, title: "Teamwork", desc: "Collaboration is key. We foster a culture where ideas are shared and collective efforts lead to remarkable outcomes." },
];

const approaches = [
  { step: "01", title: "Understand", desc: "We work together with your team to understand your requirement and budget." },
  { step: "02", title: "Formulate", desc: "Formulate a solution to cater your need and get your agreement to implement it." },
  { step: "03", title: "Execute", desc: "Complete the project within the committed timeframe and budget." },
  { step: "04", title: "Deliver", desc: "Handover the improved work environment with full operational support." },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About CareYu Automation | Industrial Automation Experts"
        description="CareYu Automation is a leader in transforming storage systems with pioneering ASRS and warehouse automation solutions. Learn about our values, approach, and expertise."
        keywords="about CareYu, industrial automation company, warehouse automation experts, ASRS solutions provider"
        canonical="https://careyuautomation.com/about"
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="CareYu Automation engineering team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 font-semibold mb-2">About Us</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground max-w-3xl leading-tight">
              Leaders in Storage Automation
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Changing the Perspective of Storage Systems
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed">
              At CareYu we focus on the latest technology to cater your solution in the storage space. We design your space right from scratch and tailor the right setup for your business. Our qualified team works closely to draft you the right floor layout, choosing and manufacturing the right storage rack system and integrating it through a robust data management system.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Our Core</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Values</motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Building on Commitment, Integrity, Excellence, and Teamwork.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="bg-card rounded-lg p-6 border border-border hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">How We Work</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Approach</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((a) => (
              <motion.div key={a.step} variants={fadeInUp} className="text-center">
                <div className="font-heading text-5xl font-bold text-primary/20 mb-3">{a.step}</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground">
              Why We're Better in Automation
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              { title: "State of Art Manufacturing", desc: "We structure your business with the core methodology of 6 sigma, a strongly evolved technique to improve business productivity." },
              { title: "Data Analytics & Engineering", desc: "Our team comprises well-experienced engineers with strong knowledge of automation and problem solving." },
              { title: "6 Sigma Process Excellence", desc: "We structure your business with 6 sigma methodology — strongly evolved techniques to improve business productivity." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} className="bg-navy-foreground/5 rounded-lg p-8 border border-navy-foreground/10">
                <h3 className="font-heading text-lg font-bold text-navy-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-navy-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
