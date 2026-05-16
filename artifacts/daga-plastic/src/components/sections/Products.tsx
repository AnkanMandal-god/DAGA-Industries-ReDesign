import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, List, ArrowRight, Package2, ChevronDown, ChevronUp } from "lucide-react";
import { products, Category } from "@/data/products";
import { useLocation } from "wouter";

const categories: (Category | "All")[] = [
  "All",
  "Containers & Drums",
  "Bottles & Packaging",
  "Caps & Closures",
  "Agricultural",
  "Moulded Components",
];

const categoryColors: Record<string, string> = {
  "Containers & Drums": "bg-slate-700",
  "Bottles & Packaging": "bg-blue-800",
  "Caps & Closures": "bg-red-900",
  "Agricultural": "bg-emerald-800",
  "Moulded Components": "bg-amber-800",
};

export function Products() {
  const [, setLocation] = useLocation();
  const [isExpanded, setIsExpanded] = useState(() => {
    const flag = sessionStorage.getItem("expandProducts");
    if (flag) {
      sessionStorage.removeItem("expandProducts");
      return true;
    }
    return false;
  });
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [previewIndices, setPreviewIndices] = useState<number[]>([0, 1, 2, 3]);

  useEffect(() => {
    if (isExpanded) return;
    const randomize = () => {
      const picked: number[] = [];
      while (picked.length < 4) {
        const r = Math.floor(Math.random() * products.length);
        if (!picked.includes(r)) picked.push(r);
      }
      setPreviewIndices(picked);
    };
    const interval = setInterval(randomize, 4000);
    return () => clearInterval(interval);
  }, [isExpanded]);

  const filteredProducts = products.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section
      id="products"
      className="py-24 bg-[#0a0e1a] text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #D32F2F 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">
            Manufacturing Portfolio
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Package2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
                  OUR PRODUCTS
                </h2>
              </div>
              <div className="w-16 h-1 bg-primary rounded-full" />
            </div>
            <p className="text-white/35 text-xs font-medium tracking-widest uppercase pb-1">
              21 Products · 5 Categories
            </p>

          </div>
        </motion.div>

        {/* Collapsed preview */}
        {!isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 font-light">
                Precision-engineered plastic solutions across Industrial, Food Grade,
                Agricultural, and Household segments — built to ISO 9001 standards.
              </p>
              <button
                onClick={() => setIsExpanded(true)}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/85 text-white rounded-full px-8 py-3.5 text-base font-bold shadow-lg shadow-primary/20 transition-all duration-300 group"
              >
                Browse All Products
                <ChevronDown className="h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* 2×2 cycling grid */}
            <div className="grid grid-cols-2 gap-3">
              <AnimatePresence mode="popLayout">
                {previewIndices.map((idx, position) => {
                  const product = products[idx];
                  if (!product) return null;
                  const colorClass = categoryColors[product.category] || "bg-slate-700";
                  return (
                    <motion.div
                      key={`${product.id}-${position}`}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => setLocation(`/product/${product.id}`)}
                      className={`aspect-square ${colorClass} cursor-pointer relative group overflow-hidden rounded-xl`}
                    >
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/55 mb-1">
                          {product.category}
                        </span>
                        <h3 className="text-white font-bold text-sm md:text-base leading-tight line-clamp-2">
                          {product.name}
                        </h3>
                      </div>
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-5"
          >
            {/* Filter row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-xl">
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat as Category | "All")}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-primary text-white shadow-md shadow-primary/30"
                        : "text-white/50 hover:text-white border border-white/12 hover:border-white/35"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 shrink-0">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    viewMode === "grid" ? "bg-primary text-white" : "text-white/35 hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    viewMode === "list" ? "bg-primary text-white" : "text-white/35 hover:text-white"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Grid view */}
            {viewMode === "grid" ? (
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
              >
                <AnimatePresence>
                  {filteredProducts.map((product) => {
                    const colorClass = categoryColors[product.category] || "bg-slate-700";
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={product.id}
                        className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 hover:bg-white/8 transition-all duration-300"
                      >
                        <div
                          className={`aspect-[4/3] ${colorClass} flex items-center justify-center relative overflow-hidden`}
                        >
                          <span className="text-4xl font-black text-white/20 group-hover:scale-110 transition-transform duration-500 select-none">
                            {product.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div className="p-4">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-primary/75 block mb-1">
                            {product.category}
                          </span>
                          <h3 className="font-bold text-white text-sm mb-3 leading-snug line-clamp-2">
                            {product.name}
                          </h3>
                          <button
                            onClick={() => setLocation(`/product/${product.id}`)}
                            className="w-full py-2 rounded-full border border-primary/35 text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                          >
                            View Details
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {filteredProducts.map((product, idx) => (
                  <div
                    key={product.id}
                    onClick={() => setLocation(`/product/${product.id}`)}
                    className={`flex items-center justify-between px-5 py-4 group cursor-pointer hover:bg-primary/10 transition-colors ${
                      idx !== 0 ? "border-t border-white/8" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <h3 className="font-semibold text-white/80 group-hover:text-white transition-colors text-sm truncate">
                        {product.name}
                      </h3>
                      <Badge className="hidden sm:inline-flex bg-white/8 text-white/45 border-white/10 text-[10px] shrink-0 rounded-full">
                        {product.category}
                      </Badge>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors ml-4 shrink-0" />
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-center pt-4">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 text-white/35 hover:text-white rounded-full px-8 py-2.5 font-semibold uppercase tracking-wider text-sm group transition-colors"
              >
                <ChevronUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                Collapse
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
