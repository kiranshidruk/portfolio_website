import React from "react";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";

// Project data
export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with payment processing, inventory management, and customer accounts.",
    imageUrl: "https://example.com/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Travel App",
    description: "A mobile-first application for travelers to discover destinations, plan itineraries, and share experiences.",
    imageUrl: "https://example.com/project2.jpg",
    technologies: ["React Native", "Firebase", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "An interactive dashboard for businesses to visualize data, track KPIs, and generate custom reports.",
    imageUrl: "https://example.com/project3.jpg",
    technologies: ["Vue.js", "D3.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Skills data
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Skill {
  icon: IconComponent;
  name: string;
  color: string;
}

export const skills: Skill[] = [
  { icon: FaReact, name: "React", color: "text-blue-500" },
  { icon: FaVuejs, name: "Vue.js", color: "text-green-500" },
  { icon: FaAngular, name: "Angular", color: "text-red-500" },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
  { icon: FaPython, name: "Python", color: "text-blue-600" },
  { icon: BiLogoMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-blue-700" },
  { icon: FaDocker, name: "Docker", color: "text-blue-500" },
  { icon: FaAws, name: "AWS", color: "text-orange-400" },
];

// Skill categories
export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "Responsive Web Design",
      "Progressive Web Apps",
      "State Management",
      "UI/UX Implementation",
      "Performance Optimization",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "RESTful APIs",
      "GraphQL",
      "Authentication & Authorization",
      "Serverless Architecture",
      "Microservices",
    ],
  },
  {
    title: "Database Management",
    skills: [
      "Schema Design",
      "Query Optimization",
      "Data Modeling",
      "Migration Strategies",
      "Backup & Recovery",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "CI/CD Pipelines",
      "Container Orchestration",
      "Infrastructure as Code",
      "Version Control (Git)",
      "Monitoring & Logging",
    ],
  },
];

// Experience data
export const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    period: "2020 - Present",
    responsibilities: [
      "Led development of enterprise-level web applications for fortune 500 clients",
      "Architected scalable microservices using Node.js and Docker",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "WebFront Agency",
    period: "2018 - 2020",
    responsibilities: [
      "Developed responsive web applications using React and Express",
      "Created RESTful APIs integrated with various third-party services",
      "Optimized database queries improving application performance by 40%",
      "Collaborated with UX/UI designers to implement pixel-perfect interfaces",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Creations",
    period: "2016 - 2018",
    responsibilities: [
      "Built responsive user interfaces using HTML, CSS, and JavaScript",
      "Implemented interactive features with jQuery and vanilla JavaScript",
      "Collaborated in an agile team environment",
      "Maintained and updated existing client websites",
    ],
  },
];

// Education data
export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2012 - 2016",
  },
  {
    degree: "Web Development Certification",
    institution: "Tech Academy",
    period: "2016",
  },
];
