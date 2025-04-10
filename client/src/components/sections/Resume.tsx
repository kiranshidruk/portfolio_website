import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import SectionTitle from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { experiences, education } from "@/lib/data";

export default function Resume() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section 
      id="resume" 
      ref={ref}
      className={`py-20 px-4 bg-gray-50 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <SectionTitle>Resume</SectionTitle>
        
        <Card className="bg-white">
          <CardContent className="p-8">
            {/* Experience Section */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">Professional Experience</h3>
              
              {experiences.map((experience, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">{experience.title}</h4>
                    <span className="text-blue-500 font-medium">{experience.period}</span>
                  </div>
                  <h5 className="text-muted-foreground mb-3">{experience.company}</h5>
                  <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Education Section */}
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-200">Education</h3>
              
              {education.map((edu, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <span className="text-blue-500 font-medium">{edu.period}</span>
                  </div>
                  <h5 className="text-muted-foreground">{edu.institution}</h5>
                </div>
              ))}
            </div>
            
            {/* Download Button */}
            <div className="text-center">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white inline-flex items-center gap-2 px-6 py-3 h-auto">
                <Download className="h-5 w-5" />
                Download Full Resume
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
