import { education, achievements } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(162_95%_50%/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic background and professional development"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              Education
            </h3>
            
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 rounded-xl glass-card opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {edu.degree}
                </h4>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              Certifications
            </h3>
            
            <div className="p-6 rounded-xl glass-card opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
