import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic, BookOpen, Sparkles } from 'lucide-react'

export function FeatureSection() {
  const features = [
    {
      icon: <Mic className="h-8 w-8 text-purple-600" />,
      title: "Voice Recording",
      description: "Simply think out loud and let SoulScribe do the rest"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: "Organized Journals",
      description: "Your thoughts are automatically categorized and organized"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: "AI-Powered Insights",
      description: "Gain deeper understanding of your thoughts and patterns"
    }
  ]

  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-12 font-seasons">How It Works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 font-seasons">
                {feature.icon}
                <span>{feature.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-tt-commons">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

