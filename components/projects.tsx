"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Target, Users, TrendingUp } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Deepfake Content Detector",
      period: "Feb. 2025 – Apr. 2025",
      description:
        "Advanced AI system for detecting AI-generated media with high accuracy using deep learning techniques.",
      technologies: ["Python", "PyTorch", "OpenCV", "torchaudio", "torchvision"],
      highlights: [
        { icon: Target, text: "85%+ accuracy in detection", color: "text-green-400" },
        { icon: TrendingUp, text: "10,000+ video frames processed", color: "text-purple-400" },
      ],
      features: [
        "Applied CNNs and waveform analysis for image/audio forgery detection",
        "Processed 10,000+ video frames for spatiotemporal anomaly detection",
        "Designed a system to detect AI-generated media with 85%+ accuracy",
      ],
    },
    {
      title: "Link Recon OSINT Challenge",
      period: "Mar. 2025",
      description: "Cybersecurity CTF challenge focusing on digital forensics and OSINT techniques.",
      technologies: ["Git", "GitHub", "CyberSec"],
      highlights: [{ icon: Users, text: "150+ participants engaged", color: "text-purple-400" }],
      features: [
        "Created a CTF challenge to trace deleted LinkedIn URLs via Git history",
        "Engaged 150+ participants during cybersecurity competition",
        "Demonstrated advanced OSINT and digital forensics techniques",
      ],
    },
    {
      title: "Decentralized Creator Platform",
      period: "May 2025",
      description: "Web3 application enabling content creators to monetize through NFTs and blockchain technology.",
      technologies: ["React", "Solidity", "MongoDB", "Web3.js"],
      highlights: [{ icon: TrendingUp, text: "10+ smart contracts deployed", color: "text-yellow-400" }],
      features: [
        "Developed a Web3 app enabling NFT-based content monetization",
        "Integrated MetaMask wallet and deployed 10+ smart contracts",
        "Built decentralized infrastructure for creator economy",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{project.period}</span>
                </div>
                <CardTitle className="text-xl text-white mb-3">{project.title}</CardTitle>
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {project.highlights.map((highlight, hIndex) => {
                    const IconComponent = highlight.icon
                    return (
                      <div key={hIndex} className="flex items-center gap-3">
                        <IconComponent className={`h-4 w-4 ${highlight.color}`} />
                        <span className="text-sm text-gray-300">{highlight.text}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-2">
                  {project.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-2">
                      <div className="bg-purple-500 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-400 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-purple-500/50 text-purple-400 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
