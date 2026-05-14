import { ShieldAlert, Award, Wrench, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function Quality() {
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
              <ShieldAlert className="w-12 h-12 text-primary" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Quality Assurance</h2>
                <p className="text-primary font-medium tracking-widest uppercase text-sm mt-1">ISO 9001:2008 Certified</p>
              </div>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-10 border-l-2 border-primary pl-6">
              Leveraging our long industry standing & in-depth product knowledge we manufacture superior quality plastic containers, plastic jerry cans, plastic drums that meet international quality standards.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Award, title: "International Standards" },
                { icon: Clock, title: "55+ Years Experience" },
                { icon: Wrench, title: "Precision Engineering" }
              ].map((item, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto sm:mx-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
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
                <ShieldAlert className="w-16 h-16 text-primary mb-2" />
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
