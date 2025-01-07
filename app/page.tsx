import Image from 'next/image'
import { HeroSection } from './components/hero-section'
import { FeatureSection } from './components/feature-section'
import { SignUpForm } from './components/sign-up-form'
import { Sofia_Sans as Seasons } from 'next/font/google'
import localFont from 'next/font/local'

const seasons = Seasons({ subsets: ['latin'], weight: '400', variable: '--font-seasons' })
const ttCommons = localFont({ 
  src: './fonts/TTCommonsProExpanded-Regular.woff2',
  variable: '--font-tt-commons'
})

export default function LandingPage() {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-purple-50 to-white ${seasons.variable} ${ttCommons.variable}`}>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/placeholder.svg?height=40&width=40" alt="SoulScribe Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-purple-800 font-seasons">SoulScribe</span>
        </div>
      </header>
      <main>
        <HeroSection />
        <FeatureSection />
        <SignUpForm />
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-gray-500">
        © 2023 SoulScribe. All rights reserved.
      </footer>
      <style jsx global>{`
        body {
          font-family: var(--font-tt-commons), sans-serif;
        }
      `}</style>
    </div>
  )
}

