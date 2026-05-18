import { Phone, MessageCircle, FileText, Mail } from "lucide-react";

export function MobileStickyNav() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-1 border-t border-white/30"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <a
        href="tel:+919831022610"
        className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-slate-600 hover:text-primary transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span className="text-[9px] font-semibold tracking-wide">Call</span>
      </a>
      <a
        href="https://wa.me/919831022610"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-[#25D366] hover:text-[#128C7E] transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-[9px] font-semibold tracking-wide">WhatsApp</span>
      </a>
      <a
        href="mailto:ajay@dagaplastic.in"
        className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-slate-600 hover:text-primary transition-colors"
      >
        <Mail className="w-4 h-4" />
        <span className="text-[9px] font-semibold tracking-wide">Email</span>
      </a>
      <a
        href="#inquiry"
        className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg text-primary hover:text-primary/80 transition-colors"
      >
        <FileText className="w-4 h-4" />
        <span className="text-[9px] font-semibold tracking-wide">Quote</span>
      </a>
    </div>
  );
}
