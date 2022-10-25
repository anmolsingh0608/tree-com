let trees = [
  {
    name: "Balsam Fir",
    scientificName: "Abies balsamea",
    use: "Use Sparingly",
    form: "Pyramidal",
    flower: "Catkin",
    fruit: "Dark violet cone when young; turning gray-brown at maturity",
    fallColor: null,
    tolerates: "Can tolerate shade better than other fir species",
    growthRateAndSize: "Slow; Large",
    nativeRegion: "Northern United States & Canada",
    notes:
      "Intolerant of pollution, dry air, and excessive heat; Beneficial for birds",
    imgs: [
      "https://image.shutterstock.com/image-photo/fresh-green-leaf-background-balsam-600w-1676782642.jpg",
      "https://image.shutterstock.com/image-photo/end-subalpine-fir-balsam-branch-600w-603402080.jpg",
      "https://image.shutterstock.com/image-photo/end-subalpine-fir-balsam-branch-600w-603402089.jpg",
    ],
  },
  {
    name: "White Fir",
    scientificName: "Abies concolor",
    use: "Secondary Consideration",
    form: "Pyramidal",
    flower: null,
    fruit: "Cone",
    fallColor: null,
    tolerates: "Short periods of drought, Light periods of shade",
    growthRateAndSize: "Slow-Moderate; Medium",
    nativeRegion: "Rocky Mountains, Western US, Canada",
    notes:
      "Grows well in rocky soils; Slightly more tolerant of urban conditions than other fir species; Can withstand periods of heat and cold; Needles smell like citrus; Beneficial for birds",
    imgs: [
      "https://image.shutterstock.com/image-photo/firtrees-isolated-on-white-600w-370364111.jpg",
      "https://image.shutterstock.com/image-illustration/isolated-single-tree-on-white-600w-1908893878.jpg",
      "https://image.shutterstock.com/image-photo/cone-christmas-tree-isolated-on-600w-1938815017.jpg",
    ],
  },
  {
    name: "Fraser Fir",
    scientificName: "Abies fraseri",
    use: "Secondary Consideration",
    form: "Pyramidal",
    flower: null,
    fruit: "Cone, Purple when young, turning brown at maturity",
    fallColor: null,
    tolerates: "Partial-shade",
    growthRateAndSize: "Slow; Medium",
    nativeRegion: "Appalachian Mountains, Eastern US",
    notes:
      "Beneficial for birds; Intolerant of pollution, dry air, and excessive heat",
    imgs: [
      "https://image.shutterstock.com/image-photo/green-cones-fraser-fir-abies-600w-1090140866.jpg",
      "https://image.shutterstock.com/image-photo/christmas-trees-rows-local-tree-600w-1845313063.jpg",
      "https://image.shutterstock.com/image-photo/fraser-fir-green-foliage-abies-600w-1745367203.jpg",
    ],
  },
  {
    name: "Red Maple",
    scientificName: "Acer rubrum",
    use: "Secondary Consideration",
    form: "Round-Irregular",
    flower: " Dense red clusters, before the leaves in March-April",
    fruit: "Samara",
    fallColor: "Vibrant scarle",
    tolerates: "Partial-shade, Flooding",
    growthRateAndSize: "Moderate-Fast; Medium",
    nativeRegion: "Eastern US",
    notes:
      "Tolerant of a wide range of soil conditions; Easily transplantable; Known for its spectacular fall color",
    imgs: [
      "https://image.shutterstock.com/image-photo/leaves-that-turn-red-autumn-600w-2063480642.jpg",
      "https://image.shutterstock.com/image-photo/solitary-red-maple-tree-front-600w-1988768342.jpg",
      "https://image.shutterstock.com/image-photo/maple-leaf-red-autumn-sunset-600w-314772383.jpg",
    ],
  },
  {
    name: "Fastigiate Red Maple",
    scientificName: "Acer rubrum ‘Fastigiata’",
    use: "Secondary Consideration",
    form: "Columnar",
    flower: " Dense red clusters, before the leaves in March-April",
    fruit: "Samara",
    fallColor: "Scarlet, Orange, Gold, depending on cultivar",
    tolerates: "Partial-shade, Flooding",
    growthRateAndSize: "Moderate-Fast; Medium",
    nativeRegion: "Eastern US",
    notes: "Upright, narrow habit useful near building and overhead wires",
    imgs: [
      "https://image.shutterstock.com/image-photo/autumn-garden-600w-1302999220.jpg",
      "https://image.shutterstock.com/image-photo/autumn-garden-600w-1302998959.jpg",
    ],
  },
  {
    name: "Paperbark Maple",
    scientificName: "Acer griseum",
    use: "Secondary Consideration",
    form: "Upright-Oval",
    flower: null,
    fruit: "Samara",
    fallColor: "Scarlet to Bronze",
    tolerates: "Partial-shade",
    growthRateAndSize: "Slow; Small",
    nativeRegion: "China",
    notes: "Exfoliating bark; Yearround interest",
    imgs: [
      "https://image.shutterstock.com/image-photo/paperbark-maple-brown-bark-park-600w-1429286567.jpg",
      "https://image.shutterstock.com/image-photo/autumnal-bark-acer-griseum-paperbark-600w-788148229.jpg",
      "https://image.shutterstock.com/image-photo/distinctive-flaking-peeling-brown-bark-600w-2055130916.jpg",
    ],
  },
  {
    name: "Miyabe Maple",
    scientificName: "Acer miyabei",
    use: "Secondary Consideration",
    form: "Columnar",
    flower: null,
    fruit: "Samara",
    fallColor: "Gold; Late",
    tolerates: "Brief periods of drought, Partial-shade",
    growthRateAndSize: "Moderate; Small",
    nativeRegion: "Japan",
    notes:
      "Leaves stay lustrous green into October; Specimen tree; Young bark is gray and corky, developing orange-brown fissures with age",
    imgs: [
      "https://image.shutterstock.com/image-photo/leaves-miyabe-maple-tree-litter-600w-161588921.jpg",
      "https://image.shutterstock.com/image-photo/autumn-maple-miyabe-tree-full-600w-141285295.jpg",
      "https://image.shutterstock.com/image-photo/queen-yellow-miyabe-maple-tree-600w-143254339.jpg",
    ],
  },
  {
    name: "Sugar Maple",
    scientificName: "Acer saccharum",
    use: "Secondary Consideration",
    form: "Upright-Oval to Rounded",
    flower: null,
    fruit: "Samara",
    fallColor: "Gold, Orange, Scarlet; High variation within species",
    tolerates: "Shade",
    growthRateAndSize: "Slow; Large",
    nativeRegion: "Eastern US & Canada",
    notes:
      "Outstanding native shade tree; Intolerant of pollution, salt, and soil compaction; Known for its sap which is made into maple syrup",
    imgs: [
      "https://image.shutterstock.com/image-photo/sugar-maple-green-leaves-summer-600w-1874585080.jpg",
      "https://image.shutterstock.com/image-photo/old-sugar-maple-acer-saccharum-600w-1831986100.jpg",
      "https://image.shutterstock.com/image-photo/branches-flowers-sugar-maple-tree-600w-1999306787.jpg",
    ],
  },
  {
    name: "Red Horsechestnut",
    scientificName: "Aesculus x carnea ‘Briotti’",
    use: "Secondary Consideration",
    form: "Round",
    flower: "Pink to Red",
    fruit: "Nut; Inedible",
    fallColor: "Gold",
    tolerates: "Partial-shade",
    growthRateAndSize: "Moderate; Medium",
    nativeRegion: "Germany",
    notes: "Hybrid species; more resistant to leaf blotch and mildew",
    imgs: [
      "https://image.shutterstock.com/image-photo/red-flowering-horsechestnut-park-600w-1757365511.jpg",
      "https://image.shutterstock.com/image-photo/red-blossoming-chestnut-tree-flowers-600w-2078172070.jpg",
      "https://image.shutterstock.com/image-photo/red-blossoming-chestnut-tree-flowers-600w-2125091372.jpg",
    ],
  },
  {
    name: "European Horsechestnut",
    scientificName: "Aesculus hippocastanum ‘Baumannii’",
    use: "Preferred Canopy",
    form: "Upright-Oval to Round",
    flower:
      "White, May, Double blooms, lasting longer than the straight species",
    fruit: "Seedless cultivar (first identified in Switzerland in 1819)",
    fallColor: null,
    tolerates: "Partial-shade",
    growthRateAndSize: "Moderate; Large",
    nativeRegion: "Eastern Europe",
    notes:
      "As the bark matures, it becomes plated and reveals showy orange color underneath",
    imgs: [
      "https://image.shutterstock.com/image-photo/aesculus-hippocastanum-horse-chestnut-species-600w-2154535697.jpg",
      "https://image.shutterstock.com/image-photo/closeup-on-aesculus-hippocastanum-horse-600w-2069375957.jpg",
      "https://image.shutterstock.com/image-photo/horse-chestnut-fruits-hanging-on-600w-2024673395.jpg",
    ],
  },
  {
    name: "Serviceberry",
    scientificName: "Amelanchier spp.",
    use: "Use Sparingly",
    form: "Round",
    flower: "White, April",
    fruit: "Berry, Edible, June",
    fallColor: "Gold, Orange, Scarlet; Early",
    tolerates: "Partial-full shade",
    growthRateAndSize: "Moderate; Small",
    nativeRegion: "Eastern US",
    notes:
      "Native; Multi- or singlestemmed; Fruits taste similar to blueberries; Beneficial for birds and pollinators",
    imgs: [
      "https://image.shutterstock.com/image-photo/amelanchier-lamarckii-ripe-unripe-fruits-600w-1705088650.jpg",
      "https://image.shutterstock.com/image-photo/amelnchier-family-rosaceae-blooms-late-600w-2116807304.jpg",
      "https://image.shutterstock.com/image-photo/amelanchier-lamarckii-juneberry-serviceberry-white-600w-2153610419.jpg",
    ],
  },
  {
    name: "River Birch",
    scientificName: "Betula nigra",
    use: "Preferred Canopy",
    form: "Pyramid to Round",
    flower: "Catkin",
    fruit: "Nutlet",
    fallColor: "Yellow",
    tolerates: "Air Pollution, Soil Compaction, Periodic flooding",
    growthRateAndSize: "Moderate-Fast; Medium",
    nativeRegion: "North America",
    notes:
      "Single or multi-stemmed forms available; Prune in summer (if needed); Not drought tolerant; Legendary heat tolerance",
    imgs: [
      "https://image.shutterstock.com/image-photo/birch-trees-600w-688347799.jpg",
      "https://image.shutterstock.com/image-photo/birch-grove-on-river-summer-600w-1348043840.jpg",
      "https://image.shutterstock.com/image-photo/beautiful-rugged-bark-river-birch-600w-771810955.jpg",
    ],
  },
  {
    name: "European Hornbeam",
    scientificName:
      "Carpinus betulus ‘Emerald Avenue’ / ‘Fastigiata’ / ‘Frans Fontaine’",
    use: "Preferred Canopy",
    form: "Upright to oval",
    flower: "Catkin",
    fruit: "Nutlet",
    fallColor: "Gold",
    tolerates:
      "Wide range of soil conditions and pH levels; Drought, Partial-shade",
    growthRateAndSize: "Moderate-Slow; Medium",
    nativeRegion: "Europe",
    notes:
      "Year-round interest; Smooth, bluish gray, sinewy trunk and branches; Full and dense branching and foliage; Good choice for a street tree; Tough and generally healthy",
    imgs: [
      "https://image.shutterstock.com/image-photo/close-fruits-european-hophornbeam-ostrya-600w-1903950724.jpg",
      "https://image.shutterstock.com/image-photo/ostrya-carpinifolia-european-hophornbeam-tree-600w-1421335808.jpg",
      "https://image.shutterstock.com/image-photo/carpinus-betulus-european-hornbeam-caucasian-600w-2146363289.jpg",
    ],
  },
  {
    name: "Musclewood",
    scientificName: "Carpinus caroliniana",
    use: "Secondary Consideration",
    form: "Spreading",
    flower: "Catkin",
    fruit: "Nutlet",
    fallColor: "Scarlet, Gold, Orange",
    tolerates: " Pollution, Shade",
    growthRateAndSize: "Slow; Medium",
    nativeRegion: "North America",
    notes:
      "Year-round interest; Smooth, bluish-gray, sinewy trunk and branches; Wood is extremely dense, narrow grained, and hard; Seeds are small and edible",
    imgs: [
      "https://image.shutterstock.com/image-photo/swirled-tree-bark-600w-523504.jpg",
      "https://image.shutterstock.com/image-photo/botanical-identification-label-carpinus-caroliniana-600w-1233822523.jpg",
      "https://image.shutterstock.com/image-photo/close-ironwood-musclewood-tree-limb-600w-628150298.jpg",
    ],
  },
  {
    name: "Katsura",
    scientificName: "Cercidiphyllum japonicum",
    use: "Preferred Canopy",
    form: "Pyramidal",
    flower: null,
    fruit: "Pod",
    fallColor: "Scarlet, Gold, Orange",
    tolerates: "Partial-shade",
    growthRateAndSize: "Moderate; Large",
    nativeRegion: "Japan",
    notes:
      "Year-round interest; Fall leaves smell like cinnamon, brown sugar, cotton candy; Intolerant of drought; No serious pest or disease problems",
    imgs: [
      "https://image.shutterstock.com/image-photo/katsura-tree-japanese-judas-fresh-600w-2156509905.jpg",
      "https://image.shutterstock.com/image-photo/cercidiphyllum-magnificum-largeleaf-katsura-magnificent-600w-2155634771.jpg",
      "https://image.shutterstock.com/image-photo/katsura-tree-japanese-judas-fresh-600w-2156509893.jpg",
    ],
  },
  {
    name: "Hanna’s Heart Katsura",
    scientificName: "Cercidiphyllum japonicum ‘Hanna’s Heart’",
    use: "Secondary Consideration",
    form: "Vase to Upright",
    flower: null,
    fruit: "Pod",
    fallColor: "Scarlet, Gold, Orange",
    tolerates: "Partial-shade",
    growthRateAndSize: "Slow; Small",
    nativeRegion: "Japan",
    notes:
      "Year-round interest; Narrower, shorter cultivar of Katsura, leaves more heart shaped; Fall foliage smells like cinnamon, brown sugar, cotton candy",
    imgs: [
      "https://image.shutterstock.com/image-photo/heart-shaped-katsura-tree-leaf-600w-1938190423.jpg",
      "https://image.shutterstock.com/image-photo/katsura-tree-heart-shaped-leaves-600w-2161531977.jpg",
      "https://image.shutterstock.com/image-photo/heart-shaped-fresh-green-leaves-600w-2018250197.jpg",
    ],
  },
  {
    name: "Redbud",
    scientificName: "Cercis canadensis",
    use: "Use Sparingly",
    form: "Vase to Spreading",
    flower: " Purple or White, April",
    fruit: "Pod",
    fallColor: "Gold",
    tolerates: "Partial-shade",
    growthRateAndSize: "Moderate; Small",
    nativeRegion: " North America",
    notes:
      " Early spring flowers especially valuable for pollinators, like butterflies and hummingbirds; Flowers and young seed pods are edible",
    imgs: [
      "https://image.shutterstock.com/image-photo/portsmouth-new-hampshire-usa-may-600w-2133784927.jpg",
      "https://image.shutterstock.com/image-photo/blossom-purple-eastern-redbud-flowering-600w-2157964533.jpg",
      "https://image.shutterstock.com/image-photo/texas-redbud-close-flowers-blooming-600w-2137817117.jpg",
    ],
  },
  {
    name: "Hackberry",
    scientificName: "Celtis occidentalis",
    use: "Preferred Canopy",
    form: "Round",
    flower: null,
    fruit: "Drupe",
    fallColor: "Gold",
    tolerates: "Salt, Pollution, Drought",
    growthRateAndSize: " Fast; Large",
    nativeRegion: "North America",
    notes:
      "Distinct corky bark; Extremely tolerant of urban conditions; Excellent as a street tree; Notable wildlife value; Berries (drupes) provide food to many animal species, particularly birds.",
    imgs: [
      "https://image.shutterstock.com/image-photo/closeup-orange-hackberries-nature-background-600w-1386972779.jpg",
      "https://image.shutterstock.com/image-photo/prunus-padus-known-bird-cherry-600w-2168215947.jpg",
      "https://image.shutterstock.com/image-photo/small-tree-bird-cherry-hackberry-600w-2103405935.jpg",
    ],
  },
  {
    name: "Yellowwood",
    scientificName: "Cladrastis kentukea",
    use: "Preferred Urban Canopy",
    form: "Round to Spreading",
    flower: "June, White, Showy, Fragrant",
    fruit: "Pod",
    fallColor: "Gold",
    tolerates: "Pollution, Drought, Soil Compaction",
    growthRateAndSize: "Moderate; Medium",
    nativeRegion: " North America",
    notes:
      " Smooth bark; Prune to establish wide branch unions; Prune during the summer to prevent excessive bleeding; Heartwood is bright yellow",
    imgs: [
      "https://image.shutterstock.com/image-photo/yellow-leaves-cladrastis-kentukea-kentucky-600w-2052869552.jpg",
      "https://image.shutterstock.com/image-photo/lush-green-summer-leaves-on-600w-2042740274.jpg",
      "https://image.shutterstock.com/image-photo/branch-yellowwood-sunny-may-600w-1986983045.jpg",
    ],
  },
  {
    name: "Kousa Dogwood",
    scientificName: "Cornus kousa",
    use: "Use Sparingly",
    form: "Vase to Oval",
    flower: " White or Pink, June",
    fruit: " Berry, Edible",
    fallColor: "Scarlet",
    tolerates: "Drought, Partial-shade",
    growthRateAndSize: "Slow; Small",
    nativeRegion: "China, Korea, and Japan",
    notes:
      "Year-round interest with exfoliating bark; Fruitless varieties available",
    imgs: [
      "https://image.shutterstock.com/image-photo/kousa-dogwood-autummn-leaves-cornaceae-600w-1854083497.jpg",
      "https://image.shutterstock.com/image-photo/chinese-dogwood-cornus-kousa-inflorescence-600w-197625944.jpg",
      "https://image.shutterstock.com/image-photo/many-red-fruits-cornus-dogwood-600w-1459953152.jpg",
    ],
  },
  {
    name: "Cornelian Cherry Dogwood",
    scientificName: "Cornus mas",
    use: "Use Sparingly",
    form: "Oval",
    flower: "Yellow, March",
    fruit: " Berry, Edible",
    fallColor: "Insignificant",
    tolerates: "Partial-shade, Clay soils",
    growthRateAndSize: "Slow; Small",
    nativeRegion: " Central and Southern Europe",
    notes:
      "Early spring blossom; Low maintenance; Good tree for pollinators and birds",
    imgs: [
      "https://image.shutterstock.com/image-photo/cornus-fruit-dogwood-berries-hanging-600w-709593319.jpg",
      "https://image.shutterstock.com/image-photo/spring-budding-cornus-commonly-known-600w-1677889078.jpg",
      "https://image.shutterstock.com/image-photo/cornelian-cherries-branches-against-blue-600w-110411552.jpg",
    ],
  },
  {
    name: "Turkish Filbert",
    scientificName: "Corylus colurna",
    use: "Preferred Canopy",
    form: "Pyramidal",
    flower: null,
    fruit: "Nut, Edible",
    fallColor: "Gold",
    tolerates: " Salt, Pollution, Drought",
    growthRateAndSize: "Moderate; Medium",
    nativeRegion: "Southeast Europe and Western Asia",
    notes:
      "Dark green summer foliage; Nut is attractive to Blue Jays; Low maintenance once established",
    imgs: [
      "https://image.shutterstock.com/image-photo/young-hazelnut-filbert-cobnut-grow-600w-1765784357.jpg",
      "https://image.shutterstock.com/image-photo/turkish-hazelnut-corylus-colurna-fruit-600w-2174365593.jpg",
      "https://image.shutterstock.com/image-photo/young-hazelnut-filbert-cobnut-grow-600w-1411292138.jpg",
    ],
  },
  {
    name: "Hawthorn",
    scientificName: "Crataegus viridis ‘Winter King’",
    use: "Use Sparingly",
    form: "Round to Spreading; Low, dense branching",
    flower: "White, May",
    fruit: "Berry, Edible",
    fallColor: "Yellow, Orange, Red",
    tolerates: "Pollution, Drought, Soil Compaction, Flood",
    growthRateAndSize: "Moderate; Small",
    nativeRegion: "North America",
    notes:
      "One of the hardiest small flowering trees; Year-round interest with exfoliating bark and persistent berries; Thornless varieties available",
    imgs: [
      "https://image.shutterstock.com/image-photo/red-fruit-hawthorn-crataegus-closeup-600w-1669919158.jpg",
      "https://image.shutterstock.com/image-photo/hot-tea-hawthorn-berries-cup-600w-1826357468.jpg",
      "https://image.shutterstock.com/image-photo/crataegus-monogyna-known-common-hawthorn-600w-2011656299.jpg",
    ],
  },
  {
    name: "Hardy Rubber Tree",
    scientificName: "Eucommia ulmoides",
    use: "Preferred Urban Canopy",
    form: "Round",
    flower: null,
    fruit: "Capsule",
    fallColor: null,
    tolerates: "Salt, Drought",
    growthRateAndSize: "Slow, Large",
    nativeRegion: "China",
    notes:
      "Bark becomes furrowed and textured with age; Used for medicinal purposes in China; Leaves stay deep green throughout growing season",
    imgs: [
      "https://image.shutterstock.com/image-photo/roots-ficus-elastica-reach-out-600w-357394805.jpg",
      "https://image.shutterstock.com/image-photo/deep-red-shiny-leaves-ficus-600w-1379227793.jpg",
      "https://image.shutterstock.com/image-photo/rubber-bush-ficus-elastica-good-600w-2024329946.jpg",
    ],
  },
  {
    name: "European Beech",
    scientificName: "Fagus sylvatica",
    use: "Preferred Canopy",
    form: "Pyramidal to Rounded; Low-branched",
    flower: null,
    fruit: "Nut",
    fallColor: "Bronze; Marcescent",
    tolerates: "Partial-shade, Air Pollution",
    growthRateAndSize: "SlowModerate; Large",
    nativeRegion: "Europe",
    notes:
      "Leafs out mid-May; Magnificent & long-lived; Best in large spaces; Intolerant of poor drainage and salt; Green and purple leaf varieties",
    imgs: [
      "https://image.shutterstock.com/image-photo/european-beech-fagus-sylvatica-rhoen-600w-1663766158.jpg",
      "https://image.shutterstock.com/image-photo/european-beech-common-botanic-name-600w-1309296463.jpg",
      "https://image.shutterstock.com/image-photo/sunny-forest-landscape-beech-trees-600w-724108024.jpg",
    ],
  },
  {
    name: "Fastigiate European Beech",
    scientificName: "Fagus sylvatica ‘Fastigiata’",
    use: "Secondary Consideration Shade",
    form: "Columnar",
    flower: null,
    fruit: "Nut",
    fallColor: " Bronze; Marcescent",
    tolerates: " Partial shade, Air pollution",
    growthRateAndSize: "SlowModerate; Medium",
    nativeRegion: "Europe",
    notes:
      "Leafs out mid-May; Longlived; Intolerant of poor drainage and salt; Green and purple leaf varieties",
    imgs: [
      "https://image.shutterstock.com/image-photo/beech-dawyck-gold-leaves-latin-600w-2014913792.jpg",
      "https://image.shutterstock.com/image-photo/beech-dawyck-gold-leaves-latin-600w-1904303974.jpg",
      "https://image.shutterstock.com/image-photo/beech-dawyck-gold-leaves-latin-600w-1915446331.jpg",
    ],
  },
  {
    name: "Ginkgo",
    scientificName: "Ginkgo biloba",
    use: "Preferred Canopy",
    form: "Pyramidal to Irregular; Coarsely -branched",
    flower: null,
    fruit: "Male/seedless varieties planted only",
    fallColor: "Gold",
    tolerates: "Salt, Pollution, Drought, Soil Compaction, Flood",
    growthRateAndSize: "Slow; Large",
    nativeRegion: "China",
    notes:
      "One of the oldest trees—fossil records extending to at least 150 million years ago!; Extract used medicinally",
    imgs: [
      "https://image.shutterstock.com/image-photo/ginkgo-biloba-known-maidenhair-tree-600w-2030138987.jpg",
      "https://image.shutterstock.com/image-photo/ginkgo-biloba-green-leaves-on-600w-209238070.jpg",
      "https://image.shutterstock.com/image-photo/ginkgo-biloba-leaves-isolated-on-600w-492286438.jpg",
    ],
  },
  {
    name: "Fastigiate Ginkgo",
    scientificName: "Ginkgo biloba ‘Princeton Sentry’",
    use: "Secondary Consideration",
    form: "Columnar",
    flower: null,
    fruit: "Male/seedless varieties planted only",
    fallColor: "Gold",
    tolerates: " Salt, Pollution, Drought, Soil Compaction, Flood",
    growthRateAndSize: "Slow; Medium",
    nativeRegion: "China",
    notes:
      "One of the oldest trees—fossil records extending to at least 150 million years",
    imgs: [
      "https://image.shutterstock.com/image-photo/closeup-brightly-wet-green-leaves-600w-1629612589.jpg",
      "https://image.shutterstock.com/image-photo/close-beautiful-yellow-leaves-ginkgo-600w-2054520251.jpg",
      "https://image.shutterstock.com/image-photo/yellowleaved-ginkgo-biloba-tree-known-600w-2155410281.jpg",
    ],
  },
  {
    name: "Honeylocust",
    scientificName: "Gleditsia triacanthos f. inermis",
    use: "Preferred Urban Canopy",
    form: "Spreading",
    flower: "Greenish-Yellow, Fragrant",
    fruit: "Pod",
    fallColor: "Gold",
    tolerates:
      "Salt, Pollution, Drought, Soil Compaction, Partial Shade, Flood",
    growthRateAndSize: "Fast; Medium",
    nativeRegion: "North America",
    notes:
      "One of the most adaptable native trees; Dappled shade; Beneficial to pollinators; Podless varieties may be available",
    imgs: [
      "https://image.shutterstock.com/image-photo/gleditsia-triacanthos-inermis-sunburst-thornless-600w-2031432830.jpg",
      "https://image.shutterstock.com/image-photo/honey-locust-gleditsia-triacanthos-branches-600w-2100579949.jpg",
      "https://image.shutterstock.com/image-photo/green-yellow-honeylocust-leaves-600w-1160695996.jpg",
    ],
  },
  {
    name: "Kentucky Coffeetree ‘Espresso’",
    scientificName: "Gymnocladus dioicus ‘Espresso’",
    use: "Preferred Canopy",
    form: " Upright to Irregular; Coarsely-branched",
    flower: "Small, White, Late Mayearly June, Fragrant",
    fruit: "Seedless cultivars planted only",
    fallColor: "Gold",
    tolerates: "Drought, Alkaline Soil",
    growthRateAndSize: "SlowModerate; Large",
    nativeRegion: "North America",
    notes:
      "Leafs out late in spring; Intolerant of shade; Good for pollinators",
    imgs: [
      "https://image.shutterstock.com/image-photo/gymnocladus-dioica-600w-515984128.jpg",
      "https://image.shutterstock.com/image-photo/kentucky-coffeetree-fruit-summer-600w-2007469130.jpg",
      "https://image.shutterstock.com/image-photo/leaves-autumn-yellow-colors-gymnocladus-600w-1753396784.jpg",
    ],
  },
  {
    name: "Carolina Silverbell",
    scientificName: "Halesia carolina",
    use: "Secondary Consideration",
    form: "Round; Low-branched",
    flower: "White, Bell-shaped; Emerge before leaves in Aprilearly May",
    fruit: "Winged Drupe, Green",
    fallColor: "Gold, Early",
    tolerates: "Salt, Drought, Shade",
    growthRateAndSize: "Moderate; Small",
    nativeRegion: " Eastern North America",
    notes:
      "Pest-resistant; Grows as understory tree in the wild; Graceful against an evergreen background",
    imgs: [
      "https://image.shutterstock.com/image-photo/delicate-white-flowers-halesia-carolina-600w-2162708929.jpg",
      "https://image.shutterstock.com/image-photo/halesia-carolina-known-silverbell-snowdrop-600w-1123858949.jpg",
      "https://image.shutterstock.com/image-photo/spring-flower-heads-snowdrop-silverbell-600w-1393115789.jpg",
    ],
  },
  {
    name: "Seven-Son Flower",
    scientificName: "Heptacodium miconioides",
    use: "Use Sparingly",
    form: "Upright-spreading; often multi-stem",
    flower: "White, Fragrant, August-September",
    fruit: "Capsules, Rose-Purple",
    fallColor: null,
    tolerates: "Partial-shade",
    growthRateAndSize: "Moderate; Small",
    nativeRegion: "China",
    notes:
      "Species introduced to the US in 1980; Important latesummer nectar source for hummingbirds and butterflies; Grey-brown exfoliating bark",
    imgs: [
      "https://image.shutterstock.com/image-photo/closeup-red-flowering-heptacodium-miconioides-600w-1852301803.jpg",
      "https://image.shutterstock.com/image-photo/heptacodium-miconioides-seven-sons-plant-600w-605395274.jpg",
      "https://image.shutterstock.com/image-photo/red-flowers-on-heptacodium-miconioides-600w-1855018819.jpg",
    ],
  },
  {
    name: "American Holly",
    scientificName: "Ilex opaca",
    use: "Secondary Consideration",
    form: "Pyramidal to Columnar",
    flower: "Small, White, May, Fragrant",
    fruit: " Small red berries in October, lasting into winter",
    fallColor: "Evergreen",
    tolerates: "Salt Spray, Air Pollution, Partial-shade",
    growthRateAndSize: "SlowModerate; Medium",
    nativeRegion: " North America",
    notes:
      "Avoid extremely dry, windy, exposed locations; Need male and female plants for berries",
    imgs: [
      "https://image.shutterstock.com/image-photo/american-holly-ilex-opaca-red-600w-1061812706.jpg",
      "https://image.shutterstock.com/image-photo/green-berries-grow-on-american-600w-2017381793.jpg",
      "https://image.shutterstock.com/image-photo/everlasting-symbol-chistmasamerican-holly-600w-1559790974.jpg",
    ],
  },
  {
    name: "Black Walnut",
    scientificName: "Juglans nigra",
    use: "Preferred Canopy",
    form: "Round-Oval",
    flower: null,
    fruit: "Edible nut",
    fallColor: "Gold, early",
    tolerates: "Alkaline soil, Air pollution",
    growthRateAndSize: "Fast in youth, then slows with age; Large",
    nativeRegion: "Eastern US",
    notes:
      "Allelopathy may prevent growth of other plants nearby; Intolerant of salt, drought, and poor drainage; best in large spaces",
    imgs: [
      "https://image.shutterstock.com/image-photo/black-walnut-juglans-nigra-tree-600w-35841877.jpg",
      "https://image.shutterstock.com/image-photo/unripe-fruit-black-walnut-600w-303237686.jpg",
      "https://image.shutterstock.com/image-photo/fruit-leaf-black-walnut-tree-600w-153142049.jpg",
    ],
  },
  {
    name: "Eastern Red Cedar",
    scientificName: "Juniperus virginiana",
    use: "Preferred Canopy",
    form: "Pyramidal",
    flower: "Small cones on male trees",
    fruit: "Blue/purple berry",
    fallColor: "Evergreen",
    tolerates: "Salt, Pollution, Drought, Shade (when young)",
    growthRateAndSize: "Moderate; Medium",
    nativeRegion: "Eastern & Central North America",
    notes:
      "Exfoliating bark; Part of cedar-apple rust pathogen cycle; Deer-resistant; Attracts many bird species",
    imgs: [
      "https://image.shutterstock.com/image-photo/cedar-berries-growing-winter-600w-1032728125.jpg",
      "https://image.shutterstock.com/image-photo/tufted-titmouse-looking-blue-berries-600w-1694702482.jpg",
      "https://image.shutterstock.com/image-photo/closeup-beautiful-branch-juniperus-virginiana-600w-2127019385.jpg",
    ],
  },
  {
    name: "Goldenraintree",
    scientificName: "Koelreuteria paniculata",
    use: "Secondary Consideration",
    form: "Round",
    flower: "Long yellow panicles, July",
    fruit: " Inedible, Papery capsule",
    fallColor: "Gold",
    tolerates: "Salt, Air Pollution, Drought, Soil Compaction, Wind",
    growthRateAndSize: "ModerateFast; Medium",
    nativeRegion: "China, Japan",
    notes: "No serious diseases; Choice tree where space is limited",
    imgs: [
      "https://image.shutterstock.com/image-photo/fruit-koelreuteria-bipinnata-franchet-on-600w-330772619.jpg",
      "https://image.shutterstock.com/image-photo/fruit-koelreuteria-bipinnata-franchet-on-600w-329368394.jpg",
      "https://image.shutterstock.com/image-photo/cassia-fistula-this-flower-known-600w-1066846892.jpg",
    ],
  },
  {
    name: "Larch",
    scientificName: "Larix decidua",
    use: "Secondary Consideration",
    form: "Pyramidal to Irregular",
    flower: "Red, Pink, Yellow, Green, Early Spring",
    fruit: "Cone",
    fallColor: " Gold, Orange",
    tolerates: "Soil Compaction, Flood",
    growthRateAndSize: "ModerateFast; Large",
    nativeRegion: "North & Central Europe",
    notes:
      "Uniquely-shaped and full of character; Intolerant of shade, dry areas, and pollution",
    imgs: [
      "https://image.shutterstock.com/image-photo/bright-green-fluffy-branches-cones-600w-1584415756.jpg",
      "https://image.shutterstock.com/image-photo/larch-cone-on-branch-green-600w-705787171.jpg",
      "https://image.shutterstock.com/image-photo/young-larch-cone-tree-600w-63894238.jpg",
    ],
  },
  {
    name: "Sweetgum",
    scientificName: "Liquidambar styraciflua",
    use: "Preferred Canopy",
    form: "Upright-Oval",
    flower: null,
    fruit: "Capsule",
    fallColor: "Scarlet, Gold, Orange",
    tolerates: "Poor drainage",
    growthRateAndSize: "ModerateFast; Large",
    nativeRegion: "Eastern North America",
    notes:
      "Fruitless varieties available; Needs large area for root development; Name comes from the sweet, chewy sap",
    imgs: [
      "https://image.shutterstock.com/image-photo/selective-focus-liquidambar-sweetgum-tree-600w-2039808680.jpg",
      "https://image.shutterstock.com/image-photo/closeup-spiked-gumball-american-sweetgum-600w-1845465283.jpg",
      "https://image.shutterstock.com/image-photo/bright-red-leaves-green-fruits-600w-2069294942.jpg",
    ],
  },
  {
    name: "Fastigiate Sweetgum",
    scientificName: "Liquidambar styraciflua ‘Slender Silhouette’",
    use: "Secondary Consideration",
    form: "Columnar",
    flower: null,
    fruit: "Capsule",
    fallColor: "Scarlet, Gold, Orange",
    tolerates: "Poor drainage",
    growthRateAndSize: "Moderate-Fast; Medium",
    nativeRegion: "Eastern North America",
    notes: "Great tree for tight spaces",
    imgs: [
      "https://image.shutterstock.com/image-photo/slender-silhouette-american-sweetgum-liquidambar-600w-1621183258.jpg",
    ],
  },
  {
    name: "Tuliptree",
    scientificName: "Liriodendron tulipifera",
    use: "Preferred Urban Canopy",
    form: "Pyramidal to Oval-Round",
    flower: "Solitary, May, Often high in branches",
    fruit: "Samaras, persisting through winter",
    fallColor: "Gold",
    tolerates: null,
    growthRateAndSize: "Fast; Large",
    nativeRegion: "Eastern North America",
    notes: "Leafs out early; Unique leaf shape; Relatively diseasefree",
    imgs: [
      "https://image.shutterstock.com/image-photo/golden-leaves-on-tulip-trees-600w-2172510945.jpg",
      "https://image.shutterstock.com/image-photo/bright-green-leaves-tulip-tree-600w-2162750119.jpg",
      "https://image.shutterstock.com/image-photo/golden-leaves-on-tulip-tree-600w-2151713161.jpg",
    ],
  },
  {
    name: "Fastigiate Tuliptree",
    scientificName: "Liriodendron tulipifera ‘Fastigiata’",
    use: "Secondary Consideration",
    form: "Columnar",
    flower: "Solitary, May",
    fruit: " Samaras, persisting through winter",
    fallColor: "Yellow",
    tolerates: null,
    growthRateAndSize: "Fast; Large",
    nativeRegion: " Eastern North America",
    notes: "Leafs out early; Unique leaf shape; Relatively disease-free",
    imgs: [
      "https://image.shutterstock.com/image-photo/closeup-liriodendron-tulipifera-flower-meise-600w-2161174255.jpg",
      "https://image.shutterstock.com/image-photo/liriodendron-tulipifera-beautiful-ornamental-tree-600w-2161729145.jpg",
      "https://image.shutterstock.com/image-photo/close-flower-tulip-tree-liriodendron-600w-1987556060.jpg",
    ],
  },
  {
    name: "Amur Maackia",
    scientificName: "Maackia amurensis",
    use: "Secondary Consideration",
    form: "Round; Upright branching",
    flower: "White, July",
    fruit: "Pod",
    fallColor: "Not showy",
    tolerates: "Air Pollution",
    growthRateAndSize: "SlowModerate; Small",
    nativeRegion: "Manchuria, Korea",
    notes: "Fixes nitrogen in soil; No serious insects or diseases",
    imgs: [
      "https://image.shutterstock.com/image-photo/detail-seeds-leaves-amur-tree-600w-701042275.jpg",
      "https://image.shutterstock.com/image-photo/green-young-leaves-amur-maackia-600w-1097118854.jpg",
      "https://image.shutterstock.com/image-photo/solitaire-multitrunk-amur-tree-maackia-600w-701042260.jpg",
    ],
  },
  {
    name: "Osage orange",
    scientificName: "Maclura pomifera ‘White Shield’",
    use: "Preferred Urban Canopy",
    form: "Round to Irregular",
    flower: null,
    fruit: "Only fruitless varieties planted",
    fallColor: "Gold",
    tolerates: "Salt, Pollution, Drought, Soil Compaction, Flood",
    growthRateAndSize: "Fast; Medium",
    nativeRegion: "North America",
    notes: "Deer and rot resistant; Strong and flexible",
    imgs: [
      "https://image.shutterstock.com/image-photo/fruits-maclura-pomifera-osage-orange-600w-1141447163.jpg",
      "https://image.shutterstock.com/image-photo/fruits-maclura-pomifera-osage-orange-600w-1145656031.jpg",
      "https://image.shutterstock.com/image-photo/maclura-aurantiaca-moraceae-hedge-apple-600w-638168683.jpg",
    ],
  },
  {
    name: "Cucumber Magnolia",
    scientificName: "Magnolia acuminata",
    use: "Preferred Canopy",
    form: "Pyramidal to Round",
    flower: "Slightly fragrant, Yellow-Green, April-June",
    fruit: "Cucumber-like, Red",
    fallColor: "Bronze",
    tolerates: "Partial-shade",
    growthRateAndSize: "ModerateFast; Large",
    nativeRegion: "Eastern & Central North America",
    notes: "Relatively disease-free",
    imgs: [
      "https://image.shutterstock.com/image-photo/flower-magnolia-acuminata-cucumber-tree-600w-2162818785.jpg",
      "https://image.shutterstock.com/image-photo/seed-magnolia-tree-summer-600w-696028462.jpg",
      "https://image.shutterstock.com/image-photo/magnolia-acuminata-cucumber-tree-600w-761419096.jpg",
    ],
  },
  {
    name: "Loebner Magnolia",
    scientificName: "Magnolia x loebneri",
    use: "Use Sparingly",
    form: "Round; Multi-stem or single-trunked",
    flower: "White or Purple-Pink, Fragrant, Spring",
    fruit: null,
    fallColor: "Yellow-BronzeBrown",
    tolerates: "Heat, Cold, Drought, High soil pH",
    growthRateAndSize: "Fast, Small",
    nativeRegion: "Hybrid",
    notes: null,
    imgs: [
      "https://image.shutterstock.com/image-photo/loebner-magnolia-loebneri-nikitsky-botanical-600w-684084547.jpg",
      "https://image.shutterstock.com/image-photo/branches-pink-loebner-magnolia-leonard-600w-2145503781.jpg",
      "https://image.shutterstock.com/image-photo/white-flowers-loebner-magnolia-merrill-600w-1669217224.jpg",
    ],
  },
  {
    name: "Saucer Magnolia",
    scientificName: "Magnolia x soulangeana",
    use: "Use Sparingly",
    form: "Upright in youth; Short-trunked with wide branching in maturity",
    flower:
      "Varying: Pink, White, Rose, and many shades in between; Fragrant, Spring",
    fruit: null,
    fallColor: "Yellow-Brown",
    tolerates: "Air Pollution",
    growthRateAndSize: "Slow-Moderate; Small",
    nativeRegion:
      " Hybrid developed from Chinese species in 1826; one of the most popular magnolias worldwide",
    notes:
      "Avoid southern exposure and frost pockets to prevent early spring bud damage",
    imgs: [
      "https://image.shutterstock.com/image-photo/pink-chinese-magnolia-saucer-growing-600w-1790501054.jpg",
      "https://image.shutterstock.com/image-photo/flowers-saucer-magnolia-soulangeana-600w-1091415056.jpg",
      "https://image.shutterstock.com/image-photo/flowers-saucer-magnolia-soulangeana-600w-1092178952.jpg",
    ],
  },
  {
    name: "Star Magnolia",
    scientificName: "Magnolia stellata",
    use: "Use Sparingly",
    form: "Oval to round",
    flower: "Pink-ish buds opening to white or light pink",
    fruit: null,
    fallColor: "Yellow-Bronze",
    tolerates: "Varying soil composition; Air Pollution; Partial shade",
    growthRateAndSize: "Slow, Small",
    nativeRegion: "Japan",
    notes:
      "Avoid southern exposure and frost pockets to prevent early spring bud damage",
    imgs: [
      "https://image.shutterstock.com/image-illustration/watercolor-royal-star-magnolia-blossom-600w-763550863.jpg",
      "https://image.shutterstock.com/image-photo/white-pink-flower-star-magnolia-600w-1945901416.jpg",
      "https://image.shutterstock.com/image-photo/magnolia-stellata-royal-star-white-600w-1540336148.jpg",
    ],
  },
  {
    name: "Sweetbay Magnolia",
    scientificName: "Magnolia virginiana",
    use: "Use Sparingly",
    form: "Multi-stemmed, upright",
    flower:
      "Creamy white, lemonscented, not in great abundance all at once—ongoing from May/JuneAugust/Sept.",
    fruit: null,
    fallColor: "Gold to goldenbrown",
    tolerates: "Wet soils; shade",
    growthRateAndSize: "Moderatefast; Small",
    nativeRegion: " Eastern United States; west to OK, TX, AR",
    notes:
      "Green stems and silvery underside of leaves; evergreen in the southern U.S; requires acidic soils; no serious pest or disease problems",
    imgs: [
      "https://image.shutterstock.com/image-photo/flower-sweetbay-magnolia-virginiana-small-600w-1741507067.jpg",
      "https://image.shutterstock.com/image-photo/magnolia-virginiana-aka-sweetbay-tree-600w-1915800415.jpg",
      "https://image.shutterstock.com/image-photo/sweetbay-magnolia-virginiana-pink-against-600w-1372781819.jpg",
    ],
  },
  {
    name: "Flowering Crabapple (Pink)",
    scientificName: "Malus spp.",
    use: "Use Sparingly",
    form: "Round",
    flower: "Pink, Red, Solitary; April-May",
    fruit: "Pome",
    fallColor: "Scarlet, Gold, Orange",
    tolerates: "Salt, Drought",
    growthRateAndSize: " Moderate; Small",
    nativeRegion: " Central Asia",
    notes:
      "Small red fruits eaten by birds and other wildlife, persist into winter; Intolerant of air pollution",
    imgs: [
      "https://image.shutterstock.com/image-photo/pink-crabapple-prairifire-flowers-blossoms-600w-1958322172.jpg",
      "https://image.shutterstock.com/image-photo/beautiful-grove-big-malus-floribunda-600w-1874857768.jpg",
      "https://image.shutterstock.com/image-photo/beautiful-pink-flowering-crabapple-tree-600w-1757252033.jpg",
    ],
  },
  {
    name: "Flowering Crabapple (White)",
    scientificName: "Malus spp.",
    use: "Use Sparingly",
    form: "Round",
    flower: "White, Solitary; April-May",
    fruit: "Pome",
    fallColor: "Scarlet, Gold, Orange",
    tolerates: "Salt, Drought",
    growthRateAndSize: "Moderate; Small",
    nativeRegion: "Central Asia",
    notes:
      "Small red fruits eaten by birds and other wildlife, persist into winter; Intolerant of air pollution",
    imgs: [
      "https://image.shutterstock.com/image-photo/crabapple-tree-full-bloom-600w-24648208.jpg",
      "https://image.shutterstock.com/image-photo/spring-snow-crabapple-tree-blossom-600w-1392994745.jpg",
      "https://image.shutterstock.com/image-photo/white-crabapple-flowers-bloom-spring-600w-2147392699.jpg",
    ],
  },
  {
    name: "Dawn Redwood",
    scientificName: "Metasequoia glyptostroboides",
    use: "Preferred Canopy",
    form: "Pyramidal",
    flower: null,
    fruit: "Cone",
    fallColor: "Bronze",
    tolerates: "Pollution, Flood",
    growthRateAndSize: "Fast; Large",
    nativeRegion: "China",
    notes:
      "Distinctive buttressed base and feathery needles; Avoid frost pockets which may affect fall foliage; Seldom requires pruning; Known at first only in fossil records, wild specimens of this species were surprisingly discovered growing in rural central China in 1944—now commonly available in nursery trade",
    imgs: [
      "https://image.shutterstock.com/image-photo/dawn-redwood-tree-fall-foliage-600w-2077634770.jpg",
      "https://image.shutterstock.com/image-photo/branch-metasequoia-glyptostroboides-known-dawn-600w-1734139424.jpg",
      "https://image.shutterstock.com/image-photo/dawn-redwood-branches-600w-104723759.jpg",
    ],
  },
  {
    name: "Black Gum/Tupelo",
    scientificName: "Nyssa sylvatica",
    use: "Preferred Canopy",
    form: "Pyramidal",
    flower: null,
    fruit: "Drupe, Edible",
    fallColor: "Scarlet",
    tolerates: "Pollution, Drought, Partial Shade, Flood",
    growthRateAndSize: "Moderate; Medium",
    nativeRegion: "Eastern US & Canada",
    notes:
      "Excellent specimen tree; Outstanding fall foliage; Dense horizontal branching; Smaller cultivars available",
    imgs: [
      "https://image.shutterstock.com/image-photo/bright-red-orange-autumn-leaves-600w-1688880736.jpg",
      "https://image.shutterstock.com/image-photo/vibrant-red-orange-tupelo-black-600w-2073586814.jpg",
      "https://image.shutterstock.com/image-photo/bright-orange-autumn-leaves-tupelo-600w-1560920045.jpg",
    ],
  },
  {
    name: "Hophornbeam",
    scientificName: "Ostrya virginiana",
    use: "Preferred Canopy",
    form: "Round",
    flower: "Catkin",
    fruit: "Nutlet",
    fallColor: "Gold, Orange",
    tolerates: "Pollution, Shade",
    growthRateAndSize: "Slow; Small",
    nativeRegion: "Eastern US & Canada",
    notes:
      " Salt intolerant; Somewhat slow to reestablish after transplanting; Performs well in city plantings and narrow tree lawns",
    imgs: [
      "https://image.shutterstock.com/image-photo/american-hophornbeam-seeds-autumn-sun-600w-1656905215.jpg",
      "https://image.shutterstock.com/image-photo/ostrya-carpinifolia-european-hophornbeam-flowers-600w-1932594029.jpg",
      "https://image.shutterstock.com/image-photo/spring-catkins-leaves-opening-on-600w-1953082138.jpg",
    ],
  },
  {
    name: "Sourwood",
    scientificName: "Oxydendrum arboreum",
    use: "Secondary Consideration",
    form: "Pyramidal, Irregular",
    flower: "White, Fragrant, Solitary, UrnShaped, June",
    fruit: "Capsule, persists into winter",
    fallColor: "Scarlet; Early",
    tolerates: "Partial-shade",
    growthRateAndSize: "Slow; Small",
    nativeRegion: "South Eastern & MidAtlantic US",
    notes:
      "Important nectar source for bees; Year-round interest; Pollution intolerance.",
    imgs: [
      "https://image.shutterstock.com/image-photo/sourwood-oxydendrum-arboreum-sole-species-600w-1298574316.jpg",
      "https://image.shutterstock.com/image-photo/closeup-sourwood-tree-oxydendrum-arboreum-600w-1834121839.jpg",
      "https://image.shutterstock.com/image-photo/sourwood-oxydendrum-arboreum-attractive-ornamental-600w-2084211856.jpg",
    ],
  },
  {
    name: "Persian Parrotia",
    scientificName: "Parrotia persica ‘Vanessa’ or ‘Ruby Vase’",
    use: "Secondary Consideration",
    form: "Upright, Oval",
    flower: "Red, Before leaves, April",
    fruit: "Capsule",
    fallColor: "Scarlet, Gold, Orange",
    tolerates: "Drought, Partial Shade, Wind",
    growthRateAndSize: " Moderate; Small",
    nativeRegion: "Iran",
    notes:
      "One of the most beautiful trees for fall foliage; Excellent small lawn or street tree; Leafs out early in spring; Extremely tolerant once established; Pest-free",
    imgs: [
      "https://image.shutterstock.com/image-photo/general-view-parrotia-persica-tree-600w-1878110833.jpg",
      "https://image.shutterstock.com/image-photo/close-autumn-red-leaves-on-600w-2066083526.jpg",
      "https://image.shutterstock.com/image-photo/closeup-beige-textured-trunk-rows-600w-1848164938.jpg",
    ],
  },
];

trees = trees.map((tree, i) => {
  return {
    id: i,
    growthRate: tree.growthRateAndSize.split(";")[0],
    size: tree.growthRateAndSize.split(";")[1]
      ? tree.growthRateAndSize.split(";")[1].trim()
      : null,
    ...tree,
  };
});

const formsFilterList = [
  ...new Set(trees.map((tree) => tree.form).filter((elem) => elem != null)),
];
const fruitFilterList = [
  ...new Set(trees.map((tree) => tree.fruit).filter((elem) => elem != null)),
];
const tolerateFilterList = [
  ...new Set(
    trees.map((tree) => tree.tolerates).filter((elem) => elem != null)
  ),
];
const growthRateFilterList = [
  ...new Set(
    trees
      .map((tree) => tree.growthRateAndSize.split(";")[0])
      .filter((elem) => elem != null)
  ),
];
const fallColorFilterList = [
  ...new Set(
    trees.map((tree) => tree.fallColor).filter((elem) => elem != null)
  ),
];
const regionFilterList = [
  ...new Set(
    trees.map((tree) => tree.nativeRegion).filter((elem) => elem != null)
  ),
];
const sizeFilterList = [
  ...new Set(
    trees
      .map((tree) =>
        tree.growthRateAndSize.split(";")[1]
          ? tree.growthRateAndSize.split(";")[1].trim()
          : null
      )
      .filter((elem) => elem != null)
  ),
];
const flowerFilterList = [
  ...new Set(trees.map((tree) => tree.flower).filter((elem) => elem != null)),
];

const filters = {
  form: null,
  fruit: null,
  tolerates: null,
  growthRate: null,
  fallColor: null,
  region: null,
  size: null,
  flower: null,
};

initApp();

function initApp() {
  initFilters();
  initListeners();
  drawTrees(trees);
}

function resetFilters() {
  filters.form = null;
  filters.fruit = null;
  filters.tolerates = null;
  filters.growthRate = null;
  filters.fallColor = null;
  filters.region = null;
  filters.size = null;
  filters.flower = null;
  drawTrees(trees);
  initFilters();
  initFilterListeners();
}

function drawTrees(trees) {
  $(".tree-list-container .tree-wrap").remove();
  trees.forEach((tree) => {
    $(".tree-list-container").append(`
            <div class="tree-wrap">
                <a href="detail.html?index=${tree.id}" class="box">
                    <div class="img"><img src="${tree.imgs[0]}" alt="${tree.name}" /></div>
                    <span class="name">${tree.name}</span>
                </a>
            </div>
        `);
  });
  domSelectors();
}

function initListeners() {
  $(".clear-filter").on("click", function () {
    resetFilters();
    filterTree();
    closeFilter();
  });
  $(".update-filter").on("click", function () {
    updateFilters();
  });
  initFilterListeners();
}
function initFilterListeners() {
  $('.filter[data-tree="form"] ul.nav li').on("click", function () {
    filters.form = $(this).text();
  });
  $('.filter[data-tree="fruit"] ul.nav li').on("click", function () {
    filters.fruit = $(this).text();
  });
  $('.filter[data-tree="tolerate"] ul.nav li').on("click", function () {
    filters.tolerates = $(this).text();
  });
  $('.filter[data-tree="growthRate"] ul.nav li').on("click", function () {
    filters.growthRate = $(this).text();
  });
  $('.filter[data-tree="fallColor"] ul.nav li').on("click", function () {
    filters.fallColor = $(this).text();
  });
  $('.filter[data-tree="region"] ul.nav li').on("click", function () {
    filters.region = $(this).text();
  });
  $('.filter[data-tree="size"] ul.nav li').on("click", function () {
    filters.size = $(this).text();
  });
  $('.filter[data-tree="flower"] ul.nav li').on("click", function () {
    filters.flower = $(this).text();
  });
}
function initFilters() {
  $('.filter[data-tree="form"] ul.nav li').remove();
  $('.filter[data-tree="form"] ul.nav').append(
    formsFilterList.map((form) => `<li><a href="#">${form}</a></li>`).join("")
  );
  $('.filter[data-tree="fruit"] ul.nav li').remove();
  $('.filter[data-tree="fruit"] ul.nav').append(
    fruitFilterList.map((fruit) => `<li><a href="#">${fruit}</a></li>`).join("")
  );
  $('.filter[data-tree="tolerate"] ul.nav li').remove();
  $('.filter[data-tree="tolerate"] ul.nav').append(
    tolerateFilterList
      .map((tolerate) => `<li><a href="#">${tolerate}</a></li>`)
      .join("")
  );
  $('.filter[data-tree="growthRate"] ul.nav li').remove();
  $('.filter[data-tree="growthRate"] ul.nav').append(
    growthRateFilterList
      .map((growthRate) => `<li><a href="#">${growthRate}</a></li>`)
      .join("")
  );
  $('.filter[data-tree="fallColor"] ul.nav li').remove();
  $('.filter[data-tree="fallColor"] ul.nav').append(
    fallColorFilterList
      .map((fallColor) => `<li><a href="#">${fallColor}</a></li>`)
      .join("")
  );
  $('.filter[data-tree="region"] ul.nav li').remove();
  $('.filter[data-tree="region"] ul.nav').append(
    regionFilterList
      .map((nativeRegion) => `<li><a href="#">${nativeRegion}</a></li>`)
      .join("")
  );
  $('.filter[data-tree="size"] ul.nav li').remove();
  $('.filter[data-tree="size"] ul.nav').append(
    sizeFilterList.map((size) => `<li><a href="#">${size}</a></li>`).join("")
  );
  $('.filter[data-tree="flower"] ul.nav li').remove();
  $('.filter[data-tree="flower"] ul.nav').append(
    flowerFilterList
      .map((flower) => `<li><a href="#">${flower}</a></li>`)
      .join("")
  );
}

function updateFilters() {
  let filteredTrees = JSON.parse(JSON.stringify(trees));
  if (filters.form != null) {
    filteredTrees = filteredTrees.filter((tree) => tree.form == filters.form);
  }
  if (filters.fruit != null) {
    filteredTrees = filteredTrees.filter((tree) => tree.fruit == filters.fruit);
  }
  if (filters.tolerates != null) {
    filteredTrees = filteredTrees.filter(
      (tree) => tree.tolerates == filters.tolerates
    );
  }
  if (filters.growthRate != null) {
    filteredTrees = filteredTrees.filter(
      (tree) => tree.growthRate == filters.growthRate
    );
  }
  if (filters.fallColor != null) {
    filteredTrees = filteredTrees.filter(
      (tree) => tree.fallColor == filters.fallColor
    );
  }
  if (filters.region != null) {
    filteredTrees = filteredTrees.filter(
      (tree) => tree.nativeRegion == filters.region
    );
  }
  if (filters.size != null) {
    filteredTrees = filteredTrees.filter((tree) => tree.size == filters.size);
  }
  if (filters.flower != null) {
    filteredTrees = filteredTrees.filter(
      (tree) => tree.flower == filters.flower
    );
  }
  drawTrees(filteredTrees);
}
