import { Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/ui/section-title";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function About() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 px-4 bg-white transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              I'm a passionate full-stack developer with over 5 years of experience building web applications and digital solutions for clients across various industries.
            </p>
            <p className="text-lg mb-6">
              My journey in software development began at University of Technology where I earned my Bachelor's degree in Computer Science. Since then, I've worked with agencies and startups to deliver high-quality, user-focused solutions.
            </p>
            <p className="text-lg mb-6">
              When I'm not coding, you can find me exploring the outdoors, playing guitar, or experimenting with new technologies to expand my skillset.
            </p>
            
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-primary">Frontend</h3>
                <p className="text-muted-foreground">React, Vue, Angular, HTML/CSS, JavaScript, TypeScript</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-primary">Backend</h3>
                <p className="text-muted-foreground">Node.js, Express, Django, Flask, Laravel</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-primary">Database</h3>
                <p className="text-muted-foreground">MongoDB, PostgreSQL, MySQL, Firebase</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-primary">DevOps</h3>
                <p className="text-muted-foreground">AWS, Docker, CI/CD, Git, GitHub Actions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
