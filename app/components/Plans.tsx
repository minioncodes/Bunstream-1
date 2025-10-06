"use client";

import Link from "next/link";
import { ShieldCheck, DollarSign, Headphones } from "lucide-react";
import { motion } from "framer-motion";

export default function PlansIntro() {
  const features = [
    {
      title: "Nationwide Coverage",
      desc: "Service available in all 50 states with lightning-fast claim approval.",
      icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Affordable Plans",
      desc: "Flexible monthly and yearly options that fit every lifestyle and budget.",
      icon: <DollarSign className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "24/7 Support",
      desc: "U.S.-based customer service team always ready to help when you need it.",
      icon: <Headphones className="h-6 w-6 text-blue-600" />,
    },
  ];

  return (
    <section className="relative overflow-hidden pt-28 pb-24 text-center">
      {/* Decorative background glow */}
      <div className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-[160px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-100/40 blur-[140px]"></div>

      {/* Text Section */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-blue-700 leading-tight mb-4"
        >
          Protect Your Devices with Confidence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-10"
        >
          Accidental damage? No problem. BunStream keeps your devices covered
          across the U.S. — quick replacements, no hidden fees, and friendly
          support anytime.
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/plans"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            Explore Protection Plans
          </Link>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 mt-20 grid gap-8 max-w-6xl mx-auto px-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
