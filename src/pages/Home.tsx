import { motion } from 'framer-motion';
import { developerInfo, getFeaturedProjects } from '@/data/developer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead
        title="Harsh Srivastava — DevOps & Frontend Engineer"
        description={developerInfo.tagline}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-background">
            <div className="absolute inset-0 tech-grid-bg opacity-50" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-[pulse-glow_4s_ease-in-out_infinite]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[hsl(190_95%_55%_/_0.1)] blur-[120px] animate-[pulse-glow_4s_ease-in-out_infinite_1s]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-primary via-[hsl(190,95%,55%)] to-primary opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary to-[hsl(190,95%,55%)] z-0" />
                <img
                  src={profilePhoto}
                  alt="Harsh Srivastava"
                  className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background"
                />
              </div>
            </motion.div>

            {/* Name & Titles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="gradient-text">Harsh Srivastava</span>
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg md:text-xl text-muted-foreground">
                <span className="font-medium text-foreground">{developerInfo.title}</span>
                <span className="hidden md:block text-border">|</span>
                <span>{developerInfo.subtitle}</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              {developerInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/portfolio">
                <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  View Projects
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 px-8 glass-card">
                  Contact Me
                </Button>
              </Link>
              <a href="/Resume_Harsh%20Srivastava.pdf" download="Resume_Harsh_Srivastava.pdf">
                <Button size="lg" variant="ghost" className="gap-2 px-8">
                  <Download className="size-4" />
                  Resume
                </Button>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center gap-4"
            >
              {developerInfo.socialLinks.github && (
                <a href={developerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all">
                  <Github className="size-5" />
                </a>
              )}
              {developerInfo.socialLinks.linkedin && (
                <a href={developerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all">
                  <Linkedin className="size-5" />
                </a>
              )}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 md:py-32 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A selection of my recent work across DevOps and Frontend development
                </p>
              </div>
            </ScrollReveal>

            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {featuredProjects.slice(0, 4).map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1} className="break-inside-avoid mb-6">
                  <div className="group relative glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_var(--glow-primary)] gradient-border flex flex-col h-full">
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium tracking-wider uppercase text-primary">
                          {project.category}
                        </span>
                      </div>
                      {project.coverImage && (
                        <div className="overflow-hidden rounded-lg aspect-video mb-4">
                           <img src={project.coverImage} alt={project.title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" />
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-auto pt-4 border-t border-border/40">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                            <Github className="size-4" /> Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                            <ArrowRight className="size-4" /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="flex justify-center mt-12">
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="gap-2 glass-card">
                    Explore Full Portfolio
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
