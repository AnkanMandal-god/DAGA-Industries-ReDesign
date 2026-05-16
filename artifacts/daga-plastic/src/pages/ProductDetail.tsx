import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyNav } from "@/components/layout/MobileStickyNav";
import { DesktopFloatingActions } from "@/components/layout/DesktopFloatingActions";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useParams, Link, useLocation } from "wouter";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const product = products.find(p => p.id === params.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Button asChild>
          <Link href="/#products">Return to Products</Link>
        </Button>
      </div>
    );
  }

  const initials = product.name.substring(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <button
            onClick={() => {
              sessionStorage.setItem("expandProducts", "1");
              setLocation("/");
              setTimeout(() => {
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 80);
            }}
            className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </button>

          {/* Hero Area */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="uppercase tracking-widest text-xs">{product.category}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              {product.name}
            </h1>
            <div className="w-24 h-1.5 bg-primary"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold border-b border-slate-200 pb-2 mb-4">Overview</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-slate-200 pb-2 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-slate-200 pb-2 mb-4">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((mat, idx) => (
                    <span key={idx} className="bg-slate-200 text-slate-800 px-3 py-1 text-sm font-medium rounded-full">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="aspect-[4/3] bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden relative shadow-lg">
                <span className="text-7xl md:text-9xl font-black text-white/10 tracking-tighter">
                  {initials}
                </span>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
              </div>

              <div>
                <h3 className="text-xl font-bold border-b border-slate-200 pb-2 mb-4">Available Sizes</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size, idx) => (
                    <div key={idx} className="px-5 py-2.5 bg-white border-2 border-slate-200 rounded-full font-bold text-slate-800 shadow-sm">
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-slate-900 rounded-2xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Interested in this product?</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">Get in touch with our sales team to discuss custom requirements, volume discounts, and delivery timelines.</p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base font-semibold group">
                <Link href="/#inquiry">
                  Request a Quote
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileStickyNav />
      <DesktopFloatingActions />
    </div>
  );
}
