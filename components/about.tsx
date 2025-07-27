"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 gradient-purple">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-full">
                        <GraduationCap className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">B.Tech in Computer Science and Engineering</h4>
                        <p className="text-purple-400 font-medium">Vellore Institute of Technology, Chennai</p>
                        <div className="flex items-center gap-4 mt-2 text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>2023 – Present</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>Chennai, India</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    I'm a passionate Computer Science student at VIT Chennai with a strong foundation in full-stack
                    development and artificial intelligence.
                  </p>
                  <p className="mb-4">
                    My journey in technology spans across web development, machine learning, and cybersecurity, with
                    hands-on experience in building scalable applications and innovative solutions.
                  </p>
                  <p>
                    I thrive on solving complex problems and am always eager to learn new technologies and contribute to
                    impactful projects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
