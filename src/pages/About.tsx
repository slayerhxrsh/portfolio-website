import { motion } from 'framer-motion';
import { developerInfo, skillCategories, certifications, hobbies, experiences, researchPapers } from '@/data/developer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { Award, GraduationCap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export default function About() {
  return (
    <>
      <SEOHead title="About" description={`Learn about ${developerInfo.name}, ${developerInfo.title}.`} />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="absolute inset-0 tech-grid-bg opacity-30" />
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">{developerInfo.title} • {developerInfo.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <ScrollReveal>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/20 to-[hsl(190,95%,55%)]/20 blur-xl" />
                    <img
                      src={profilePhoto}
                      alt="Harsh Srivastava"
                      className="relative w-full aspect-[3/4] object-cover rounded-2xl"
                    />
                  </div>
                  <div className="glass-card rounded-xl p-4 flex items-center gap-3">
                    <GraduationCap className="size-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">{developerInfo.education}</p>
                      <p className="text-xs text-muted-foreground">{developerInfo.university}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    <span className="gradient-text">{developerInfo.name}</span>
                  </h2>
                  {developerInfo.bio.split('\n\n').map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Work <span className="gradient-text">Experience</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="glass-card rounded-xl p-6 md:p-8 gradient-border">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-lg text-primary font-medium mt-1">{exp.company}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <p className="text-sm font-medium bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-full inline-block">
                          {exp.duration}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 mt-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span className="text-muted-foreground leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Publication Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Research & <span className="gradient-text">Publication</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {researchPapers.map((paper, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="glass-card rounded-xl p-6 md:p-8 gradient-border transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-primary)]">
                    <h3 className="text-xl font-bold text-foreground mb-2">{paper.title}</h3>
                    <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                      {paper.conference}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {paper.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Technical <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, catIndex) => (
                <ScrollReveal key={category.title} delay={catIndex * 0.1}>
                  <div className="glass-card rounded-xl p-6 h-full gradient-border transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-primary)]">
                    <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Currently Working On */}
            <ScrollReveal delay={0.3}>
              <div className="mt-12 glass-card rounded-xl p-6 md:p-8 gradient-border">
                <div className="flex items-center gap-3 mb-5">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    Currently <span className="gradient-text">Working On</span>
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Actively learning and building with these technologies right now:</p>
                <div className="flex flex-wrap gap-3">
                  {['Jenkins', 'Kubernetes'].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-4 py-2 rounded-lg border border-primary/40 bg-primary/10 text-primary font-semibold tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="gradient-text">Certifications</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => {
                const CardContent = (
                  <div className="glass-card rounded-xl p-5 flex items-start gap-4 gradient-border transition-all duration-300 hover:shadow-[0_0_15px_var(--glow-primary)] w-full h-full">
                    <Award className="size-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                );

                return (
                  <ScrollReveal key={cert.title} delay={index * 0.1}>
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                        {CardContent}
                      </a>
                    ) : (
                      <div className="h-full">{CardContent}</div>
                    )}
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Hobbies */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Beyond <span className="gradient-text">Code</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hobbies.map((hobby, index) => (
                <ScrollReveal key={hobby.name} delay={index * 0.1}>
                  <div className="glass-card rounded-xl p-6 text-center gradient-border transition-all duration-300 hover:shadow-[0_0_20px_var(--glow-primary)] hover:-translate-y-1">
                    <div className="text-4xl mb-3">{hobby.icon}</div>
                    <h3 className="font-semibold text-sm mb-1">{hobby.name}</h3>
                    <p className="text-xs text-muted-foreground">{hobby.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
