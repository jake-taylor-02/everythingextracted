"use client"

import Link from "next/link"
import { ArrowLeft, Coffee, Download, ExternalLink } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DataPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Coffee className="h-6 w-6 text-emerald-600" />
            <span>Everything Extracted</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/articles" className="text-sm font-medium hover:text-primary">
              Articles
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/data" className="text-sm font-medium text-primary">
              Experimental Data
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experimental Data</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our research findings and brewing experiments with interactive visualizations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="extraction" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="extraction">Extraction Rates</TabsTrigger>
                <TabsTrigger value="caffeine">Caffeine Content</TabsTrigger>
                <TabsTrigger value="flavor">Flavor Profiles</TabsTrigger>
              </TabsList>
              <TabsContent value="extraction" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Coffee Extraction Rates at Different Temperatures</CardTitle>
                    <CardDescription>
                      How water temperature affects the extraction of coffee compounds over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ChartContainer
                        config={{
                          "85C": {
                            label: "85°C",
                            color: "hsl(var(--chart-1))",
                          },
                          "90C": {
                            label: "90°C",
                            color: "hsl(var(--chart-2))",
                          },
                          "95C": {
                            label: "95°C",
                            color: "hsl(var(--chart-3))",
                          },
                          "100C": {
                            label: "100°C",
                            color: "hsl(var(--chart-4))",
                          },
                        }}
                      >
                        <LineChart
                          data={extractionData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="time" label={{ value: "Time (seconds)", position: "bottom", offset: 0 }} />
                          <YAxis label={{ value: "Extraction (%)", angle: -90, position: "left" }} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line type="monotone" dataKey="85C" stroke="var(--color-85C)" strokeWidth={2} />
                          <Line type="monotone" dataKey="90C" stroke="var(--color-90C)" strokeWidth={2} />
                          <Line type="monotone" dataKey="95C" stroke="var(--color-95C)" strokeWidth={2} />
                          <Line type="monotone" dataKey="100C" stroke="var(--color-100C)" strokeWidth={2} />
                        </LineChart>
                      </ChartContainer>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">
                      Data collected using refractometer measurements, March 2023
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Data
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Methodology</CardTitle>
                    <CardDescription>How the extraction rate experiment was conducted</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        For this experiment, we used a medium-roast Ethiopian coffee ground to a medium-fine
                        consistency. The coffee-to-water ratio was kept constant at 1:16 across all tests. Water was
                        heated to the specified temperatures (85°C, 90°C, 95°C, and 100°C) with ±1°C precision.
                      </p>
                      <p>
                        Extraction was measured using a VST refractometer to determine the Total Dissolved Solids (TDS)
                        at 30-second intervals. The extraction percentage was calculated using the formula: Extraction %
                        = TDS × Brew Ratio × 100.
                      </p>
                      <p>
                        Each test was repeated three times and the results were averaged to ensure consistency and
                        reliability of the data.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="caffeine" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Caffeine Content Comparison</CardTitle>
                    <CardDescription>
                      Caffeine levels in different coffee and tea varieties (mg per 8oz cup)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ChartContainer
                        config={{
                          caffeine: {
                            label: "Caffeine (mg)",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                      >
                        <BarChart
                          data={caffeineData}
                          layout="vertical"
                          margin={{
                            top: 20,
                            right: 30,
                            left: 150,
                            bottom: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" label={{ value: "Caffeine (mg)", position: "bottom", offset: 0 }} />
                          <YAxis type="category" dataKey="name" width={140} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="caffeine" fill="var(--color-caffeine)" />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">Data based on laboratory analysis, February 2023</p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Data
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Caffeine Content Data</CardTitle>
                    <CardDescription>Complete dataset with additional information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Beverage</TableHead>
                          <TableHead>Caffeine (mg)</TableHead>
                          <TableHead>Serving Size</TableHead>
                          <TableHead>Preparation Method</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {caffeineTableData.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell>{item.caffeine}</TableCell>
                            <TableCell>{item.serving}</TableCell>
                            <TableCell>{item.method}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="flavor" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Single Origin Coffee Flavor Profiles</CardTitle>
                    <CardDescription>Comparative analysis of flavor characteristics by region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[500px]">
                      <ChartContainer
                        config={{
                          acidity: {
                            label: "Acidity",
                            color: "hsl(var(--chart-1))",
                          },
                          sweetness: {
                            label: "Sweetness",
                            color: "hsl(var(--chart-2))",
                          },
                          body: {
                            label: "Body",
                            color: "hsl(var(--chart-3))",
                          },
                          fruitiness: {
                            label: "Fruitiness",
                            color: "hsl(var(--chart-4))",
                          },
                          nuttiness: {
                            label: "Nuttiness",
                            color: "hsl(var(--chart-5))",
                          },
                        }}
                      >
                        <BarChart
                          data={flavorData}
                          margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 100,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="origin" angle={-45} textAnchor="end" height={80} interval={0} />
                          <YAxis label={{ value: "Score (1-10)", angle: -90, position: "left" }} />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar dataKey="acidity" fill="var(--color-acidity)" />
                          <Bar dataKey="sweetness" fill="var(--color-sweetness)" />
                          <Bar dataKey="body" fill="var(--color-body)" />
                          <Bar dataKey="fruitiness" fill="var(--color-fruitiness)" />
                          <Bar dataKey="nuttiness" fill="var(--color-nuttiness)" />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">
                      Data based on blind tasting by certified Q-graders, January 2023
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Data
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Research Notes</CardTitle>
                    <CardDescription>Additional observations from our flavor profile analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>
                        Our flavor profile analysis was conducted by a panel of five certified Q-graders who evaluated
                        each coffee sample in a blind tasting format. All coffees were medium roast and prepared using
                        the same brewing method (pour-over) to ensure consistency.
                      </p>
                      <p>
                        The panel noted that while these profiles represent the general characteristics of each region,
                        significant variations can occur based on specific farms, processing methods, and seasonal
                        factors.
                      </p>
                      <p>
                        The most distinctive profiles were found in Ethiopian coffees (highest fruitiness) and Sumatran
                        coffees (highest body and nuttiness), while Colombian coffees showed the most balanced overall
                        profile.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="gap-2">
                      <Link href="https://sca.coffee/research" target="_blank">
                        <ExternalLink className="h-4 w-4" />
                        Related Research
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
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
      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="flex flex-col gap-1">
            <Link href="/" className="flex items-center gap-1 text-lg font-semibold">
              <Coffee className="h-5 w-5 text-emerald-600" />
              <span>Everything Extracted</span>
            </Link>
            <p className="text-xs text-muted-foreground">Comprehensive brewing knowledge, from bean to cup.</p>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link href="/articles" className="text-muted-foreground hover:text-foreground">
              Articles
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/data" className="text-primary font-medium">
              Data
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

const extractionData = [
  { time: 0, "85C": 0, "90C": 0, "95C": 0, "100C": 0 },
  { time: 30, "85C": 8, "90C": 12, "95C": 15, "100C": 18 },
  { time: 60, "85C": 12, "90C": 16, "95C": 19, "100C": 22 },
  { time: 90, "85C": 15, "90C": 19, "95C": 22, "100C": 24 },
  { time: 120, "85C": 17, "90C": 21, "95C": 24, "100C": 25 },
  { time: 150, "85C": 18, "90C": 22, "95C": 25, "100C": 26 },
  { time: 180, "85C": 19, "90C": 23, "95C": 25.5, "100C": 26.5 },
  { time: 210, "85C": 20, "90C": 23.5, "95C": 26, "100C": 27 },
  { time: 240, "85C": 20.5, "90C": 24, "95C": 26.5, "100C": 27.5 },
]

const caffeineData = [
  { name: "Espresso (2oz)", caffeine: 80 },
  { name: "Drip Coffee", caffeine: 95 },
  { name: "Cold Brew", caffeine: 155 },
  { name: "Black Tea", caffeine: 47 },
  { name: "Green Tea", caffeine: 28 },
  { name: "White Tea", caffeine: 15 },
  { name: "Matcha", caffeine: 70 },
  { name: "Decaf Coffee", caffeine: 5 },
  { name: "Herbal Tea", caffeine: 0 },
]

const caffeineTableData = [
  { name: "Espresso", caffeine: "80mg", serving: "2oz (60ml)", method: "Espresso Machine, 9 bar pressure" },
  { name: "Drip Coffee", caffeine: "95mg", serving: "8oz (240ml)", method: "Standard Drip Brewer" },
  { name: "Cold Brew", caffeine: "155mg", serving: "8oz (240ml)", method: "24-hour Immersion" },
  { name: "Black Tea", caffeine: "47mg", serving: "8oz (240ml)", method: "5-minute Steep" },
  { name: "Green Tea", caffeine: "28mg", serving: "8oz (240ml)", method: "3-minute Steep at 80°C" },
  { name: "White Tea", caffeine: "15mg", serving: "8oz (240ml)", method: "2-minute Steep at 75°C" },
  { name: "Matcha", caffeine: "70mg", serving: "8oz (240ml)", method: "Whisked Ceremonial Grade" },
  { name: "Decaf Coffee", caffeine: "5mg", serving: "8oz (240ml)", method: "Swiss Water Process" },
  { name: "Herbal Tea", caffeine: "0mg", serving: "8oz (240ml)", method: "5-minute Steep" },
]

const flavorData = [
  {
    origin: "Ethiopia",
    acidity: 8,
    sweetness: 7,
    body: 5,
    fruitiness: 9,
    nuttiness: 3,
  },
  {
    origin: "Colombia",
    acidity: 7,
    sweetness: 6,
    body: 6,
    fruitiness: 5,
    nuttiness: 5,
  },
  {
    origin: "Brazil",
    acidity: 4,
    sweetness: 5,
    body: 7,
    fruitiness: 3,
    nuttiness: 8,
  },
  {
    origin: "Guatemala",
    acidity: 6,
    sweetness: 5,
    body: 6,
    fruitiness: 4,
    nuttiness: 6,
  },
  {
    origin: "Kenya",
    acidity: 9,
    sweetness: 6,
    body: 5,
    fruitiness: 8,
    nuttiness: 2,
  },
  {
    origin: "Sumatra",
    acidity: 3,
    sweetness: 4,
    body: 9,
    fruitiness: 2,
    nuttiness: 8,
  },
]

