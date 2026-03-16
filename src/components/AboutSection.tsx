import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

const features = [
  { icon: Code, label: "Clean Code" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Zap, label: "Performance" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-placeholder w-full aspect-[4/5] rounded-2xl">
              <span className="text-muted-foreground text-sm">About Photo</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-primary font-medium mb-2 tracking-widest uppercase text-sm">About Me</p>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Passionate about creating <span className="text-gradient">digital experiences</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a full-stack developer with a keen eye for design. I specialize in building modern web applications that are both beautiful and functional. My approach combines clean code with thoughtful UX design.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <div className="flex justify-center mb-2">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;