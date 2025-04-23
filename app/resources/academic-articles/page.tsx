import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const articles = [
  {
    title: "Coffee, caffeine, and health outcomes: an umbrella review",
    authors: "Grosso G, Godos J, Galvano F, Giovannucci EL",
    journal: "Annual Review of Nutrition",
    published: "2017",
    doi: "https://doi.org/10.1146/annurev-nutr-071816-064941",
    abstract:
      "This comprehensive review examines the evidence on coffee consumption and various health outcomes. The authors analyze data from meta-analyses and systematic reviews, finding that coffee consumption is generally associated with beneficial health effects, including reduced risk of several chronic diseases.",
    category: "Health",
    tags: ["Epidemiology", "Chronic Disease", "Mortality", "Meta-analysis"],
  },
  {
    title: "Tea and Cardiovascular Disease: Effects on Blood Pressure and Beyond",
    authors: "Grassi D, Desideri G, Di Giosia P, et al.",
    journal: "Current Pharmaceutical Design",
    published: "2016",
    doi: "https://doi.org/10.2174/1381612822666160614080638",
    abstract:
      "This review examines the relationship between tea consumption and cardiovascular health. The authors discuss the bioactive compounds in tea, particularly catechins and flavonoids, and their effects on blood pressure, endothelial function, and other cardiovascular risk factors.",
    category: "Tea",
    tags: ["Cardiovascular", "Flavonoids", "Blood Pressure", "Clinical Studies"],
  },
  {
    title: "Chemical and Sensory Characterization of Cold Brew Coffee",
    authors: "Fuller M, Rao NZ",
    journal: "Scientific Reports",
    published: "2017",
    doi: "https://doi.org/10.1038/s41598-017-18247-4",
    abstract:
      "This study compares the chemical composition and sensory attributes of cold brew and hot brew coffee. The researchers found that cold brew coffee has lower titratable acidity and different extraction patterns for certain compounds compared to hot brew methods.",
    category: "Chemistry",
    tags: ["Extraction", "Brewing Methods", "Acidity", "Sensory Analysis"],
  },
  {
    title: "Climate change impacts on coffee production: A global assessment",
    authors: "Bunn C, Läderach P, Rivera OO, Kirschke D",
    journal: "Climatic Change",
    published: "2015",
    doi: "https://doi.org/10.1007/s10584-014-1306-x",
    abstract:
      "This research assesses the potential impact of climate change on global coffee production. Using climate models and crop suitability analysis, the authors project significant reductions in suitable growing areas for Arabica coffee by 2050, with major implications for producing countries.",
    category: "Agriculture",
    tags: ["Climate Change", "Crop Suitability", "Arabica", "Sustainability"],
  },
  {
    title: "Theaflavins in Black Tea and Catechins in Green Tea Are Equally Effective Antioxidants",
    authors: "Leung LK, Su Y, Chen R, Zhang Z, Huang Y, Chen ZY",
    journal: "Journal of Nutrition",
    published: "2001",
    doi: "https://doi.org/10.1093/jn/131.9.2248",
    abstract:
      "This study compares the antioxidant activity of black tea theaflavins and green tea catechins. The researchers found that despite the different chemical structures, both compounds exhibit similar antioxidant potency in various in vitro and ex vivo models.",
    category: "Chemistry",
    tags: ["Antioxidants", "Polyphenols", "Green Tea", "Black Tea"],
  },
  {
    title: "Coffee Silverskin: A Review on Potential Cosmetic Applications",
    authors: "Rodrigues F, Sarmento B, Amaral MH, Oliveira MB",
    journal: "Cosmetics",
    published: "2015",
    doi: "https://doi.org/10.3390/cosmetics2020066",
    abstract:
      "This review explores the potential use of coffee silverskin, a by-product of coffee roasting, in cosmetic applications. The authors discuss its bioactive compounds, antioxidant properties, and potential for sustainable use in skincare products.",
    category: "Coffee",
    tags: ["By-products", "Sustainability", "Cosmetics", "Antioxidants"],
  },
  {
    title: "Caffeine and Cognitive Functions in Sports: A Systematic Review and Meta-Analysis",
    authors: "Calvo JL, Fei X, Domínguez R, Pareja-Galeano H",
    journal: "Nutrients",
    published: "2021",
    doi: "https://doi.org/10.3390/nu13030868",
    abstract:
      "This systematic review and meta-analysis examines the effects of caffeine on cognitive performance in sports. The researchers found that caffeine supplementation significantly improves reaction time, attention, and accuracy in various athletic contexts.",
    category: "Health",
    tags: ["Caffeine", "Cognitive Performance", "Sports", "Meta-analysis"],
  },
  {
    title: "Soil Fertility Management in Organic Tea Cultivation: A Review",
    authors: "Han WY, Xu JM, Wei K, Shi RZ, Ma LF",
    journal: "Pedosphere",
    published: "2013",
    doi: "https://doi.org/10.1016/S1002-0160(13)60037-6",
    abstract:
      "This review examines soil fertility management practices in organic tea cultivation. The authors discuss nutrient cycling, organic amendments, and microbial activity in tea soils, with recommendations for sustainable management practices.",
    category: "Agriculture",
    tags: ["Organic Farming", "Soil Health", "Sustainability", "Nutrient Management"],
  },
]

export default function AcademicArticlesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="text-lg font-bold">
            everythingextracted.com
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/resources" className="text-sm font-medium text-primary">
              Useful Resources
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/the-information-zone" className="text-sm font-medium hover:text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Articles</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Peer-reviewed research on coffee and tea science
                </p>
              </div>
            </div>

            {/*

            <div className="grid gap-8 md:grid-cols-2">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                        <div className="h-1 w-12 bg-blue-500 my-2"></div>
                      </div>
                    </div>
                    <CardDescription>{article.authors}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="text-sm text-muted-foreground mb-4">{article.abstract}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">Journal:</span> {article.journal}, {article.published}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button asChild variant="ghost" className="w-full justify-between hover:bg-muted/50">
                      <Link href={article.doi} target="_blank" rel="noopener noreferrer">
                        View Article
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            */}

            <div className="prose prose-gray max-w-3xl mx-auto">
              <p className="text-center text-muted-foreground italic">This page is coming soon.</p>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/resources">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Resources
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
