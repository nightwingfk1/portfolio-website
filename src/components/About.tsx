import { Code, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BE in Computer Science Engineering at Lords College of Engineering and Technology (GPA: 9)"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Product Development Intern at Collab Hub - Built no-code MVP mobile applications"
    },
    {
      icon: Code,
      title: "Innovation",
      description: "1st Prize Winner at AI Expo for innovation in Artificial Intelligence"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm Fouzan Mohammed Khan, a passionate Software Engineer currently pursuing my BE in 
                Computer Science Engineering. I leverage my technical expertise and problem-solving 
                skills to contribute to innovative projects and drive organizational success.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My journey includes hands-on experience as a Product Development Intern at Collab Hub, 
                where I designed and developed no-code MVP mobile applications and contributed to UX 
                optimization and automation setups.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm continuously learning through professional training in AWS and DevOps, and I've 
                completed certifications in AI, Java Programming, and Google Cloud GenAI. I'm passionate 
                about AI innovation and have won 1st prize at the AI Expo.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-card shadow-soft hover:shadow-medium transition-smooth animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
