"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7012596273",
      href: "tel:+917012596273",
    },
    {
      icon: Mail,
      label: "Email",
      value: "saikrishnasprasad2642005@gmail.com",
      href: "mailto:saikrishnasprasad2642005@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Skrisps26",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sai-krishna-711a0b28b/",
      color: "hover:text-blue-400",
    },
    {
      icon: ExternalLink,
      label: "Kaggle",
      href: "kaggle.com/saikrishna_23BCE1450",
      color: "hover:text-cyan-400",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-purple-500/20 p-3 rounded-full">
                        <IconComponent className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{item.label}</p>
                        <a href={item.href} className="text-white hover:text-purple-400 transition-colors duration-200">
                          {item.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className={`border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-200 ${social.color}`}
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="h-5 w-5" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form 
                action="https://formsubmit.co/saikrishnasprasad2642005@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_next" value="https://your-website.com" />
                <input type="hidden" name="_subject" value="New Portfolio Contact!" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <Input
                      name="name"
                      required
                      className="bg-gray-700/50 border-gray-600 text-white focus:border-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      required
                      className="bg-gray-700/50 border-gray-600 text-white focus:border-purple-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <Input
                    name="subject"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white focus:border-purple-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    name="message"
                    required
                    className="bg-gray-700/50 border-gray-600 text-white focus:border-purple-500 min-h-[120px]"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 border border-yellow-400/20"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 mt-20 pt-8">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Sai Krishna. Built with Next.js, Three.js & shadcn/ui</p>
        </div>
      </div>
    </section>
  )
}
