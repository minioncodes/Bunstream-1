import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand Info */}
          <div>
            <div className="text-lg font-semibold text-gray-900">BunStream</div>
            <p className="mt-2 text-sm text-gray-600">
              Reliable U.S.-based device protection — keeping your tech safe from
              drops, damage, and everyday accidents.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              support@bunstream.com
            </p>
            {/* Phone number with call icon */}
            <a
              href="tel:(833)224-9359"
              className="mt-2 flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              (833) 224-9359
            </a>
          </div>

          {/* Company Links */}
          <div>
            <div className="font-semibold text-gray-900">Company</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="/privacy" className="hover:text-blue-600 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-600 transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Notice */}
          <div>
            <div className="font-semibold text-gray-900">Legal Notice</div>
            <p className="mt-2 text-xs text-gray-500 leading-relaxed">
              Service availability, pricing, and features are subject to change
              and may vary by platform. All trademarks are property of their
              respective owners. BunStream operates across the United States.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} BunStream. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
