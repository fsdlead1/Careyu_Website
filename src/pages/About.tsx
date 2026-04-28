import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Heart, Star, Users, ArrowRight, Target, Award, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import aboutHero from "@/assets/about-hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const values = [
  { icon: Shield, title: "Integrity", desc: "Transparency and honesty in all our interactions, ensuring reliable and trustworthy storage solutions." },
  { icon: Heart, title: "Commitment", desc: "Dedicated to delivering top-notch storage solutions tailored to your needs with the highest quality." },
  { icon: Star, title: "Excellence", desc: "We strive for excellence in every aspect, setting new standards in the storage industry." },
  { icon: Users, title: "Teamwork", desc: "Collaboration is key. We foster a culture where ideas are shared and collective efforts lead to outcomes." },
];

const approaches = [
  { step: "01", title: "Understand", desc: "We work with your team to understand your requirement and budget.", icon: Target },
  { step: "02", title: "Formulate", desc: "Formulate a solution to cater your need and get your agreement.", icon: Award },
  { step: "03", title: "Execute", desc: "Complete the project within the committed timeframe and budget.", icon: Handshake },
  { step: "04", title: "Deliver", desc: "Handover the improved work environment with full operational support.", icon: Star },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About CareYu Automation | Industrial Automation Experts"
        description="CareYu Automation is a leader in transforming storage systems with pioneering ASRS and warehouse automation solutions."
        keywords="about CareYu, industrial automation company, warehouse automation experts, ASRS solutions provider"
        canonical="https://careyuautomation.com/about"
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutHero} alt="CareYu Automation engineering team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 font-semibold mb-3">About Us</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground max-w-3xl leading-[1.1]">
              Leaders in Storage Automation
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg md:text-xl mt-5 max-w-xl">
              Pioneering automation solutions that transform how industries store, move, and manage goods.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Our Mission</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Changing the Perspective of Storage Systems
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                At CareYu we focus on the latest technology to cater your solution in the storage space. We design your space right from scratch and tailor the right setup for your business.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our qualified team works closely to draft you the right floor layout, choosing and manufacturing the right storage rack system and integrating it through a robust data management system.
              </p>
              <Button asChild className="font-heading font-semibold uppercase tracking-wide">
                <Link to="/contact">Work With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInRight}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "350+", label: "Happy Customers" },
                  { num: "500+", label: "Projects Delivered" },
                  { num: "15+", label: "Years Experience" },
                  { num: "50+", label: "Team Members" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card rounded-xl p-6 border border-border text-center hover:border-primary/30 transition-colors">
                    <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.num}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Our Core</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Values</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-card rounded-xl p-7 border border-border hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">How We Work</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Approach</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((a, i) => (
              <motion.div key={a.step} variants={fadeInUp} whileHover={{ y: -4 }} className="relative">
                <div className="bg-card rounded-xl p-7 border border-border hover:border-primary/30 transition-all text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <a.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-heading text-4xl font-bold text-primary/15 mb-1">{a.step}</div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </div>
                {i < approaches.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-border text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground">
              Why We're Better in Automation
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {[
              { title: "State of Art Manufacturing", desc: "We structure your business with the core methodology of 6 sigma, a strongly evolved technique to improve business productivity." },
              { title: "Data Analytics & Engineering", desc: "Our team comprises well-experienced engineers with strong knowledge of automation and problem solving." },
              { title: "6 Sigma Process Excellence", desc: "We structure your business with 6 sigma methodology — strongly evolved techniques to improve business productivity." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp} whileHover={{ y: -4 }} className="bg-navy-foreground/5 rounded-xl p-8 border border-navy-foreground/10 hover:border-navy-foreground/20 transition-all">
                <h3 className="font-heading text-lg font-bold text-navy-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-navy-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mt-12">
            <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide">
              <Link to="/contact">Partner With Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
