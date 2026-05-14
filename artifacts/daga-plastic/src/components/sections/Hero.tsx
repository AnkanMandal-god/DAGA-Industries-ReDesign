import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "@assets/image_1778754342012.png";
import { FileDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Industrial Plastic Manufacturing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs md:text-sm font-medium tracking-wide uppercase">ISO 9001 Certified</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Engineering Precision in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Plastic Manufacturing</span> Since 1969
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light">
              Trusted Partner to India's Energy and Industrial Leaders. We deliver uncompromising quality and scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 py-6 text-lg font-medium group">
                <FileDown className="mr-2 h-5 w-5" />
                Download Catalog
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg font-medium group">
                Request Bulk Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-md border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
            {[
              { label: "Years Experience", value: "55+" },
              { label: "Products", value: "21+" },
              { label: "Clients Globally", value: "500+" },
              { label: "Quality Standard", value: "ISO 9001" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
                className="px-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
