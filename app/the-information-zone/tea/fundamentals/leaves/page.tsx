"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Cite, References } from "@/components/simple-reference"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const pageReferenceNumbers = {
  britannica_chloroplast: 1,
  chlorophyll_spectra: 2,
  openstax_photosynthesis: 3,
  leaf_tissue_structure: 4,
  cuticle_composition: 5,
  stomatal_function: 6,
  stomatal_sensing: 7,
  trichome_functions: 8,
  trichome_protection: 9,
  palisade_cells: 10,
  spongy_mesophyll: 11,
  water_transport: 12,
  openstax_transport: 13,
}

export default function TeaLeavesPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The function of tea leaves, and their key components
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  As it turns out, leaves are quite important
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">Food Glorious Food</h2>
                  <div className="space-y-4">
                    <div className="space-y-4">
                      <div>
                        Plants, like most of us, simply want to survive in this world, and in order to do this, they
                        require light, air, water, various nutrients, and space to grow. Leaves are crucial for a
                        plant's survival because they convert light energy into chemical energy in a process known as{" "}
                        <strong>photosynthesis</strong>.
                      </div>

                      <div>
                        Photosynthesis, defined as{" "}
                        <em>
                          {" "}
                          'the process by which a plant uses carbon dioxide from the air, water from the ground, and the
                          energy from the light of the sun to produce its own food and oxygen',{" "}
                        </em>{" "}
                        occurs in the leaves of the vast majority of plants, and the key structures, events and
                        molecules involved in photosynthesis are detailed below:
                      </div>

                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Light Capture:</strong> Light from the sun is emitted in the form of tiny, virtually
                          massless elementary particles called photons, which take approximately 8 minutes and 20
                          seconds to reach Earth
                        </li>
                        <li>
                          <strong>Chloroplasts:</strong> The plant cells within leaves contain chloroplasts, and the
                          structures within each chloroplast are housed in a fluid-filled space called the stroma
                        </li>
                      </ul>

                      <div className="my-8">
                        <Image
                          src="https://cdn.britannica.com/76/53076-050-BB83032D/stacks-membrane-vesicles-stroma-matrix-chlorophyll-membranes.jpg"
                          alt="Chloroplast structure showing stroma, thylakoids, and membrane organization"
                          width={400}
                          height={267}
                          className="mx-auto rounded-lg"
                        />
                        <p className="text-sm text-muted-foreground text-center mt-2">
                          Figure 1: Chloroplast structure{" "}
                          <Cite id="britannica_chloroplast" referenceNumbers={pageReferenceNumbers} />
                        </p>
                      </div>

                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Thylakoids and Chlorophyll:</strong> Among the structures found in chloroplasts are
                          thylakoids – stacks of which are called granum - and embedded in the thylakoid membranes are
                          green pigments called chlorophyll, which are housed in photosystems (functional protein complexes)
                        </li>

                        <li>
                          <strong>Electron Excitation:</strong> When photons hit these chlorophyll molecules, they
                          excite electrons in a photosystem called PSII, and electrons travel along the thylakoid
                          membrane, making it negatively charged and creating an electron transport chain
                        </li>
                      </ul>

                      <div className="my-8">
                        <Image
                          src="https://upload.wikimedia.org/wikipedia/commons/2/23/Chlorophyll_ab_spectra-en.svg"
                          alt="Chlorophyll absorption spectra showing peaks in blue and red wavelengths"
                          width={400}
                          height={266}
                          className="mx-auto rounded-lg bg-white p-4"
                        />
                        <p className="text-sm text-muted-foreground text-center mt-2">
                          Figure 2: Chlorophyll absorption spectra{" "}
                          <Cite id="chlorophyll_spectra" referenceNumbers={pageReferenceNumbers} />
                        </p>
                      </div>

                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Proton Movement:</strong> Hydrogen ions (<span style={{ color: "#F60000" }}>H⁺</span>)
                          in the stroma are attracted into the thylakoids as a result of this negatively charged
                          membrane, causing there to be a high concentration of hydrogen in the thylakoids
                        </li>

                        <li>
                          <strong>Water Splitting (Photolysis):</strong> Water molecules in the thylakoids are broken up
                          in a process called photolysis, releasing <span style={{ color: "#F60000" }}>H⁺</span>,
                          electrons - which replenish the ones that have left PSII - and oxygen which diffuses out of the
                          thylakoid membrane
                        </li>

                        <li>
                          <strong>Electron Re-excitation:</strong> There is another photosystem - PSI - which can
                          capture longer wavelengths of light (680nm) more efficiently than PSII, and PSI re-excites
                          electrons from PSII which have lost energy along the electron transport chain
                        </li>

                        <li>
                          <strong>NADPH Formation:</strong> A cofactor (a sort of 'helper molecule') called{" "}
                          <span style={{ color: "#FF8C00" }}>NADP⁺</span> (nicotinamide adenine dinucleotide phosphate)
                          and <span style={{ color: "#F60000" }}>H⁺</span> that are both outside of the thylakoid
                          membrane are bonded together by the electrons in the electron transport chain to form{" "}
                          <span style={{ color: "#FFEE00" }}>NADPH </span>- the reduced state of{" "}
                          <span style={{ color: "#FF8C00" }}>NADP⁺</span>, helped by an enzyme called ferredoxin-NADP⁺
                          reductase
                        </li>

                        <li>
                          <strong>ATP Synthesis:</strong> An enzyme called ATP synthase lies across the thylakoid
                          membrane, and <span style={{ color: "#F60000" }}>H⁺</span> diffuses from the high
                          concentration inside the thylakoid to the lower concentration in the stroma, and{" "}
                          <span style={{ color: "#F60000" }}>H⁺</span> helps to bond{" "}
                          <span style={{ color: "#4DE94C" }}>ADP</span> (adenosine diphosphate) to another phosphate,
                          creating <span style={{ color: "#3783FF " }}>ATP</span> (adenosine triphosphate)
                        </li>
                      </ul>

                      <p className="my-6">
                        So far, water and sunlight are our inputs, and oxygen,{" "}
                        <span style={{ color: "#3783FF " }}>ATP</span> and{" "}
                        <span style={{ color: "#FFEE00" }}>NADPH </span> are our outputs, and all of these reactions
                        have been light-dependent reactions{" "}
                        <Cite id="openstax_photosynthesis" referenceNumbers={pageReferenceNumbers} />.
                      </p>

                      <div className="my-8">
                        <Image
                          src="https://openstax.org/apps/archive/20250522.165258/resources/ce34feba1315b7e20cb2d064f71f91fd4c583cd1"
                          alt="Diagram showing the light-dependent reactions of photosynthesis"
                          width={400}
                          height={266}
                          className="mx-auto rounded-lg"
                        />
                        <p className="text-sm text-muted-foreground text-center mt-2">
                          Figure 3: Light-dependent reactions of photosynthesis{" "}
                          <Cite id="openstax_photosynthesis" referenceNumbers={pageReferenceNumbers} />
                        </p>
                      </div>

                      <p className="my-6">
                        Now we can move on to the light-independent reactions, known collectively as the Calvin cycle.
                      </p>

                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Carbon Fixation:</strong> A 5 carbon molecule called ribulose bisphosphate in the
                          stroma bonds with carbon dioxide from the air to create a highly unstable six-carbon
                          intermediate called 2´-carboxy-3-keto-D-arabinitol 1,5-bisphosphate
                        </li>

                        <li>
                          <strong>Phosphoglycerate Production:</strong> The energy contained within{" "}
                          <span style={{ color: "#3783FF " }}>ATP</span> and{" "}
                          <span style={{ color: "#FFEE00" }}>NADPH </span> is used to break this six-carbon intermediate
                          into two molecules of phosphoglycerate, creating{" "} <span style={{ color: "#4DE94C" }}>ADP</span>{" "}
                          and{" "} <span style={{ color: "#FF8C00" }}>NADP⁺</span> which are reused for the same purpose
                        </li>

                        <li>
                          <strong>Regeneration:</strong> Some of these phosphoglycerates bond with the help of enzymes
                          to create simple sugars like glucose, and others recombine to make ribulose bisphosphate
                        </li>

                        <li>
                          <strong>Voila, we have glucose:</strong> The glucose created by this process has many uses in the plant, including being stored as starch, providing structural support when linked together as cellulose, and being transported around as sucrose
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">The Structure of Leaf Tissues</h2>
                  <div className="space-y-4">
                    <div>
                      In a biological context, tissues are groups of similar cells that work together to perform a
                      specific function within a plant, and leaves have many different types of tissues.
                    </div>

                    <div>
                      There are 3 different <em>tissue systems</em> present in the leaf, these are the epidermis,
                      mesophyll tissue (split between the palisade parenchyma and spongy parenchyma), and vascular
                      tissue. Each of these systems contains various types of tissues and cells.
                    </div>

                    <div>
                      Explore the diagram and descriptions below to learn about the different tissue systems, tissues,
                      cells, structures, and their functions in the leaf:
                    </div>

                    <div className="my-8">
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/0/06/Leaf_Tissue_Structure.svg"
                        alt="Diagram showing the light-dependent reactions of photosynthesis"
                        width={640}
                        height={427}
                        className="mx-auto rounded-lg"
                      />
                      <p className="text-sm text-muted-foreground text-center mt-2">
                        Figure 4: Leaf tissue structure{" "}
                        <Cite id="leaf_tissue_structure" referenceNumbers={pageReferenceNumbers} />
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2">Epidermal Tissue</h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Cuticle:</strong> A waxy cuticle covers the outermost layer of leaves, which slows
                          down water loss from the leaves due to its hydrophobic nature. Cutin and suberin form a
                          matrix, in which long chain fatty acids (waxes) are embedded{" "}
                          <Cite id="cuticle_composition" referenceNumbers={pageReferenceNumbers} />
                        </li>

                        <li>
                          <strong>Guard cells:</strong> While the cuticle does a stellar job of keeping water out, it
                          also prevents the release of other gases such as oxygen and water vapour. Guard cells line
                          openings called stomata, generally found on the underside of leaves, and control the exchange of
                          gases by forming a stomatal pore. This pore is open when the guard cells are turgid and closed
                          when they are flaccid <Cite id="stomatal_function" referenceNumbers={pageReferenceNumbers} />{" "}
                          <Cite id="stomatal_sensing" referenceNumbers={pageReferenceNumbers} />
                        </li>

                        <li>
                          <strong>Trichomes:</strong> Also known as epidermal hair cells, trichomes are specialised,
                          hair-like outgrowths on the surface of leaves. They perform a variety of functions, such as
                          the protection of leaves from UV radiation, high temperatures and insects, in climates and
                          environments where these pose a threat to the plant{" "}
                          <Cite id="trichome_functions" referenceNumbers={pageReferenceNumbers} />{" "}
                          <Cite id="trichome_protection" referenceNumbers={pageReferenceNumbers} />
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2">Mesophyll tissue</h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Palisade cells:</strong> Palisade cells are stacked vertically, are around 1-2 layers
                          thick, and are found in the palisade parenchyma. They are slightly seperated to maximise gas
                          exchange. Palisade cells contain the most chloroplasts of any other type of cell found in the
                          leaves <Cite id="palisade_cells" referenceNumbers={pageReferenceNumbers} />
                        </li>

                        <li>
                          <strong>Spongy mesophyll cells:</strong> Found in the spongy parenchyma directly below the
                          palisade parenchyma, spongy mesophyll cells are irregularly shaped and laid out, though work is
                          being done to further characterise them{" "}
                          <Cite id="spongy_mesophyll" referenceNumbers={pageReferenceNumbers} />. Their roles include
                          promoting carbon dioxide absorption from the stomata to the palisade and scattering and absorbing
                          light, but they also contain chloroplasts
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mt-1 mb-2">Vascular tissue</h3>
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>
                          <strong>Xylem:</strong> One of two components that make up the vascular bundle, the role of
                          the xylem is to transport water and some nutrients upwards from the roots to the leaves.{" "}
                          <Cite id="water_transport" referenceNumbers={pageReferenceNumbers} />. Plants lose a vast
                          amount of water through the stomata, which open to allow carbon dioxide in for photosynthesis,
                          and it is the xylem that replenishes this lost water. Water moves through the leaf stalk
                          (petiole) to the mid-rib, the main thick vein, before branching into smaller veins throughout
                          the leaf
                        </li>

                        <li>
                          <strong>Phloem:</strong> Translocation, the process of moving the products of photosynthesis
                          around the plant, takes place in the phloem, the other component of the vascular bundle. While
                          the xylem is unidirectional, the phloem is bidirectional, transporting sucrose and amino acids
                          in both directions. Sieve tube elements take sucrose from companion cells, and due to a
                          pressure gradient, this sucrose is transported to sink cells in the roots and bulbs, where it
                          is converted into other molecules like starch for storage{" "}
                          <Cite id="openstax_transport" referenceNumbers={pageReferenceNumbers} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

{/*
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold tracking-tight">From Cutting to Crop </h2>
                  <div className="space-y-4">
                    <div>
                      As explained in my <strong><Link href="https://everythingextracted.com/the-information-zone/tea/fundamentals/overview">first article</Link></strong> on tea, there are a few different ways of producing new tea plants, but for this section I will focus on tea plants grown from cuttings. 

                    </div>
                  </div>
                </CardContent>
              </Card>
*/}


              <References referenceNumbers={pageReferenceNumbers} />
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" className="gap-2">
                <Link href="/the-information-zone/tea/fundamentals">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Tea Fundamentals
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
