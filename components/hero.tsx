"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import * as random from "maath/random/dist/maath-random.esm"

function Stars(props: any) {
  const ref = useRef<any>()
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }), [])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#8b5cf6" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-purple-400 to-yellow-400 bg-clip-text text-transparent">
            Sai Krishna
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">Full Stack Developer & AI Enthusiast</p>
          <p className="text-lg text-gray-400 mb-8">Computer Science Engineering Student at VIT Chennai</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-yellow-400/20"
          >
            Get In Touch
          </Button>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full bg-transparent"
            >
              <a href="https://github.com/Skrisps26">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full bg-transparent"
            >
              <a href="https://www.linkedin.com/in/sai-krishna-711a0b28b/">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-full bg-transparent"
            >
              <a href="mailto:saikrishnasprasad2642005@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          <p>+91-7012596273 | Chennai, India</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
