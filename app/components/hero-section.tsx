import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold text-purple-800 mb-6 font-seasons">Unlock Your Inner Voice with SoulScribe</h1>
      <p className="text-xl text-gray-600 mb-8 font-tt-commons">Transform your thoughts into organized journals with our AI-powered app</p>
      <Button size="lg" onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}>
        Get Early Access
      </Button>
    </section>
  )
}

