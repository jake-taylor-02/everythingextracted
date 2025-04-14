import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlantBasedMilkPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plant-Based Milk</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Non-dairy alternatives for your beverages
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Oat Milk</CardTitle>
                  <CardDescription>Creamy and sustainable</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground">
                    Oat milk has gained popularity for its creamy texture and environmental benefits. Made from
                    steel-cut oats or whole groats, it's a great option for coffee and tea.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button asChild variant="outline" size="sm" className="w-full h-10">
                      <Link href="/the-information-zone/milk/plant-based-milk/oat-milk">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Almond Milk</CardTitle>
                  <CardDescription>Light and nutty</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground">
                    Almond milk offers a light, slightly sweet flavor with a hint of nuttiness. It's low in calories and
                    works well in coffee, though it doesn't foam as well as some alternatives.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button asChild variant="outline" size="sm" className="w-full h-10">
                      <Link href="/the-information-zone/milk/plant-based-milk/almond-milk">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Coconut Milk</CardTitle>
                  <CardDescription>Rich and tropical</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground">
                    Coconut milk brings a rich, tropical flavor to beverages. Its natural sweetness and creamy texture
                    make it excellent for certain coffee drinks and specialty teas.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button asChild variant="outline" size="sm" className="w-full h-10">
                      <Link href="/the-information-zone/milk/plant-based-milk/coconut-milk">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300 flex flex-col">
                <CardHeader className="p-6 pb-0">
                  <CardTitle>Soya Milk</CardTitle>
                  <CardDescription>Protein-rich classic</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground">
                    Soya milk is one of the original plant-based alternatives, offering a good protein content and
                    neutral flavor that works well in coffee and tea. It also foams relatively well.
                  </p>
                  <div className="mt-auto pt-4">
                    <Button asChild variant="outline" size="sm" className="w-full h-10">
                      <Link href="/the-information-zone/milk/plant-based-milk/soya-milk">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2 mr-4">
                <Link href="/the-information-zone/milk">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Milk
                </Link>
              </Button>
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
          </div>
          <nav className="flex gap-4 text-sm">
            <Link href="/resources" className="text-muted-foreground hover:text-foreground">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/the-information-zone" className="text-primary font-medium">
              The Information Zone
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
