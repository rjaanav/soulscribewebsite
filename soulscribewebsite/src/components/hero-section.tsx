"use client"

import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Unlock Your Inner Voice with SoulScribe</h1>
        <p className="text-xl text-muted-foreground mb-8">Transform your thoughts into organized journals with our AI-powered app</p>
        <Button size="lg" onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Early Access
        </Button>
      </div>
      <div className="md:w-1/2">
        <Image src="/soulscribelogo.svg" alt="SoulScribe App" width={500} height={500} className="rounded-lg shadow-lg float" />
      </div>
    </section>
  )
}
