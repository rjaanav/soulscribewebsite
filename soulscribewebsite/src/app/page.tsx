"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles, BookOpen, Heart, Share2, Star, Zap, Lock, MessageSquare, Brain, Shield, Mic, Lightbulb, Store } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ChalkText = ({ text, className }: { text: string, className: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ 
            opacity: 0,
            pathLength: 0,
            pathOffset: 1
          }}
          animate={{ 
            opacity: 1,
            pathLength: 1,
            pathOffset: 0
          }}
          transition={{
            duration: 0.2,
            delay: index * 0.05,
            ease: "easeInOut"
          }}
          className="inline-block relative"
        >
          <motion.span
            className="absolute inset-0"
            initial={{ 
              background: "linear-gradient(to right, #ffffff, #fed7aa, #fdba74)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: 0
            }}
            animate={{ 
              opacity: 1,
              background: "linear-gradient(to right, #ffffff, #fed7aa, #fdba74)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            transition={{
              duration: 0.2,
              delay: index * 0.05,
              ease: "easeInOut"
            }}
          >
            {char}
          </motion.span>
          <span className="opacity-0">{char}</span>
        </motion.span>
      ))}
    </motion.div>
  )
}

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/50 via-orange-900/30 to-orange-800/20" />
        <motion.div 
          className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] rotate-12 bg-gradient-to-br from-orange-500/30 to-orange-400/20 blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [12, 20, 12]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            "@media (min-width: 768px)": {
              duration: 6
            }
          }}
        />
        <motion.div 
          className="absolute -bottom-1/2 -right-1/2 w-[150%] h-[150%] -rotate-12 bg-gradient-to-br from-orange-400/30 to-orange-300/20 blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [-12, -20, -12]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
            "@media (min-width: 768px)": {
              duration: 8
            }
          }}
        />
      </div>

      {/* Animated shapes */}
      <div className="fixed inset-0 -z-5 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-orange-400/30 rounded-full"
            style={{
              left: `${(i * 4) % 100}%`,
              top: `${(i * 6) % 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 2.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
              "@media (min-width: 768px)": {
                duration: 3 + (i % 4)
              }
            }}
          />
        ))}
      </div>

      {/* Parallax background elements */}
      <motion.div
        style={{ y, opacity }}
        className="fixed inset-0 -z-3 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div 
            className="absolute top-20 left-20 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              "@media (min-width: 768px)": {
                duration: 5
              }
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
              "@media (min-width: 768px)": {
                duration: 7
              }
            }}
          />
        </div>
      </motion.div>

      <header role="banner" className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center backdrop-blur-md bg-black/30 rounded-full p-4 border border-orange-500/20">
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center overflow-hidden">
              <Image 
                src="/soulscribelogo.svg" 
                alt="SoulScribe Logo" 
                width={48} 
                height={48} 
                priority
              />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300 md:block hidden font-['Neulis']">
              SoulScribe
            </span>
          </div>
          <div className="absolute left-[55%] transform -translate-x-1/2 md:hidden w-full text-center">
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300 font-['Neulis']">
              SoulScribe
            </span>
          </div>
          <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
            <ul className="flex space-x-8">
              <li><a href="#features" className="text-orange-200/70 hover:text-orange-300 transition-colors">Why It's Different</a></li>
              <li><a href="#download" className="text-orange-200/70 hover:text-orange-300 transition-colors">Get Started</a></li>
              <li><a href="/newsletter" className="text-orange-200/70 hover:text-orange-300 transition-colors">Newsletter</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" role="main" className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 sm:py-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2 sm:mb-4 hidden md:block"
            >
              <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300 font-['Neulis']">
                SoulScribe
              </span>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm">
                ✨ AI Journaling & Note Taking ✨
              </span>
            </motion.div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-relaxed">
              <ChalkText 
                text="Your Thoughts" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-300 block py-0.5 sm:py-2"
              />
              <ChalkText 
                text="Your Voice" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-300 block py-0.5 sm:py-2"
              />
              <ChalkText 
                text="Your Story" 
                className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-orange-300 block py-0.5 sm:py-2"
              />
            </div>
            <p className="text-xl text-orange-200/70 mb-8 max-w-2xl mx-auto">
              More than just a journal. Your personal space to reflect, grow, and be unapologetically you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://apps.apple.com/us/app/soulscribe%C2%BA/id6741093801" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500 border-0 shadow-lg shadow-orange-500/20">
                    <Store className="mr-2 h-5 w-5" />
                    Download on App Store
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#features">
                  <Button size="lg" variant="outline" className="border-orange-500/20 text-orange-300 hover:bg-orange-500/10 hover:text-orange-200 hover:border-orange-500/30 transition-colors">
                    See What's Different
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
              Why We're Different
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl backdrop-blur-md bg-black/30 border border-orange-500/20 hover:border-orange-500/40 transition-colors"
              >
                <Mic className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">🎙️ Voice Journaling</h3>
                <p className="text-orange-200/70 mb-4">Speak your truth. Our AI-powered voice journaling captures your thoughts exactly as they come to you, making journaling as natural as talking to a friend.</p>
                <ul className="text-orange-200/70 space-y-2">
                  <li className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-orange-400" />
                    Instant transcription
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-orange-400" />
                    Emotion detection
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-orange-400" />
                    Smart categorization
                  </li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl backdrop-blur-md bg-black/30 border border-orange-500/20 hover:border-orange-500/40 transition-colors"
              >
                <Lightbulb className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">💭 Thoughts</h3>
                <p className="text-orange-200/70 mb-4">Capture those fleeting moments of brilliance. Our new Thoughts feature lets you quickly record and organize your ideas, anywhere, anytime.</p>
                <ul className="text-orange-200/70 space-y-2">
                  <li className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-orange-400" />
                    Quick voice notes
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-orange-400" />
                    Smart organization
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-orange-400" />
                    Easy access
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl backdrop-blur-md bg-black/30 border border-orange-500/20 hover:border-orange-500/40 transition-colors"
              >
                <BookOpen className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">✨ Your Creative Canvas</h3>
                <p className="text-orange-200/70">Express yourself freely with our intuitive interface. No rules, just your authentic voice.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl backdrop-blur-md bg-black/30 border border-orange-500/20 hover:border-orange-500/40 transition-colors"
              >
                <Brain className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">💫 Growth on Your Terms</h3>
                <p className="text-orange-200/70">Track your journey with personalized prompts that adapt to your unique story.</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-2xl backdrop-blur-md bg-black/30 border border-orange-500/20 hover:border-orange-500/40 transition-colors"
              >
                <Shield className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">🔒 Your Private Space</h3>
                <p className="text-orange-200/70">Your thoughts are yours alone. End-to-end encryption keeps your journal private and secure.</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Download Section */}
        <section id="download" className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-2xl mx-auto backdrop-blur-md bg-black/30 rounded-3xl p-12 border border-orange-500/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
                Ready to Be You?
              </h2>
              <p className="text-xl text-orange-200/70 mb-8">
                Join thousands of others who've found their voice. Your story deserves to be remembered.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://apps.apple.com/us/app/soulscribe%C2%BA/id6741093801" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500 border-0 shadow-lg shadow-orange-500/20">
                    <Store className="mr-2 h-5 w-5" />
                    Get it on App Store
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="container mx-auto px-4 py-6 text-center mt-20">
        <div className="backdrop-blur-md bg-black/30 rounded-full p-6 border border-orange-500/20">
        <div className="space-y-2">
            <p className="text-orange-200/70">© 2024 SoulScribe. Your story, your space.</p>
          <nav aria-label="Footer navigation">
              <ul className="flex justify-center space-x-6">
                <li><a href="/privacy" className="text-orange-200/70 hover:text-orange-300 transition-colors">Privacy</a></li>
                <li><a href="/terms" className="text-orange-200/70 hover:text-orange-300 transition-colors">Terms</a></li>
                <li><a href="/newsletter" className="text-orange-200/70 hover:text-orange-300 transition-colors">Newsletter</a></li>
            </ul>
          </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
