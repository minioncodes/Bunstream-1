"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    location: "Austin, TX",
    text: "When my laptop screen cracked, ShieldCare replaced it within 3 days — no hassle at all. Their support team was incredibly responsive!",
    rating: 5,
  },
  {
    name: "Michael Carter",
    location: "Denver, CO",
    text: "I never thought I'd actually use a protection plan until I dropped my phone. The claim process was smooth and transparent. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rachel Green",
    location: "Chicago, IL",
    text: "Affordable pricing, excellent coverage, and real people on the support line. It’s rare to find that kind of service these days.",
    rating: 4,
  },
  {
    name: "Daniel Murphy",
    location: "Seattle, WA",
    text: "I had a water-damage issue, and ShieldCare handled it better than I expected. Super fast service and friendly representatives!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">
          What Our U.S. Customers Say
        </h2>
        <p className="text-gray-600 mb-12">
          Trusted by thousands of Americans who rely on ShieldCare to protect
          their devices every day.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition"
            >
              {/* Rating stars */}
              <div className="flex justify-center mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6">“{t.text}”</p>

              <div className="flex flex-col items-center">
                <span className="font-semibold text-gray-900">{t.name}</span>
                <span className="text-sm text-gray-500">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
