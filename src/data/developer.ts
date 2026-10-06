import type { DeveloperInfo, DevProject, SkillCategory, Certification, Experience, ResearchPaper } from '@/types';
import appleIphoneImg from '@/assets/AppleIphone.png';
import brainwaveImg from '@/assets/Brainwave.png';

export const developerInfo: DeveloperInfo = {
  name: 'Harsh Srivastava',
  title: 'AI Backend Engineer',
  subtitle: 'Cloud & DevOps',
  tagline: 'Building agentic AI workflows, LLM-powered backends, and intelligent APIs on a solid cloud foundation.',
  bio: `I’m Harsh Srivastava, a Computer Science graduate and AI Backend Engineer. My core focus is on Agentic AI and LLM applications—building practical AI workflows with LangGraph, RAG, and LLM APIs, and turning them into reliable, intelligent backend systems and APIs.\n\nAt Azalio Technologies, I work on AI-powered backend systems, including a transcript correction agent that repairs misheard technical terms, uses AI self-verification to decide when external web research is needed, and leaves uncertain corrections for human review. I also built an AI Teaching Agent that turns interview requirements into personalized study guides.\n\nBehind the AI work is a strong foundation in cloud and DevOps—Docker, AWS, NGINX, Jenkins, and CI/CD pipelines—along with frontend skills in React and Tailwind CSS. I treat tech as a continuous learning curve, and my goal is simple: to build AI systems that are not just smart, but dependable in production.`,
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
    id: 'ai-teaching-agent',
    title: 'AI Teaching Agent (Study Guide Generator)',
    slug: 'ai-teaching-agent',
    description: 'An agentic workflow that analyzes technical roles and generates structured, personalized interview-preparation study guides.',
    longDescription: 'Built an agentic workflow that analyzes technical roles and generates structured, personalized interview-preparation study guides. Designed workflows for question analysis, web-grounded research, candidate-answer evaluation, and identification of weak areas. Uses LLM-driven workflows to convert interview requirements into structured learning paths covering key concepts, interview patterns, and practical examples.',
    techStack: ['Python', 'LangGraph', 'LLMs', 'Agentic AI', 'OpenRouter', 'RAG'],
    category: 'ai',
    featured: true,
  },
  {
    id: 'meetily-correction-agent',
    title: 'Meetily – Transcript Correction Agent',
    slug: 'meetily-transcript-correction-agent',
    description: 'An AI-powered correction agent for Meetily’s audio-to-transcript pipeline that repairs inaccurate Hinglish and technical-term transcriptions.',
    longDescription: 'Extended Meetily’s audio-to-transcript pipeline with an AI-powered correction agent to improve inaccurate Hinglish and technical-term transcriptions. Developed an automated workflow that identifies and repairs misheard terms, uses AI self-verification to decide when external web research is required, and leaves uncertain corrections for human review.',
    techStack: ['Python', 'LLMs', 'Agentic AI', 'APIs', 'LangGraph'],
    category: 'ai',
    featured: true,
  },
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
  {
    id: 'jenkins-cicd',
    title: 'Django Notes App CI/CD Pipeline',
    slug: 'django-notes-app-ci-cd-pipeline',
    description: 'Deployed a Django notes app fully through continuous Integration(CI) & continuous deployment(CD) using webhooks, pushing on DockerHub, EC2, and deploying through Docker Compose.',
    longDescription: 'Deployed a Django notes app fully through continuous Integration(CI) & continuous deployment(CD). The pipeline automates testing, building, and pushing Docker images to DockerHub using Jenkins and GitHub Webhooks. It continuously deploys to an AWS EC2 instance using Docker Compose for seamless container orchestration.',
    techStack: ['Jenkins', 'Docker', 'Docker Compose', 'AWS EC2', 'Django'],
    category: 'devops',
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
      { name: 'Claude' },
      { name: 'LangGraph' },
      { name: 'Langfuse' },
      { name: 'GitHub SDD' },
      { name: 'Emergent' },
      { name: 'Lovable' },
      { name: 'Agentic AI' },
      { name: 'RAG' },
      { name: 'LLMs' },
      { name: 'OpenRouter' },
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
  { 
    title: 'AWS Certified Cloud Practitioner', 
    issuer: 'Amazon Web Services (AWS)', 
    url: 'https://www.credly.com/badges/9a945124-3df1-4a2a-a5e2-5710354d7f46/public_url',
    highlight: true 
  },
  { title: 'Python for Everybody', issuer: 'Coursera', url: 'https://drive.google.com/file/d/1gJmX914-_3B9gAWZzxQ_sjqqLVFszeG_/view?usp=sharing' },
  { title: 'Intelligent Systems in AI', issuer: 'Infosys Springboard', url: 'https://drive.google.com/file/d/1-yv99Ou6JrFdoP13L6lBrXPAERJiZTcl/view?usp=drive_link' },
  { title: 'Introduction to Databases', issuer: 'Coursera', url: 'https://drive.google.com/file/d/1GZ-pxmgzNgBPgWKLTiAtDYUnBvSYvqWa/view?usp=sharing' },
  { title: 'Intelligent Systems and Smart Applications', issuer: 'Chandigarh University', url: 'https://drive.google.com/file/d/1FcJaDxuAPK2VBs_f6FBKyMx6FHaeewfL/view?usp=sharing' },
  { title: '5G Network Fundamentals', issuer: 'Coursera', url: 'https://drive.google.com/file/d/1c_-Y4x7zk6MaTAWeXg3Th_8D-0JZtBar/view?usp=sharing' },
  { title: 'Foundation of Cloud IoT and Edge ML', issuer: 'NPTEL', url: 'https://drive.google.com/file/d/1Cv3Xfg6M9S-JVOl4JE0YMF6JH4rKGmiB/view?usp=sharing' },
  { title: 'Introduction to AI', issuer: 'IBM + Coursera', url: 'https://drive.google.com/file/d/19sHoFfFAe56PzJFijVzJgnDsvbRo4H4p/view?usp=sharing' },
  { title: 'React Native', issuer: 'Meta + Coursera', url: 'https://drive.google.com/file/d/1nHjUPH-f5eYBiQHWKMypvwMkstZ7JmoK/view?usp=sharing' },
  { title: 'Architecting Smart IoT Devices', issuer: 'Google?', url: 'https://drive.google.com/file/d/1R_tseHEAKx_cRtoMkJASQq80HA--soSi/view?usp=sharing' },
];

export const hobbies = [
  { name: 'Traveling', icon: '✈️', description: 'Exploring new cultures and landscapes' },
  { name: 'Adventure Activities', icon: '🧗', description: 'Pushing limits with thrilling experiences' },
  { name: 'Exploring New Places', icon: '🗺️', description: 'Discovering hidden gems around the world' },
  { name: 'Technology Exploration', icon: '💻', description: 'Staying on the cutting edge of tech' },
];

export const experiences: Experience[] = [
  {
    role: 'AI Backend Engineer (Intern)',
    company: 'Azalio Technologies',
    duration: 'May 2026 – Present',
    location: 'Mohali, Punjab',
    responsibilities: [
      'Contributing to AI-powered backend systems and intelligent APIs for real-world applications.',
      'Worked on an AI-based transcript correction workflow to identify and repair misheard technical terms while leaving uncertain corrections unchanged.',
      'Designed and refined automated correction workflows involving AI self-verification and deciding when external web research is required.',
      'Contributed to speaker-identification and transcript-processing workflows and validated improvements using real interview recordings.',
    ],
  },
  {
    role: 'Operations and Treasurer (Student Member)',
    company: 'Eloquence Consortium – Chandigarh University',
    duration: 'August 2024 – April 2025',
    location: 'Mohali, Punjab',
    responsibilities: [
      'Oversaw planning and execution of technical workshops, club events, and team meetings',
      'Managed fundraising initiatives, sponsorships, and membership fee collection',
      'Collaborated with executive committee members on operational planning',
      'Prepared and presented financial reports',
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
