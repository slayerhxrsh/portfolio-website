import type { DeveloperInfo, DevProject, SkillCategory, Certification } from '@/types';

export const developerInfo: DeveloperInfo = {
  name: 'Harsh Srivastava',
  title: 'Aspiring DevOps Engineer',
  subtitle: 'Frontend Engineer',
  tagline: 'Building scalable infrastructure, automated systems, and modern web experiences.',
  bio: `I am Harsh Srivastava, a Computer Science Engineering student at Chandigarh University. I am passionate about DevOps, cloud technologies, and scalable systems, while also building modern frontend experiences with React and advanced UI animation techniques.\n\nMy focus is on combining Infrastructure, Automation, Cloud platforms, and Modern web development to build efficient and scalable applications.`,
  email: 'harshsrivastava1427.work@gmail.com',
  phone: '+91 9501951191',
  location: 'Mohali, Punjab, India',
  education: 'Bachelor of Engineering in Computer Science',
  university: 'Chandigarh University (2022–2026)',
  socialLinks: {
    github: 'https://github.com/slayerhxrsh',
    linkedin: 'https://linkedin.com/in/harsh-srivastava',
  },
};

export const projects: DevProject[] = [
  {
    id: '1',
    title: 'Apple Website Clone',
    slug: 'apple-website-clone',
    description: 'Apple-style front-end experience with advanced animations and 3D interactions.',
    longDescription: 'Built a front-end clone of Apple\'s website featuring advanced animations and smooth 3D interactions. Used GSAP for scroll animations and Three.js for interactive product visualization.',
    techStack: ['React', 'GSAP', 'Three.js', 'HTML5', 'CSS3'],
    category: 'frontend',
    githubUrl: 'https://github.com/slayerhxrsh',
    featured: true,
  },
  {
    id: '2',
    title: 'Brainwave — AI Chat App',
    slug: 'brainwave-ai-chat',
    description: 'Modern AI chat interface with futuristic UI and scroll animations.',
    longDescription: 'Developed a visually rich AI chatting interface showcasing cutting-edge UI/UX trends using React.js and Tailwind CSS. Implemented parallax animations, scroll parallax, gradient effects, and modular design for a futuristic, fully responsive experience.',
    techStack: ['React.js', 'Tailwind CSS', 'Vite'],
    category: 'frontend',
    githubUrl: 'https://github.com/slayerhxrsh',
    featured: true,
  },
  {
    id: '3',
    title: 'RentX — Rental Platform',
    slug: 'rentx-rental-platform',
    description: 'Broker-free rental platform with modular architecture and API integration.',
    longDescription: 'Developed a broker-free rental platform enabling users to list and search properties with real-time updates. Implemented RESTful API integration and modular React components for scalability and better performance.',
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/slayerhxrsh',
    featured: true,
  },
  {
    id: '4',
    title: 'D-Vote — Blockchain Voting',
    slug: 'd-vote-blockchain',
    description: 'Decentralized voting system ensuring secure, transparent, and immutable vote storage.',
    longDescription: 'Built a decentralized voting system ensuring secure, transparent, and immutable vote storage using blockchain. Integrated smart contracts for voter verification and developed a responsive React-based interface.',
    techStack: ['React.js', 'Blockchain', 'JavaScript', 'HTML', 'CSS'],
    category: 'blockchain',
    githubUrl: 'https://github.com/slayerhxrsh',
    featured: true,
  },
];

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
export const getFeaturedProjects = () => projects.filter(p => p.featured);

export const skillCategories: SkillCategory[] = [
  {
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'NGINX' },
      { name: 'Linux' },
      { name: 'CI/CD' },
      { name: 'Git & GitHub' },
      { name: 'Cloud Deployment' },
    ],
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js' },
      { name: 'JavaScript' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'GSAP' },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C++' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
    ],
  },
  {
    title: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'Operating Systems' },
      { name: 'Networking' },
      { name: 'Object-Oriented Programming' },
    ],
  },
];

export const certifications: Certification[] = [
  { title: 'Python for Everybody', issuer: 'Coursera' },
  { title: 'Intelligent Systems in AI', issuer: 'Infosys Springboard' },
  { title: 'Introduction to Databases', issuer: 'Coursera' },
  { title: 'Foundation of Cloud IoT and Edge ML', issuer: 'NPTEL' },
  { title: 'Intelligent Systems and Smart Applications', issuer: 'Chandigarh University' },
];

export const hobbies = [
  { name: 'Traveling', icon: '✈️', description: 'Exploring new cultures and landscapes' },
  { name: 'Adventure Activities', icon: '🧗', description: 'Pushing limits with thrilling experiences' },
  { name: 'Exploring New Places', icon: '🗺️', description: 'Discovering hidden gems around the world' },
  { name: 'Technology Exploration', icon: '💻', description: 'Staying on the cutting edge of tech' },
];
