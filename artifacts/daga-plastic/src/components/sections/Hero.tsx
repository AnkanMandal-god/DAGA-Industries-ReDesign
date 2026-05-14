import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileDown, ArrowRight } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "55+" },
  { label: "Products", value: "21+" },
  { label: "Clients Served", value: "500+" },
  { label: "Quality Standard", value: "ISO 9001" },
];

export function Hero() {
  const handleDownloadCatalog = () => {
    const link = document.createElement("a");
    link.href = "/product-catalog.pdf";
    link.download = "Daga-Product-Catalog.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col">
      {/* Industrial CSS background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#080c16]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute top-0 right-[18%] bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        <div className="absolute top-0 right-[36%] bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #D32F2F 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-8">
        <div className="container mx-auto px-4 md:px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/8 backdrop-blur-md border border-white/15 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/80">ISO 9001 Certified</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
              Engineering Precision{" "}
              <br className="hidden sm:block" />
              in <span className="text-primary">Plastic Manufacturing</span>
              <br className="hidden sm:block" />
              Since 1969
            </h1>

            <p className="text-base md:text-lg text-white/60 mb-6 max-w-xl font-light leading-relaxed">
              ISO 9001 Certified. Trusted partner to India's energy and industrial leaders — delivering uncompromising quality at scale.
            </p>

            <div className="text-white/45 italic text-sm border-l-2 border-primary/60 pl-3 mb-10 max-w-lg leading-relaxed">
              "Quality Manufacturing Is A System, Not Just A Slogan. We Serve With Best Quality And Service. We Are Committed To Customer Satisfaction."
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={handleDownloadCatalog}
                className="bg-primary hover:bg-primary/85 text-white rounded-full px-8 py-6 text-base font-semibold transition-all duration-300"
                data-testid="button-download-catalog"
              >
                <FileDown className="mr-2 h-5 w-5" />
                Download Product Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/60 rounded-full px-8 py-6 text-base font-semibold group transition-all duration-300"
                data-testid="button-request-quote"
              >
                <a href="#inquiry">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10" style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(16px)" }}>
        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 py-0">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center justify-center py-6 px-4 relative group cursor-default"
              >
                {i < stats.length - 1 && (
                  <div className="absolute right-0 top-4 bottom-4 w-[1px] bg-white/10 hidden md:block" />
                )}
                {i < 2 && (
                  <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-white/10 md:hidden" />
                )}
                <div className="text-2xl md:text-3xl font-black text-white mb-1 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-[11px] text-white/45 uppercase tracking-[0.15em] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
