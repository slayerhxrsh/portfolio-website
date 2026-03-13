import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { developerInfo } from '@/data/developer';
import { ContactForm } from '@/components/forms/ContactForm';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Contact() {
  return (
    <>
      <SEOHead title="Contact" description={`Get in touch with ${developerInfo.name} for collaboration and opportunities.`} />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="absolute inset-0 tech-grid-bg opacity-30" />
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">Let's build something together</p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight">Send a <span className="gradient-text">Message</span></h2>
                    <p className="text-muted-foreground">Fill out the form and I'll get back to you soon.</p>
                  </div>
                  <ContactForm />
                </div>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight">Contact <span className="gradient-text">Info</span></h2>
                    <p className="text-muted-foreground">Prefer to reach out directly? Here's how.</p>
                  </div>

                  <div className="space-y-4">
                    {/* Email */}
                    <a href={`mailto:${developerInfo.email}`}
                      className="glass-card rounded-xl p-4 flex items-center gap-4 gradient-border transition-all duration-300 hover:shadow-[0_0_15px_var(--glow-primary)] block">
                      <div className="p-3 rounded-lg bg-primary/10"><Mail className="size-5 text-primary" /></div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-sm font-medium">{developerInfo.email}</p>
                      </div>
                    </a>

                    {/* GitHub */}
                    {developerInfo.socialLinks.github && (
                      <a href={developerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
                        className="glass-card rounded-xl p-4 flex items-center gap-4 gradient-border transition-all duration-300 hover:shadow-[0_0_15px_var(--glow-primary)] block">
                        <div className="p-3 rounded-lg bg-primary/10"><Github className="size-5 text-primary" /></div>
                        <div>
                          <p className="text-xs text-muted-foreground">GitHub</p>
                          <p className="text-sm font-medium">github.com/slayerhxrsh</p>
                        </div>
                      </a>
                    )}

                    {/* LinkedIn */}
                    {developerInfo.socialLinks.linkedin && (
                      <a href={developerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                        className="glass-card rounded-xl p-4 flex items-center gap-4 gradient-border transition-all duration-300 hover:shadow-[0_0_15px_var(--glow-primary)] block">
                        <div className="p-3 rounded-lg bg-primary/10"><Linkedin className="size-5 text-primary" /></div>
                        <div>
                          <p className="text-xs text-muted-foreground">LinkedIn</p>
                          <p className="text-sm font-medium">linkedin.com/in/harsh-srivastava</p>
                        </div>
                      </a>
                    )}

                    {/* Location */}
                    <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/10"><MapPin className="size-5 text-primary" /></div>
                      <div>
                        <p className="text-xs text-muted-foreground">Location</p>
                        <p className="text-sm font-medium">{developerInfo.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
