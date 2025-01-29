"use client"

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const phrases = [
    "Transform thoughts into clarity",
    "Capture moments effortlessly",
    "Discover your inner voice"
  ]

  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section aria-labelledby="hero-heading" className="container mx-auto px-4 py-20">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className={`flex flex-col md:flex-row items-center gap-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-orange-500">
              Unlock Your Inner Voice with SoulScribe
            </h1>
            
            <div className="h-20" aria-live="polite" aria-atomic="true">
              <p className="text-xl md:text-2xl text-muted-foreground transition-all duration-500 transform">
                {phrases[currentPhrase]}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                aria-label="Get early access to SoulScribe"
              >
                Get Early Access
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border-orange-500 text-orange-500"
                aria-label="Learn more about SoulScribe features"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4 pt-6">
              <div className="flex -space-x-2" aria-label="Early adopter avatars">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="sr-only">Join our community of</span>
                Join 1000+ early adopters
              </p>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-orange-500 rounded-full filter blur-3xl opacity-30 animate-pulse" aria-hidden="true" />
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <Image 
                src="/soulscribelogo.svg" 
                alt="SoulScribe app interface showcasing journal entries and voice recording features" 
                width={500} 
                height={500} 
                className="rounded-2xl shadow-2xl hover-lift"
                priority
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
