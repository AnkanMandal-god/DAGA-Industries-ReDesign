import containersImg from "@assets/cat-containers-drums.png";
import bottlesImg from "@assets/cat-bottles-packaging.png";
import capsImg from "@assets/cat-caps-closures.png";
import agriculturalImg from "@assets/cat-agricultural.png";
import mouldedImg from "@assets/cat-moulded-components.png";

export type Category =
  | "Containers & Drums"
  | "Bottles & Packaging"
  | "Caps & Closures"
  | "Agricultural"
  | "Moulded Components";

export const categoryImages: Record<Category, string> = {
  "Containers & Drums": containersImg,
  "Bottles & Packaging": bottlesImg,
  "Caps & Closures": capsImg,
  "Agricultural": agriculturalImg,
  "Moulded Components": mouldedImg,
};

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  features: string[];
  sizes: string[];
  materials: string[];
  colorAccent: string;
}

export const products: Product[] = [
  {
    id: "plastic-jerrycans",
    name: "Plastic Jerrycans",
    category: "Containers & Drums",
    description: "Precision-moulded jerrycans for fuel, chemicals, and liquid storage. Available in multiple capacities with UN/DOT-approved options.",
    features: ["UN/DOT approved", "Child-resistant cap", "Vented closure option", "Leak-proof seal"],
    sizes: ["5L", "10L", "20L", "25L"],
    materials: ["HDPE", "PP"],
    colorAccent: "bg-red-800",
  },
  {
    id: "plastic-containers",
    name: "Plastic Containers",
    category: "Containers & Drums",
    description: "Versatile industrial containers for acids, chemicals, solvents, adhesives, water treatment, lubricants, phenyl, resins, insecticides, and more.",
    features: ["High ESCR rating", "Chemical-resistant grade", "Custom neck finishes", "Wide mouth option"],
    sizes: ["1L", "2.5L", "5L", "10L", "25L"],
    materials: ["HDPE", "COEX HDPE", "PP"],
    colorAccent: "bg-blue-900",
  },
  {
    id: "plastic-drums",
    name: "Plastic Drums",
    category: "Containers & Drums",
    description: "Heavy-duty industrial drums for bulk chemical, lubricant, and industrial fluid storage. Built to international packaging group standards.",
    features: ["UN certified", "Bung closure", "Locking ring option", "Stack rated"],
    sizes: ["25L", "50L", "100L", "200L", "210L"],
    materials: ["HDPE"],
    colorAccent: "bg-slate-800",
  },
  {
    id: "plastic-bottles",
    name: "Plastic Bottles",
    category: "Bottles & Packaging",
    description: "General-purpose plastic bottles suitable for a wide range of industrial, pharmaceutical, and consumer liquid packaging applications.",
    features: ["Leak-proof cap", "Multi-finish options", "Custom colour", "Tamper-evident"],
    sizes: ["100ml", "250ml", "500ml", "1L", "2L", "5L"],
    materials: ["HDPE", "PET", "PP"],
    colorAccent: "bg-sky-800",
  },
  {
    id: "plastic-cosmetic-containers",
    name: "Plastic Cosmetic Containers",
    category: "Bottles & Packaging",
    description: "Premium cosmetic packaging with high-gloss finish options suitable for creams, lotions, serums, and personal care products.",
    features: ["High-gloss finish", "Custom colour options", "Airless pump compatible", "Decoratable surface"],
    sizes: ["30ml", "50ml", "100ml", "200ml", "500ml"],
    materials: ["PP", "PET", "PETG"],
    colorAccent: "bg-pink-800",
  },
  {
    id: "plastic-water-bottles",
    name: "Plastic Water Bottles",
    category: "Bottles & Packaging",
    description: "Food-grade water bottles with crystal clarity, BPA-free construction, and ergonomic grip for drinking water and beverage applications.",
    features: ["BPA free", "Crystal clarity", "Ergonomic grip", "Food-grade certified"],
    sizes: ["250ml", "500ml", "1L", "2L"],
    materials: ["PET", "Food Grade PP"],
    colorAccent: "bg-teal-800",
  },
  {
    id: "plastic-grease-containers",
    name: "Plastic Grease Containers",
    category: "Containers & Drums",
    description: "Robust grease and lubricant containers with tamper-evident caps, designed for automotive and industrial workshops.",
    features: ["Tamper-evident cap", "Wide-mouth for dispensing", "Chemically resistant", "Stackable"],
    sizes: ["500g", "1kg", "5kg"],
    materials: ["PP", "HDPE"],
    colorAccent: "bg-zinc-800",
  },
  {
    id: "plastic-paint-containers",
    name: "Plastic Paint Containers",
    category: "Containers & Drums",
    description: "Durable paint containers with precision-moulded lids and integrated handles for the paints, coatings, and construction chemicals industry.",
    features: ["Airtight press-on lid", "Integrated bail handle", "Stackable", "UV-stabilized"],
    sizes: ["500ml", "1L", "4L", "10L", "20L"],
    materials: ["HDPE", "PP"],
    colorAccent: "bg-orange-800",
  },
  {
    id: "plastic-screw-caps",
    name: "Plastic Screw Caps",
    category: "Caps & Closures",
    description: "Precision-moulded screw caps for industrial and consumer containers, available in a full range of neck finishes and tamper-evidence features.",
    features: ["Tamper-evident band", "Multiple neck sizes", "Foam-lined option", "Custom colour"],
    sizes: ["18mm", "24mm", "28mm", "38mm", "45mm"],
    materials: ["PP", "HDPE"],
    colorAccent: "bg-slate-700",
  },
  {
    id: "plastic-flip-top-caps",
    name: "Plastic Flip Top Caps",
    category: "Caps & Closures",
    description: "Hinged flip-top caps providing one-hand dispensing for personal care, food, pharmaceutical, and industrial liquid products.",
    features: ["One-hand operation", "Snap-shut hinge", "Controlled flow orifice", "Leak-proof"],
    sizes: ["20mm", "24mm", "28mm", "38mm"],
    materials: ["PP"],
    colorAccent: "bg-indigo-800",
  },
  {
    id: "plastic-lids",
    name: "Plastic Lids",
    category: "Caps & Closures",
    description: "Snap-on and press-fit plastic lids for containers, pails, and drums across food, paint, and industrial applications.",
    features: ["Secure snap-fit", "Airtight seal", "Lever-off option", "Multiple sizes"],
    sizes: ["Custom to container diameter"],
    materials: ["PP", "HDPE", "LDPE"],
    colorAccent: "bg-gray-700",
  },
  {
    id: "plastic-agricultural-components",
    name: "Plastic Agricultural Components",
    category: "Agricultural",
    description: "Precision-moulded plastic components for agricultural machinery, irrigation systems, and farming equipment.",
    features: ["UV stabilized", "Chemical resistant", "High impact strength", "Custom specifications"],
    sizes: ["As per specification"],
    materials: ["PP", "HDPE", "ABS"],
    colorAccent: "bg-green-800",
  },
  {
    id: "plastic-spacers",
    name: "Plastic Spacers",
    category: "Moulded Components",
    description: "Precision-manufactured plastic spacers for electrical, construction, and mechanical applications requiring exact dimensional tolerances.",
    features: ["Dimensional accuracy", "High compressive strength", "Non-conductive", "Custom sizes"],
    sizes: ["As per specification"],
    materials: ["PP", "Nylon", "HDPE"],
    colorAccent: "bg-neutral-700",
  },
  {
    id: "plastic-packers",
    name: "Plastic Packers",
    category: "Moulded Components",
    description: "Plastic packers and shims for construction, glazing, and mechanical levelling applications. Available in standard and custom sizes.",
    features: ["Precise thickness", "Load bearing rated", "Weather resistant", "Recyclable"],
    sizes: ["1mm", "2mm", "3mm", "5mm", "10mm"],
    materials: ["PP", "HDPE"],
    colorAccent: "bg-stone-700",
  },
  {
    id: "plastic-shoes",
    name: "Plastic Shoes",
    category: "Moulded Components",
    description: "Moulded plastic shoes and protective end caps for rebar, scaffolding, and structural applications in the construction industry.",
    features: ["Slip-resistant", "Weather proof", "High load capacity", "Easy fit"],
    sizes: ["As per specification"],
    materials: ["PP", "HDPE", "PVC"],
    colorAccent: "bg-amber-800",
  },
  {
    id: "plastic-seals",
    name: "Plastic Seals",
    category: "Caps & Closures",
    description: "Security seals and tamper-evident closures for logistics, pharmaceutical, and industrial container applications.",
    features: ["Tamper-evident", "Serialised numbering available", "Break-on-open design", "High tensile strength"],
    sizes: ["As per specification"],
    materials: ["PP", "Nylon"],
    colorAccent: "bg-red-900",
  },
  {
    id: "plastic-hangers",
    name: "Plastic Hangers",
    category: "Moulded Components",
    description: "Robust plastic hangers moulded for garment, retail, and industrial use. Available in standard and custom configurations.",
    features: ["High load rating", "Smooth finish", "Rotating hook option", "Custom branding"],
    sizes: ["Standard", "Heavy Duty", "Custom"],
    materials: ["PP", "ABS"],
    colorAccent: "bg-blue-800",
  },
  {
    id: "plastic-industrial-articles",
    name: "Plastic Industrial Articles",
    category: "Moulded Components",
    description: "A broad range of moulded plastic industrial articles for use across manufacturing, logistics, warehousing, and infrastructure sectors.",
    features: ["High durability", "Custom designs", "Chemical resistant", "Various grades available"],
    sizes: ["As per specification"],
    materials: ["PP", "HDPE", "ABS", "Nylon"],
    colorAccent: "bg-slate-600",
  },
  {
    id: "custom-moulded-components",
    name: "Moulded Components (Custom)",
    category: "Moulded Components",
    description: "Plastic moulded components manufactured as per customer specifications — from prototype to full production, using customer-supplied or Raga-developed tooling.",
    features: ["Customer spec driven", "In-house tooling capability", "Rapid prototyping", "Full production runs"],
    sizes: ["As per specification"],
    materials: ["PP", "HDPE", "ABS", "Nylon", "POM"],
    colorAccent: "bg-primary/80",
  },
  {
    id: "silage-film",
    name: "Silage Film",
    category: "Agricultural",
    description: "High-performance oxygen-barrier silage film for baling and preservation of animal feed with superior UV protection and puncture resistance.",
    features: ["Oxygen barrier", "UV stabilized", "High puncture resistance", "6-layer co-extrusion"],
    sizes: ["500mm × 1800m", "750mm × 1500m"],
    materials: ["LLDPE", "EVOH barrier"],
    colorAccent: "bg-emerald-700",
  },
  {
    id: "pouches-laminates",
    name: "Pouches & Laminates",
    category: "Bottles & Packaging",
    description: "Multi-layer pouches and laminates for food, pharmaceutical, and industrial packaging — providing barrier properties, seal integrity, and branding surface.",
    features: ["Multi-layer barrier", "Heat-sealable", "Custom print ready", "Stand-up & flat formats"],
    sizes: ["Custom sizes available"],
    materials: ["PET/PE", "BOPP/PE", "Foil laminates"],
    colorAccent: "bg-violet-800",
  },
];
