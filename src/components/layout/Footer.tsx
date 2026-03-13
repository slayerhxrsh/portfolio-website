import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { developerInfo } from '@/data/developer';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold cursor-default">
              <span className="gradient-text">hS</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {developerInfo.title} • {developerInfo.subtitle}
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-end gap-4">
            {developerInfo.socialLinks.github && (
              <a href={developerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all hover:shadow-[0_0_15px_var(--glow-primary)]"
                aria-label="GitHub">
                <Github className="size-5" />
              </a>
            )}
            {developerInfo.socialLinks.linkedin && (
              <a href={developerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all hover:shadow-[0_0_15px_var(--glow-primary)]"
                aria-label="LinkedIn">
                <Linkedin className="size-5" />
              </a>
            )}
            <a href={`mailto:${developerInfo.email}`}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all hover:shadow-[0_0_15px_var(--glow-primary)]"
              aria-label="Email">
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {developerInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
