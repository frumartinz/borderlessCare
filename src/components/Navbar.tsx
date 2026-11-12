"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Programs", href: "/programs" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm text-gray-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-900 text-accent-500">
            <Heart size={24} className="fill-accent-500" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-900">
            Borderless Care
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 transition hover:text-brand-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/get-involved"
            className="rounded-full bg-accent-500 px-6 py-2.5 text-sm font-bold text-brand-950 shadow-sm transition hover:bg-accent-400"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-gray-700 hover:text-brand-500"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/get-involved"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-accent-500 px-6 py-3 text-center text-sm font-bold text-brand-950 shadow-sm transition hover:bg-accent-400"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}