"use client"

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Sparkles, Smartphone, Mic, Shield } from 'lucide-react'

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
    <section aria-labelledby="hero-heading" className="container mx-auto px-4 py-12 md:py-24">
      <div className="relative max-w-7xl mx-auto">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-orange-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000`}
        >
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8 text-center md:text-left order-2 md:order-1">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 rounded-full px-4 py-2 text-sm text-orange-600 w-fit mx-auto md:mx-0">
              <Sparkles className="h-4 w-4" />
              <span>Revolutionizing Personal Journaling</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-orange-500 leading-tight">
                Unlock Your Inner Voice with SoulScribe
              </h1>
              
              <div className="h-16 md:h-20" aria-live="polite" aria-atomic="true">
                <p className="text-xl md:text-2xl text-muted-foreground transition-all duration-500 transform">
                  {phrases[currentPhrase]}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
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

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
                <div className="flex items-center space-x-2">
                  <Mic className="h-5 w-5 text-orange-500 shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Voice-to-Text</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-orange-500 shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">End-to-End Encrypted</span>
                </div>
              </div>

              {/* App Store Badge */}
              <div className="flex justify-center md:justify-start">
                <div className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className="glass rounded-xl px-6 py-3 flex items-center space-x-3">
                    <Smartphone className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium whitespace-nowrap">Coming Soon to App Store</span>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 md:order-2">
            <div className="absolute inset-0 bg-orange-500 rounded-full filter blur-3xl opacity-30 animate-pulse" aria-hidden="true" />
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <div className="p-4">
                <Image 
                  src="/soulscribelogo.svg" 
                  alt="SoulScribe app interface showcasing journal entries and voice recording features" 
                  width={500} 
                  height={500} 
                  className="rounded-2xl shadow-2xl hover-lift w-full h-auto max-w-lg mx-auto"
                  priority
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass rounded-full px-6 py-3 flex items-center space-x-2 whitespace-nowrap">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm font-medium">AI-Powered Journaling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
