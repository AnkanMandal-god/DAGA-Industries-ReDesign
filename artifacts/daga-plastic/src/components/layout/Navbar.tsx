import { Link } from "wouter";
import { Menu, X, Triangle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Triangle className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-primary"} fill-primary`} />
          <span className={`text-2xl font-black tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
            DAGA
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-none px-6">
            <a href="#inquiry">Get a Quote</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground bg-white/20 rounded-md backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-foreground" : "text-white"} />}
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
                className="py-3 text-foreground font-medium border-b border-border/50 hover:text-primary"
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
