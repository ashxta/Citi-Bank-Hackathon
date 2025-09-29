import { Student, Project, Job } from '@/types/student';

// Mock projects data
const mockProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Smart Campus Navigation System',
    description: 'AI-powered indoor navigation system for SRM Institute using computer vision and IoT sensors',
    technologies: ['React Native', 'TensorFlow', 'Python', 'Firebase'],
    duration: '6 months',
    link: 'https://github.com/vinayak/campus-nav'
  },
  {
    id: 'proj-2',
    title: 'E-Commerce Analytics Platform',
    description: 'Real-time analytics dashboard for tracking user behavior and sales metrics',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    duration: '4 months'
  },
  {
    id: 'proj-3',
    title: 'Blockchain Voting System',
    description: 'Secure and transparent voting system using blockchain technology',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    duration: '5 months'
  },
  {
    id: 'proj-4',
    title: 'AI-Powered Resume Parser',
    description: 'Machine learning system to extract and analyze resume data for recruitment',
    technologies: ['Python', 'NLP', 'Flask', 'PostgreSQL'],
    duration: '3 months'
  },
  {
    id: 'proj-5',
    title: 'IoT Home Automation',
    description: 'Smart home system with voice control and mobile app integration',
    technologies: ['Arduino', 'React Native', 'Firebase', 'Google Assistant'],
    duration: '4 months'
  },
  {
    id: 'proj-6',
    title: 'Social Media Sentiment Analyzer',
    description: 'Real-time sentiment analysis of social media posts using machine learning',
    technologies: ['Python', 'Scikit-learn', 'Twitter API', 'Docker'],
    duration: '3 months'
  }
];

// Mock students data with Chennai-based universities
export const mockStudents: Student[] = [
  {
    id: 'std-1',
    name: 'Vinayak Suryavanshi',
    email: 'vinayak.s@srmist.edu.in',
    university: 'SRM Institute of Science and Technology',
    degree: 'B.Tech Computer Science Engineering',
    cgpa: 9.2,
    skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'MongoDB', 'Docker'],
    interests: ['Full-Stack Development', 'AI/ML', 'Cloud Computing'],
    projects: [mockProjects[0], mockProjects[1]],
    graduationYear: 2024,
    avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`,
    status: 'available',
    location: 'Chennai, Tamil Nadu',
    phone: '+91 98765 43210',
    isFavorite: true,
    isShortlisted: false,
    notes: 'Strong candidate for frontend roles.'
  },
  {
    id: 'std-2',
    name: 'Anushree Dixit',
    email: 'anushree.d@vit.ac.in',
    university: 'VIT University Chennai',
    degree: 'B.Tech Information Technology',
    cgpa: 8.9,
    skills: ['React', 'JavaScript', 'Python', 'Data Science', 'TensorFlow', 'AWS'],
    interests: ['Data Science', 'Frontend Development', 'Machine Learning'],
    projects: [mockProjects[2], mockProjects[3]],
    graduationYear: 2024,
    avatar: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face`,
    status: 'interviewing',
    location: 'Chennai, Tamil Nadu',
    phone: '+91 87654 32109',
    isFavorite: false,
    isShortlisted: true,
    notes: ''
  },
  {
    id: 'std-3',
    name: 'Rushil Mitra',
    email: 'rushil.m@annauniv.edu',
    university: 'Anna University',
    degree: 'B.E Electronics and Communication',
    cgpa: 8.7,
    skills: ['Java', 'Spring Boot', 'Microservices', 'Kubernetes', 'React', 'PostgreSQL'],
    interests: ['Backend Development', 'DevOps', 'System Design'],
    projects: [mockProjects[4], mockProjects[5]],
    graduationYear: 2024,
    avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face`,
    status: 'available',
    location: 'Chennai, Tamil Nadu',
    phone: '+91 76543 21098',
    isFavorite: false,
    isShortlisted: false,
    notes: ''
  },
  {
    id: 'std-4',
    name: 'Ashita',
    email: 'ashita@sathyabama.ac.in',
    university: 'Sathyabama Institute of Science and Technology',
    degree: 'B.Tech Artificial Intelligence and Data Science',
    cgpa: 9.4,
    skills: ['Python', 'Deep Learning', 'NLP', 'Computer Vision', 'PyTorch', 'Pandas'],
    interests: ['Artificial Intelligence', 'Research', 'Data Analytics'],
    projects: [mockProjects[0], mockProjects[3], mockProjects[5]],
    graduationYear: 2024,
    avatar: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face`,
    status: 'hired',
    location: 'Chennai, Tamil Nadu',
    phone: '+91 65432 10987',
    isFavorite: false,
    isShortlisted: false,
    notes: 'Hired by a top tech company.'
  }
];

// Mock jobs data
export const mockJobs: Job[] = [
  {
    id: 'job-1',
    title: 'Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'Chennai, Tamil Nadu',
    description: 'Looking for a skilled Frontend Developer to join our dynamic team',
    requirements: ['React', 'JavaScript', 'TypeScript', 'CSS', 'Git'],
    salary: '₹6-8 LPA',
    type: 'full-time',
    postedBy: 'HR Team',
    postedDate: '2024-01-15'
  },
  {
    id: 'job-2',
    title: 'Data Science Intern',
    company: 'Analytics Pro',
    location: 'Chennai, Tamil Nadu',
    description: 'Internship opportunity in Data Science and Machine Learning',
    requirements: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
    salary: '₹25,000/month',
    type: 'internship',
    postedBy: 'Hiring Manager',
    postedDate: '2024-01-10'
  },
  {
    id: 'job-3',
    title: 'Full Stack Developer',
    company: 'Innovation Labs',
    location: 'Chennai, Tamil Nadu',
    description: 'Full-time position for experienced Full Stack Developer',
    requirements: ['Node.js', 'React', 'MongoDB', 'AWS', 'Docker'],
    salary: '₹8-12 LPA',
    type: 'full-time',
    postedBy: 'CTO',
    postedDate: '2024-01-12'
  }
];
