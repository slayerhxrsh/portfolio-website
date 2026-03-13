import { projects } from '@/data/developer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const categories = ['all', 'frontend', 'devops', 'fullstack'] as const;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <SEOHead title="Portfolio" description="Browse my projects in DevOps, Frontend, and Full-Stack development." />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="absolute inset-0 tech-grid-bg opacity-30" />
          <div className="relative max-w-7xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                My <span className="gradient-text">Portfolio</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Projects spanning DevOps pipelines, cloud infrastructure, and modern web applications
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-6 lg:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300',
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-[0_0_15px_var(--glow-primary)]'
                    : 'text-muted-foreground hover:text-foreground glass-card'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1} className="break-inside-avoid">
                  <motion.div
                    layout
                    className="group glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_var(--glow-primary)] gradient-border flex flex-col h-full bg-card"
                  >
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
                        {project.longDescription || project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
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
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <p className="text-lg">No projects in this category yet. More coming soon!</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
