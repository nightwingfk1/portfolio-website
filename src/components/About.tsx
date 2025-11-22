import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, user-centered interfaces"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency"
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
                I'm a passionate developer with a keen eye for design and a love for creating 
                seamless digital experiences. With expertise in modern web technologies, I transform 
                ideas into reality through clean, efficient code.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My journey in tech has equipped me with a diverse skill set spanning frontend 
                development, backend architecture, and UI/UX design. I thrive on solving complex 
                problems and continuously learning new technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing 
                to open-source projects, or sharing knowledge with the developer community.
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
