"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.webp?a=1&b=1&s=612x612&w=0&k=20&c=GOfKER2wccz8_UMtG0Jk4uQH2TgkUuHQhGT08EkFTOk=",
  "https://media.istockphoto.com/id/1972286424/photo/digital-security-and-privacy-background-cyber-and-crypto-security-shield-on-futuristic-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=p9hhcDjZcPmqK7BoG8id_45IaeeyaYatpJufudbSohY=",
  "https://media.istockphoto.com/id/1169668297/photo/network-security-concept-cyber-protection-anti-virus-software.webp?a=1&b=1&s=612x612&w=0&k=20&c=1ZS-GXCCH4HB7RVU0rSagfLwr_xqGfDY3U_DePao5n8=",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-blue-700 mb-4 leading-tight">
            Protect What Matters — <br /> Your Devices
          </h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            Affordable, U.S.-based protection for your phones, laptops, and tablets.
            Hassle-free claims, fast service, and complete peace of mind.
          </p>
          <Link
            href="/plans"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            View Plans
          </Link>
        </div>

        {/* RIGHT: Image Slider */}
        <div className="relative w-full h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Device protection visual"
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      {/* Decorative blur glow */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-blue-200/40 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
