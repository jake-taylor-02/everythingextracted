// Make sure all references have proper URLs and are correctly formatted

export interface Reference {
  authors: string
  year: number
  title: string
  source: string
  url?: string
  isVideo?: boolean
}

export const references: Record<string, Reference> = {
  smith2019: {
    authors: "Smith, J. & Johnson, A.",
    year: 2019,
    title: "The Origins of Dairy Consumption in Human History",
    source: "Journal of Archaeological Science, 45(3), 112-128",
    url: "https://example.com/smith2019",
  },
  brown2018: {
    authors: "Brown, T.",
    year: 2018,
    title: "The History of Dairy Cattle Breeds",
    source: "Oxford University Press, Oxford, UK",
    url: "https://example.com/brown2018",
  },
  miller2021: {
    authors: "Miller, S. & Thompson, K.",
    year: 2021,
    title: "Technological Innovations in Dairy Production: A Historical Perspective",
    source: "Agricultural History Review, 69(2), 203-221",
    url: "https://example.com/miller2021",
  },
  garcia2017: {
    authors: "Garcia, L. & Martinez, E.",
    year: 2017,
    title: "Milk in Cultural Context: Symbolism and Significance",
    source: "Cambridge University Press, Cambridge, UK",
    url: "https://example.com/garcia2017",
  },
  milkdoc2022: {
    authors: "Dairy Science Channel",
    year: 2022,
    title: "The Evolution of Dairy Farming: From Hand Milking to Automation",
    source: "YouTube, Dairy Science Channel (42:15)",
    url: "https://youtube.com/watch?v=example123",
    isVideo: true,
  },
  itan2010: {
    authors: "Itan, Y., Jones, B.L., Ingram, C.J. et al.",
    year: 2010,
    title: "A worldwide correlation of lactase persistence phenotype and genotypes",
    source: "BMC Evolutionary Biology, 10, 36",
    url: "https://doi.org/10.1186/1471-2148-10-36",
  },
  simoons1970: {
    authors: "Simoons, F.J.",
    year: 1970,
    title: "Primary adult lactose intolerance and the milking habit: A problem in biologic and cultural interrelations",
    source: "Digest Dis Sci 15, 695–710",
    url: "https://doi.org/10.1007/BF02235991",
   },
  dekel2015: {
    authors: "Dekel, Y., Machluf, Y., Stoler, A. et al.",
    year: 2015,
    title: "Mammalian endogenous retroviruses",
    source: "BMC Genomics, 16, 677",
    url: "https://www.researchgate.net/figure/A-schematic-phylogenetic-tree-of-11-Bovid-species-representing-Bovidae-s-two_fig1_274266144",
  },
  zeder2015: {
    authors: "Zeder, M.A.",
    year: 2015,
    title: "Core questions in domestication research",
    source: "Proceedings of the National Academy of Sciences, 112(11), 3191-3198",
    url: "https://doi.org/10.1073/pnas.1501711112",
  },
  adw2023: {
    authors: "Animal Diversity Web",
    year: 2023,
    title: "Bovidae",
    source: "University of Michigan Museum of Zoology",
    url: "https://animaldiversity.org/accounts/Bovidae/",
  },
  tresset2011: {
    authors: "Tresset, A. & Vigne, J.D.",
    year: 2011,
    title: "Last hunter-gatherers and first farmers of Europe",
    source: "Comptes Rendus Biologies, 334(3), 182-189",
    url: "https://comptes-rendus.academie-sciences.fr/biologies/articles/10.1016/j.crvi.2010.12.010/",
  },
  uchicago2023: {
    authors: "University of Chicago News",
    year: 2023,
    title: "Fertile Crescent Explained",
    source: "University of Chicago News",
    url: "https://news.uchicago.edu/explainer/fertile-crescent-explained",
  },
  larson2012: {
    authors: "Larson, G., Karlsson, E.K., Perri, A. et al.",
    year: 2012,
    title: "Rethinking dog domestication by integrating genetics, archeology, and biogeography",
    source: "Proceedings of the National Academy of Sciences, 109(23), 8878-8883",
    url: "https://doi.org/10.1073/pnas.1203005109",
  },
  helmer2005: {
    authors: "Helmer, D., Gourichon, L., Monchot, H., Peters, J. & Saña, M.",
    year: 2005,
    title:
      "Identifying early domestic cattle from Pre-Pottery Neolithic sites on the Middle Euphrates using sexual dimorphism",
    source: "Anthropozoologica, 40(1), 19-42",
    url: "https://www.researchgate.net/publication/235341120_Identifying_early_domestic_cattle_from_Pre-Pottery_Neolithic_sites_on_the_Middle_Euphrates_using_sexual_dimorphism",
  },
  evershed2008: {
    authors: "Evershed, R.P., Payne, S., Sherratt, A.G., et al.",
    year: 2008,
    title: "Earliest Date for Milk Use in the Near East and Southeastern Europe Linked to Cattle Herding",
    source: "Nature, 455, 528-531",
    url: "https://www.researchgate.net/publication/234521823_Earliest_Date_for_Milk_Use_in_the_Near_East_and_Southeastern_Europe_Linked_to_Cattle_Herding",
  },
  payne1973: {
    authors: "Payne, S.",
    year: 1973,
    title: "Kill-off Patterns in Sheep and Goats: The Mandibles from Aşvan Kale",
    source: "Anatolian Studies, 23, 281-303",
    url: "https://doi.org/10.2307/3642547",
  },
  kamjan2021: {
    authors: "Kamjan, S., de Groene, D., van den Hurk, Y., et al.",
    year: 2021,
    title:
      "The emergence and evolution of Neolithic cattle farming in southeastern Europe: New zooarchaeological and stable isotope data from Džuljunica-Smărdeš, in northeastern Bulgaria (ca. 6200–5500 cal. BCE)",
    source: "Journal of Archaeological Science: Reports, 36, Article 102789",
    url: "https://doi.org/10.1016/j.jasrep.2021.102789",
  },
  wanes2019: {
    authors: "Wanes, D., Husein, D. M., & Naim, H. Y.",
    year: 2019,
    title: "Congenital Lactase Deficiency: Mutations, Functional and Biochemical Implications, and Future Perspectives",
    source: "Nutrients, 11(2), 461",
    url: "https://doi.org/10.3390/nu11020461",
  },
  yongfa1984: {
    authors: "Yongfa, W., Yongshan, Y., Jiujin, X. et al.",
    year: 1984,
    title: "Prevalence of primary adult lactose malabsorption in three populations of northern China",
    source: "Human Genetics, 67, 103–106",
    url: "https://doi.org/10.1007/BF00270566",
  },
  chinacdc2022: {
    authors: "Chinese Center for Disease Control and Prevention",
    year: 2022,
    title: "Nutrition and Health",
    source: "China CDC",
    url: "https://en.chinacdc.cn/health_topics/nutrition_health/202206/t20220616_259702.html",
  },
  tishkoff2007: {
    authors: "Tishkoff, S., Reed, F., Ranciaro, A. et al.",
    year: 2007,
    title: "Convergent adaptation of human lactase persistence in Africa and Europe",
    source: "Nature Genetics, 39, 31–40",
    url: "https://doi.org/10.1038/ng1946",
  },
  bersaglieri2004: {
    authors:
      "Bersaglieri, T., Sabeti, P. C., Patterson, N., Vanderploeg, T., Schaffner, S. F., Drake, J. A., Rhodes, M., Reich, D. E., & Hirschhorn, J. N.",
    year: 2004,
    title: "Genetic signatures of strong recent positive selection at the lactase gene",
    source: "American Journal of Human Genetics, 74(6), 1111–1120",
    url: "https://doi.org/10.1086/421051",
  },
  salzberg2018: {
    authors: "Salzberg, S.L.",
    year: 2018,
    title: "Open questions: How many genes do we have?",
    source: "BMC Biology, 16, 94",
    url: "https://doi.org/10.1186/s12915-018-0564-x",
  },
  ucsc2023: {
    authors: "UCSC Genome Browser",
    year: 2023,
    title: "Human Genome Browser Gateway",
    source: "University of California Santa Cruz",
    url: "https://genome.ucsc.edu/cgi-bin/hgTracks?db=hg19&lastVirtModeType=default&lastVirtModeExtraState=&virtModeType=default&virtMode=0&nonVirtPosition=&position=chr2%3A136543960%2D136637153&hgsid=2501250823_9LACk8s3mE8WffjaBT6FPNjzK6kW",
  },
  ucscgene2023: {
    authors: "UCSC Genome Browser",
    year: 2023,
    title: "LCT Gene Information",
    source: "University of California Santa Cruz",
    url: "https://genome.ucsc.edu/cgi-bin/hgGene?hgg_gene=ENST00000264162.7&hgg_chrom=chr2&hgg_start=135787849&hgg_end=135837184&hgg_type=knownGene&db=hg38",
  },
  lewinsky2005: {
    authors: "Lewinsky, R.H., Jensen, T.G.K., Møller, J., Stensballe, A., Olsen, J., Troelsen, J.T.",
    year: 2005,
    title:
      "T −13910 DNA variant associated with lactase persistence interacts with Oct-1 and stimulates lactase promoter activity in vitro",
    source: "Human Molecular Genetics, 14(24), 3945–3953",
    url: "https://doi.org/10.1093/hmg/ddi418",
  },
  jones2011: {
    authors: "Jones, B. L., & Swallow, D. M.",
    year: 2011,
    title: "The impact of cis-acting polymorphisms on the human phenotype",
    source: "The HUGO journal, 5(1-4), 13–23",
    url: "https://doi.org/10.1007/s11568-011-9155-4",
  },
  anguita2020: {
    authors: "Anguita-Ruiz, A., Aguilera, C. M., & Gil, Á.",
    year: 2020,
    title:
      "Genetics of Lactose Intolerance: An Updated Review and Online Interactive World Maps of Phenotype and Genotype Frequencies",
    source: "Nutrients, 12(9), 2689",
    url: "https://doi.org/10.3390/nu12092689",
  },
  ingram2022: {
    authors: "Ingram, C.I., Montalva, N. and Swallow, D.M.",
    year: 2022,
    title: "Lactose Malabsorption",
    source:
      "In: Advanced Dairy Chemistry, Volume 3: Lactose, Water, Salts and Minor Constituents, McSweeney et al. (eds.)",
    url: "https://doi.org/10.1007/978-3-030-92584-0",
  },
  burger2007: {
    authors: "Burger, J., Kirchner, M., Bramanti, B., Haak, W., & Thomas, M.G.",
    year: 2007,
    title: "Absence of the lactase-persistence-associated allele in early Neolithic Europeans",
    source: "Proceedings of the National Academy of Sciences, 104(10), 3736-3741",
    url: "https://doi.org/10.1073/pnas.0607187104",
  },
  gerbault2011: {
    authors: "Gerbault, P., Liebert, A., Itan, Y., Powell, A., Currat, M., Burger, J., Swallow, D.M., & Thomas, M.G.",
    year: 2011,
    title: "Evolution of lactase persistence: an example of human niche construction",
    source: "Philosophical Transactions of the Royal Society B: Biological Sciences, 366(1566), 863-877",
    url: "https://doi.org/10.1098/rstb.2010.0268",
  },
  flatz1973: {
    authors: "Flatz, G., & Rotthauwe, H.W.",
    year: 1973,
    title: "Lactose nutrition and natural selection",
    source: "Lancet, 302(7820), 76-77",
    url: "https://doi.org/10.1016/s0140-6736(73)93267-4",
  },
  deluca2004: {
    authors: "DeLuca, H.F.",
    year: 2004,
    title: "Overview of general physiologic features and functions of vitamin D",
    source: "American Journal of Clinical Nutrition, 80(6 Suppl), 1689S-1696S",
    url: "https://doi.org/10.1093/ajcn/80.6.1689S",
  },
  evershed2022: {
    authors:
      "Evershed, R.P., Davey Smith, G., Roffet-Salque, M., Timpson, A., Diekmann, Y., Lyon, M.S., Cramp, L.J.E., Casanova, E., Smyth, J., Whelton, H.L., Dunne, J., Brychova, V., Šoberl, L., Gerbault, P., Gillis, R.E., Heyd, V., Johnson, E., Kendall, I., Manning, K., Marciniak, A., Thomas, M.G.",
    year: 2022,
    title: "Dairying, diseases and the evolution of lactase persistence in Europe",
    source: "Nature, 608(7922), 336-345",
    url: "https://doi.org/10.1038/s41586-022-05010-7",
  },
  simoons1970: {
    authors: "Simoons, F.J.",
    year: 1970,
    title: "Primary adult lactose intolerance and the milking habit: A problem in biologic and cultural interrelations",
    source: "Digestive Diseases and Sciences, 15, 695-710",
    url: "https://doi.org/10.1007/BF02235991",
  },
}
