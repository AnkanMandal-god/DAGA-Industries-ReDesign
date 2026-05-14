import { Triangle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t-[6px] border-primary pb-24 md:pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Triangle className="w-8 h-8 text-primary fill-primary" />
              <span className="text-2xl font-black tracking-tight text-white">
                DAGA
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
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>+91 98310 22610</li>
              <li>+91 98302 74225</li>
              <li>ajay@dagaplastic.in</li>
              <li>Info@dagaplastic.in</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} DAGA PLASTIC INDUSTRIES. All rights reserved.</p>
          <p>Speculative redesign.</p>
        </div>
      </div>
    </footer>
  );
}
