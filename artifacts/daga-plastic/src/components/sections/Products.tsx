import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Category = "All" | "Industrial Containers" | "Food Grade" | "Agricultural" | "Household" | "Other";

interface Product {
  name: string;
  category: Category;
}

const products: Product[] = [
  { name: "210 Ltr. Barrel", category: "Industrial Containers" },
  { name: "Jerry Cans (5L/10L/20L)", category: "Industrial Containers" },
  { name: "Chemical Containers", category: "Industrial Containers" },
  { name: "Construction Chemical Containers", category: "Industrial Containers" },
  { name: "Sanitiser Bottles and Containers", category: "Industrial Containers" },
  { name: "Edible Food Containers", category: "Food Grade" },
  { name: "Edible Oil Containers", category: "Food Grade" },
  { name: "Milk Crates", category: "Food Grade" },
  { name: "Cosmetic Container", category: "Food Grade" },
  { name: "Battery Operated Sprayers", category: "Agricultural" },
  { name: "Silage Packaging Film", category: "Agricultural" },
  { name: "Push Fit Coupler", category: "Agricultural" },
  { name: "Household Buckets", category: "Household" },
  { name: "Dustbin Buckets", category: "Household" },
  { name: "Cling Film", category: "Household" },
  { name: "Grease Containers", category: "Household" },
  { name: "Ink Containers", category: "Household" },
  { name: "HDPE Drums", category: "Other" },
  { name: "Plastic Carboys", category: "Other" },
  { name: "Resin Containers", category: "Other" },
];

const categories: Category[] = ["All", "Industrial Containers", "Food Grade", "Agricultural", "Household"];

export function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProducts = products.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <div className="w-16 h-1.5 bg-primary mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full ${activeCategory === cat ? "bg-primary text-white" : "bg-white text-foreground"}`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredProducts.map((product, idx) => {
              const initials = product.name.substring(0, 2).toUpperCase();
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={product.name + idx}
                  className="bg-white border border-border group overflow-hidden"
                >
                  <div className="aspect-square bg-slate-100 flex items-center justify-center relative overflow-hidden">
                    <span className="text-4xl font-black text-slate-300 group-hover:scale-110 transition-transform duration-500">
                      {initials}
                    </span>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                  </div>
                  <div className="p-4 md:p-5">
                    <Badge variant="secondary" className="mb-3 text-[10px] uppercase tracking-wider">{product.category}</Badge>
                    <h3 className="font-bold text-foreground mb-4 line-clamp-2 min-h-[3rem]">{product.name}</h3>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full rounded-none group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                          View Specs
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{product.name}</DialogTitle>
                          <DialogDescription>Category: {product.category}</DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground mb-4">
                            High-quality industrial grade {product.name.toLowerCase()} manufactured using state-of-the-art precision machinery. Designed for durability and reliability.
                          </p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold block text-foreground">Material</span>
                              <span className="text-muted-foreground">HDPE / PP / Food Grade</span>
                            </div>
                            <div>
                              <span className="font-semibold block text-foreground">Sizes</span>
                              <span className="text-muted-foreground">Standard / Custom</span>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
