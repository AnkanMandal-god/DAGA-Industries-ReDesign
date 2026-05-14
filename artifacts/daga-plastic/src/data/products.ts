export type Category = "Industrial Containers" | "Food Grade" | "Agricultural" | "Household" | "Other";

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
    id: "210-ltr-barrel",
    name: "210 Ltr. Barrel",
    category: "Industrial Containers",
    description: "Heavy-duty industrial barrel designed for safe storage and transport of chemicals, lubricants, and industrial fluids.",
    features: ["Tamper-evident closure", "UN certified design", "Stackable", "Chemical resistant"],
    sizes: ["210 Litres"],
    materials: ["HDPE", "Food Grade HDPE"],
    colorAccent: "bg-slate-800"
  },
  {
    id: "jerry-cans",
    name: "Jerry Cans",
    category: "Industrial Containers",
    description: "Precision-moulded jerry cans for fuel, chemical, and liquid storage. Available in multiple capacities.",
    features: ["UN/DOT approved", "Child-resistant cap", "Vented closure option", "Leak-proof seal"],
    sizes: ["5L", "10L", "20L"],
    materials: ["HDPE", "PP"],
    colorAccent: "bg-red-800"
  },
  {
    id: "chemical-containers",
    name: "Chemical Containers",
    category: "Industrial Containers",
    description: "High-ESCR rated containers built for the most demanding chemical environments including solvents, acids, and reagents.",
    features: ["High ESCR rating", "Chemical-resistant grade", "Custom neck finishes", "Wide mouth option"],
    sizes: ["1L", "2.5L", "5L", "10L", "25L"],
    materials: ["HDPE", "COEX HDPE"],
    colorAccent: "bg-blue-900"
  },
  {
    id: "construction-chemical-containers",
    name: "Construction Chemical Containers",
    category: "Industrial Containers",
    description: "Robust containers engineered for construction-grade chemicals including admixtures, adhesives, and waterproofing agents.",
    features: ["Heavy wall construction", "Stacking lugs", "Integrated handle", "UV stabilized"],
    sizes: ["5L", "10L", "20L", "25L"],
    materials: ["HDPE", "PP"],
    colorAccent: "bg-orange-800"
  },
  {
    id: "sanitiser-bottles",
    name: "Sanitiser Bottles & Containers",
    category: "Industrial Containers",
    description: "FDA-compliant sanitiser packaging with pump-ready neck finishes, suitable for healthcare and industrial sanitisation.",
    features: ["Pump-ready neck", "FDA compliant", "Clear/opaque options", "Dispensing closure compatible"],
    sizes: ["100ml", "200ml", "500ml", "1L", "5L"],
    materials: ["PET", "HDPE", "PP"],
    colorAccent: "bg-teal-800"
  },
  {
    id: "edible-food-containers",
    name: "Edible Food Containers",
    category: "Food Grade",
    description: "BIS-approved food-safe containers for sauces, pickles, condiments, and packaged food products.",
    features: ["BIS approved", "Airtight seal", "Microwave-safe option", "Tamper-evident"],
    sizes: ["250ml", "500ml", "1L", "2L", "5L"],
    materials: ["Food Grade PP", "Food Grade PET"],
    colorAccent: "bg-amber-700"
  },
  {
    id: "edible-oil-containers",
    name: "Edible Oil Containers",
    category: "Food Grade",
    description: "Crystal-clear edible oil containers with calibrated graduations and drip-free dispensing necks.",
    features: ["Crystal clarity", "Calibrated graduations", "Drip-free neck", "Oxygen barrier option"],
    sizes: ["500ml", "1L", "2L", "5L", "15L"],
    materials: ["PET", "Food Grade HDPE"],
    colorAccent: "bg-yellow-600"
  },
  {
    id: "milk-crates",
    name: "Milk Crates",
    category: "Food Grade",
    description: "Interlocking heavy-duty milk crates engineered for dairy distribution logistics and cold chain management.",
    features: ["Interlocking design", "Hygienic drainage", "Cold chain rated", "Anti-slip base"],
    sizes: ["16-bottle", "24-bottle", "30-bottle"],
    materials: ["Virgin HDPE", "PP"],
    colorAccent: "bg-blue-800"
  },
  {
    id: "cosmetic-container",
    name: "Cosmetic Containers",
    category: "Food Grade",
    description: "Premium cosmetic packaging with high-gloss finish options, suitable for creams, lotions, and personal care products.",
    features: ["High-gloss finish", "Custom colour options", "Airless pump compatible", "Decoratable surface"],
    sizes: ["30ml", "50ml", "100ml", "200ml", "500ml"],
    materials: ["PP", "PET", "PETG"],
    colorAccent: "bg-pink-800"
  },
  {
    id: "battery-operated-sprayers",
    name: "Battery Operated Sprayers",
    category: "Agricultural",
    description: "Professional-grade battery-operated sprayers for pesticide, herbicide, and fertilizer application across large agricultural fields.",
    features: ["Lithium battery powered", "Adjustable nozzle", "Anti-drip valve", "Ergonomic shoulder harness"],
    sizes: ["8L", "12L", "16L"],
    materials: ["HDPE tank", "PP components"],
    colorAccent: "bg-green-800"
  },
  {
    id: "silage-packaging-film",
    name: "Silage Packaging Film",
    category: "Agricultural",
    description: "High-performance oxygen-barrier silage film for baling and preservation of animal feed with superior UV protection.",
    features: ["Oxygen barrier", "UV stabilized", "High puncture resistance", "6-layer co-extrusion"],
    sizes: ["500mm x 1800m", "750mm x 1500m"],
    materials: ["LLDPE", "EVOH barrier"],
    colorAccent: "bg-emerald-700"
  },
  {
    id: "push-fit-coupler",
    name: "Push Fit Coupler",
    category: "Agricultural",
    description: "Precision push-fit couplers for irrigation systems, providing leak-free connections in agricultural and industrial pipework.",
    features: ["Tool-free installation", "Leak-free seal", "Pressure rated", "Corrosion proof"],
    sizes: ["15mm", "20mm", "25mm", "32mm"],
    materials: ["PP", "Acetal"],
    colorAccent: "bg-gray-700"
  },
  {
    id: "household-buckets",
    name: "Household Buckets",
    category: "Household",
    description: "Heavy-duty domestic buckets with ergonomic grip handles and precision-moulded rims for stacking efficiency.",
    features: ["Ergonomic grip handle", "Stackable", "Graduated markings", "Colour options"],
    sizes: ["5L", "10L", "15L", "20L"],
    materials: ["PP", "HDPE"],
    colorAccent: "bg-cyan-700"
  },
  {
    id: "dustbin-buckets",
    name: "Dustbin Buckets",
    category: "Household",
    description: "Hygienic waste collection bins with secure-fitting lids and smooth inner surfaces for easy cleaning.",
    features: ["Secure-fit lid", "Smooth inner surface", "Pedal mechanism option", "Odour-resistant grade"],
    sizes: ["5L", "10L", "20L", "30L"],
    materials: ["PP", "HDPE"],
    colorAccent: "bg-slate-700"
  },
  {
    id: "cling-film",
    name: "Cling Film",
    category: "Household",
    description: "Premium food-grade cling film with superior cling properties and clarity for food storage and freshness.",
    features: ["Superior cling", "Microwave safe", "BPA free", "Perforated dispensing"],
    sizes: ["30cm x 100m", "45cm x 100m"],
    materials: ["PVC", "PE"],
    colorAccent: "bg-sky-800"
  },
  {
    id: "grease-containers",
    name: "Grease Containers",
    category: "Household",
    description: "Robust grease and lubricant containers with tamper-evident caps, designed for automotive and industrial workshops.",
    features: ["Tamper-evident cap", "Wide-mouth for dispensing", "Chemically resistant", "Stackable"],
    sizes: ["500g", "1kg", "5kg"],
    materials: ["PP", "HDPE"],
    colorAccent: "bg-zinc-800"
  },
  {
    id: "ink-containers",
    name: "Ink Containers",
    category: "Household",
    description: "Precision-made ink packaging containers with airtight seals to prevent oxidation and maintain print quality.",
    features: ["Airtight seal", "UV-protected", "Anti-static grade", "Neck for controlled pour"],
    sizes: ["100ml", "500ml", "1L", "5L"],
    materials: ["HDPE", "PET"],
    colorAccent: "bg-indigo-900"
  },
  {
    id: "hdpe-drums",
    name: "HDPE Drums",
    category: "Other",
    description: "Industrial-grade HDPE drums for bulk chemical and industrial storage, built to international packaging group standards.",
    features: ["UN certified", "Bung closure", "Locking ring option", "Stack rated"],
    sizes: ["25L", "50L", "100L", "200L"],
    materials: ["HDPE"],
    colorAccent: "bg-blue-950"
  },
  {
    id: "plastic-carboys",
    name: "Plastic Carboys",
    category: "Other",
    description: "Heavy-duty carboys for transporting and storing aggressive chemicals in laboratory and industrial settings.",
    features: ["Wide-mouth neck", "Carry handle", "Chemical resistant", "Translucent grade available"],
    sizes: ["5L", "10L", "20L", "25L"],
    materials: ["HDPE", "LDPE"],
    colorAccent: "bg-neutral-800"
  },
  {
    id: "resin-containers",
    name: "Resin Containers",
    category: "Other",
    description: "Airtight resin containers for 2-component resin systems, adhesives, and coating materials requiring moisture exclusion.",
    features: ["Moisture-barrier lid", "Secure snap-lock", "Epoxy-compatible", "Pressure-vent option"],
    sizes: ["500ml", "1L", "2.5L", "5L"],
    materials: ["PP", "HDPE"],
    colorAccent: "bg-stone-800"
  }
];
