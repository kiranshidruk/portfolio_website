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
              I'm a dedicated AI Engineer and Data Scientist with over 5 years of experience developing machine learning models, neural networks, and data analytics solutions for organizations across various industries.
            </p>
            <p className="text-lg mb-6">
              My journey began at University of Technology where I earned my Master's degree in Artificial Intelligence and Machine Learning. Since then, I've worked with research labs, tech companies, and enterprise clients to deliver innovative AI-powered solutions that drive business impact.
            </p>
            <p className="text-lg mb-6">
              When I'm not building AI systems, you can find me contributing to open-source machine learning projects, attending AI conferences, or researching the latest advancements in deep learning and natural language processing.
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
                <h3 className="font-semibold mb-2 text-primary">AI & ML</h3>
                <p className="text-muted-foreground">TensorFlow, PyTorch, Keras, Scikit-learn, Transformers, GANs</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-primary">Data Science</h3>
                <p className="text-muted-foreground">Pandas, NumPy, SciPy, Matplotlib, Seaborn, Plotly</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-primary">Big Data</h3>
                <p className="text-muted-foreground">Spark, Hadoop, Kafka, Airflow, Databricks, Snowflake</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2 text-primary">Cloud & MLOps</h3>
                <p className="text-muted-foreground">AWS SageMaker, Azure ML, GCP AI Platform, MLflow, Kubeflow</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
