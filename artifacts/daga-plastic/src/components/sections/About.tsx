import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Factory, Truck } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Welcome to Daga Plastic Industries
            </h2>
            <div className="w-20 h-1.5 bg-primary mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              For over five decades, DAGA PLASTIC INDUSTRIES has led the plastics industry offering quality plastics products and solutions for a wide range of industries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We manufacture various types of DAGA brand plastic products catering to lubricants, chemicals, food processing, agriculture, water treatment, paints, building and construction, industrial, electrical, textile and consumer segments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "ISO 9001 Certified", desc: "Global quality standards" },
              { icon: Factory, title: "Est. 1969", desc: "Over 5 decades of legacy" },
              { icon: CheckCircle2, title: "21+ Products", desc: "Diverse manufacturing portfolio" },
              { icon: Truck, title: "Pan-India Supply", desc: "Reliable logistical network" }
            ].map((item, i) => (
              <div key={i} className="bg-muted/50 p-6 rounded-none border-l-2 border-primary hover:bg-muted transition-colors">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
