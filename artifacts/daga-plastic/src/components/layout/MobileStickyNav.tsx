import { Phone, MessageCircle, FileText } from "lucide-react";

export function MobileStickyNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex justify-around items-center p-2 pb-safe">
      <a href="tel:+919831022610" className="flex flex-col items-center gap-1 p-2 text-foreground/80 hover:text-primary transition-colors">
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-medium">Call</span>
      </a>
      <a href="https://wa.me/919831022610" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 p-2 text-[#25D366] hover:text-[#128C7E] transition-colors">
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-medium">WhatsApp</span>
      </a>
      <a href="#inquiry" className="flex flex-col items-center gap-1 p-2 text-primary hover:text-primary/80 transition-colors">
        <FileText className="w-5 h-5" />
        <span className="text-[10px] font-medium">Quote</span>
      </a>
    </div>
  );
}
