import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: profile.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: profile.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(162_95%_50%/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Let's Connect"
          subtitle="I'm always open to discussing new projects and opportunities"
        />

        <div className="max-w-2xl mx-auto">
        {/* Social links & CTA */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

            <Button variant="glow" size="xl" asChild>
              <a href={`mailto:${profile.email}`}>
                <Mail className="w-5 h-5" />
                Send me an email
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
