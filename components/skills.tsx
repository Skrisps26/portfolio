"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Brain } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["JavaScript", "Python", "Golang", "C", "C++", "SQL"],
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Frameworks",
      icon: Wrench,
      skills: ["React", "Next.js", "Node.js", "Express", "Django", "FastAPI"],
      color: "from-purple-600 to-indigo-600",
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Docker", "Figma", "VS Code", "Postman"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "ML Libraries",
      icon: Brain,
      skills: ["Numpy", "Pandas", "Fast AI", "PyTorch", "OpenCV", "torchaudio", "torchvision"],
      color: "from-purple-700 to-violet-700",
    },
  ]

  return (
    <section id="skills" className="py-20 gradient-purple-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-gradient-to-r ${category.color} p-3 rounded-full`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
