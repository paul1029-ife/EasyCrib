import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  Filter,
  Home,
  CheckCircle,
  MapPin,
  Building,
  Shield,
  Clock,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | EasyCrib",
  description:
    "Learn how EasyCrib helps you find the perfect student accommodation in Nigeria",
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Search className="h-16 w-16 text-primary" />,
      title: "Search",
      description:
        "Enter your university or preferred location to find available student accommodations nearby.",
      details: [
        "Use our smart search to find accommodations near specific universities",
        "Search by neighborhood, city, or landmark",
        "Get instant results with our fast search engine",
        "Save your search preferences for future visits",
      ],
    },
    {
      icon: <Filter className="h-16 w-16 text-primary" />,
      title: "Filter",
      description:
        "Use our smart filters to narrow down options based on your budget, distance to campus, and preferences.",
      details: [
        "Filter by price range to match your budget",
        "Specify room types and number of bedrooms",
        "Filter by amenities like water supply, generator, internet",
        "Sort by distance to your university or college",
        "Find properties with specific security features",
      ],
    },
    {
      icon: <Home className="h-16 w-16 text-primary" />,
      title: "Explore",
      description:
        "Browse detailed listings with photos, amenities, and proximity to important locations.",
      details: [
        "View high-quality photos of each property",
        "Check detailed descriptions of amenities and features",
        "See the exact location and distance to your university",
        "Learn about nearby facilities like markets, banks, and restaurants",
        "Read reviews from other students who have lived there",
      ],
    },
    {
      icon: <CheckCircle className="h-16 w-16 text-primary" />,
      title: "Book",
      description:
        "Contact landlords directly and secure your perfect student accommodation.",
      details: [
        "Connect directly with verified landlords or agents",
        "Schedule viewing appointments through our platform",
        "Get all your questions answered before making a decision",
        "Complete booking process securely through EasyCrib",
        "Receive move-in instructions and support",
      ],
    },
  ];

  const faqs = [
    {
      question: "How do I start searching for accommodation?",
      answer:
        "Simply enter your university name or preferred location in the search bar on our homepage. You can then use filters to narrow down the results based on your preferences.",
    },
    {
      question: "Are the listings on EasyCrib verified?",
      answer:
        "Yes, we verify all listings on our platform to ensure they are legitimate. Our team conducts checks on landlords and properties to maintain quality standards.",
    },
    {
      question: "How much does it cost to use EasyCrib?",
      answer:
        "EasyCrib is completely free for students to use. You can search, filter, and contact landlords without any charges. We make our revenue through premium listings from landlords and property managers.",
    },
    {
      question: "Can I share accommodation with other students?",
      answer:
        "Many listings on EasyCrib are suitable for sharing. You can filter for properties with multiple bedrooms or specifically look for shared accommodations.",
    },
    {
      question: "How far in advance should I start looking for accommodation?",
      answer:
        "We recommend starting your search at least 2-3 months before your intended move-in date. This gives you enough time to explore options, arrange viewings, and secure the best accommodation.",
    },
    {
      question: "What if I have issues with a landlord or property?",
      answer:
        "EasyCrib provides support for any issues that may arise. You can contact our customer service team through the help center, and we'll assist in resolving any problems between you and the landlord.",
    },
  ];

  const testimonials = [
    {
      name: "Chioma A.",
      university: "University of Lagos",
      quote:
        "EasyCrib made finding accommodation near UNILAG so easy! I found a great self-contain apartment within my budget in just two days.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Emeka O.",
      university: "University of Nigeria, Nsukka",
      quote:
        "As a first-year student, I was worried about finding a safe place to stay. EasyCrib's detailed listings helped me find a secure apartment with good amenities.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Amina B.",
      university: "Ahmadu Bello University",
      quote:
        "The filter options are amazing! I could specify exactly what I wanted - water supply, generator, security - and found my perfect match.",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How EasyCrib Works
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Finding your perfect student accommodation is simple and
                  stress-free with our easy-to-follow process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Steps Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-6 items-center"
                >
                  <div
                    className={`space-y-4 ${
                      index % 2 === 1 ? "md:order-2" : ""
                    }`}
                  >
                    <div className="inline-block p-4 bg-secondary rounded-xl">
                      {step.icon}
                    </div>
                    <h2 className="text-3xl font-bold">
                      {index + 1}. {step.title}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`bg-muted rounded-xl aspect-video relative overflow-hidden ${
                      index % 2 === 1 ? "md:order-1" : ""
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-8 text-center">
                        <div className="mx-auto mb-4">{step.icon}</div>
                        <p className="text-muted-foreground">
                          Step {index + 1}: {step.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose EasyCrib?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We make finding student accommodation easier than ever with
                  these powerful features.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <MapPin className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Location-Based Search</h3>
                  <p className="text-muted-foreground">
                    Find accommodation near your specific university or
                    preferred neighborhood with our precise location search.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Building className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Verified Listings</h3>
                  <p className="text-muted-foreground">
                    All properties on EasyCrib are verified to ensure you're
                    getting accurate information and dealing with legitimate
                    landlords.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Shield className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Safety First</h3>
                  <p className="text-muted-foreground">
                    We prioritize your safety with detailed information about
                    security features and safe neighborhoods for students.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Clock className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Quick Process</h3>
                  <p className="text-muted-foreground">
                    Our streamlined process helps you find and secure
                    accommodation quickly, saving you time and stress.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Filter className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Advanced Filters</h3>
                  <p className="text-muted-foreground">
                    Use our detailed filters to find exactly what you need -
                    from amenities to price range and property type.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Student Community</h3>
                  <p className="text-muted-foreground">
                    Connect with other students, read reviews, and get insights
                    from those who have lived in the properties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Student Success Stories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from students who found their perfect accommodation
                  through EasyCrib.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full overflow-hidden h-16 w-16 relative">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.university}
                        </p>
                      </div>
                    </div>
                    <p className="italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get answers to common questions about finding student
                  accommodation with EasyCrib.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Find Your Perfect Student Home?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start your search now and discover comfortable, affordable
                  accommodation near your university.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/listings">
                  <Button size="lg" className="text-base">
                    Browse Listings
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="text-base">
                    Search by University
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
