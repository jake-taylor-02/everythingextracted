"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cite, References, type ReferenceNumbersMap } from "@/components/simple-reference"

// Define reference numbers for this page
const pageReferenceNumbers: ReferenceNumbersMap = {
  zeder2015: 1,
  adw2023: 2,
  uchicago2023: 3,
  larson2012: 4,
  helmer2005: 5,
  tresset2011: 6,
  evershed2008: 7,
  payne1973: 8,
  kamjan2021: 9,
  wanes2019: 10,
  itan2010: 11,
  yongfa1984: 12,
  chinacdc2022: 13,
  tishkoff2007: 14,
  bersaglieri2004: 15,
  salzberg2018: 16,
  ucsc2023: 17,
  ucscgene2023: 18,
  jones2011: 19,
  lewinsky2005: 20,
  anguita2020: 21,
  ingram2022: 22,
  simoons1970: 23,
  burger2007: 24,
  gerbault2011: 25,
  flatz1973: 26,
  deluca2004: 27,
  evershed2022: 28,
}

export default function MilkHistoryPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <style jsx global>{`
      body {
        overflow-y: scroll;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE and Edge */
      }
      
      body::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
      }
    `}</style>
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The origins of cattle, milk consumption, and lactase persistence
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We're going to have to travel quite far back for this one
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">Greetings Cattle</h2>
                  <div className="space-y-4">
                    <div>
                      Cattle, or Bos Taurus to use their latin name, are domesticated bovids, meaning that they are part
                      of the Bovidae family, and share a coevolutionary, mutualistic relationship with humans{" "}
                      <Cite id="zeder2015" referenceNumbers={pageReferenceNumbers} />. Bovids are characterised by
                      having split hooves, a herbivourous diet, and the unique way that they rechew partially degraded
                      food <Cite id="adw2023" referenceNumbers={pageReferenceNumbers} />.
                    </div>

                    <div>
                      Neolithisation refers to the process by which humans transitioned from a hunter-gatherer lifestyle
                      to one centered on farming, animal domestication, and permanent settlements. It likely started in
                      an area referred to as the Fertile Crescent, an area spanning the modern-day countries of Iraq,
                      Turkey, Syria, Lebanon, Israel and Palestine{" "}
                      <Cite id="uchicago2023" referenceNumbers={pageReferenceNumbers} />.
                    </div>

                    <div>
                      Animal husbandry, the practice of controlled cultivation, management, and production of domestic
                      animals, is thought to have started 15,000 years ago with the domestication of the wolf{" "}
                      <Cite id="larson2012" referenceNumbers={pageReferenceNumbers} />. Comparing cattle populations
                      between two stages of the Pre-Pottery Neolithic period in the Near East shows that the population
                      decreased, and researchers suggest that this was the effect of domestication rather than other
                      factors, leading us to believe that the first domestication of cattle occurred approximately
                      10,000 years ago <Cite id="helmer2005" referenceNumbers={pageReferenceNumbers} />.
                    </div>

                    <div className="mt-4">
                      <figure className="relative">
                        <Image
                          src="/images/neolithic-domestication-routes.jpeg"
                          alt="Map showing the routes of dissemination of domesticated animals in Europe during the Neolithic period"
                          width={800}
                          height={600}
                          className="rounded-md mx-auto"
                        />
                        <figcaption className="text-sm text-center mt-2 text-muted-foreground">
                          Figure 1: Chronology and main routes of dissemination of domesticated animals in Europe during
                          the Neolithic period. Numbers represent years before present.{" "}
                          <Cite id="tresset2011" referenceNumbers={pageReferenceNumbers} />
                        </figcaption>
                      </figure>
                    </div>

                    <div>
                      As the Neolithic package was slowly disseminated across Europe, let's take a look at what our
                      ancestors were using cattle for. Firstly, there is strong evidence that suggests their milk was
                      heavily processed into products such as cheese and ghee that were more easily digested by the
                      largely lactose intolerent population at the time, and these milk-derived products had the added
                      benefits of lasting for longer in the event of a surplus{" "}
                      <Cite id="evershed2008" referenceNumbers={pageReferenceNumbers} />.
                    </div>

                    <div>
                      In addition to dairy products, cattle were routinely slaughtered for their meat, which can be
                      inferred by looking at kill-off patterns in archaeological remains{" "}
                      <Cite id="payne1973" referenceNumbers={pageReferenceNumbers} />. Analysis of a site in
                      Northeastern Bulgaria approximately 8,000 years ago estimated that beef formed approximately 90%
                      of the meat provided by the most frequently identified mammals at the site throughout time{" "}
                      <Cite id="kamjan2021" referenceNumbers={pageReferenceNumbers} />.
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">Lactase Non-Persistence vs Lactose Intolerance </h2>
                  <div className="space-y-4">
                    Lactose, a compound sugar (disaccharide) composed of galactose and glucose, makes up around 2 - 8%
                    of milk by mass. Mammals are defined by the presence of milk producing mammary glands amongst other
                    key characteristics, and this milk is used to feed their young. Most babies, barring some exceptions{" "}
                    <Cite id="wanes2019" referenceNumbers={pageReferenceNumbers} />, produce the enzyme lactase to break
                    down the lactose in milk, but between the natural weaning period, the point at which solid food is
                    introduced into an infant's diet, and adolescence, production of lactase decreases rapidly for two
                    thirds of the world's population. The scientific term for this is lactase non-persistence (LNP).
                  </div>
                  <div className="mt-4">
                    <figure className="relative">
                      <Image
                        src="/images/lactase-persistence-map.png"
                        alt="World map showing the distribution of lactase persistence across different populations"
                        width={800}
                        height={500}
                        className="rounded-md mx-auto"
                      />
                      <figcaption className="text-sm text-center mt-2 text-muted-foreground">
                        Figure 2: Global distribution of lactase persistence. Colors indicate prevalence from lowest
                        (blue, ~0.1) to highest (red, ~0.9).{" "}
                        <Cite id="itan2010" referenceNumbers={pageReferenceNumbers} />
                      </figcaption>
                    </figure>
                  </div>
                  <div>
                    Lactose intolerance on the other hand is a clinical term, and refers to the symptoms that are
                    experienced by an individual who cannot properly digest and absorb lactose. So, are all LNP
                    individuals lactose intolerant? Interestingly not. In China for example, a very high proportion of
                    the population are LNP <Cite id="yongfa1984" referenceNumbers={pageReferenceNumbers} />, however
                    milk products are widely consumed, and even recommended by the CDC, The Chinese Center for Disease
                    Control and Prevention. <Cite id="chinacdc2022" referenceNumbers={pageReferenceNumbers} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">The Genetic Basis for Lactase Persistence</h2>
                  <div className="space-y-4">
                    <div>
                      As we discussed earlier, two thirds of the world's population are lactase non-persistent, which
                      gives rise to the question: What explains the remaining third of the population who do continue to
                      produce lactase after adolescence? It's complicated, and still being researched, but it all
                      relates to a gene mutation that likely first appeared within the last 20,000 years{" "}
                      <Cite id="tishkoff2007" referenceNumbers={pageReferenceNumbers} />{" "}
                      <Cite id="bersaglieri2004" referenceNumbers={pageReferenceNumbers} />.
                    </div>
                    <div>
                      Let's define a few terms. A phenotype is defined as the set of characteristics of a living thing,
                      resulting from its combination of genes and the effect of its environment, and a genotype is the
                      combination of genes that a particular living thing carries. Humans have around 40,000 different
                      genes <Cite id="salzberg2018" referenceNumbers={pageReferenceNumbers} /> and genes are the basic
                      units of heredity, each one controlling a particular quality in living things. The lactase
                      persistence phenotye is simply the observed continued production of lactase enzyme into adulthood.
                    </div>
                    <div>
                      Genes are stored on chromosomes, with most humans having 23 pairs, one from each parent, found in
                      the nucleus of nearly every cell in the body. Every chromosome is divided into two arms, a shorter
                      arm (p) and a longer arm (q). On the q arm of the chromosome 2, in a location named 2q21.3, we
                      find the gene LCT, and very close to it (upstream) we find the gene MCM6{" "}
                      <Cite id="ucsc2023" referenceNumbers={pageReferenceNumbers} />. The LCT gene provides the
                      instructions for making the enzyme lactase in cells lining the small intestine{" "}
                      <Cite id="ucscgene2023" referenceNumbers={pageReferenceNumbers} /> and the MCM6 gene is part of
                      the minichromosome maintenance (MCM) complex, involved in the DNA and RNA replication process, but
                      this isn't the relevant part.
                    </div>
                    <div>
                      Genes contain regions called exons and introns. Exons (expressed regions) make their way into the
                      final product that a gene codes for (a specific protein for example) and introns (intragenic
                      regions) are involved but don't make their way into the final product. The crucial piece of
                      information that explains what MCM6 has to do with the lactase persistence phenotype is the
                      following:
                    </div>
                    <div className="mt-4">
                      <figure className="relative">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Figure%202%20-%20The%20impact%20of%20cis-acting%20polymorphisms%20on%20the%20human%20phenotype-wELKDQJWyt0Wt5aN8k1qP4xSWWI9ZC.png"
                          alt="Diagram showing the MCM6 and LCT genes and their regulatory elements"
                          width={800}
                          height={400}
                          className="rounded-md mx-auto"
                        />
                        <figcaption className="text-sm text-center mt-2 text-muted-foreground">
                          Figure 3: (a) 4 SNPs (Single Nucleotide Polymorphisms) that are associated with Lactase
                          Persistence. (b) Transcription factor binding sites in this region, including Oct1 which binds
                          at the -13910 position. <Cite id="jones2011" referenceNumbers={pageReferenceNumbers} />
                        </figcaption>
                      </figure>
                    </div>
                    <div>
                      A mutation within intron 13 of the MCM6 gene, designated the −13910 T/C polymorphism (a
                      single-nucleotide change from cytosine to thymine), functions as an enhancer of the LCT promoter -
                      the region responsible for initiating gene expression. This mutation creates a new binding site
                      for Oct-1, a transcription factor (a protein that regulates gene expression). Upon binding, Oct-1
                      interacts with other transcription factors, forming a complex that activates expression of the LCT
                      gene. This results in the production of lactase.{" "}
                      <Cite id="lewinsky2005" referenceNumbers={pageReferenceNumbers} />.
                    </div>
                    <div>
                      The −13910 T/C polymorphism was the first gene mutation to be associated with LP, is thought to be
                      the the main driver of LP in Europe, and is one of over 20 currently studied SNPs that underlie
                      the genetic etiology of LP <Cite id="anguita2020" referenceNumbers={pageReferenceNumbers} />.
                    </div>
                    <div>
                      Interestingly, different populations around the world have individually evolved different genetic
                      mutations that lead to lactase persistence. LP is one of the best examples of convergent
                      evolution, with different genetic mutations producing the same phenotype.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <figure className="relative">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13910t-DP1jtLJ0WT4TRkHSSlxDZL56dw9PPY.png"
                          alt="Geographic distribution of -13,910*T variant"
                          width={400}
                          height={300}
                          className="rounded-md mx-auto"
                        />
                      </figure>
                      <figure className="relative">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13915g-o4eQ6pl2rxlYtol2OsGfIHaUb6nN4J.png"
                          alt="Geographic distribution of -13,915*G variant"
                          width={400}
                          height={300}
                          className="rounded-md mx-auto"
                        />
                      </figure>
                      <figure className="relative">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13907g-ytjMANknkjLGj7QYz4wqYHy6MxGSVT.png"
                          alt="Geographic distribution of -13,907*G variant"
                          width={400}
                          height={300}
                          className="rounded-md mx-auto"
                        />
                      </figure>
                      <figure className="relative">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14009g-X9mnl4OZgH4HRgwVFgmzjULMWyi6Ne.png"
                          alt="Geographic distribution of -14,009*G variant"
                          width={400}
                          height={300}
                          className="rounded-md mx-auto"
                        />
                      </figure>
                    </div>
                    <div className="mt-2">
                      <figure className="relative">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14010c-2logdrtDRh7PvspZfKHKwI0LlwErsw.png"
                          alt="Geographic distribution of -14,010*C variant"
                          width={400}
                          height={300}
                          className="rounded-md mx-auto"
                        />
                        <figcaption className="text-sm text-center mt-2 text-muted-foreground">
                          Figure 4: Interpolated geographic distributions of LP causative variants –13910*T, –14010*C,
                          –14009*G, –13915*G, –13907*G, in the old world. The scale shows allele frequencies and values
                          on axes are degrees of latitude and longitude. (Data updated from{" "}
                          <a
                            href="https://www.ucl.ac.uk/biosciences/gee/molecular-and-cultural-evolution-lab/global-lactase-persistence-association-database-glad"
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            UCL GLAD database
                          </a>
                          ). <Cite id="ingram2022" referenceNumbers={pageReferenceNumbers} />
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">
                    Putting it all together: The Evolution of Lactase Persistence{" "}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      Now that we have looked at the timeline surrounding animal domestication, dairying practices, and
                      the MCM6 mutations driving lactase persistence in different populations, let's explore some ideas
                      about how the LP phenotype came to be expressed in multiple populations worldwide.
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mt-4 mb-2">
                        Culture Historical Hypothesis <Cite id="simoons1970" referenceNumbers={pageReferenceNumbers} />:
                      </h3>
                      The first and most widely accepted theory is the Culture Historical Hypothesis, first suggested in
                      the 1970s, for the following reasons:
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          There is a significant correlation between lactase persistence (LP) and pastoralism across
                          Old-World populations <Cite id="tishkoff2007" referenceNumbers={pageReferenceNumbers} />;
                          pastoralist groups had far greater access to milk than other populations at the time
                        </li>
                        <li>
                          There is also high incidence of LNP among adults in the traditional areas of non-milking in
                          East and Southeast Asia, the Pacific and the New World
                        </li>
                        <li>
                          There is evidence that suggests that early Neolithic Europeans did not carry the −13910 T/C
                          polymorphism, the mutation widely associated with LP in Northern Europe{" "}
                          <Cite id="burger2007" referenceNumbers={pageReferenceNumbers} />, suggesting that this
                          mutation emerged later
                        </li>
                        <li>
                          LP would be a desirable trait as milk could have been used as an alternative food source
                          between periods of crop cultivation, was a relatively pathogen free fluid, and was simply a
                          good source of calories <Cite id="gerbault2011" referenceNumbers={pageReferenceNumbers} />
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mt-4 mb-2">
                        Calcium Assimilation Hypothesis <Cite id="flatz1973" referenceNumbers={pageReferenceNumbers} />:
                      </h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          At high latitudes, incident UVB levels are often too low for adequate vitamin D production,
                          and vitamin D is required for good calcium absorption{" "}
                          <Cite id="deluca2004" referenceNumbers={pageReferenceNumbers} />
                        </li>
                        <li>
                          Being calcium deficient puts an individual in danger of developing rickets or osteomalacia
                        </li>
                        <li>Milk is a great source of calcium, and also contains vitamin D</li>
                        <li>
                          LP was selectively favorable in northern Europe as a means of avoiding poor calcium and
                          vitamin D status
                        </li>
                      </ul>

                      <h3 className="text-xl font-semibold mt-4 mb-2">
                        Crisis mechanism <Cite id="evershed2022" referenceNumbers={pageReferenceNumbers} />:
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Detrimental health consequences of high lactose food consumption by LNP individuals would be
                          acutely manifested during famines
                        </li>
                        <li>
                          Lactose-induced diarrhoea can shift from an inconvenient to a fatal condition in severely
                          malnourished individuals
                        </li>
                        <li>
                          High lactose (i.e. unfermented) milk products are more likely to be consumed when other food
                          sources have been exhausted
                        </li>
                        <li>LP selection pressures would have been greater during times of subsistence instability</li>
                      </ul>
                      <h3 className="text-xl font-semibold mt-4 mb-2">
                        Chronic mechanism <Cite id="evershed2022" referenceNumbers={pageReferenceNumbers} />:
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          The establishment of farming communities in Europe resulted in a change in many factors, such
                          as increased population and settlement density, proximity to animals, frequent crop failure,
                          famine, population collapse and general poor hygiene and sanitation
                        </li>
                        <li>
                          These factors are likely to have increased infectious disease loads, particularly zoonoses,
                          infections acquired from animals
                        </li>
                        <li>
                          Mortality (death) and morbidity (suffering) due to pathogen exposure would have been amplified
                          by the otherwise minor health effects of LNP individuals consuming milk – particularly
                          diarrhoea – due to fluid loss and other gut disturbances, leading to enhanced selection for LP
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <References referenceNumbers={pageReferenceNumbers} />
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2 mr-4">
                <Link href="/the-information-zone/milk/dairy-milk">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dairy Milk
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
