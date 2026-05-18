import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import dagaLogo from "@assets/image_1778790689221.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 60);
      setIsHeroVisible(y < window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Clients", href: "#clients" },
    { name: "Feedback", href: "#feedback" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
        boxShadow: isScrolled ? "0 1px 24px 0 rgba(0,0,0,0.10)" : "none",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        transition: "background-color 0.5s ease, box-shadow 0.5s ease, backdrop-filter 0.5s ease, padding 0.4s ease",
        paddingTop: isScrolled ? "10px" : "18px",
        paddingBottom: isScrolled ? "10px" : "18px",
      }}
      className="fixed top-0 w-full z-50"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo — fades out when hero is visible, fades in when scrolled down */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group"
          style={{
            opacity: isHeroVisible ? 0 : 1,
            pointerEvents: isHeroVisible ? "none" : "auto",
            transition: "opacity 0.5s ease",
          }}
        >
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/70 transition-all duration-300 bg-white shadow-sm">
            <img src={dagaLogo} alt="Daga Logo" className="w-full h-full object-contain" />
          </div>
          <span
            className="text-xl font-black tracking-tight"
            style={{
              color: isScrolled ? "hsl(var(--foreground))" : "#ffffff",
              transition: "color 0.5s ease",
            }}
          >
            DAGA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium relative group/link transition-colors duration-300 hover:text-primary ${
                isScrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover/link:w-full rounded-full" />
            </a>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/85 text-white rounded-full px-5 py-2 text-sm transition-colors duration-300">
            <a href="#inquiry">Get a Quote</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-md transition-colors duration-300"
          style={{ color: isScrolled ? "hsl(var(--foreground))" : "#ffffff" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-3 text-foreground font-medium border-b border-border/50 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90 text-white rounded-full">
              <a href="#inquiry" onClick={() => setMobileMenuOpen(false)}>Get a Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
