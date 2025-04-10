import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import SectionTitle from "@/components/ui/section-title";
import ProjectCard from "@/components/ui/project-card";
import { ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section 
      id="projects" 
      ref={ref}
      className={`py-20 px-4 bg-gray-50 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-blue-500 hover:underline">
            View All Projects
            <ChevronRight className="h-5 w-5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
