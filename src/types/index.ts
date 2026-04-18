export interface DevProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category: 'frontend' | 'devops' | 'fullstack' | 'blockchain';
  githubUrl?: string;
  liveUrl?: string;
  coverImage?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  url?: string;
  highlight?: boolean;
}

export interface DeveloperInfo {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  education: string;
  university: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
  };
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface ResearchPaper {
  title: string;
  conference: string;
  description: string;
}
