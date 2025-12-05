import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  onClick: () => void;
}

const ExperienceCard = ({ experience, index, onClick }: ExperienceCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative p-6 rounded-2xl glass-card card-hover cursor-pointer opacity-0 animate-slide-in-left"
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex gap-5">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {experience.role}
            </h3>
            <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
              {experience.period}
            </span>
          </div>

          {/* Company */}
          <p className="text-primary font-medium mb-3">{experience.company}</p>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <Badge
                key={techIndex}
                variant="outline"
                className="text-xs bg-transparent border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
