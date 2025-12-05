import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import TypingAnimation from "./TypingAnimation";

const roles = [
  "Software Engineer",
  "Laravel Developer",
  "Backend Engineer",
  "PHP Developer",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(162_95%_50%/0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,hsl(280_100%_70%/0.08),transparent_40%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animate-delay-500" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in animate-delay-100">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-text">{profile.name.split(' ')[0]}</span>
          </h1>

          {/* Title with typing animation */}
          <div className="mb-8 animate-fade-in animate-delay-200 h-12 md:h-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
              <TypingAnimation words={roles} typingSpeed={80} deletingSpeed={40} pauseDuration={1500} />
            </h2>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in animate-delay-300">
            {profile.bio}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-fade-in animate-delay-300">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{profile.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in animate-delay-400">
            <Button variant="glow" size="lg" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#projects">
                View Projects
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in animate-delay-500">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce mt-15">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
