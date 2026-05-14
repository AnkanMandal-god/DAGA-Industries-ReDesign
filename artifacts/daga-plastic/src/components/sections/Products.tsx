import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grid3x3, LayoutGrid, List, ArrowRight } from "lucide-react";
import { products, Category } from "@/data/products";
import { useLocation } from "wouter";

const categories: Category[] | "All"[] = ["All", "Industrial Containers", "Food Grade", "Agricultural", "Household", "Other"];

export function Products() {
  const [, setLocation] = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [previewIndices, setPreviewIndices] = useState<number[]>([0, 1, 2, 3]);

  // Cycle preview products when collapsed
  useEffect(() => {
    if (isExpanded) return;
    const interval = setInterval(() => {
      setPreviewIndices(prev => {
        const next = [...prev];
        for (let i = 0; i < 4; i++) {
          next[i] = Math.floor(Math.random() * products.length);
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isExpanded]);

  const filteredProducts = products.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <section id="products" className="py-24 relative border-t border-border">
      {/* Light industrial grid pattern background */}
      <div className="absolute inset-0 bg-slate-50 z-0" />
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Grid3x3 className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">OUR PRODUCTS</h2>
            </div>
            <div className="w-24 h-1.5 bg-primary"></div>
          </div>
          <div className="mt-4 md:mt-0 text-slate-500 font-medium">
            20 Products Across 5 Categories
          </div>
        </div>

        {!isExpanded ? (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Description & CTA */}
            <div>
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 font-light">
                Precision-engineered plastic solutions across Industrial, Food Grade, Agricultural, and Household segments — built to ISO 9001 standards.
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsExpanded(true)}
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white rounded-none px-10 py-6 text-lg font-bold shadow-lg"
              >
                Browse All Products
              </Button>
            </div>

            {/* Right: 2x2 Cycling Preview Grid */}
            <div className="grid grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {previewIndices.map((idx, position) => {
                  const product = products[idx];
                  if (!product) return null;
                  return (
                    <motion.div
                      key={`${product.id}-${position}`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => setLocation(`/product/${product.id}`)}
                      className={`aspect-square ${product.colorAccent} cursor-pointer relative group overflow-hidden shadow-md flex flex-col justify-end p-4 md:p-6`}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-none backdrop-blur-sm text-[10px] uppercase">
                          {product.category}
                        </Badge>
                        <h3 className="text-white font-bold text-lg md:text-xl leading-tight line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
            {/* Filters and View Toggle */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-white p-4 shadow-sm border border-slate-200">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`rounded-none ${activeCategory === cat ? "bg-primary text-white hover:bg-primary/90" : "bg-transparent text-slate-600 hover:text-slate-900 border-slate-300"}`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2 border border-slate-200 p-1">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`rounded-none h-8 w-8 ${viewMode === "grid" ? "bg-slate-100 text-primary" : "text-slate-400"}`}
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`rounded-none h-8 w-8 ${viewMode === "list" ? "bg-slate-100 text-primary" : "text-slate-400"}`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Expanded Content View */}
            {viewMode === "grid" ? (
              <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <AnimatePresence>
                  {filteredProducts.map((product) => {
                    const initials = product.name.substring(0, 2).toUpperCase();
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        key={product.id}
                        className="bg-white border border-slate-200 group flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center relative overflow-hidden">
                          <span className="text-5xl font-black text-slate-300 group-hover:scale-110 transition-transform duration-500">
                            {initials}
                          </span>
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                          <Badge variant="secondary" className="w-fit mb-3 text-[10px] uppercase tracking-wider bg-slate-100 text-slate-600">{product.category}</Badge>
                          <h3 className="font-bold text-slate-900 mb-4 text-lg line-clamp-2 flex-1">{product.name}</h3>
                          <Button 
                            variant="outline" 
                            className="w-full rounded-none border-primary text-primary hover:bg-primary hover:text-white transition-colors mt-auto"
                            onClick={() => setLocation(`/product/${product.id}`)}
                          >
                            View Details
                          </Button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="bg-white border border-slate-200 shadow-sm rounded-sm overflow-hidden">
                {filteredProducts.map((product, idx) => (
                  <div 
                    key={product.id} 
                    className={`flex items-center justify-between p-4 md:p-6 group cursor-pointer hover:bg-primary/5 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    onClick={() => setLocation(`/product/${product.id}`)}
                  >
                    <div className="flex items-center gap-4 md:gap-8 flex-1">
                      <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors text-base md:text-lg flex-1">
                        {product.name}
                      </h3>
                      <Badge variant="outline" className="hidden sm:inline-flex bg-white text-slate-500 border-slate-200">
                        {product.category}
                      </Badge>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors ml-4" />
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-center pt-8">
              <Button 
                variant="ghost" 
                onClick={() => setIsExpanded(false)}
                className="text-slate-500 hover:text-slate-900 font-semibold uppercase tracking-wider"
              >
                Collapse View
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
