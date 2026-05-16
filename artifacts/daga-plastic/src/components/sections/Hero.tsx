import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileDown, ArrowRight } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "55+" },
  { label: "Products", value: "21+" },
  { label: "Clients Served", value: "16+" },
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
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Industrial machinery image */}
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
        {/* Gradient overlay: readable left, image shows on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c16] via-[#080c16]/70 to-transparent" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Red accent line right */}
        <div className="absolute top-0 right-[18%] bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center pt-20 md:pt-24 pb-6 md:pb-8">
        <div className="container mx-auto px-4 md:px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/8 backdrop-blur-md border border-white/15 rounded-full mb-5 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-white/80">
                ISO 9001 Certified
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-4 md:mb-6">
              Engineering Precision
              <br />
              in{" "}
              <span className="text-primary">Plastic</span>
              <br />
              <span className="text-primary">Manufacturing</span>
              <br />
              Since 1969
            </h1>

            {/* Quote — hidden on smallest screens to reduce clutter */}
            <div className="hidden sm:block text-white/50 italic text-sm border-l-2 border-primary/60 pl-3 mb-5 md:mb-6 max-w-lg leading-relaxed">
              "Quality Manufacturing Is A System, Not Just A Slogan. We Serve With Best Quality And Service. We Are Committed To Customer Satisfaction."
            </div>

            <p className="text-sm md:text-base lg:text-lg text-white/65 mb-7 md:mb-10 max-w-xl font-light leading-relaxed">
              ISO 9001 Certified. Trusted partner to India's energy and
              industrial leaders — delivering uncompromising quality at scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={handleDownloadCatalog}
                className="bg-primary hover:bg-primary/85 text-white rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold transition-all duration-300"
                data-testid="button-download-catalog"
              >
                <FileDown className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Download Catalog
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/25 text-white rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold group transition-all duration-300 hover:border-white/50"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
                data-testid="button-request-quote"
              >
                <a href="#inquiry">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative z-10 border-t border-white/10"
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(16px)" }}
      >
        <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 py-0">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center justify-center py-4 md:py-6 px-3 md:px-4 relative group cursor-default"
              >
                {i < stats.length - 1 && (
                  <div className="absolute right-0 top-4 bottom-4 w-[1px] bg-white/10 hidden md:block" />
                )}
                {i < 2 && (
                  <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-white/10 md:hidden" />
                )}
                <div className="text-xl md:text-3xl font-black text-white mb-0.5 group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-[9px] md:text-[11px] text-white/45 uppercase tracking-[0.12em] font-medium text-center">
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
