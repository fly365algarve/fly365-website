import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Plane } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fixed-wing", label: "Fixed Wing" },
  { href: "/flexwing", label: "Flexwing" },
  { href: "/training", label: "Training" },
  { href: "/prices", label: "Prices" },
  { href: "/history", label: "Our History" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "T&Cs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-blur bg-white/95 border-b border-sky-200/60 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full sky-gradient flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <Plane className="w-5 h-5 text-white -rotate-45" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-sky">FLY365</span>
              <span className="text-lg font-light tracking-wide text-sky-dark ml-1">Algarve</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location === link.href
                    ? "text-sky bg-sky-100 font-semibold"
                    : scrolled
                      ? "text-slate-600 hover:text-sky hover:bg-sky-50"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 text-sm font-semibold rounded-full sky-gradient text-white hover:opacity-90 transition-opacity duration-200 shadow-md"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-slate-600 hover:text-sky hover:bg-sky-50" : "text-white hover:bg-white/15"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden nav-blur bg-white/98 border-b border-sky-200/60 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 pb-4 pt-2 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location === link.href
                    ? "text-sky bg-sky-50 font-semibold"
                    : "text-slate-600 hover:text-sky hover:bg-sky-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-3 text-sm font-semibold rounded-full sky-gradient text-white text-center hover:opacity-90 transition-opacity shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
