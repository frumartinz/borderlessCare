import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#F9FBF9] min-h-screen">
      {/* Page Header */}
      <div className="bg-[#113B1E] py-20 text-center px-4 border-b-4 border-[#228B22]">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Contact <span className="text-[#4CBB17]">Us</span>
        </h1>
        <p className="mt-4 text-lg text-green-50/90 max-w-2xl mx-auto leading-relaxed">
          Have a question, want to volunteer, or need to reach our team? We'd love to hear from you.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* Contact Information */}
          <div>
            <span className="inline-block rounded-full bg-[#228B22]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#228B22] mb-3">
              Reach Out
            </span>
            <h2 className="text-3xl font-bold text-[#113B1E] mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-10 text-lg leading-relaxed">
              Our team is available Monday through Friday, 9am to 5pm. We aim to respond to all inquiries within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#228B22]/10 text-[#228B22]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#113B1E] text-lg">Our Location</h3>
                  <p className="text-gray-700 text-base mt-1">123 Care Avenue, Suite 400<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#228B22]/10 text-[#228B22]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#113B1E] text-lg">Email Us</h3>
                  <p className="text-gray-700 text-base mt-1">hello@borderlesscare.org<br />partnerships@borderlesscare.org</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#228B22]/10 text-[#228B22]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#113B1E] text-lg">Call Us</h3>
                  <p className="text-gray-700 text-base mt-1">+1 (234) 567-890<br />+1 (234) 567-891</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-md border border-[#228B22]/15">
            <h3 className="text-2xl font-bold text-[#113B1E] mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-[#113B1E] mb-1.5">First Name</label>
                  <input type="text" id="firstName" className="w-full rounded-lg border border-gray-300 bg-[#F9FBF9] px-4 py-3 text-base text-gray-900 focus:border-[#228B22] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#228B22]/25" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-[#113B1E] mb-1.5">Last Name</label>
                  <input type="text" id="lastName" className="w-full rounded-lg border border-gray-300 bg-[#F9FBF9] px-4 py-3 text-base text-gray-900 focus:border-[#228B22] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#228B22]/25" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#113B1E] mb-1.5">Email Address</label>
                <input type="email" id="email" className="w-full rounded-lg border border-gray-300 bg-[#F9FBF9] px-4 py-3 text-base text-gray-900 focus:border-[#228B22] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#228B22]/25" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-[#113B1E] mb-1.5">Subject</label>
                <select id="subject" className="w-full rounded-lg border border-gray-300 bg-[#F9FBF9] px-4 py-3 text-base text-gray-900 focus:border-[#228B22] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#228B22]/25">
                  <option>General Inquiry</option>
                  <option>Volunteering</option>
                  <option>Partnership</option>
                  <option>Donation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#113B1E] mb-1.5">Message</label>
                <textarea id="message" rows={4} className="w-full rounded-lg border border-gray-300 bg-[#F9FBF9] px-4 py-3 text-base text-gray-900 focus:border-[#228B22] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#228B22]/25" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#228B22] px-6 py-4 text-base font-bold text-white shadow-md transition hover:bg-[#113B1E]">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}