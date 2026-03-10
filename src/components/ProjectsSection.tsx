import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web App", description: "A full-featured online store with cart, checkout, and payment integration." },
  { title: "Task Management App", category: "SaaS", description: "Collaborative project management tool with real-time updates." },
  { title: "Portfolio Website", category: "Design", description: "A stunning portfolio site for a creative agency." },
  { title: "Social Media Dashboard", category: "Web App", description: "Analytics dashboard for tracking social media engagement." },
  { title: "Fitness Tracker", category: "Mobile App", description: "Cross-platform fitness tracking app with workout plans." },
  { title: "Restaurant Booking", category: "Web App", description: "Online reservation system with real-time availability." },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">My Work</p>
          <h2 className="font-heading text-4xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="image-placeholder aspect-video">
                <span className="text-muted-foreground text-sm">Project Image</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                <h3 className="font-heading font-semibold text-lg mt-2 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </button>
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github size={14} /> Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
