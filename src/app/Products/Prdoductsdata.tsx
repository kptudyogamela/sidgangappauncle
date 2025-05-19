interface Product {
  title: string;
  description: string;
  category: string;
  type: string;
  images: string[];
}

export const groupedProducts: Product[] = [
  {
    title: "Hexagonal Head Profiled Bolt",
    description: "Hexagonal Head Profiled Bolt with a pointed tip, washer, and nut—used for easy alignment and secure fastening in structural or mechanical applications..",
    category: "Bolts",
    type: "Plain Bolt",
    images: [1, 2].map(i => `/Images/products/Bolts/${i}.png`)
  },
  {
    title: "Tie rods",
    description: "Tie rods in cable drums are high-strength steel rods used to hold the drum flanges together and support the central barrel. They maintain structural integrity during lifting, transport, and cable unwinding.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [3, 4].map(i => `/Images/products/Bolts/${i}.png`)
  },


  {
    title: "Threaded Rod",
    description: "A cylindrical metal rod threaded along its entire length, used for fastening applications where adjustable length and high-strength joining are required. Common in construction, cable drums, machinery, and electrical assemblies.",
    category: "Bolts",
    type: "Construction Bolts",
    images: [5, 6, 7].map(i => `/Images/products/Bolts/${i}.png`)
  },
  {
    title: "Hexagonal headed Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [8, 9, 10].map(i => `/Images/products/Bolts/${i}.png`)
  },


  {
    title: "Hexagonal headed Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Bolts",
    type: "Plain Bolt",
    images: [11, 12, 13].map(i => `/Images/products/Bolts/${i}.png`)
  },
  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks,structural assemblies, frame construction, or machine supports. Mainly used in electrical enclosure body",
    category: "Corner",
    type: "Fabrication",
    images: [1, 2, 5, 6, 7, 8, 9, 10].map(i => `/Images/products/corner/${i}.png`)
  },

  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks,structural assemblies, frame construction, or machine supports. Mainly used in electrical enclosure body",
    category: "Services",
    type: "Fabrication",
    images: [1, 2, 5, 6, 7, 8, 9, 10].map(i => `/Images/products/corner/${i}.png`)
  },

  {
    title: "Washers",
    description: "Flat washers used in mechanical assemblies to distribute load and reduce wear.",
    category: "Services",
    type: "Washer",
    images: [1, 2].map(i => `/Images/products/Services/${i}.png`)
  },
  {
    title: "Laser cut and CNC Bending Part",
    description: "Parts used in Fabrication Industry.",
    category: "Services",
    type: "Corner Piece",
    images: [3, 4, 5, 6, 7, 8, 9, 10, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30].map(i => `/Images/products/Services/${i}.png`)
  }, {
    title: "Laser cut and CNC Bending Part",
    description: "Parts used in Fabrication Industry.",
    category: "Services",
    type: "Fabrication",
    images: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => `/Images/products/Services/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: " This is a rod which is parted, chamfered and turned, majorly used as automobile parts  .",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/water/1.png", "/Images/products/Automobile/water/12 (1).png", "/Images/products/Automobile/water/13 (1).png"]
  },
  {
    title: "Bush Insert",
    description: "A automobile part used in heavy vehicles.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/water/2.png", "/Images/products/Automobile/water/21.png"]
  },
  {
    title: "Rods",
    description: "Used in two wheeler .",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/water/47.png", "/Images/products/Automobile/water/48.png", "/Images/products/Automobile/water/49.png", "/Images/products/Automobile/water/50.png"]
  },
  {
    title: "Bolt RR Cushion",
    description: "Used in two wheeler .",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/water/5.png", "/Images/products/Automobile/water/18.png", "/Images/products/Automobile/water/19.png", "/Images/products/Automobile/water/20.png"]
  },
  {
    title: "Pipe RR Fork",
    description: "It includes both Tube, Rod and assembly operation.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/water/3.png", "/Images/products/Automobile/water/8.png", "/Images/products/Automobile/water/9.png"]
  },
  {
    title: "Pipe Pivot",
    description: "Provides protective covering for electrical cabinet enclosures.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/water/10.png", "/Images/products/Automobile/water/11.png", "/Images/products/Automobile/water/12.png"]
  },
  {
    title: "Tubular Parts",
    description: "Cutting, Chamfering, Secondary Operations and Plating on Tubes.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/water/13.png", "/Images/products/Automobile/water/14.png", "/Images/products/Automobile/water/15.png"]
  },
  {
    title: "Turned Parts",
    description: "Parting, Chamfering, Tapping, Threading, Step Operations, Milling, etc Operations on Rods.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/water/16.png", "/Images/products/Automobile/water/17.png"]
  },


  {
    title: "Tubular Parts - Tractor",
    description: "Tubular mechanical parts used in tractors and agricultural machinery.",
    category: "Tubular Parts",
    type: "Tubular Part - Tractor",
    images: [33, 34, 35].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Bush Insert",
    description: "A automobile part used in heavy vehicles.",
    category: "Tubular Parts",
    type: "Fabrication",
    images: ["/Images/products/Automobile/water/2.png", "/Images/products/Automobile/water/21.png"]
  },
  {
    title: "Tubular Parts - Automotive",


    description: "Tubular mechanical parts used in automobile applications.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: [3, 4, 5].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Parts Cross Member",
    description: " Square Tube used in mechanical parts used in automotive applications.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: [6, 7, 88, 99,].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [10, 11].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [12, 17].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [14, 15, 16].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [41, 42, 13].map(i => `/Images/products/Tubular/${i}.png`)
  },


  {
    title: "Hexagonal Head Profile Bolts",
    description: "Components used in mechanical and industrial assemblies.",
    category: "Turned Parts",
    type: "Assembly Parts",
    images: [1, 2].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Tie Rods",
    description: "Tie rods in cable drums are high-strength steel rods used to hold the drum flanges together and support the central barrel. They maintain structural integrity during lifting, transport, and cable unwinding.",
    category: "Turned Parts",
    type: "Tie Rods",
    images: [3, 4, 5, 6, 7].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Construction Bolts",
    description: "Stand components used in scaffoldings or machinery fixtures.**",
    category: "Bolts",
    type: "Hook Stand SPG",
    images: [8, 9, 10, 11].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Stand components used in scaffoldings or machinery fixtures.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [8, 9, 10, 11].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Two wheeler parts.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [12, 13].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Collar",
    description: "Assembly parts, mainly a two wheeler components.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [14, 15, 16].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Bush",
    description: "Bush.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [17].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Hexagonal head Plain Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [18, 19, 20].map(i => `/Images/products/Turned/${i}.png`)
  },
  {
    title: "Turned Parts",
    description: "Rods with process such as parting, Turning, chamfering, Threading, Tapping etc .",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [21, 22].map(i => `/Images/products/Turned/${i}.png`)
  },
];