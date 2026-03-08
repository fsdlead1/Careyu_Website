import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <SEOHead
        title="Contact CareYu Automation | Get a Free Consultation"
        description="Contact CareYu Automation for ASRS, storage automation, and warehouse solutions. Call +91-9941014234 or email us. Located in Chennai, India."
        keywords="contact CareYu, automation consultation, warehouse automation quote, ASRS inquiry, Chennai automation company"
        canonical="https://careyuautomation.com/contact"
      />

      {/* Hero */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.3em] text-navy-foreground/60 font-semibold mb-2">Contact</motion.p>
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-6xl font-bold text-navy-foreground mb-4">
              We're Just a Click Away
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-navy-foreground/70 text-lg max-w-2xl mx-auto">
              Get in touch with our team of automation experts. We're here to provide innovative solutions and answer any questions you may have.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="lg:col-span-2 space-y-8">
              <motion.h2 variants={fadeInUp} className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Reach Out to Elevate Your Automation
              </motion.h2>

              {[
                { icon: Phone, label: "Phone", value: "+91-9941014234", href: "tel:+919941014234" },
                { icon: Mail, label: "Email", value: "bernardpious@careyuautomation.com", href: "mailto:bernardpious@careyuautomation.com" },
                { icon: MapPin, label: "Address", value: "28/2, 2nd Main Road, Olympic Colony, Mogappair, Chennai - 600050", href: undefined },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary transition-colors break-all">{item.value}</a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Map embed */}
              <motion.div variants={fadeInUp} className="rounded-lg overflow-hidden border border-border h-[200px]">
                <iframe
                  title="CareYu Automation Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0!2d80.17!3d13.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMogappair%2C+Chennai!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-3"
            >
              <motion.div variants={fadeInUp} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                      <Input id="company" name="company" placeholder="Your company" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                    <Input id="subject" name="subject" placeholder="How can we help?" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project requirements..." rows={5} required />
                  </div>
                  <Button type="submit" size="lg" disabled={loading} className="w-full font-heading font-semibold uppercase tracking-wide">
                    {loading ? "Sending..." : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: "CareYu Automation",
              telephone: "+91-9941014234",
              email: "bernardpious@careyuautomation.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "28/2, 2nd Main Road, Olympic Colony, Mogappair",
                addressLocality: "Chennai",
                postalCode: "600050",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />
    </Layout>
  );
};

export default Contact;
