"use client";

import Link from "next/link";
import { Menu, X, PlaySquare, Phone } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        {/* Logo + Brand Name */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-gray-800 hover:text-blue-600"
        >
          <span>BunStream</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/plans"
            className="font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Plans
          </Link>

          {/* Phone CTA */}
          <a
            href="tel:(844) 586-5473"
            className="flex items-center gap-2 font-semibold text-gray-800 hover:text-blue-600 transition"
          >
            <Phone className="h-5 w-5 text-blue-600" />
            (844) 586-5473
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden text-gray-800 hover:text-blue-600 transition"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col items-start gap-4 px-5 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              href="/plans"
              onClick={() => setOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Plans
            </Link>
            <a
              href="tel:(844) 586-5473"
              className="flex items-center gap-2 font-semibold text-gray-800 hover:text-blue-600 transition"
            >
              <Phone className="h-5 w-5 text-blue-600" />
              (844) 586-5473
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
