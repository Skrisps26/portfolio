"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Users, TrendingUp, Award } from "lucide-react"

export function Achievements() {
  return (
    <section id="achievements" className="py-20 gradient-purple-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="text-purple-400">Achievements</span> & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-full">
                  <Trophy className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">DevsHouse'25 Hackathon</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold">
                          <Award className="h-3 w-3 mr-1" />
                          4th Overall
                        </Badge>
                        <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold">
                          <Trophy className="h-3 w-3 mr-1" />
                          MongoDB Track Winner
                        </Badge>
                      </div>
                      <p className="text-gray-400">Remote Hackathon</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>May 2025</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 w-2 h-2 rounded-full mt-2"></div>
                      <p className="text-gray-300 leading-relaxed">
                        Built a <span className="text-yellow-400 font-semibold">decentralized lending platform</span>{" "}
                        using React, Solidity, and MongoDB.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-purple-500 w-2 h-2 rounded-full mt-2"></div>
                      <div>
                        <p className="text-gray-300 leading-relaxed">
                          Processed mock transactions of{" "}
                          <span className="text-yellow-400 font-semibold">5L+ rupees</span> and beat over{" "}
                          <span className="text-yellow-400 font-semibold">300 teams</span>.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-purple-400" />
                            <span className="text-sm text-gray-400">₹5L+ Transactions</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-purple-400" />
                            <span className="text-sm text-gray-400">Beat 300+ Teams</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                      React
                    </Badge>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                      Solidity
                    </Badge>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                      MongoDB
                    </Badge>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                      Web3
                    </Badge>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-400">
                      DeFi
                    </Badge>
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
