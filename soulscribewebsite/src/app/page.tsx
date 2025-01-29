"use client"

import Image from 'next/image'
import { HeroSection } from '../components/hero-section'
import { FeatureSection } from '../components/feature-section'
import { SignUpForm } from '../components/sign-up-form'

export default function LandingPage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Animated background shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/50 to-yellow-100/50" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rotate-12 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full -rotate-12 bg-gradient-to-br from-orange-200/20 to-red-200/20 blur-3xl" />
      </div>

      <header role="banner" className="container mx-auto px-4 py-6 flex justify-between items-center glass rounded-b-2xl">
        <div className="flex items-center space-x-3 hover-lift">
          <Image 
            src="/soulscribelogo.svg?height=40&width=40" 
            alt="SoulScribe Logo" 
            width={40} 
            height={40} 
            className="float" 
            priority
          />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
            SoulScribe
          </span>
        </div>
        <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#signup" className="text-muted-foreground hover:text-foreground transition-colors">Sign Up</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" role="main" className="relative">
        <article className="fade-in">
          <HeroSection />
        </article>
        <article id="features" className="slide-in-left">
          <FeatureSection />
        </article>
        <article id="signup" className="scale-in">
          <SignUpForm />
        </article>
      </main>

      <footer role="contentinfo" className="container mx-auto px-4 py-6 text-center glass rounded-t-2xl mt-20">
        <div className="space-y-2">
          <p className="text-muted-foreground">© 2024 SoulScribe. All rights reserved.</p>
          <nav aria-label="Footer navigation">
            <ul className="flex justify-center space-x-4">
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  )
}
