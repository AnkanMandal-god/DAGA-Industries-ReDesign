import { motion } from "framer-motion";

export function Clients() {
  const clients = [
    { name: "Indian Oil", textLogo: "IndianOil", abbr: "IOC" },
    { name: "Hindustan Petroleum", textLogo: "HP", abbr: "HP" },
    { name: "Bharat Petroleum", textLogo: "BPCL", abbr: "BPCL" },
    { name: "BSNL", textLogo: "BSNL", abbr: "BSNL" },
    { name: "Berger Paints", textLogo: "Berger", abbr: "BP" },
  ];

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted By India's Industrial Leaders</h2>
          <div className="w-16 h-1.5 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            We supply packaging solutions for acid, chemicals, solvents, sauces, pickles, adhesives, water treatment, lubricating, hair oil, edible oil, phenyl, resins, insecticides, pesticides, ink, and more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group aspect-video bg-muted/30 border border-border flex flex-col items-center justify-center p-6 hover:border-primary/50 transition-colors"
            >
              <div className="grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100 transition-all duration-300 ease-in-out flex flex-col items-center gap-3">
                {client.icon ? (
                  <client.icon className="w-16 h-16 text-slate-700 group-hover:text-primary" />
                ) : (
                  <span className="text-3xl font-black tracking-tighter text-slate-700 group-hover:text-primary">{client.textLogo}</span>
                )}
                <span className="text-xs font-semibold text-center text-muted-foreground">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
