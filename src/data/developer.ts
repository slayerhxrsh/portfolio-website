import type { DeveloperInfo, DevProject, SkillCategory, Certification, Experience, ResearchPaper } from '@/types';
import appleIphoneImg from '@/assets/AppleIphone.png';
import brainwaveImg from '@/assets/Brainwave.png';

export const developerInfo: DeveloperInfo = {
  name: 'Harsh Srivastava',
  title: 'Aspiring DevOps Engineer',
  subtitle: 'Frontend Engineer',
  tagline: 'Building scalable infrastructure, automated systems, and modern web experiences.',
  bio: `I’m Harsh Srivastava. My core focus is on DevOps, cloud infrastructure, and automation. I genuinely enjoy the challenge of building scalable and reliable systems from the ground up—whether that means orchestrating containers with Docker, configuring CI/CD pipelines, or architecting environments on AWS.\n\nWhile infrastructure and backend operations are my primary strengths, I also have a solid foundation in frontend development. I regularly use React and Tailwind CSS to build clean, interactive user interfaces, allowing me to bridge the gap between complex server environments and seamless user experiences.\n\nI treat tech as a continuous learning curve. I'm always exploring new tools, from Nginx proxy routing to the latest AI developments. My ultimate goal is simple: to combine rock-solid infrastructure with modern web development to deliver highly efficient software.`,
  email: 'harshsrivastava1427.work@gmail.com',
  phone: '+91 9501951191',
  location: 'Mohali, Punjab, India',
  education: 'Bachelor of Engineering in Computer Science',
  university: 'Chandigarh University (2022–2026)',
  socialLinks: {
    github: 'https://github.com/slayerhxrsh',
    linkedin: 'https://www.linkedin.com/in/harshsrivastava1427work',
  },
};

export const projects: DevProject[] = [
  {
    id: 'docker-3-tier',
    title: '3-Tier Application using Docker Compose',
    slug: '3-tier-docker-compose',
    description: 'Implemented a 3-tier containerized architecture using Docker Compose.',
    longDescription: 'Implemented a 3-tier containerized architecture using Docker Compose including: Thymeleaf frontend, Spring Boot backend, MySQL database. Services were orchestrated using Docker Compose with Maven-built backend images and containerized database infrastructure.',
    techStack: ['Docker', 'Docker Compose', 'Spring Boot', 'MySQL', 'Thymeleaf'],
    category: 'devops',
    featured: true,
  },
  {
    id: 'django-nginx',
    title: 'Deploying Web Application using Nginx and MySQL',
    slug: 'deploying-web-app-nginx-mysql',
    description: 'Deployed a Django web application using Nginx as a reverse proxy and proxy server.',
    longDescription: 'Deployed a Django web application using Nginx as a reverse proxy and proxy server, integrated with a MySQL database backend to improve performance and application routing.',
    techStack: ['Django', 'Nginx', 'MySQL'],
    category: 'devops',
    featured: true,
  },
  {
    id: 'docker-2-tier',
    title: 'Two Tier Application via Docker Network',
    slug: 'two-tier-application-docker-network',
    description: 'Built a two-tier containerized application using Docker networking.',
    longDescription: 'Built a two-tier containerized application using Docker networking. This project demonstrates container communication and service connectivity.',
    techStack: ['Docker', 'Flask', 'MySQL'],
    category: 'devops',
    featured: true,
  },
  {
    id: 's3-hosting',
    title: 'Static Website Hosting on AWS S3',
    slug: 'static-website-hosting-aws-s3',
    description: 'Deployed and hosted a static website using AWS S3 static website hosting.',
    longDescription: 'Deployed and hosted a static website using AWS S3 static website hosting. Configured bucket policies, public access permissions, and optimized delivery for static assets.',
    techStack: ['AWS', 'S3'],
    category: 'devops',
    featured: true,
  },
  {
    id: 'ec2-rds',
    title: 'EC2 to RDS Database Connectivity',
    slug: 'ec2-rds-database-connectivity',
    description: 'Connected an EC2 instance to an AWS RDS MySQL database.',
    longDescription: 'Connected an EC2 instance to an AWS RDS MySQL database and performed database operations such as inserting, reading, and deleting records to demonstrate cloud database connectivity.',
    techStack: ['AWS', 'EC2', 'RDS', 'MySQL'],
    category: 'devops',
    featured: true,
  },
  {
    id: 'vpc-infra',
    title: 'AWS VPC Infrastructure Implementation',
    slug: 'aws-vpc-infrastructure-implementation',
    description: 'Designed and implemented a custom AWS VPC architecture.',
    longDescription: 'Designed and implemented a custom AWS VPC architecture including: public subnet, private subnet, EC2 instance, DB server EC2, NAT Gateway, Internet Gateway, Route Tables, Elastic IP, Availability Zones A and B. Demonstrates cloud networking and secure infrastructure design.',
    techStack: ['AWS', 'VPC', 'EC2', 'Networking'],
    category: 'devops',
    featured: true,
  },
  {
    id: 'ecs-ecr',
    title: 'Node.js Deployment using Docker, AWS ECR and ECS',
    slug: 'nodejs-deployment-docker-aws-ecr-ecs',
    description: 'Containerized a Node.js application using Docker and pushed the image to AWS ECR.',
    longDescription: 'Containerized a Node.js application using Docker and pushed the image to AWS ECR. Configured AWS ECS to pull and run the container image while assigning IAM roles and policies to EC2 instances. Integrated CloudWatch logging for monitoring container logs.',
    techStack: ['Docker', 'AWS', 'ECR', 'ECS', 'Node.js'],
    category: 'devops',
    featured: true,
  },
  {
    id: '1',
    title: 'Apple Website Clone',
    slug: 'apple-website-clone',
    description: 'Front-end clone of Apple’s website with advanced UI animations and 3D interactions using GSAP and Three.js.',
    longDescription: 'Front-end clone of Apple’s website with advanced UI animations and 3D interactions using GSAP and Three.js.',
    techStack: ['React', 'GSAP', 'Three.js', 'HTML5', 'CSS3'],
    category: 'frontend',
    githubUrl: 'https://github.com/slayerhxrsh/Apple-Website-Clone-FrontEnd-',
    liveUrl: 'https://a-p-p-l-e-websitebyharsh.netlify.app/',
    featured: true,
    coverImage: appleIphoneImg,
  },
  {
    id: '2',
    title: 'Brainwave — AI Chat App',
    slug: 'brainwave-ai-chat',
    description: 'Modern AI chat interface built using React and Tailwind CSS featuring futuristic UI design, modular components, and smooth scroll animations.',
    longDescription: 'Modern AI chat interface built using React and Tailwind CSS featuring futuristic UI design, modular components, and smooth scroll animations.',
    techStack: ['React.js', 'Tailwind CSS', 'Vite'],
    category: 'frontend',
    githubUrl: 'https://github.com/slayerhxrsh/Brainwavebyharsh-an-AI-chatting-app-frontend',
    liveUrl: 'https://brainwavebyharsh.netlify.app/',
    featured: true,
    coverImage: brainwaveImg,
  },
  {
    id: '3',
    title: 'RentX — Rental Platform',
    slug: 'rentx-rental-platform',
    description: 'Broker-free rental platform with modular architecture and API integration.',
    longDescription: 'Developed a broker-free rental platform enabling users to list and search properties with real-time updates. Implemented RESTful API integration and modular React components for scalability and better performance.',
    techStack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/slayerhxrsh/RentX-Home-Rental-Website',
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
      { name: 'Jenkins' },
      { name: 'Oracle VirtualBox' },
      { name: 'NGINX' },
      { name: 'Linux' },
      { name: 'CI/CD' },
      { name: 'Git & GitHub' },
      { name: 'Cloud Deployment' },
    ],
  },
  {
    title: 'AI Tools I Use',
    skills: [
      { name: 'GPT' },
      { name: 'Gemini' },
      { name: 'Anthropic' },
      { name: 'Emergent' },
      { name: 'Lovable' },
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

export const experiences: Experience[] = [
  {
    role: 'Operations and Treasurer (Domain Head)',
    company: 'Eloquence Consortium (IEEE Club) – Chandigarh University',
    duration: 'August 2024 – April 2025',
    location: 'Mohali, Punjab',
    responsibilities: [
      'Oversaw planning and execution of technical workshops, club events, and team meetings',
      'Managed fundraising initiatives, sponsorships, and membership fee collection',
      'Collaborated with executive committee members on operational planning',
      'Prepared and presented financial reports for the IEEE chapter',
    ],
  },
];

export const researchPapers: ResearchPaper[] = [
  {
    title: 'Decentralised Voting System',
    conference: 'ICCCNET 2025',
    description: 'Research work focused on decentralized voting systems and secure digital voting infrastructure.',
  },
];
