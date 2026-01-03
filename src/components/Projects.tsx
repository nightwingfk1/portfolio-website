import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Autonomous Shopping Assistant Robot",
      description: "AI-powered robot that utilizes computer vision and NLP to identify products in real time and provide interactive in-store assistance.",
      tags: ["Node.js", "Python", "React.js", "JavaScript", "SQLite", "Computer Vision", "NLP"]
    },
    {
      title: "AI Object Detection for Visually Impaired",
      description: "An AI-based application that captures objects in front of the user, detects them, and reads out their names to assist visually impaired individuals.",
      tags: ["Python", "AI", "Computer Vision", "Text-to-Speech"]
    },
    {
      title: "Housing Tax Finder Website",
      description: "Web application to help users find and calculate housing taxes based on their location.",
      tags: ["HTML", "CSS", "JavaScript", "Python", "Django"]
    },
    {
      title: "Collab Hub MVP Application",
      description: "No-code MVP mobile application enabling brand-creator collaborations and product exchange campaigns with creator onboarding, brand dashboards, and wallet system.",
      tags: ["Adalo", "Google Sheets", "No-Code", "UX Design"]
    }
  ];

  const achievements = [
    "🏆 1st Prize at AI Expo for Innovation in AI",
    "📱 Android Development Bootcamp (4-day intensive)",
    "☁️ Azure Fundamentals - Microsoft Learn Ambassador",
    "🐙 GitHub Contribution Tips & Best Practices"
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
              Showcasing innovative solutions and technical accomplishments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-smooth animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-center mb-6">Awards & Achievements</h3>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-card p-4 rounded-lg shadow-soft hover:shadow-medium transition-smooth text-center"
                >
                  <p className="text-sm font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
