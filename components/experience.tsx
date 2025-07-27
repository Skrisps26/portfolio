"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Users, TrendingUp, FileText } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="bg-purple-500/20 p-4 rounded-full self-center sm:self-start">
                  <Building className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Tech Team Member</h3>
                      <p className="text-purple-400 font-semibold text-base sm:text-lg">ACM-VIT Chennai</p>
                      <p className="text-gray-400">Chennai, India</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 justify-center sm:justify-start">
                      <Calendar className="h-4 w-4" />
                      <span>Jan. 2024 – Present</span>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-4">
                    {/* First Achievement */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                      <div className="bg-purple-500 w-2 h-2 rounded-full mt-2 hidden sm:block"></div>
                      <div className="text-center sm:text-left">
                        <p className="text-gray-300 leading-relaxed">
                          Built RESTful APIs and backend services used by over{" "}
                          <span className="text-yellow-400 font-semibold">200+ event participants</span>.
                        </p>
                        <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                          <Users className="h-4 w-4 text-purple-400" />
                          <span className="text-sm text-gray-400">200+ Users Served</span>
                        </div>
                      </div>
                    </div>

                    {/* Second Achievement */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                      <div className="bg-purple-500 w-2 h-2 rounded-full mt-2 hidden sm:block"></div>
                      <div className="text-center sm:text-left">
                        <p className="text-gray-300 leading-relaxed">
                          Collaborated on <span className="text-yellow-400 font-semibold">3+ internal tools</span> using
                          React, Node.js, and MongoDB, improving deployment speed by{" "}
                          <span className="text-yellow-400 font-semibold">30%</span>.
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 justify-center sm:justify-start">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-purple-400" />
                            <span className="text-sm text-gray-400">30% Speed Improvement</span>
                          </div>
                          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              React
                            </Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              Node.js
                            </Badge>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                              MongoDB
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Third Achievement */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                      <div className="bg-purple-500 w-2 h-2 rounded-full mt-2 hidden sm:block"></div>
                      <div className="text-center sm:text-left">
                        <p className="text-gray-300 leading-relaxed">
                          Improved documentation coverage by <span className="text-yellow-400 font-semibold">50%</span>,
                          enhancing onboarding for new contributors.
                        </p>
                        <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                          <FileText className="h-4 w-4 text-purple-400" />
                          <span className="text-sm text-gray-400">50% Documentation Increase</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
