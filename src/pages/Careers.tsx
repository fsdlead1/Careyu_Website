import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Clock, Briefcase, Send, ChevronDown, GraduationCap, Heart, Zap, Users, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import careersHero from "@/assets/careers-hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const openings = [
  {
    title: "Automation Design Engineer",
    department: "Engineering",
    location: "Chennai",
    type: "Full-time",
    experience: "3-5 years",
    description: "Design and develop automated storage and retrieval systems, including mechanical design, system layout, and integration with WMS.",
    requirements: ["B.E/B.Tech in Mechanical/Mechatronics", "3+ years in automation design", "AutoCAD, SolidWorks proficiency", "Knowledge of ASRS/VLM systems preferred"],
  },
  {
    title: "PLC/SCADA Programmer",
    department: "Engineering",
    location: "Chennai",
    type: "Full-time",
    experience: "2-4 years",
    description: "Program and commission PLC and SCADA systems for warehouse automation projects. Work on-site during installation and commissioning phases.",
    requirements: ["B.E/B.Tech in E&I/EEE/ECE", "2+ years PLC programming experience", "Siemens/Allen-Bradley platforms", "Willingness to travel for commissioning"],
  },
  {
    title: "Project Manager — Automation",
    department: "Operations",
    location: "Chennai",
    type: "Full-time",
    experience: "5-8 years",
    description: "Lead end-to-end automation project delivery from design through commissioning. Manage timelines, budgets, and client relationships.",
    requirements: ["B.E/B.Tech + MBA preferred", "5+ years in project management", "Industrial automation experience", "Strong client management skills"],
  },
  {
    title: "Sales Engineer — Automation Solutions",
    department: "Sales",
    location: "Chennai / Remote",
    type: "Full-time",
    experience: "2-5 years",
    description: "Drive business development for ASRS and storage automation solutions. Build relationships with warehouse operators, manufacturers, and logistics companies.",
    requirements: ["B.E/B.Tech in relevant field", "2+ years B2B sales experience", "Understanding of warehouse operations", "Excellent presentation skills"],
  },
  {
    title: "Embedded Systems Engineer",
    department: "R&D",
    location: "Chennai",
    type: "Full-time",
    experience: "2-4 years",
    description: "Develop embedded firmware for conveyor controllers, pick-to-light modules, and IoT sensor nodes used in our automation systems.",
    requirements: ["B.E/B.Tech in ECE/CSE", "C/C++ and embedded Linux", "Experience with ARM microcontrollers", "PCB design knowledge is a plus"],
  },
  {
    title: "WMS Software Developer",
    department: "Software",
    location: "Chennai / Hybrid",
    type: "Full-time",
    experience: "3-6 years",
    description: "Build and maintain our warehouse management software platform. Develop APIs for ASRS integration, real-time inventory dashboards, and order management modules.",
    requirements: ["B.E/B.Tech or MCA", "Python/Java + React/Angular", "REST API design experience", "Database design (PostgreSQL/MySQL)"],
  },
  {
    title: "Field Service Technician",
    department: "Service",
    location: "Pan-India (Travel Required)",
    type: "Full-time",
    experience: "1-3 years",
    description: "Install, commission, and maintain automation equipment at customer sites. Troubleshoot mechanical and electrical issues and provide on-site technical support.",
    requirements: ["Diploma/B.E in Mechanical/Electrical", "Hands-on troubleshooting skills", "Willingness to travel 60-70%", "Valid driving license"],
  },
  {
    title: "Warehouse Automation Intern",
    department: "Engineering",
    location: "Chennai",
    type: "Internship (6 months)",
    experience: "Fresher",
    description: "Join our engineering team and gain hands-on experience in warehouse automation. Work on real projects involving ASRS design, simulation, and commissioning.",
    requirements: ["Pursuing B.E/B.Tech in Mechanical/Mechatronics/EEE", "Strong interest in automation", "Basic knowledge of CAD tools", "Good communication skills"],
  },
  {
    title: "Marketing & Content Specialist",
    department: "Marketing",
    location: "Chennai / Remote",
    type: "Full-time",
    experience: "2-4 years",
    description: "Create compelling content for our automation products — case studies, technical blogs, product videos, and social media campaigns targeting B2B decision makers.",
    requirements: ["Degree in Marketing/Communications", "B2B content writing experience", "SEO and analytics knowledge", "Technical writing ability"],
  },
];

const perks = [
  { icon: Zap, title: "Competitive Salary", desc: "Performance bonuses & annual increments" },
  { icon: Heart, title: "Health Insurance", desc: "Coverage for you & your family" },
  { icon: Globe, title: "Flexible Work", desc: "Hybrid & remote options available" },
  { icon: GraduationCap, title: "Learning Budget", desc: "Annual L&D allowance for courses" },
  { icon: Users, title: "Great Team", desc: "Collaborative & innovative culture" },
  { icon: Shield, title: "Job Security", desc: "Stable, growing industry" },
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
      <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={careersHero} alt="CareYu Automation team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70 font-semibold mb-3">Careers</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-3xl">
              Build the Future of Automation
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg md:text-xl mt-5 max-w-xl leading-relaxed">
              Join a passionate team transforming how industries store, move, and manage goods.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-6">
              <Button size="lg" asChild className="font-heading font-semibold uppercase tracking-wide">
                <a href="#openings">View Open Roles <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Why CareYu?</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">Perks & Benefits</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <perk.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm">{perk.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-2">Open Positions</motion.p>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              {openings.length} Current Openings
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3 max-w-4xl mx-auto">
            {openings.map((job) => (
              <motion.div
                key={job.title}
                variants={fadeInUp}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full p-5 md:p-6 text-left hover:bg-secondary/30 transition-colors"
                  onClick={() => setSelectedJob(selectedJob === job.title ? null : job.title)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-lg md:text-xl font-bold text-foreground">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5">
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-0.5"><Briefcase className="h-3 w-3" /> {job.department}</span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-0.5"><MapPin className="h-3 w-3" /> {job.location}</span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-secondary rounded-full px-2.5 py-0.5"><Clock className="h-3 w-3" /> {job.type}</span>
                      </div>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 shrink-0 ${selectedJob === job.title ? "rotate-180" : ""}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {selectedJob === job.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 border-t border-border pt-5">
                        <p className="text-muted-foreground mb-5 leading-relaxed">{job.description}</p>
                        <h4 className="font-heading font-bold text-foreground text-sm mb-3 uppercase tracking-wide">Requirements</h4>
                        <ul className="space-y-1.5 mb-6">
                          {job.requirements.map((r) => (
                            <li key={r} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-0.5">•</span> {r}
                            </li>
                          ))}
                        </ul>

                        <form onSubmit={handleApply} className="bg-secondary/60 rounded-xl p-6 space-y-4 border border-border">
                          <h4 className="font-heading font-bold text-foreground">Apply for {job.title}</h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            <Input placeholder="Full Name" required className="bg-card" />
                            <Input type="email" placeholder="Email" required className="bg-card" />
                          </div>
                          <div className="grid sm:grid-cols-2 gap-3">
                            <Input type="tel" placeholder="Phone" required className="bg-card" />
                            <Input placeholder="LinkedIn Profile URL" className="bg-card" />
                          </div>
                          <Textarea placeholder="Tell us about your experience and why you're interested..." rows={4} required className="bg-card" />
                          <Button type="submit" disabled={loading} className="font-heading font-semibold uppercase tracking-wide">
                            {loading ? "Submitting..." : <><Send className="mr-2 h-4 w-4" /> Submit Application</>}
                          </Button>
                        </form>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* General application */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-5xl font-bold text-navy-foreground mb-4">
              Don't See a Matching Role?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 max-w-xl mx-auto mb-8 text-lg">
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
