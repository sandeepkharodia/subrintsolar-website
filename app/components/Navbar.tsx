"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            className="h-12 w-auto"
            alt="Subrint Solar"
          />

          <div>
            <h1 className="font-bold text-xl text-slate-900">
              SUBRINT SOLAR
            </h1>

            <p className="text-xs text-orange-600">
              Powering India with Clean Energy
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex gap-8 font-medium">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-orange-500 transition"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919650704703"
          className="hidden lg:flex items-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-lg hover:bg-orange-600"
        >
          <Phone size={18} />
          Call Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-6 py-4 border-b"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <a
            href="tel:+919650704703"
            className="block bg-orange-500 text-white text-center py-4"
          >
            📞 Call Now
          </a>
        </div>
      )}
    </header>
  );
}