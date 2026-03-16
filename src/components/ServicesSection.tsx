import { motion } from "framer-motion";
import { Globe, Server, Figma } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Building responsive, performant websites with modern frameworks and best practices.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable server architectures, APIs, and database design for robust applications.",
  },
  {
    icon: Figma,
    title: "UI/UX Design",
    description: "Intuitive interfaces and engaging user experiences that delight users.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">What I Do</p>
          <h2 className="font-heading text-4xl font-bold">
            My <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;