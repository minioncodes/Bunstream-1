export const metadata = {
  title: "Terms of Service | BunStream",
  description: "Read the Terms and Conditions for using BunStream's device protection services in the U.S.",
};

export default function TermsPage() {
  return (
    <section className="pt-24 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Terms of Service</h1>
      <p className="text-gray-700 mb-4">
        By accessing or using BunStream, you agree to these Terms of Service. Please read them carefully before using our site or purchasing a protection plan.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Service Overview</h2>
      <p className="text-gray-700 mb-4">
        BunStream provides device protection services for smartphones, laptops, tablets, and other electronics within the United States.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Obligations</h2>
      <p className="text-gray-700 mb-4">
        You agree to provide accurate information and comply with all applicable laws. BunStream reserves the right to terminate or refuse service for violations.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        BunStream is not responsible for indirect, incidental, or consequential damages arising from service use or product coverage limitations.
      </p>
    </section>
  );
}
