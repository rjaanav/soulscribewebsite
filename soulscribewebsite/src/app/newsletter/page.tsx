"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/50 via-orange-900/30 to-orange-800/20" />
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rotate-12 bg-gradient-to-br from-orange-500/20 to-orange-400/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full -rotate-12 bg-gradient-to-br from-orange-400/20 to-orange-300/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
            Stay Connected with SoulScribe
          </h1>
          <p className="text-xl text-orange-200/70 mb-12">
            Get weekly insights on journaling, personal growth, and the latest SoulScribe features.
          </p>

          <div className="max-w-md mx-auto backdrop-blur-md bg-black/30 rounded-2xl p-8 border border-orange-500/20">
            <form className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-black/50 border-orange-500/20 text-white placeholder:text-orange-200/50 focus:border-orange-500/40"
                />
                <p className="text-sm text-orange-200/50">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500 border-0 shadow-lg shadow-orange-500/20">
                <Send className="mr-2 h-5 w-5" />
                Subscribe to Newsletter
              </Button>
            </form>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl backdrop-blur-md bg-black/30 border border-orange-500/20"
            >
              <h3 className="text-lg font-semibold mb-2">Weekly Tips</h3>
              <p className="text-orange-200/70">Get expert advice on journaling and personal growth.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl backdrop-blur-md bg-black/30 border border-orange-500/20"
            >
              <h3 className="text-lg font-semibold mb-2">Feature Updates</h3>
              <p className="text-orange-200/70">Be the first to know about new SoulScribe features.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl backdrop-blur-md bg-black/30 border border-orange-500/20"
            >
              <h3 className="text-lg font-semibold mb-2">Community Stories</h3>
              <p className="text-orange-200/70">Read inspiring stories from our community members.</p>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 