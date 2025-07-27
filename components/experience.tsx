"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, Users, TrendingUp, FileText } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="bg-purple-500/20 p-3 sm:p-4 rounded-full mx-auto sm:mx-0">
                  <Building className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-purple-400" />
                </div>

                <div className="flex-1 w-full">
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Tech Team Member</h3>
                      <p className="text-purple-400 font-semibold text-sm sm:text-base md:text-lg">ACM-VIT Chennai</p>
                      <p className="text-gray-400 text-sm">Chennai, India</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 justify-center sm:justify-start text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Jan. 2024 – Present</span>
                    </div>
                  </div>

                  <div className="space-y-8 sm:space-y-6">
                    {/* First Achievement */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                      <div className="bg-purple-500 w-2 h-2 rounded-full mt-2 hidden sm:block"></div>
                      <div className="text-center sm:text-left">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          Built RESTful APIs and backend services used by over{" "}
                          <span className="text-yellow-400 font-semibold">200+ event participants</span>.
                        </p>
                        <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                          <Users className="h-4 w-4 text-purple-400" />
                          <span className="text-xs sm:text-sm text-gray-400">200+ Users Served</span>
                        </div>
                      </div>
                    </div>

                    {/* Second Achievement */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                      <div className="bg-purple-500 w-2 h-2 rounded-full mt-2 hidden sm:block"></div>
                      <div className="text-center sm:text-left">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          Collaborated on <span className="text-yellow-400 font-semibold">3+ internal tools</span> using
                          React, Node.js, and MongoDB, improving deployment speed by{" "}
                          <span className="text-yellow-400 font-semibold">30%</span>.
                        </p>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 justify-center sm:justify-start">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-purple-400" />
                            <span className="text-xs sm:text-sm text-gray-400">30% Speed Improvement</span>
                          </div>
                          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-400">
                              React
                            </Badge>
                            <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-400">
                              Node.js
                            </Badge>
                            <Badge variant="outline" className="text-xs border-purple-500/50 text-purple-400">
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
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                          Improved documentation coverage by <span className="text-yellow-400 font-semibold">50%</span>,
                          enhancing onboarding for new contributors.
                        </p>
                        <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                          <FileText className="h-4 w-4 text-purple-400" />
                          <span className="text-xs sm:text-sm text-gray-400">50% Documentation Increase</span>
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
