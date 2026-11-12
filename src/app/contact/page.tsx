import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-950 py-20 text-center px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Contact <span className="text-accent-500">Us</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Have a question, want to volunteer, or need to reach our team? We'd love to hear from you.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-brand-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Our team is available Monday through Friday, 9am to 5pm. We aim to respond to all inquiries within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900">Our Location</h3>
                  <p className="text-gray-500 text-sm mt-1">123 Care Avenue, Suite 400<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900">Email Us</h3>
                  <p className="text-gray-500 text-sm mt-1">hello@borderlesscare.org<br />partnerships@borderlesscare.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-900">Call Us</h3>
                  <p className="text-gray-500 text-sm mt-1">+1 (234) 567-890<br />+1 (234) 567-891</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-gray-50 p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-900 mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select id="subject" className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 bg-white">
                  <option>General Inquiry</option>
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Donation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-900 px-6 py-4 text-sm font-bold text-white transition hover:bg-brand-500">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}