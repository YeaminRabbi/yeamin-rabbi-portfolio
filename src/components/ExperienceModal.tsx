import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, Building } from "lucide-react";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceModal = ({ experience, isOpen, onClose }: ExperienceModalProps) => {
  if (!experience) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg glass-card border-border bg-card/95 backdrop-blur-xl">
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-foreground">
                {experience.role}
              </DialogTitle>
              <div className="flex items-center gap-2 text-primary mt-1">
                <Building className="w-4 h-4" />
                <span className="font-medium">{experience.company}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm bg-secondary/50 px-3 py-2 rounded-lg w-fit">
            <Calendar className="w-4 h-4" />
            {experience.period}
          </div>

          <DialogDescription className="text-muted-foreground text-base leading-relaxed">
            {experience.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-primary rounded-full" />
            Technologies & Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <Badge
                key={index}
                className="bg-primary/10 text-primary border-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceModal;
