import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface Project {
  id: number;
  title: string;
  tech: string;
  description: string;
  fullDescription: string;
  features: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glass-card border-border bg-card/95 backdrop-blur-xl">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between pr-10">
            <div>
              <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                {project.title}
              </DialogTitle>
              <Badge className="bg-primary/20 text-primary border-primary/30 font-mono">
                {project.tech}
              </Badge>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
              {String(project.id).padStart(2, '0')}
            </div>
          </div>
          <DialogDescription className="text-muted-foreground text-base leading-relaxed">
            {project.fullDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            Key Features
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 text-sm text-muted-foreground"
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
