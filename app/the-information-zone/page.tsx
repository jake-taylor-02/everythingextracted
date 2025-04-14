import Link from "next/link"
import { Coffee, Leaf, Droplet, Milk, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function InformationZonePage() {
  // Define color palette in the exact order specified
  const colorPalette = ["#EB5353", "#F9D923", "#36AE7C", "#187498"]

  // Define the information categories with their colors
  const informationCategories = [
    {
      title: "Coffee",
      description: "Explore different origins, varieties, processing methods, roast levels, freshness and much more",
      content: "Discover the science behind coffee beans, from cultivation to roasting and everything in between.",
      icon: Coffee,
      href: "/the-information-zone/coffee",
      accentColor: "#EB5353", // Red
      subpages: [
        {
          title: "Coming soon",
          href: "/the-information-zone/coffee",
          color: "#EB5353", // Red (1st)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/coffee",
          color: "#F9D923", // Yellow (2nd)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/coffee",
          color: "#36AE7C", // Green (3rd)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/coffee",
          color: "#187498", // Blue (4th)
        },
      ],
    },
    {
      title: "Tea",
      description: "Discover the wonders of Camellia sinensis ",
      content: "Learn about the chemistry of tea processing, from oxidation to fermentation and the resulting flavors.",
      icon: Leaf,
      href: "/the-information-zone/tea",
      accentColor: "#F9D923", // Yellow
      subpages: [
        {
          title: "Coming soon",
          href: "/the-information-zone/tea",
          color: "#EB5353", // Red (1st)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/tea",
          color: "#F9D923", // Yellow (2nd)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/tea",
          color: "#36AE7C", // Green (3rd)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/tea",
          color: "#187498", // Blue (4th)
        },
      ],
    },
    {
      title: "Water",
      description: "The often overlooked ingredient that makes up 98% of your cup",
      content: "Understand how water quality, mineral content, and temperature affect extraction and flavor.",
      icon: Droplet,
      href: "/the-information-zone/water",
      accentColor: "#36AE7C", // Green
      subpages: [
        {
          title: "Coming soon",
          href: "/the-information-zone/water",
          color: "#EB5353", // Red (1st)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/water",
          color: "#F9D923", // Yellow (2nd)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/water",
          color: "#36AE7C", // Green (3rd)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/water",
          color: "#187498", // Blue (4th)
        },
      ],
    },
    {
      title: "Milk",
      description: "Dairy and plant-based options for your beverages",
      content: "Explore the science of milk proteins, fats, and how they interact with coffee and tea.",
      icon: Milk,
      href: "/the-information-zone/milk",
      accentColor: "#187498", // Blue
      subpages: [
        {
          title: "Dairy Milk",
          href: "/the-information-zone/milk/dairy-milk",
          color: "#EB5353", // Red (1st)
        },
        {
          title: "Plant-based Milk",
          href: "/the-information-zone/milk/plant-based-milk",
          color: "#F9D923", // Yellow (2nd)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/milk",
          color: "#36AE7C", // Green (3rd)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/milk",
          color: "#187498", // Blue (4th)
        },
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="text-lg font-bold">
            everythingextracted.com
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/resources" className="text-sm font-medium hover:text-primary">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/the-information-zone" className="text-sm font-medium text-primary">
              The Information Zone
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The Information Zone</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore the history and science behind these fundamental components that make up our beverages
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {informationCategories.map((category, index) => (
                <Card
                  key={index}
                  className="overflow-hidden flex flex-col transition-all hover:shadow-md hover:-translate-y-1 duration-200"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <category.icon className="h-5 w-5" style={{ color: category.accentColor }} />
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                    <div className="h-0.5 w-12 mt-2" style={{ backgroundColor: category.accentColor }}></div>
                  </CardHeader>
                  <CardContent className="p-4 pb-1 overflow-auto">
                    {category.subpages && (
                      <ul className="space-y-1 text-sm">
                        {category.subpages.map((subpage, subIdx) => (
                          <li key={subIdx} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: subpage.color }} />
                            <Link href={subpage.href} className="hover:underline">
                              {subpage.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                  <CardFooter className="p-4 mt-auto">
                    <Link href={category.href} className="w-full">
                      <Button variant="ghost" className="w-full justify-between hover:bg-muted/50">
                        Explore {category.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-2 h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
