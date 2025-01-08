"use client"

import Image from 'next/image'
import { HeroSection } from '../components/hero-section'
import { FeatureSection } from '../components/feature-section'
import { SignUpForm } from '../components/sign-up-form'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/soulscribelogo.svg?height=40&width=40" alt="SoulScribe Logo" width={40} height={40} className="float" />
          <span className="text-2xl font-bold text-primary">SoulScribe</span>
        </div>
      </header>
      <main>
        <HeroSection />
        <FeatureSection />
        <SignUpForm />
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        © 2023 SoulScribe. All rights reserved.
      </footer>
    </div>
  )
}
