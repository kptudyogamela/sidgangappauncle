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
    category: "Tie Rods and Bolts",
    type: "Plain Bolt",
    images: [1, 2, 3, 4, 5, 6].map(i => `/Images/products/Tie Rods n Bolts/HB${i}.png`)
  },
  {
    title: "Tie rods",
    description: "Tie rods in cable drums are high-strength steel rods used to hold the drum flanges together and support the central barrel. They maintain structural integrity during lifting, transport, and cable unwinding.",
    category: "Tie Rods and Bolts",
    type: "Plain Bolt",
    images: [1, 2, 3, 4, 5, 6].map(i => `/Images/products/Bolts/TR${i}.png`)
  },




  {
    title: "Threaded Rod",
    description: "A cylindrical metal rod threaded along its entire length, used for fastening applications where adjustable length and high-strength joining are required. Common in construction, cable drums, machinery, and electrical assemblies.",
    category: "Tie Rods and Bolts",
    type: "Construction Bolts",
    images: [1, 2, 3].map(i => `/Images/products/Bolts/TB${i}.png`)
  },
  {
    title: "Hexagonal headed Profiled Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Tie Rods and Bolts",
    type: "Plain Bolt",
    images: [1, 2].map(i => `/Images/products/Bolts/PB${i}.png`)
  },




  {
    title: "Construction Bolts",
    description: "Standard bolts used for fastening in assemblies, Automobile industries and in construction buildings.",
    category: "Tie Rods and Bolts",
    type: "Plain Bolt",
    images: [1, 2, 3, 4].map(i => `/Images/products/Bolts/CB${i}.png`)
  },
  {
    title: "Corner Bracket Piece",
    description: "Used for assembling metal frameworks, structural assemblies, frame construction, or machine supports. This component is primarily used in electrical enclosure bodies. Supplied to Rittal, a leading global provider of industrial enclosures and related solutions.",
    category: "Corner",
    type: "Fabrication",
    images: [1, 2, 3, 4, 5, 6, 7].map(i => `/Images/products/corner/CP${i}.png`)
  },


  {
    title: "Laser Cutting and CNC Bending Part 1",
    description: "High-precision sheet metal bracket, laser-cut and CNC-bent for strength and accuracy. Ideal for OEM and industrial use where consistency and performance matter.",
    category: "Laser Cutting & Bending",
    type: "Fabrication",
    images: [11, 12, 13, 14].map(i => `/Images/products/Fabrication/LB${i}.png`)
  },
  {
    title: "Laser Cutting and CNC Bending Part II",
    description: "Precision laser-cut and CNC-bent bracket for structural and mounting use in industrial machinery and enclosures. Offers accurate fit, load support, and easy installation—ideal for high-volume production.",
    category: "Laser Cutting & Bending",
    type: "Fabrication",
    images: [21, 22, 23, 24].map(i => `/Images/products/Fabrication/LB${i}.png`)
  },
  {
    title: "Laser cutting and bending part III",
    description: "Heavy-duty U-bracket, laser-cut and CNC-bent for dimensional precision and structural strength. Ideal for electrical enclosures, machine frames, and load-bearing assemblies, with pre-drilled holes for easy integration in custom industrial applications.",
    category: "Laser Cutting & Bending",
    type: "Fabrication",
    images: [31, 32, 33, 34].map(i => `/Images/products/Fabrication/LB${i}.png`)
  },


  {
    title: "Washers",
    description: "High-quality laser-cut mild steel washer for mechanical assemblies and heavy-duty machinery. Ensures even load distribution and surface protection, with a precise inner diameter for a secure fit. Ideal for enclosures, structural frames, and custom fabrication.",
    category: "Laser Cutting & Bending",
    type: "Washer",
    images: [1, 2].map(i => `/Images/products/Services/W${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: " This is a rod which is parted, chamfered and turned, majorly used as automobile parts  .",
    category: "Automobile",
    type: "Fabrication",
    images: [1, 2, 3].map(i => `/Images/products/Automobile/SPG${i}.png`)
  },
  {
    title: "Bush Insert",
    description: "A automobile part used in heavy vehicles.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/BI2.png", "/Images/products/Automobile/BI1.png"]
  },
  {
    title: "Rods",
    description: "Used in two wheeler .",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/R1.png", "/Images/products/Automobile/R2.png", "/Images/products/Automobile/SR1.png", "/Images/products/Automobile/SR2.png"]
  },
  {
    title: "Bolt RR Cushion",
    description: "Used in two wheeler .",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/RR1.png", "/Images/products/Automobile/RR2.png", "/Images/products/Automobile/RR4.png", "/Images/products/Automobile/RR3.png"]
  },
  {
    title: "Pipe RR Fork",
    description: "It includes both Tube, Rod and assembly operation.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/PRF1.png", "/Images/products/Automobile/PRF2.png", "/Images/products/Automobile/PRF3.png"]
  },
  {
    title: "Pipe Pivot",
    description: "Provides protective covering for electrical cabinet enclosures.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/PP1.png", "/Images/products/Automobile/PP2.png", "/Images/products/Automobile/PP3.png"]
  },
  {
    title: "Tubular Parts",
    description: "Cutting, Chamfering, Secondary Operations and Plating on Tubes.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/TUB1.png", "/Images/products/Automobile/TUB2.png", "/Images/products/Automobile/TUB3.png"]
  },
  {
    title: "Turned Parts",
    description: "Parting, Chamfering, Tapping, Threading, Step Operations, Milling, etc Operations on Rods.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/TUR1.png", "/Images/products/Automobile/TUR2.png", "/Images/products/Automobile/TUR3.png"]
  },
  {
    title: "Tubular Parts - Tractor",
    description: "Tubular mechanical parts used in tractors and agricultural machinery.",
    category: "Tubular Parts",
    type: "Tubular Part - Tractor",
    images: [1, 2, 3].map(i => `/Images/products/Tubular/P${i}.png`)
  },
  {
    title: "Bush Insert",
    description: "A automobile part used in heavy vehicles.",
    category: "Tubular Parts",
    type: "Fabrication",
    images: ["/Images/products/Automobile/BI1.png", "/Images/products/Automobile/BI2.png"]
  },

  {
    title: "Tubular Parts - Automotive",
    description: "Tubular mechanical parts used in automobile applications.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: ["C1", "C2", "C3"].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Parts Cross Member",
    description: "Square Tube used in mechanical parts used in automotive applications.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: ["CM1", "CM2", "CM3", "CM4"].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: ["LP1", "LP2"].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: ["P1", "P2", "P3"].map(i => `/Images/products/Tubular/${i}.png`)
  },


  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.....",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [1, 2, 3].map(i => `/Images/products/Tubular/TUB${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Cylindrical pipes used in mechanical frameworks and systems.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [1, 2, 3].map(i => `/Images/products/Tubular/PP${i}.png`)
  },
  {
    title: "Hexagonal Head Profile Bolts",
    description: "Components used in mechanical and industrial assemblies.",
    category: "Turned Parts",
    type: "Assembly Parts",
    images: [1, 2].map(i => `/Images/products/Bolts/PB${i}.png`)
  },
  {
    title: "Tie Rods",
    description: "Tie rods in cable drums are high-strength steel rods used to hold the drum flanges together and support the central barrel. They maintain structural integrity during lifting, transport, and cable unwinding.",
    category: "Turned Parts",
    type: "Tie Rods",
    images: [1, 2, 3, 4, 5, 6].map(i => `/Images/products/Bolts/TR${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Two wheeler parts.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [1, 2, 3].map(i => `/Images/products/Turned/SPG${i}.png`)
  },
  {
    title: "Collar",
    description: "Assembly parts, mainly a two wheeler components.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [1, 2, 3].map(i => `/Images/products/Tubular/C${i}.png`)
  },
  {
    title: "Bush",
    description: "A rod with operations drilling, tapping and chamfering.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: ["/Images/products/Tubular/BU.png"]
  },
  {
    title: "Turned Parts",
    description: "Rods with process such as parting, Turning, chamfering, Threading, Tapping etc .",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [1, 2, 3].map(i => `/Images/products/Turned/TUR${i}.png`)
  },
  {
    title: "Bolt RR Cushion",
    description: "Rods with process such as parting, Turning, chamfering, Threading, Tapping etc .",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [1, 2, 3, 4].map(i => `/Images/products/Turned/RR${i}.png`)
  },
];
