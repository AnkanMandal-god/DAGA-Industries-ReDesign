import { ShieldCheck, Award, Wrench, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function Quality() {
  const pillars = [
    { icon: Award, title: "International Standards" },
    { icon: Clock, title: "55+ Years Experience" },
    { icon: Wrench, title: "Precision Engineering" },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="w-12 h-12 text-primary shrink-0" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Quality Assurance</h2>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed mb-12 border-l-2 border-primary pl-6">Backed by a 55-year legacy of engineering precision, our automated manufacturing facilities deliver high-performance plastic containers, jerry cans, and industrial drums. Every batch undergoes rigorous quality assurance protocols to ensure absolute structural integrity, chemical resistance, and strict compliance with global B2B and international regulatory standards.</p>

            {/* Evenly spaced icon pillars */}
            <div className="grid grid-cols-3 gap-4">
              {pillars.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-sm leading-snug">{item.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[12px] border-primary/20 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-2 border-primary border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="text-center bg-slate-800 w-48 h-48 md:w-60 md:h-60 rounded-full flex flex-col items-center justify-center shadow-2xl">
                <ShieldCheck className="w-16 h-16 text-primary mb-2" />
                <span className="text-2xl font-black tracking-widest">ISO</span>
                <span className="text-sm text-slate-400 font-medium">9001:2008</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
