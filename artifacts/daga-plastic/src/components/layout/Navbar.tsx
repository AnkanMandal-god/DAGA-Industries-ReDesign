import { Menu, X, Triangle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      style={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
        boxShadow: isScrolled ? "0 1px 24px 0 rgba(0,0,0,0.10)" : "none",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        transition: "background-color 0.5s ease, box-shadow 0.5s ease, backdrop-filter 0.5s ease, padding 0.4s ease",
        paddingTop: isScrolled ? "12px" : "20px",
        paddingBottom: isScrolled ? "12px" : "20px",
      }}
      className="fixed top-0 w-full z-50"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Triangle className="w-8 h-8 text-primary fill-primary" />
          <span
            className="text-2xl font-black tracking-tight"
            style={{
              color: isScrolled ? "hsl(var(--foreground))" : "#ffffff",
              transition: "color 0.5s ease",
            }}
          >
            DAGA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
          <Button
            asChild
            className="bg-primary hover:bg-primary/85 text-white rounded-none px-6 transition-colors duration-300"
          >
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
            <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">
              <a href="#inquiry" onClick={() => setMobileMenuOpen(false)}>Get a Quote</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
