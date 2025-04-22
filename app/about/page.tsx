import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
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
            <Link href="/the-information-zone" className="text-sm font-medium hover:text-primary">
              The Information Zone
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">I just really like coffee</p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Jake Taylor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div>
                      <h3 className="text-lg font-medium">Barista</h3>
                      <p className="text-sm text-muted-foreground">London, United Kingdom</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p>
                      Despite the fact that I spent all my childhood and most of my teenage years drinking nothing other
                      than water, things changed and I'm very enthusiastic about all things coffee, tea, cafe culture and more.
                    </p>
                    <p>
                      I started working as a Barista in September 2024, and built this website to create a platform for others to read about the history, science and culture around the beverages that we consume. I've also invested in some equipment that
                      should allow me to work on and publish some fun projects over the next few months.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Brewing Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex gap-4">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 aspect-square"
                          style={{ backgroundColor: "#EB5353" }}
                        >
                          <span className="text-sm font-medium text-white">1</span>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">First Espresso</p>
                          <p className="text-sm text-muted-foreground">
                            After an all nighter in Budapest, I was reccomended a double espresso to remain awake for
                            the day. That has turned out to be quite an expensive recommendation.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 aspect-square"
                          style={{ backgroundColor: "#F9D923" }}
                        >
                          <span className="text-sm font-medium text-white">2</span>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Aquired a Moka Pot</p>
                          <p className="text-sm text-muted-foreground">
                            I purchased a 2 cup Bialetti Moka pot to get things started, which allowed me to experiment
                            with different types of coffee.
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 aspect-square"
                          style={{ backgroundColor: "#36AE7C" }}
                        >
                          <span className="text-sm font-medium text-white">3</span>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Purchased a Gaggia Classic</p>
                          <p className="text-sm text-muted-foreground">
                            Knowing that I wanted to take the hobby seriously, I bought a Gaggia Classic to get in as
                            much practice as I could
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 aspect-square"
                          style={{ backgroundColor: "#187498" }}
                        >
                          <span className="text-sm font-medium text-white">4</span>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Started working as a Barista</p>
                          <p className="text-sm text-muted-foreground">
                            In September 2024 I finally made the leap and started as a Barista at Café Kitsuné, which is
                            where I still work today
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>My Current Setup</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#EB5353" }} />
                        <span>2001 Gaggia Classic + PID</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#F9D923" }} />
                        <span>Baratza Encore ESP & Kingrinder K6</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#36AE7C" }} />
                        <span>Hario V60 Pour-Over</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#187498" }} />
                        <span>Dualit Pour Over Kettle</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "#9C27B0" }} />
                        <span>ATAGO Digital Pocket Refractometer</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
