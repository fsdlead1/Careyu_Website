import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Clock, Briefcase, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import careersHero from "@/assets/careers-hero.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const openings = [
  {
    title: "Automation Design Engineer",
    department: "Engineering",
    location: "Chennai",
    type: "Full-time",
    description: "Design and develop automated storage and retrieval systems, including mechanical design, system layout, and integration with WMS.",
    requirements: ["B.E/B.Tech in Mechanical/Mechatronics", "3+ years in automation design", "AutoCAD, SolidWorks proficiency", "Knowledge of ASRS/VLM systems preferred"],
  },
  {
    title: "PLC/SCADA Programmer",
    department: "Engineering",
    location: "Chennai",
    type: "Full-time",
    description: "Program and commission PLC and SCADA systems for warehouse automation projects. Work on-site during installation and commissioning phases.",
    requirements: ["B.E/B.Tech in E&I/EEE/ECE", "2+ years PLC programming experience", "Siemens/Allen-Bradley platforms", "Willingness to travel for commissioning"],
  },
  {
    title: "Project Manager — Automation",
    department: "Operations",
    location: "Chennai",
    type: "Full-time",
    description: "Lead end-to-end automation project delivery from design through commissioning. Manage timelines, budgets, and client relationships.",
    requirements: ["B.E/B.Tech + MBA preferred", "5+ years in project management", "Industrial automation experience", "Strong client management skills"],
  },
  {
    title: "Sales Engineer — Automation Solutions",
    department: "Sales",
    location: "Chennai / Remote",
    type: "Full-time",
    description: "Drive business development for ASRS and storage automation solutions. Build relationships with warehouse operators, manufacturers, and logistics companies.",
    requirements: ["B.E/B.Tech in relevant field", "2+ years B2B sales experience", "Understanding of warehouse operations", "Excellent presentation skills"],
  },
  {
    title: "Warehouse Automation Intern",
    department: "Engineering",
    location: "Chennai",
    type: "Internship (6 months)",
    description: "Join our engineering team and gain hands-on experience in warehouse automation. Work on real projects involving ASRS design, simulation, and commissioning.",
    requirements: ["Pursuing B.E/B.Tech in Mechanical/Mechatronics/EEE", "Strong interest in automation", "Basic knowledge of CAD tools", "Good communication skills"],
  },
];

const perks = [
  "Competitive salary & performance bonuses",
  "Health insurance for you & family",
  "Flexible work arrangements",
  "Learning & development budget",
  "Work on cutting-edge automation tech",
  "Collaborative team environment",
];

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Application Submitted!", description: "We'll review your application and get back to you within a week." });
      setSelectedJob(null);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <SEOHead
        title="Careers at CareYu Automation | Join Our Team"
        description="Join CareYu Automation and work on cutting-edge ASRS and warehouse automation projects. Open positions for engineers, project managers, and more."
        keywords="automation careers, engineering jobs Chennai, ASRS jobs, warehouse automation careers, CareYu jobs"
        canonical="https://careyuautomation.com/careers"
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={careersHero} alt="CareYu Automation team working on automation designs" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 font-semibold mb-2">Careers</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight max-w-2xl">
              Build the Future of Automation
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg mt-4 max-w-xl">
              Join a passionate team transforming how industries store, move, and manage goods.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-10">
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Why Join CareYu?</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {perks.map((perk) => (
              <motion.div key={perk} variants={fadeInUp} className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg p-4">
                <span className="text-primary-foreground">✓</span>
                <span className="text-sm text-primary-foreground">{perk}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Open Positions</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">Current Openings</motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job) => (
              <motion.div key={job.title} variants={fadeInUp} className="bg-card rounded-xl border border-border overflow-hidden">
                <div
                  className="p-6 cursor-pointer hover:bg-secondary/50 transition-colors"
                  onClick={() => setSelectedJob(selectedJob === job.title ? null : job.title)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {job.department}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {job.type}</span>
                      </div>
                    </div>
                    <span className="text-primary font-heading font-semibold text-sm shrink-0">
                      {selectedJob === job.title ? "Collapse ↑" : "View Details ↓"}
                    </span>
                  </div>
                </div>

                {selectedJob === job.title && (
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <h4 className="font-heading font-bold text-foreground text-sm mb-2 uppercase tracking-wide">Requirements</h4>
                    <ul className="space-y-1 mb-6">
                      {job.requirements.map((r) => (
                        <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span> {r}
                        </li>
                      ))}
                    </ul>

                    <form onSubmit={handleApply} className="bg-secondary rounded-lg p-6 space-y-4">
                      <h4 className="font-heading font-bold text-foreground">Apply for {job.title}</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <Input placeholder="Full Name" required />
                        <Input type="email" placeholder="Email" required />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <Input type="tel" placeholder="Phone" required />
                        <Input placeholder="LinkedIn Profile URL" />
                      </div>
                      <Textarea placeholder="Tell us about your experience and why you're interested..." rows={4} required />
                      <Button type="submit" disabled={loading} className="font-heading font-semibold uppercase tracking-wide">
                        {loading ? "Submitting..." : <><Send className="mr-2 h-4 w-4" /> Submit Application</>}
                      </Button>
                    </form>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* General application */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-navy-foreground mb-4">
              Don't See a Matching Role?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 max-w-xl mx-auto mb-8">
              We're always looking for talented people. Send us your resume and we'll reach out when a suitable position opens up.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide">
                <a href="mailto:bernardpious@careyuautomation.com?subject=General Application">
                  Send Your Resume <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
