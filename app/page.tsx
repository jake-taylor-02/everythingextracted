import Link from "next/link"
import { ArrowRight, Newspaper, User, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
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
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  A dive into the world of all things tea and coffee
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore resources, blog posts, and learn more about your favorite brews.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/resources">Browse Resources</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <Card className="overflow-hidden border-2 border-emerald-200">
                <CardHeader className="bg-emerald-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Newspaper className="h-5 w-5 text-emerald-600" />
                    <CardTitle className="text-lg">Useful Resources</CardTitle>
                  </div>
                  <CardDescription>Helpful guides and information</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500" />
                      <span>The Art of Pour-Over Coffee</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span>Green Tea: Health Benefits Explored</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <span>Exploring Rooibos: The Red Bush Tea</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="bg-emerald-50 pt-2">
                  <Button asChild variant="ghost" className="w-full justify-between text-emerald-700">
                    <Link href="/resources">
                      View All Resources
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden border-2 border-teal-200">
                <CardHeader className="bg-teal-100 pb-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                    <CardTitle className="text-lg">Blog</CardTitle>
                  </div>
                  <CardDescription>Personal experiences and stories</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-teal-500" />
                      <span>My Journey to Finding the Perfect Brew</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500" />
                      <span>Tea Ceremonies Around the World</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span>Coffee Shop Hopping in Portland</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="bg-teal-50 pt-2">
                  <Button asChild variant="ghost" className="w-full justify-between text-teal-700">
                    <Link href="/blog">
                      Read All Posts
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden border-2 border-indigo-200">
                <CardHeader className="bg-indigo-100 pb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-indigo-600" />
                    <CardTitle className="text-lg">About Me</CardTitle>
                  </div>
                  <CardDescription>Learn more about the author</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Coffee enthusiast, tea lover, and passionate writer sharing my journey through the world of brews
                    and blends.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center">
                      <User className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">Alex Johnson</p>
                      <p className="text-xs text-muted-foreground">Portland, OR</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-indigo-50 pt-2">
                  <Button asChild variant="ghost" className="w-full justify-between text-indigo-700">
                    <Link href="/about">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="flex flex-col gap-1">
            <Link href="/" className="text-lg font-semibold">
              everythingextracted.com
            </Link>
            <p className="text-xs text-muted-foreground">Comprehensive brewing knowledge, from bean to cup.</p>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link href="/resources" className="text-muted-foreground hover:text-foreground">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

