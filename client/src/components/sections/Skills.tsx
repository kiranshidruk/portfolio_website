import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import SectionTitle from "@/components/ui/section-title";
import SkillBadge from "@/components/ui/skill-badge";
import { skills, skillCategories } from "@/lib/data";

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section 
      id="skills" 
      ref={ref}
      className={`py-20 px-4 bg-white transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <SectionTitle>Skills & Technologies</SectionTitle>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <SkillBadge key={index} {...skill} />
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-3 text-primary">{category.title}</h3>
              <ul className="space-y-2 text-muted-foreground">
                {category.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
