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
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col"
    >
      {/* Industrial CSS background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep dark base */}
        <div className="absolute inset-0 bg-[#080c16]" />

        {/* Subtle perspective grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Red vertical accent bar — right side */}
        <div className="absolute top-0 right-[18%] bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        <div className="absolute top-0 right-[36%] bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />

        {/* Red glow — top-left origin */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #D32F2F 0%, transparent 70%)" }}
        />

        {/* Subtle bright top-edge horizon line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Bottom dark vignette for stats readability */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Main content — fills remaining space, centers vertically */}
      <div className="relative z-10 flex-1 flex items-center pt-24 pb-8">
        <div className="container mx-auto px-4 md:px-6 text-white">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* ISO badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/8 backdrop-blur-md border border-white/15 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
                  ISO 9001 Certified
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
                Engineering Precision{" "}
                <br className="hidden sm:block" />
                in{" "}
                <span className="text-primary">Plastic Manufacturing</span>
                <br className="hidden sm:block" />
                Since 1969
              </h1>

              {/* Sub-headline */}
              <p className="text-base md:text-lg text-white/60 mb-10 max-w-xl font-light leading-relaxed">
                ISO 9001 Certified. Trusted partner to India's energy and
                industrial leaders — delivering uncompromising quality at scale.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={handleDownloadCatalog}
                  className="bg-primary hover:bg-primary/85 text-white rounded-none px-8 py-6 text-base font-semibold"
                  data-testid="button-download-catalog"
                >
                  <FileDown className="mr-2 h-5 w-5" />
                  Download Product Catalog
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 text-white bg-white/5 hover:bg-white/15 hover:border-white/60 rounded-none px-8 py-6 text-base font-semibold group"
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
      </div>

      {/* Stats bar — sits at the bottom, part of normal flow */}
      <div className="relative z-10 bg-black/50 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="px-4 py-3 border-r border-white/10 last:border-r-0 even:border-r-0 md:even:border-r md:last:border-r-0"
              >
                <div className="text-xl md:text-2xl font-bold text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[11px] text-white/50 uppercase tracking-wider">
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
