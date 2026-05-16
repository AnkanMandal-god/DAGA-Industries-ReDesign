import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Quote, Star } from "lucide-react";

const allClients = [
  { name: "Indian Oil Corporation Ltd.", abbr: "IOC" },
  { name: "Hindustan Petroleum Corporation Ltd.", abbr: "HPCL" },
  { name: "Bharat Petroleum Corp Ltd.", abbr: "BPCL" },
  { name: "Hindustan Colas Pvt Ltd.", abbr: "HCOL" },
  { name: "Exide Industries Ltd.", abbr: "EXIDE" },
  { name: "BSNL", abbr: "BSNL" },
  { name: "Nalco India Ltd.", abbr: "NALCO" },
  { name: "Berger Paints India Ltd.", abbr: "BERGER" },
  { name: "Mother Dairy, Calcutta", abbr: "MD" },
  { name: "Bhagirathi Dairy Coop. MILK Producers Union Ltd.", abbr: "BDCM" },
  { name: "The Freyssinet Pre Co.", abbr: "FPC" },
  { name: "Quaker Chemicals India Ltd.", abbr: "QCL" },
  { name: "Hindustan Oil Industries", abbr: "HOI" },
  { name: "Balmer Lawrie", abbr: "BL" },
  { name: "Hindustan National Glass", abbr: "HNG" },
  { name: "Agarwal Packers & Movers", abbr: "APM" },
];

const testimonials = [
  {
    quote: "Daga Plastic's 210L barrels have been integral to our lubricant packaging operations for over a decade. Consistent quality, zero failures.",
    author: "Procurement Manager",
    company: "Indian Oil Corporation Ltd.",
    abbr: "IOC",
    rating: 5,
  },
  {
    quote: "Their ability to deliver custom short-run batches without compromising on specifications is rare in this industry. Truly a partner, not just a supplier.",
    author: "Supply Chain Lead",
    company: "Berger Paints India Ltd.",
    abbr: "BERGER",
    rating: 5,
  },
  {
    quote: "ISO-certified products, Pan-India reach, and a team that actually picks up the phone. Daga is our first call for industrial packaging.",
    author: "Operations Director",
    company: "Bharat Petroleum Corp Ltd.",
    abbr: "BPCL",
    rating: 5,
  },
];

export function Clients() {
  const [showAll, setShowAll] = useState(false);

  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 5;
      if (window.innerWidth >= 768) return 4;
      return 4;
    }
    return 5;
  };

  const initialCount = getVisibleCount();
  const visibleClients = showAll ? allClients : allClients.slice(0, initialCount);

  return (
    <section id="clients" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle diagonal rule */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(0,0,0,0.8) 60px, rgba(0,0,0,0.8) 61px)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Partners</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Trusted By India's Industrial Leaders
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-slate-500 text-base leading-relaxed">
            Supplying packaging for acid, chemicals, solvents, sauces, pickles, adhesives, water treatment, lubricants, edible oil, phenyl, resins, insecticides, pesticides, ink, and more.
          </p>
        </motion.div>

        {/* Client logo grid */}
        <div className="mb-4">
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            <AnimatePresence>
              {visibleClients.map((client, i) => (
                <motion.div
                  key={client.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group aspect-video bg-slate-50 border border-slate-200 hover:border-primary/50 hover:bg-white flex flex-col items-center justify-center p-5 transition-all duration-300 rounded-lg hover:shadow-md"
                >
                  <span className="text-2xl font-black text-slate-300 group-hover:text-primary transition-colors duration-300 tracking-tighter leading-none mb-2">
                    {client.abbr}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 group-hover:text-slate-600 text-center transition-colors duration-300 leading-tight">
                    {client.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Show more / less */}
        {allClients.length > initialCount && (
          <div className="flex justify-center mt-6 mb-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 hover:border-primary text-slate-500 hover:text-primary text-sm font-semibold transition-all duration-300 bg-white hover:bg-primary/5"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show All {allClients.length} Clients <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}

        {/* Testimonials */}
        <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">What Our Partners Say</h3>
            <div className="w-12 h-1 bg-primary mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white p-8 border border-slate-200 shadow-sm flex flex-col h-full relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-slate-600 italic leading-relaxed flex-1 mb-8 relative z-10">"{test.quote}"</p>
                <div className="border-t border-dashed border-slate-200 pt-4">
                  <p className="font-bold text-slate-900 text-sm">{test.company}</p>
                  <p className="text-muted-foreground text-xs">{test.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
