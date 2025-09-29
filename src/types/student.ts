export interface Student {
  id: string;
  name: string;
  email: string;
  university: string;
  degree: string;
  cgpa: number;
  skills: string[];
  interests: string[];
  projects: Project[];
  graduationYear: number;
  avatar: string;
  status: 'available' | 'hired' | 'interviewing';
  location: string;
  phone: string;
  isFavorite?: boolean;
  isShortlisted?: boolean;
  notes?: string;
  linkedin?: string;
  github?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  link?: string;
}

export interface Recruiter {
  id: string;
  name: string;
  company: string;
  email: string;
  position: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  salary: string;
  type: 'full-time' | 'part-time' | 'internship';
  postedBy: string;
  postedDate: string;
}
