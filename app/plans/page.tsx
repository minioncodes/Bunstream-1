const plans = [
  {
    name: "Basic Protect",
    price: "$9.99/mo",
    features: [
      "Covers accidental damage",
      "Fast claim process",
      "1 device",
    ],
  },
  {
    name: "Total Protect",
    price: "$19.99/mo",
    features: [
      "All Basic features",
      "Theft & loss coverage",
      "2 devices",
    ],
  },
  {
    name: "Family Shield",
    price: "$29.99/mo",
    features: [
      "All Total features",
      "Covers up to 4 devices",
      "Priority support",
    ],
  },
  {
    name: "Home Tech Plus",
    price: "$39.99/mo",
    features: [
      "Covers TVs, consoles & smart home devices",
      "Accidental & power surge protection",
      "In-home service option",
    ],
  },
  {
    name: "Student Saver",
    price: "$7.99/mo",
    features: [
      "1 laptop or tablet",
      "Covers spills & screen cracks",
      "Ideal for college students",
    ],
  },
  {
    name: "ProTech Plan",
    price: "$49.99/mo",
    features: [
      "Up to 5 devices",
      "Priority same-day replacements",
      "24/7 expert tech support",
    ],
  },
  {
    name: "Travel Secure",
    price: "$14.99/mo",
    features: [
      "International device protection",
      "Lost device replacement",
      "Airport claim assistance",
    ],
  },
  {
    name: "Gadget Guard",
    price: "$11.99/mo",
    features: [
      "Covers wearables & accessories",
      "Water & impact protection",
      "Fast online claim approval",
    ],
  },
  {
    name: "Elite Protect",
    price: "$59.99/mo",
    features: [
      "Covers unlimited devices per household",
      "VIP support team",
      "Extended 2-year warranty on replacements",
    ],
  },
  {
    name: "Business Shield",
    price: "$79.99/mo",
    features: [
      "Covers up to 10 employee devices",
      "Business dashboard for claims",
      "Dedicated corporate account manager",
    ],
  },
  {
    name: "Enterprise Plus",
    price: "$149.99/mo",
    features: [
      "Custom coverage for 25+ devices",
      "On-site technical assistance",
      "Annual performance audit reports",
    ],
  },
  {
    name: "Eco Protect",
    price: "$8.49/mo",
    features: [
      "Certified refurbished replacements",
      "Sustainable packaging & recycling",
      "1-year green warranty",
    ],
  },
  {
    name: "Lifetime Care",
    price: "$299.99 one-time",
    features: [
      "Lifetime accidental damage coverage",
      "Transferable between devices",
      "No monthly payments ever",
    ],
  },
];


export default function Plans() {
  return (
    <section className="pt-24 pb-20 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Choose Your Plan</h1>
      <p className="text-gray-600 mb-12">
        Simple pricing. No hidden fees. Cancel anytime.
      </p>

      <div className="max-w-6xl mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{p.name}</h3>
            <p className="text-3xl font-bold mb-4">{p.price}</p>
            <ul className="text-gray-600 flex-grow space-y-2 mb-6">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
            <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
