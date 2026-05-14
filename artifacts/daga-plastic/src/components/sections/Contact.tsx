import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-16 h-1.5 bg-primary mb-10"></div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Corporate Office</h4>
                  <p className="text-muted-foreground">Kolkata, West Bengal, India<br />Serving Pan-India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Direct Contact</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Mr. Vijay Daga (Chairman): +91 98310 22610</p>
                    <p>Mr. Ajay Daga (Managing Director): +91 98302 74225</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p><a href="mailto:ajay@dagaplastic.in" className="hover:text-primary transition-colors">ajay@dagaplastic.in</a></p>
                    <p><a href="mailto:Info@dagaplastic.in" className="hover:text-primary transition-colors">Info@dagaplastic.in</a></p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Website</h4>
                  <p className="text-muted-foreground">
                    <a href="https://www.dagaplastic.in" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">www.dagaplastic.in</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-none px-8 py-6 text-lg h-auto w-full sm:w-auto">
                <a href="https://wa.me/919831022610" target="_blank" rel="noreferrer">
                  Connect on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-muted min-h-[400px] flex items-center justify-center border border-border">
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Location Map</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">Interactive Google Maps embed will render here to display exact corporate office coordinates.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
