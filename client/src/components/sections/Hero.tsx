import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "../../assets/Kiran_Shidruk_Portrait.jpg";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 px-4"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-blue-500">Kiran Shidruk</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            AI Engineer & Data Scientist
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I develop cutting-edge AI solutions, machine learning models, and data-driven applications to solve complex business problems and drive innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 h-auto font-medium"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 h-auto font-medium"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-full w-64 h-64 overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={profileImage} 
              alt="Kiran Shidruk" 
              className="w-full h-full object-cover object-top"
              style={{ objectPosition: "center 20%" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
