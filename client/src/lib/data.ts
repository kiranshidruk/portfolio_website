import React from "react";
import {
  FaPython,
  FaDocker,
  FaAws,
  FaDatabase,
  FaBrain,
  FaChartBar,
  FaCloudUploadAlt,
  FaRobot,
  FaCode,
  FaCogs,
  FaServer,
  FaNetworkWired,
} from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiKeras, SiScikitlearn, SiNumpy, SiPandas, SiPlotly, SiApachekafka, SiApachespark } from "react-icons/si";

// Project data
export const projects = [
  {
    title: "Computer Vision Healthcare System",
    description: "An AI-powered system for medical image analysis that uses deep learning to detect anomalies in X-rays and MRIs with 94% accuracy.",
    imageUrl: "https://example.com/project1.jpg",
    technologies: ["PyTorch", "TensorFlow", "OpenCV", "Python"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Natural Language Processing Chatbot",
    description: "An advanced conversational AI using transformer-based architecture to provide personalized customer support and reduce query resolution time by 65%.",
    imageUrl: "https://example.com/project2.jpg",
    technologies: ["BERT", "GPT", "spaCy", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Predictive Analytics Platform",
    description: "A big data platform that processes terabytes of data to generate real-time insights and predict market trends with 87% precision.",
    imageUrl: "https://example.com/project3.jpg",
    technologies: ["Spark", "Kafka", "Scikit-learn", "Plotly"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Recommendation Engine",
    description: "A collaborative filtering and content-based recommendation system that increased user engagement by 45% for an e-commerce platform.",
    imageUrl: "https://example.com/project4.jpg",
    technologies: ["Python", "NumPy", "Pandas", "Flask"],
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
  { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-500" },
  { icon: SiPytorch, name: "PyTorch", color: "text-red-500" },
  { icon: SiKeras, name: "Keras", color: "text-red-600" },
  { icon: SiScikitlearn, name: "Scikit-learn", color: "text-blue-500" },
  { icon: FaPython, name: "Python", color: "text-blue-600" },
  { icon: FaBrain, name: "Deep Learning", color: "text-purple-600" },
  { icon: SiNumpy, name: "NumPy", color: "text-blue-400" },
  { icon: SiPandas, name: "Pandas", color: "text-blue-800" },
  { icon: FaChartBar, name: "Data Analysis", color: "text-green-600" },
  { icon: SiPlotly, name: "Data Visualization", color: "text-purple-500" },
  { icon: SiApachespark, name: "Spark", color: "text-orange-600" },
  { icon: SiApachekafka, name: "Kafka", color: "text-black" },
];

// Skill categories
export const skillCategories = [
  {
    title: "Machine Learning",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Neural Networks",
      "Deep Learning",
      "Reinforcement Learning",
    ],
  },
  {
    title: "Data Science",
    skills: [
      "Statistical Analysis",
      "Data Mining",
      "Predictive Modeling",
      "Feature Engineering",
      "A/B Testing",
    ],
  },
  {
    title: "Big Data",
    skills: [
      "Data Processing",
      "Data Warehousing",
      "Distributed Computing",
      "ETL Pipelines",
      "Real-time Analytics",
    ],
  },
  {
    title: "MLOps & Deployment",
    skills: [
      "Model Versioning",
      "Model Monitoring",
      "Model Optimization",
      "Serverless Inference",
      "Edge AI Deployment",
    ],
  },
];

// Experience data
export const experiences = [
  {
    title: "Senior AI Engineer",
    company: "TechInnovate AI",
    period: "2020 - Present",
    responsibilities: [
      "Led a team of 5 ML engineers in developing computer vision algorithms for autonomous systems",
      "Implemented transformer-based NLP models improving customer sentiment analysis accuracy by 35%",
      "Created an MLOps pipeline resulting in 60% faster model deployment and improved monitoring",
      "Collaborated with data scientists and product managers to define AI strategy and roadmap",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "DataMind Solutions",
    period: "2018 - 2020",
    responsibilities: [
      "Developed predictive models using PyTorch and TensorFlow for financial forecasting",
      "Built recommendation systems increasing customer engagement by 40%",
      "Optimized machine learning pipelines reducing inference time by 65%",
      "Worked with large datasets using Spark and distributed computing techniques",
    ],
  },
  {
    title: "Data Scientist",
    company: "Analytics Insight",
    period: "2016 - 2018",
    responsibilities: [
      "Performed exploratory data analysis on customer behavior datasets",
      "Created interactive dashboards and visualizations to communicate findings to stakeholders",
      "Developed statistical models for anomaly detection in security systems",
      "Collaborated with cross-functional teams to implement data-driven decision making",
    ],
  },
];

// Education data
export const education = [
  {
    degree: "Master of Science in Artificial Intelligence",
    institution: "University of Technology",
    period: "2016 - 2018",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2012 - 2016",
  },
  {
    degree: "Deep Learning Specialization",
    institution: "Coursera (by Andrew Ng)",
    period: "2019",
  },
  {
    degree: "TensorFlow Developer Certification",
    institution: "Google",
    period: "2020",
  },
];
