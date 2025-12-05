import { technicalSkills, softSkills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { Code, Users } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and methodologies I work with"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="p-8 rounded-2xl glass-card opacity-0 animate-slide-in-left" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-secondary/80 text-sm text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="p-8 rounded-2xl glass-card opacity-0 animate-slide-in-right" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Soft Skills</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-secondary/80 text-sm text-foreground hover:bg-accent/20 hover:text-accent transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
