"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, BookOpen, Sparkles, Brain, Target, Zap } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function FeatureSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Voice Recording",
      description: "Simply think out loud and let SoulScribe do the rest. Our advanced voice recognition understands your natural speech patterns.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Organized Journals",
      description: "Your thoughts are automatically categorized and organized into beautiful, searchable digital journals.",
      gradient: "from-red-500 to-orange-600"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Insights",
      description: "Gain deeper understanding of your thoughts and patterns with our advanced AI analysis.",
      gradient: "from-orange-400 to-yellow-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal Tracking",
      description: "Set personal goals and track your progress with intelligent milestone tracking.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Mood Analysis",
      description: "Understand your emotional patterns with advanced sentiment analysis.",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Suggestions",
      description: "Receive personalized recommendations based on your journaling patterns.",
      gradient: "from-red-500 to-orange-500"
    }
  ]

  return (
    <section ref={ref} className="container mx-auto px-4 py-20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
          How It Works
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience the future of personal journaling with our innovative features
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`transform ${
              inView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            } transition-all duration-700 delay-${index * 100}`}
          >
            <Card className="h-full glass border-0 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 mb-4`}>
                  <div className="text-white w-full h-full">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${feature.gradient}`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-2 text-sm text-muted-foreground">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          <span>New features being added regularly</span>
        </div>
      </div>
    </section>
  )
}
