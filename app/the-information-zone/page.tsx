import Link from "next/link"
import { Coffee, Leaf, Droplet, Milk, ArrowRight, ArrowLeft, FlaskConical } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function InformationZonePage() {
  // Define color palette in the exact order specified
  const colorPalette = ["#EB5353", "#F9D923", "#36AE7C", "#187498"]

  // Define the information categories with their colors
  const informationCategories = [
    {
      title: "Coffee",
      icon: Coffee,
      href: "/the-information-zone/coffee",
      accentColor: "#EB5353", // Red
      subpages: [
        {
          title: "Coming soon",
          href: "/the-information-zone/coffee",
          color: "#EB5353", // Red (1st)
        },
      ],
    },
    {
      title: "Tea",
      icon: Leaf,
      href: "/the-information-zone/tea",
      accentColor: "#F9D923", // Yellow
      subpages: [
        {
          title: "Coming soon",
          href: "/the-information-zone/tea",
          color: "#F9D923", // Yellow (2nd)
        },
      ],
    },
    {
      title: "Water",
      icon: Droplet,
      href: "/the-information-zone/water",
      accentColor: "#36AE7C", // Green
      subpages: [
        {
          title: "Coming soon",
          href: "/the-information-zone/water",
          color: "#36AE7C", // Green (3rd)
        },
      ],
    },
    {
      title: "Milk",
      icon: Milk,
      href: "/the-information-zone/milk",
      accentColor: "#187498", // Blue
      subpages: [
        {
          title: "Dairy Milk",
          href: "/the-information-zone/milk/dairy-milk",
          color: "#187498", // Blue
        },
        {
          title: "Plant-based Milk",
          href: "/the-information-zone/milk/plant-based-milk",
          color: "#187498", // Blue
        },
       /* {
          title: "Coming soon",
          href: "/the-information-zone/milk",
          color: "#36AE7C", // Green (3rd)
        },
        {
          title: "Coming soon",
          href: "/the-information-zone/milk",
          color: "#187498", // Blue (4th)
        }, */
      ],
    },
    {
      title: "Chemistry 101",
      icon: FlaskConical,
      href: "/the-information-zone/chemistry-101",
      accentColor: "#9C27B0", // Purple
      subpages: [
        {
          title: "Coming soon",
          href: "/the-information-zone/chemistry-101",
          color: "#9C27B0", // Purple
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
              About Me
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
                  Time to spill the tea... on everything!
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

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
