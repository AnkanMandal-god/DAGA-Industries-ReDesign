import { motion } from "framer-motion";
import { Building2, Cpu, Settings2, TrendingUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function About() {
  const pillars = [
    {
      icon: Building2,
      title: "COMPANY PROFILE",
      points: ["Established 1969", "55+ Years Excellence", "Strategic Kolkata Hub", "Pan-India Supply Network"]
    },
    {
      icon: Cpu,
      title: "ADVANCED TECH",
      points: ["Fully Automated Lines", "Precision-Controlled Equipment", "Computerized Blow Moulding", "State-of-the-art Injection Moulding"]
    },
    {
      icon: Settings2,
      title: "CUSTOM SOLUTIONS",
      points: ["Irregular Shape Specialization", "Precision Needle-Blow Tech", "Cost-Effective Short Runs", "Tailored Industrial Design"]
    },
    {
      icon: TrendingUp,
      title: "OPERATIONAL EDGE",
      points: ["In-house Recycling Facility", "Optimized Procurement Systems", "Low Operational Overheads", "Project Inception-to-Marketplace"]
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0d1117] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Industrial Profile
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 font-light">
              Since 1969, Daga Plastic Industries has combined technical expertise with automated manufacturing to deliver high-precision, ISO-certified packaging solutions for India's industrial leaders. We provide total, scalable solutions — from custom design to nationwide distribution — across the petrochemical, agrochemical, food-processing, and consumer segments. Headquartered in Kolkata, we have grown from a single facility into a high-turnover industrial powerhouse.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none px-8 py-6 text-base uppercase tracking-wider font-bold">
                  Read More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-white text-slate-900 border-none rounded-sm">
                <DialogHeader className="mb-6 border-b pb-4">
                  <DialogTitle className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">
                    The Daga Legacy: Engineering the Future of Plastics
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4">
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">Our Heritage & Evolution</h4>
                    <p className="text-slate-600 leading-relaxed">Founded in 1969 in Kolkata, we have evolved over 55+ years into a high-turnover industrial powerhouse. We deliver precision-moulded solutions that define the "Daga Standard" of excellence in Indian manufacturing.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">II. Technical Precision</h4>
                    <p className="text-slate-600 leading-relaxed">Our facility boasts fully automatic computerized lines, precision-controlled equipment, needle-blow and injection moulding techniques. We engineer high-ESCR containers specifically designed for the most aggressive chemical environments.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">III. The Total Solution Philosophy</h4>
                    <p className="text-slate-600 leading-relaxed">We don't just manufacture; we partner. Offering custom design capabilities, short-run flexibility, and a reliable Pan-India marketplace delivery network to support our clients' dynamic needs.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2 uppercase tracking-wide">IV. Sustainable Innovation</h4>
                    <p className="text-slate-600 leading-relaxed">Our commitment to the future includes an in-house recycling facility and optimized procurement systems, allowing us to maintain sustainability while passing significant cost savings directly to our clients.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-16 rounded-lg overflow-hidden border border-white/10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 border-b sm:border-b-0 sm:border-r border-white/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(211,47,47,0.15)] group relative"
            >
              <pillar.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-black tracking-wider mb-6">{pillar.title}</h3>
              <ul className="space-y-3">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
