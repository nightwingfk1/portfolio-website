import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth h-full">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category.category}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <Badge 
                            variant="secondary"
                            className={`transition-smooth ${
                              hoveredSkill === skill.name 
                                ? 'bg-primary text-primary-foreground' 
                                : ''
                            }`}
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out rounded-full"
                            style={{ 
                              width: hoveredSkill === skill.name ? `${skill.level}%` : '0%'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
