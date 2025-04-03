import { Search, Filter, Home, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Search",
      description: "Enter your university or preferred location to find available student accommodations nearby.",
    },
    {
      icon: <Filter className="h-10 w-10 text-primary" />,
      title: "Filter",
      description:
        "Use our smart filters to narrow down options based on your budget, distance to campus, and preferences.",
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Explore",
      description: "Browse detailed listings with photos, amenities, and proximity to important locations.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Book",
      description: "Contact landlords directly and secure your perfect student accommodation.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      {steps.map((step, index) => (
        <Link key={index} href="/how-it-works" className="flex flex-col items-center text-center group">
          <div className="mb-4 p-4 bg-background rounded-full shadow-sm group-hover:bg-secondary transition-colors">
            {step.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </Link>
      ))}
    </div>
  )
}

