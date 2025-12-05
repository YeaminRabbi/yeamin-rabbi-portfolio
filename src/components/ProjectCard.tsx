import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  tech: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group relative p-6 rounded-2xl glass-card card-hover cursor-pointer border-gradient opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Project number */}
        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-mono text-muted-foreground group-hover:text-primary group-hover:bg-primary/20 transition-all duration-300">
          {String(project.id).padStart(2, '0')}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 pr-8">
          {project.title}
        </h3>

        {/* Tech badge */}
        <Badge variant="secondary" className="mb-4 font-mono text-xs bg-primary/10 text-primary border-primary/20">
          {project.tech}
        </Badge>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* View more */}
        <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          View Details
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
