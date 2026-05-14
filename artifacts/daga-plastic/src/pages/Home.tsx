import { Navbar } from "@/components/layout/Navbar";
import { MobileStickyNav } from "@/components/layout/MobileStickyNav";
import { DesktopFloatingActions } from "@/components/layout/DesktopFloatingActions";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Quality } from "@/components/sections/Quality";
import { Clients } from "@/components/sections/Clients";
import { Inquiry } from "@/components/sections/Inquiry";
import { Feedback } from "@/components/sections/Feedback";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Quality />
        <Clients />
        <Inquiry />
        <Feedback />
        <Contact />
      </main>
      <Footer />
      <MobileStickyNav />
      <DesktopFloatingActions />
    </div>
  );
}
