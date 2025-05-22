import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            {/* <a href={project.liveUrl} className="text-blue-500 hover:underline">Live Demo</a> */}
            <a href={project.githubUrl} className="text-blue-500 hover:underline">GitHub</a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
