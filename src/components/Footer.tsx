import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-accent-500">
                <Heart size={20} className="fill-accent-500" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Borderless Care Foundation
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              We are a nonprofit organization dedicated to providing essential resources, 
              education, and medical support to underserved communities globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-accent-500">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-accent-500">Our Programs</Link></li>
              <li><Link href="/get-involved" className="hover:text-accent-500">Get Involved</Link></li>
              <li><Link href="/contact" className="hover:text-accent-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-accent-500" />
                <span>123 Care Avenue, City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent-500" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent-500" />
                <span>hello@borderlesscare.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          © 2026 Borderless Care Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}