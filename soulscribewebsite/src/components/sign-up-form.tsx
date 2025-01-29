'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { db } from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [source, setSource] = useState('')
  const [showModal, setShowModal] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      source,
      timestamp: new Date().toISOString(),
    }

    try {
      const collectionRef = collection(db, 'waitlistusers')
      await addDoc(collectionRef, data)
      setShowModal(true)
      if (formRef.current) {
        formRef.current.reset()
      }
      setSource('')
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      })
    } catch (error) {
      console.error('Error saving document: ', error)
      toast({
        title: 'Error',
        description: 'There was an error submitting your information. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="signup" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
            Join the Waitlist
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be among the first to experience the future of personal journaling
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-orange-500" />
                <p className="text-muted-foreground">Early access to all features</p>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-orange-500" />
                <p className="text-muted-foreground">Exclusive beta tester benefits</p>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-orange-500" />
                <p className="text-muted-foreground">Priority support and feedback</p>
              </div>
            </div>

            <div className="p-6 glass rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1K+</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Early Adopters</h3>
                  <p className="text-sm text-muted-foreground">Have already joined</p>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-orange-500 rounded-full" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">Waitlist is 75% full</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 glass p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    name="firstName" 
                    required 
                    className="glass border-0 focus:ring-2 ring-orange-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    name="lastName" 
                    required 
                    className="glass border-0 focus:ring-2 ring-orange-500/20"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="glass border-0 focus:ring-2 ring-orange-500/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  required 
                  className="glass border-0 focus:ring-2 ring-orange-500/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="source">How did you hear about us?</Label>
                <Select onValueChange={setSource} value={source} required>
                  <SelectTrigger className="glass border-0 focus:ring-2 ring-orange-500/20">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social">Social Media</SelectItem>
                    <SelectItem value="friend">Friend or Family</SelectItem>
                    <SelectItem value="search">Search Engine</SelectItem>
                    <SelectItem value="ad">Advertisement</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Processing...</span>
                  </div>
                ) : (
                  'Join the Waitlist'
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-orange-500 p-[1px] rounded-2xl"
            >
              <div className="bg-background rounded-2xl p-8 w-full max-w-md text-center relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  ✕
                </button>
                <div className="mb-4">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8 text-orange-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-orange-500 mb-2">
                  You're In!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for joining our waitlist. We'll be in touch soon with exclusive updates!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
