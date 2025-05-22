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
import {
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiApachekafka,
  SiApachespark,
} from "react-icons/si";

// Project data
export const projects = [
  {
    title: "Self-Driving Car",
    description: "Developed a self-driving car simulation system using CNNs with 95%+ accuracy and real-time decision latency under 50ms.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    imageUrl: "images/self_driving_car.png",
    liveUrl: "",
    githubUrl: "https://github.com/kiranshidruk/Self-Driving-Car",
  },
  {
    title: "MLOps US Visa Prediction",
    description: "Built a robust pipeline using MongoDB, AWS, and Random Forest with 97.33% accuracy in visa approval prediction.",
    technologies: ["Python", "MongoDB", "AWS", "Random Forest", "KNN"],
    imageUrl: "images/us_visa_prediction.png",
    liveUrl: "",
    githubUrl: "https://github.com/kiranshidruk/MLOps-Prod-US-VISA-Prediction",
  },
  {
    title: "BELONG - Multilingual Legal Assistant",
    description: "Created a multilingual legal assistance app using Flask and OpenAI to automate and process 30+ legal documents.",
    technologies: ["Python", "Flask", "OpenAI", "JavaScript", "Text-to-Audio"],
    imageUrl: "images/belong.png",
    liveUrl: "",
    githubUrl: "https://github.com/kiranshidruk/Belong",
  }
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
    title: "Machine Learning Research Intern",
    company: "Drexel University",
    period: "Dec 2024 – Present",
    responsibilities: [
      "Evaluating vision-language models, aiming to improve zero-shot learning accuracy by 10% for hand-drawn scientific models.",
      "Assessing 5+ models including CLIP, Llava 1.5, and GPT-4V for suitability in zero-shot learning tasks.",
      "Developing continual learning algorithms and conducting 20+ experiments to optimize performance.",
      "Contributing to academic reports targeting 20% improvement in model robustness and efficiency."
    ],
  },
  {
    title: "Data Scientist",
    company: "Great Software Laboratory, Pune, India",
    period: "May 2021 – Dec 2023",
    responsibilities: [
      "Engineered an AI-driven anomaly detection system using Naive Bayes, improving detection accuracy by 15%.",
      "Designed a log parsing framework to reduce latency by 12% while structuring raw logs.",
      "Integrated rule-based triggers and ML models, reducing false positives by 20%.",
      "Deployed solution to handle 1,000+ events/sec, reducing operational response time by 20%."
    ],
  },
  {
    title: "Trainee Software Engineer",
    company: "Hefshine Softwares, Pune, India",
    period: "Jan 2021 – May 2021",
    responsibilities: [
      "Architected full-stack application to enhance data retrieval efficiency by 25%.",
      "Developed scalable backend using SpringBoot, SQL, and REST APIs to handle 10,000+ queries/day.",
      "Improved system efficiency by 30%, delivering on-time, maintainable application."
    ],
  },
];

// Education data
export const education = [
  {
    degree: "M.S. in Artificial Intelligence and Machine Learning",
    institution: "Drexel University",
    period: "2024 – 2025",
  },
  {
    degree: "B.E. in Electronics and Telecommunication Engineering",
    institution: "Mumbai University",
    period: "2015 – 2019",
  },
];

// Certification data
export const certifications = [
  {
    title: "Post Graduate Program in AI and Machine Learning",
    institution: "IIIT Bangalore",
    period: "Jan 2022 – May 2023",
  },
  {
    title: "IBM Professional Data Science Certificate",
    institution: "Coursera / IBM",
    period: "Mar 2022 – May 2022",
  },
];