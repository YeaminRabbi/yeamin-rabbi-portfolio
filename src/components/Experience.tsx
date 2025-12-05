import { useState } from "react";
import { experience } from "@/data/portfolio";
import ExperienceCard from "./ExperienceCard";
import ExperienceModal from "./ExperienceModal";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<typeof experience[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExperienceClick = (exp: typeof experience[0]) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,hsl(280_100%_70%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey in software development"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              onClick={() => handleExperienceClick(exp)}
            />
          ))}
        </div>
      </div>

      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Experience;
