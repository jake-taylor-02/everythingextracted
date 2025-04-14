import Link from "next/link"
import { ArrowRight, Newspaper, User, BookOpen, Coffee } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
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
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome!</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  This is my most ambitious project to date.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Useful Resources Card */}
              <Card
                className="overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                style={{ borderTop: "4px solid #EB5353" }}
              >
                <CardHeader className="pb-2 pt-4">
                  <div className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5" style={{ color: "#EB5353" }} />
                    <CardTitle className="text-xl font-bold">Useful Resources</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#EB5353" }} />
                      <Link href="/resources/websites" className="hover:underline">
                        Websites
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#F9D923" }} />
                      <Link href="/resources/podcasts" className="hover:underline">
                        Podcasts
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#36AE7C" }} />
                      <Link href="/resources/books" className="hover:underline">
                        Books
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#187498" }} />
                      <Link href="/resources/academic-articles" className="hover:underline">
                        Academic Articles
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-4 bg-gray-50">
                  <Button asChild variant="ghost" className="w-full justify-between hover:bg-white">
                    <Link href="/resources">
                      Check these out
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Blog Card */}
              <Card
                className="overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                style={{ borderTop: "4px solid #F9D923" }}
              >
                <CardHeader className="pb-2 pt-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" style={{ color: "#F9D923" }} />
                    <CardTitle className="text-xl font-bold">Blog</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#EB5353" }} />
                      <Link href="/blog/journey-to-perfect-brew" className="hover:underline">
                        Journey to Perfect Brew
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#F9D923" }} />
                      <Link href="/blog/tea-ceremonies-around-world" className="hover:underline">
                        Tea Ceremonies Around the World
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#36AE7C" }} />
                      <Link href="/blog/sample-post" className="hover:underline">
                        Sample Post
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#187498" }} />
                      <span>More Coming Soon...</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-4 bg-gray-50">
                  <Button asChild variant="ghost" className="w-full justify-between hover:bg-white">
                    <Link href="/blog">
                      Nothing interesting here
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* What's In My Cup Card */}
              <Card
                className="overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                style={{ borderTop: "4px solid #36AE7C" }}
              >
                <CardHeader className="pb-2 pt-4">
                  <div className="flex items-center gap-2">
                    <Coffee className="h-5 w-5" style={{ color: "#36AE7C" }} />
                    <CardTitle className="text-xl font-bold">The Information Zone</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#EB5353" }} />
                      <Link href="/the-information-zone/coffee" className="hover:underline">
                        Coffee
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#F9D923" }} />
                      <Link href="/the-information-zone/tea" className="hover:underline">
                        Tea
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#36AE7C" }} />
                      <Link href="/the-information-zone/water" className="hover:underline">
                        Water
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#187498" }} />
                      <Link href="/the-information-zone/milk" className="hover:underline">
                        Milk
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="p-4 bg-gray-50">
                  <Button asChild variant="ghost" className="w-full justify-between hover:bg-white">
                    <Link href="/the-information-zone">
                      Learn some cool stuff
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* About Me Card */}
              <Card
                className="overflow-hidden flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                style={{ borderTop: "4px solid #187498" }}
              >
                <CardHeader className="pb-2 pt-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" style={{ color: "#187498" }} />
                    <CardTitle className="text-xl font-bold">About Me</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <p className="text-sm">
                    Hi, I'm Jake! I'm a coffee and tea enthusiast, barista, and author of everythingextracted.com, where
                    my aim is to make information about the industry more accessible, organised, and visual.
                  </p>
                </CardContent>
                <CardFooter className="p-4 bg-gray-50">
                  <Button asChild variant="ghost" className="w-full justify-between hover:bg-white">
                    <Link href="/about">
                      Find out more of my dark secrets
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
