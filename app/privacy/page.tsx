export const metadata = {
  title: "Privacy Policy | BunStream",
  description: "Learn how BunStream collects, uses, and protects your personal data in accordance with U.S. privacy standards.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-24 pb-20 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        BunStream values your privacy. This Privacy Policy explains how we handle your personal information when you use our services or visit our website.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect personal data such as name, email, and device information when you sign up for a protection plan or contact support.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
      <p className="text-gray-700 mb-4">
        Your information is used to process claims, provide support, and improve service quality. We do not sell or share personal data with third parties for profit.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Contact Us</h2>
      <p className="text-gray-700 mb-4">
        For questions, contact us at <a href="mailto:support@BunStream.com" className="text-blue-600 underline">support@BunStream.com</a>.
      </p>
    </section>
  );
}
