import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Clients() {
  const clients = [
    { name: "Indian Oil", textLogo: "IndianOil", abbr: "IOC" },
    { name: "Hindustan Petroleum", textLogo: "HP", abbr: "HP" },
    { name: "Bharat Petroleum", textLogo: "BPCL", abbr: "BPCL" },
    { name: "BSNL", textLogo: "BSNL", abbr: "BSNL" },
    { name: "Berger Paints", textLogo: "Berger", abbr: "BP" },
  ];

  const testimonials = [
    {
      quote: "Daga Plastic's 210L barrels have been integral to our lubricant packaging operations for over a decade. Consistent quality, zero failures.",
      author: "Procurement Manager",
      company: "Indian Oil Corporation"
    },
    {
      quote: "Their ability to deliver custom short-run batches without compromising on specifications is rare in this industry. Truly a partner, not just a supplier.",
      author: "Supply Chain Lead",
      company: "Berger Paints"
    },
    {
      quote: "ISO-certified products, Pan-India reach, and a team that actually picks up the phone. Daga is our first call for industrial packaging.",
      author: "Operations Director",
      company: "BSNL"
    }
  ];

  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(0,0,0,0.5) 60px, rgba(0,0,0,0.5) 61px)' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted By India's Industrial Leaders</h2>
          <div className="w-16 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            We supply packaging solutions for acid, chemicals, solvents, sauces, pickles, adhesives, water treatment, lubricating, hair oil, edible oil, phenyl, resins, insecticides, pesticides, ink, and more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mb-24">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group aspect-video bg-white shadow-sm border border-border flex flex-col items-center justify-center p-6 hover:border-primary/50 transition-colors"
            >
              <div className="grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center gap-3">
                <span className="text-3xl font-black tracking-tighter text-slate-700 group-hover:text-primary">{client.textLogo}</span>
                <span className="text-xs font-semibold text-center text-muted-foreground">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Sub-section */}
        <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">What Our Partners Say</h3>
            <div className="w-12 h-1 bg-primary mx-auto mt-4"></div>
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
