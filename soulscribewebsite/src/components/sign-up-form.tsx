'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export function SignUpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
  
    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      source: formData.get("source"),
    };
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzK3OaHMFEDTRLMngiAxH6dZ-g2jIH5OZyxyK4zeRT5ks1z_TykG5WB6ffszQ-GwZHCcw/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (result.status === "success") {
        toast({
          title: "Success!",
          description: "Your information has been saved successfully!",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your information.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="signup" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-12 font-seasons">Get Early Access</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="font-tt-commons">First Name</Label>
            <Input id="firstName" required />
          </div>
          <div>
            <Label htmlFor="lastName" className="font-tt-commons">Last Name</Label>
            <Input id="lastName" required />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="font-tt-commons">Email Address</Label>
          <Input id="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="phone" className="font-tt-commons">Phone Number</Label>
          <Input id="phone" type="tel" required />
        </div>
        <div>
          <Label htmlFor="source" className="font-tt-commons">How did you hear about us?</Label>
          <Select required>
            <SelectTrigger>
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
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
        </Button>
      </form>
    </section>
  )
}

