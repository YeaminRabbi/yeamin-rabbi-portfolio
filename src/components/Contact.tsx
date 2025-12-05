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
          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl glass-card text-center group opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground text-sm font-medium">{item.value}</p>
                )}
              </div>
            ))}
          </div>

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
