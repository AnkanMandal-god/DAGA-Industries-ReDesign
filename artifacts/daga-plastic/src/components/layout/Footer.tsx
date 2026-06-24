import dagaLogo from "@assets/image_1778790689221.png";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t-[6px] border-primary pb-24 md:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white ring-2 ring-primary/40 shrink-0">
                <img src={dagaLogo} alt="Raga Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                RAGA
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Engineering Precision in Plastic Manufacturing Since 1969. India's trusted partner for bulk industrial packaging solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Our Products</a></li>
              <li><a href="#clients" className="hover:text-primary transition-colors">Clientele</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-black mb-6 uppercase tracking-wider text-sm">Quick Contact:</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-xs mb-1">Contact Person</p>
                <p className="text-slate-300">Mr. Vijay Daga (Chairman)</p>
                <p className="text-slate-300">Mr. Ajay Daga (Managing Director)</p>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-xs mb-1">Mobile</p>
                <p className="text-slate-300">0 98310 22610 / 0 98302 74225</p>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-xs mb-1">E-Mail</p>
                <p className="text-slate-300">ajay@dagaplastic.in / Info@dagaplastic.in /</p>
                <p className="text-slate-300">ajdaga00@gmail.com</p>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-xs mb-1">Website</p>
                <p className="text-slate-300">www.dagaplastic.in</p>
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-wider text-xs mb-1">Powered By:</p>
                <p className="text-slate-300">www.calcuttayellowpages.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} RAGA PLASTIC INDUSTRIES. All rights reserved.</p>
          <p>Speculative redesign.</p>
        </div>
      </div>
    </footer>
  );
}
