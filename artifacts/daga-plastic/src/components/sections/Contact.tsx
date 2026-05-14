import { User, Phone, Mail, Globe } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-0 bg-white">
      <div className="grid lg:grid-cols-2 min-h-[520px]">

        {/* Left — Active Google Map */}
        <div className="relative min-h-[340px] lg:min-h-full border-r border-slate-200">
          <iframe
            title="Daga Plastic Industries Location"
            src="https://maps.google.com/maps?q=Daga+Plastic+Industries+Kolkata+West+Bengal+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "340px", display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right — Quick Contact card (dark, matching reference image) */}
        <div className="bg-[#111111] text-white px-8 py-12 md:px-14 md:py-16 flex flex-col justify-center">
          <h2 className="text-xl font-extrabold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Contact US:</h2>

          <div className="space-y-6 text-sm leading-relaxed">
            <div>
              <p className="font-extrabold uppercase tracking-wider text-white mb-1 flex items-center gap-2">
                <User className="w-4 h-4 text-primary shrink-0" />
                Contact Person
              </p>
              <p className="text-white/70 pl-6">Mr. Vijay Daga (Chairman)</p>
              <p className="text-white/70 pl-6">Mr. Ajay Daga (Managing Director)</p>
            </div>

            <div>
              <p className="font-extrabold uppercase tracking-wider text-white mb-1 flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                Mobile
              </p>
              <a
                href="tel:+919831022610"
                className="block text-white/70 pl-6 hover:text-primary transition-colors"
              >
                0 98310 22610
              </a>
              <a
                href="tel:+919830274225"
                className="block text-white/70 pl-6 hover:text-primary transition-colors"
              >
                0 98302 74225
              </a>
            </div>

            <div>
              <p className="font-extrabold uppercase tracking-wider text-white mb-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                E-Mail
              </p>
              <a href="mailto:ajay@dagaplastic.in" className="block text-white/70 pl-6 hover:text-primary transition-colors">
                ajay@dagaplastic.in
              </a>
              <a href="mailto:Info@dagaplastic.in" className="block text-white/70 pl-6 hover:text-primary transition-colors">
                Info@dagaplastic.in
              </a>
              <a href="mailto:ajdaga00@gmail.com" className="block text-white/70 pl-6 hover:text-primary transition-colors">
                ajdaga00@gmail.com
              </a>
            </div>

            <div>
              <p className="font-extrabold uppercase tracking-wider text-white mb-1 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary shrink-0" />
                Website
              </p>
              <a
                href="https://www.dagaplastic.in"
                target="_blank"
                rel="noreferrer"
                className="block text-white/70 pl-6 hover:text-primary transition-colors"
              >
                www.dagaplastic.in
              </a>
            </div>

            <div className="pt-2 border-t border-white/10">
              <p className="font-extrabold uppercase tracking-wider text-white mb-1">Powered By:</p>
              <p className="text-white/40 pl-0 text-xs">www.calcuttayellowpages.com</p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919831022610"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 w-fit text-sm"
            data-testid="link-whatsapp-contact"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
