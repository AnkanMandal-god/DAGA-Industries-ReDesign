import { motion } from "framer-motion";
import { Building2, Cpu, Settings2, TrendingUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import dagaLogo from "@assets/image_1778790689221.png";
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
      points: ["Established 1969", "55+ Years Excellence", "Strategic Kolkata Hub", "Pan-India Supply Network"],
    },
    {
      icon: Cpu,
      title: "ADVANCED TECH",
      points: ["Fully Automated Lines", "Precision-Controlled Equipment", "Computerized Blow Moulding", "State-of-the-art Injection Moulding"],
    },
    {
      icon: Settings2,
      title: "CUSTOM SOLUTIONS",
      points: ["Irregular Shape Specialization", "Precision Needle-Blow Tech", "Cost-Effective Short Runs", "Tailored Industrial Design"],
    },
    {
      icon: TrendingUp,
      title: "OPERATIONAL EDGE",
      points: ["In-house Recycling Facility", "Optimized Procurement Systems", "Low Operational Overheads", "Project Inception-to-Marketplace"],
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0d1117] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Top row: description left + logo right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12 items-start max-w-5xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Industrial Profile
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              About Us
            </h2>
            <p className="text-base text-white/65 leading-relaxed mb-8 font-light">
              Since 1969, Daga Plastic Industries has combined technical expertise with automated manufacturing to deliver high-precision, ISO-certified packaging solutions for India's industrial leaders. We provide total, scalable solutions — from custom design to nationwide distribution — across the petrochemical, agrochemical, food-processing, and consumer segments. Headquartered in Kolkata, we have grown from a single facility into a high-turnover industrial powerhouse.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6 text-base uppercase tracking-wider font-bold transition-all duration-300"
                >
                  Read More
                </Button>
              </DialogTrigger>
              {/* Pure dissolve — override slide/zoom with zero-offset classes */}
              <DialogContent
                className="max-w-2xl border border-white/20 rounded-xl shadow-2xl overflow-hidden
                  data-[state=open]:slide-in-from-left-0
                  data-[state=open]:slide-in-from-top-0
                  data-[state=closed]:slide-out-to-left-0
                  data-[state=closed]:slide-out-to-top-0
                  data-[state=open]:zoom-in-100
                  data-[state=closed]:zoom-out-100
                  duration-300"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                }}
              >
                <DialogHeader className="mb-6 border-b border-white/20 pb-4">
                  <DialogTitle className="text-2xl md:text-3xl font-black tracking-tight text-white">
                    The Daga Legacy: Engineering the Future of Plastics
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4">
                  <div>
                    <h4 className="text-base font-bold text-primary mb-2 uppercase tracking-wide">Our Heritage & Evolution</h4>
                    <p className="text-white/75 leading-relaxed text-sm">Founded in 1969 in Kolkata, we have evolved over 55+ years into a high-turnover industrial powerhouse. We deliver precision-moulded solutions that define the "Daga Standard" of excellence in Indian manufacturing.</p>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-primary mb-2 uppercase tracking-wide">Technical Precision</h4>
                    <p className="text-white/75 leading-relaxed text-sm">Our facility boasts fully automatic computerized lines, precision-controlled equipment, needle-blow and injection moulding techniques. We engineer high-ESCR containers specifically designed for the most aggressive chemical environments.</p>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-primary mb-2 uppercase tracking-wide">The Total Solution Philosophy</h4>
                    <p className="text-white/75 leading-relaxed text-sm">We don't just manufacture; we partner. Offering custom design capabilities, short-run flexibility, and a reliable Pan-India marketplace delivery network to support our clients' dynamic needs.</p>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-primary mb-2 uppercase tracking-wide">Sustainable Innovation</h4>
                    <p className="text-white/75 leading-relaxed text-sm">Our commitment to the future includes an in-house recycling facility and optimized procurement systems, allowing us to maintain sustainability while passing significant cost savings directly to our clients.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Logo + company name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center justify-start pt-8 lg:pt-16 lg:ml-[150px]"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-[0_0_40px_rgba(211,47,47,0.15)] mb-4">
              <img src={dagaLogo} alt="Daga Plastic Industries" className="w-full h-full object-contain bg-white p-2" />
            </div>
            <p className="text-white font-black tracking-widest text-center text-sm uppercase">Daga Plastic</p>
            <p className="text-white/40 text-xs tracking-widest text-center uppercase mt-0.5">Industries</p>
            <div className="mt-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Est. 1969</span>
            </div>
          </motion.div>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-xl overflow-hidden border border-white/10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 border-b lg:border-b-0 border-r-0 lg:border-r border-white/10 last:border-r-0 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(211,47,47,0.12)] group"
            >
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <pillar.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xs font-black tracking-widest mb-5 text-white/85">{pillar.title}</h3>
              <ul className="space-y-2.5">
                {pillar.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/60">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
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
