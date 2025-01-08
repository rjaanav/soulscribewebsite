'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { db } from './firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

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
    } catch (error) {
      console.error('Error saving document: ', error)
      toast({
        title: 'Error',
        description: 'There was an error submitting your information.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="signup" className="container mx-auto px-4 py-20 bg-gradient-to-b from-orange-50 to-white rounded-lg">
      <h2 className="text-3xl font-bold text-center text-foreground mb-12">Get Early Access</h2>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-background rounded-lg shadow-lg p-6 w-80 text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-muted-foreground hover:text-foreground focus:outline-none"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-accent">You're In!</h3>
            <p className="text-muted-foreground mt-2">Thank you for signing up!</p>
          </div>
        </div>
      )}
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" required className="bg-background" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" required className="bg-background" />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" required className="bg-background" />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" required className="bg-background" />
        </div>
        <div>
          <Label htmlFor="source">How did you hear about us?</Label>
          <Select onValueChange={setSource} value={source} required>
            <SelectTrigger className="bg-background">
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
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
        </Button>
      </form>
    </section>
  )
}
