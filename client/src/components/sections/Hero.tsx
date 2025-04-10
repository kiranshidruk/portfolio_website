import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
            Hello, I'm <span className="text-blue-500">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive to user needs.
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
            <svg
              className="w-full h-full text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
