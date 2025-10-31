interface Product {
  title: string;
  description: string;
  category: string;
  type: string;
  images: string[];
}
export const groupedProducts: Product[] = [
  {
    title: "Shoe Rack",
    description: "High-quality steel shoe rack manufactured in various sizes, colors, and finishes. Designed for strength, corrosion resistance, and aesthetic appeal — ideal for homes, offices, or display spaces. Easy to assemble and customize with modular units.",
    category: "Shoe Rack",
    type: "Shoe Rack",
    images: [...[14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map(i => `/Images/products/shoerack/${i}.jpg`), ...[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 25].map(i => `/Images/products/shoerack/${i}.png`),]
  },
  {
    title: "Hexagonal Head Profiled Bolt",
    description: "Premium hexagonal head profiled bolt with built-in washer and nut — ensures precise alignment and robust fastening in structural and mechanical assemblies. Ideal for heavy-duty industrial and automotive applications.",
    category: "Tie Rods and Bolts",
    type: "Plain Bolt",
    images: [1, 2, 3, 4, 5, 6].map(i => `/Images/products/Tie Rods n Bolts/HB${i}.png`)
  },
  {
    title: "Tie Rods",
    description: "High-strength tie rods used to maintain structural integrity in mechanical systems, cable drums, and assemblies. Manufactured from quality steel, precisely straightened, and surface-treated for durability under load and stress.",
    category: "Tie Rods and Bolts",
    type: "Plain Bolt",
    images: [1, 2, 3, 4, 5, 6].map(i => `/Images/products/Bolts/TR${i}.png`)
  },
  {
    title: "Threaded Rod",
    description: "Full-length threaded rod for adjustable fastening in construction, machinery, and electrical systems. Offers high tensile strength and compatibility with standard nuts, washers, and mounting systems.",
    category: "Tie Rods and Bolts",
    type: "Construction Bolts",
    images: [1, 2, 3].map(i => `/Images/products/Bolts/TB${i}.png`)
  },
  {
    title: "Hexagonal Headed Profiled Bolts",
    description: "Standard profile hex head bolts suitable for industrial, automotive and structural applications. Manufactured to tight tolerances and available in multiple grades of steel.",
    category: "Tie Rods and Bolts",
    type: "Plain Bolt",
    images: [1, 2].map(i => `/Images/products/Bolts/PB${i}.png`)
  },
  {
    title: "Construction Bolts",
    description: "Heavy-duty construction bolts used in structural assemblies, machinery frames, and building components. Designed for high shear and tensile strength with precise threading and durable finishes.",
    category: "Tie Rods and Bolts",
    type: "Plain Bolt",
    images: [1, 2, 3, 4].map(i => `/Images/products/Bolts/CB${i}.png`)
  },
  {
    title: "Corner Bracket Piece",
    description: "Sturdy corner bracket component used for assembling metal frames, cabinets, and enclosures. Designed for industrial and electrical applications, with precise bends and mounting holes for secure installation.",
    category: "Corner",
    type: "Fabrication",
    images: [1, 2, 3, 4, 5, 6, 7].map(i => `/Images/products/corner/CP${i}.png`)
  },
  {
    title: "Laser Cutting and CNC Bending Part 1",
    description: "Precision laser-cut and CNC-bent sheet metal part — engineered for structural accuracy, seamless fit, and lasting performance. Ideal for OEMs, instrument panels, enclosures, and industrial assemblies.",
    category: "Laser Cutting & Bending",
    type: "Fabrication",
    images: [11, 12, 13, 14].map(i => `/Images/products/Fabrication/LB${i}.png`)
  },
  {
    title: "Laser Cutting and CNC Bending Part II",
    description: "Advanced sheet metal component, laser-cut and CNC-bent for structural integrity and modern aesthetics. Pre-drilled mounting holes and uniform bend angles ensure easy integration in systems.",
    category: "Laser Cutting & Bending",
    type: "Fabrication",
    images: [21, 22, 23, 24].map(i => `/Images/products/Fabrication/LB${i}.png`)
  },
  {
    title: "Laser cutting and bending part III",
    description: "Heavy-duty U-bracket or bent sheet metal component with exact tolerances and structural reinforcement. Suitable for enclosures, mounting systems, and load-bearing frameworks.",
    category: "Laser Cutting & Bending",
    type: "Fabrication",
    images: [31, 32, 33, 34].map(i => `/Images/products/Fabrication/LB${i}.png`)
  },
  {
    title: "Washers",
    description: "High-quality metal washers manufactured via precision laser cutting — ensures uniform thickness and clean edges. Distributes load evenly and prevents surface damage in bolted assemblies.",
    category: "Laser Cutting & Bending",
    type: "Washer",
    images: [1, 2].map(i => `/Images/products/Services/W${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Precision turned hook stand used in automotive or industrial systems. Machined with smooth finishes and tight tolerances for reliable performance under load.",
    category: "Automobile",
    type: "Fabrication",
    images: [1, 2, 3].map(i => `/Images/products/Automobile/SPG${i}.png`)
  },
  {
    title: "Bush Insert",
    description: "Robust bush insert designed for heavy vehicle applications, providing wear resistance, vibration damping, and accurate alignment in assemblies.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/BI2.png", "/Images/products/Automobile/BI1.png"]
  },
  {
    title: "Rods",
    description: "Precision rods used in two-wheeler or mechanical systems — machined for diameter accuracy, surface finish, and dimensional consistency.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/R1.png", "/Images/products/Automobile/R2.png", "/Images/products/Automobile/SR1.png", "/Images/products/Automobile/SR2.png"]
  },
  {
    title: "Bolt RR Cushion",
    description: "Specialized bolt for RR cushion assemblies in two-wheelers — built for durability, vibration resistance, and precise fitment.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/RR1.png", "/Images/products/Automobile/RR2.png", "/Images/products/Automobile/RR4.png", "/Images/products/Automobile/RR3.png"]
  },
  {
    title: "Pipe RR Fork",
    description: "Tubular assembly for RR fork systems in automotive applications — includes rod, tube, and joint operations with tight tolerances and finish quality.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/PRF1.png", "/Images/products/Automobile/PRF2.png", "/Images/products/Automobile/PRF3.png"]
  },
  {
    title: "Pipe Pivot",
    description: "Pivot pipe used in assemblies and mechanical frameworks — precision turned and processed for stable rotation and support in industrial systems.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/PP1.png", "/Images/products/Automobile/PP2.png", "/Images/products/Automobile/PP3.png"]
  },
  {
    title: "Tubular Parts",
    description: "Fabricated tubular components with operations including cutting, chamfering, plating, and secondary machining — designed for strength and fit in automotive systems.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/TUB1.png", "/Images/products/Automobile/TUB2.png", "/Images/products/Automobile/TUB3.png"]
  },
  {
    title: "Turned Parts",
    description: "Precision turned components with operations such as parting, chamfering, threading, tapping, and milling — suitable for automobile assemblies and mechanical systems.",
    category: "Automobile",
    type: "Fabrication",
    images: ["/Images/products/Automobile/TUR1.png", "/Images/products/Automobile/TUR2.png", "/Images/products/Automobile/TUR3.png"]
  },
  {
    title: "Tubular Parts - Tractor",
    description: "Heavy-duty tubular components for agricultural and tractor systems — built to withstand high loads, environmental exposure, and long service life.",
    category: "Tubular Parts",
    type: "Tubular Part - Tractor",
    images: [1, 2, 3].map(i => `/Images/products/Tubular/P${i}.png`)
  },
  {
    title: "Tubular Parts - Automotive",
    description: "Tubular mechanical parts for automotive frames and substructures — engineered for lightweight strength and precision fit.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: ["C1", "C2", "C3"].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Parts Cross Member",
    description: "Square tube components used in automotive crossframes and chassis structures — manufactured with tight tolerances for strength and alignment.",
    category: "Tubular Parts",
    type: "Tubular Part - Automotive",
    images: ["CM1", "CM2", "CM3", "CM4"].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Multi-purpose tubular pipes used in mechanical systems and frameworks — available in various diameters, materials, and wall thicknesses.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: ["LP1", "LP2"].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Durable tubular pipes ideal for industrial piping, structural support, and fluid systems — with consistent internal and external finishes.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: ["P1", "P2", "P3"].map(i => `/Images/products/Tubular/${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Robust tubular pipe suited for heavy-duty mechanical frameworks — designed for load-bearing systems and long-term stability.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [1, 2, 3].map(i => `/Images/products/Tubular/TUB${i}.png`)
  },
  {
    title: "Tubular Pipes",
    description: "Precision-engineered tubular pipes for structural assemblies and conduits — built to spec with smooth finishes and dimensional accuracy.",
    category: "Tubular Parts",
    type: "Tubular Pipes",
    images: [1, 2, 3].map(i => `/Images/products/Tubular/PP${i}.png`)
  },
  {
    title: "Hexagonal Head Profile Bolts",
    description: "Industrial-grade hex head bolts used in mechanical and structural assemblies — optimized for torque, fit, and strength in demanding environments.",
    category: "Turned Parts",
    type: "Assembly Parts",
    images: [1, 2].map(i => `/Images/products/Bolts/PB${i}.png`)
  },
  {
    title: "Tie Rods",
    description: "High-performance tie rods manufactured for mechanical systems, cable drums, and structural assemblies — intended to provide tension, rigidity, and dimensional stability.",
    category: "Turned Parts",
    type: "Tie Rods",
    images: [1, 2, 3, 4, 5, 6].map(i => `/Images/products/Bolts/TR${i}.png`)
  },
  {
    title: "Hook Stand SPG",
    description: "Precision turning component for mechanical and automotive systems — fine tolerances, smooth edges, and surface finish suitable for high-efficiency use.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [1, 2, 3].map(i => `/Images/products/Turned/SPG${i}.png`)
  },
  {
    title: "Collar",
    description: "Machined collar component used in assemblies to position, brace, or align rotating or sliding parts — engineered for dimensional stability and wear resistance.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [1, 2, 3].map(i => `/Images/products/Tubular/C${i}.png`)
  },
  {
    title: "Bush",
    description: "Wear-resistant bush component used in assemblies to reduce friction, absorb vibration, and extend the life of mating parts — precision drilled and finished.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: ["/Images/products/Tubular/BU.png"]
  },
  {
    title: "Turned Parts",
    description: "Multi-operation turned parts with threading, chamfering, milling, and more — used in automotive, mechanical and industrial assemblies requiring precision geometry.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [1, 2, 3].map(i => `/Images/products/Turned/TUR${i}.png`)
  },
  {
    title: "Bolt RR Cushion",
    description: "Robust bolt used in RR cushion assemblies for vehicles — designed to endure vibration, load cycles, and maintain secure fastening under harsh conditions.",
    category: "Turned Parts",
    type: "Hook Stand SPG",
    images: [1, 2, 3, 4].map(i => `/Images/products/Turned/RR${i}.png`)
  },
];

