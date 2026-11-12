import Link from "next/link";
import { Heart, Users, Briefcase, ArrowRight } from "lucide-react";

export default function GetInvolved() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-brand-950 py-20 text-center px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Get <span className="text-accent-500">Involved</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          There are many ways to support our mission. Whether you give your time, resources, or voice, you are helping us build a better world.
        </p>
      </div>

      {/* Ways to Help Grid */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Volunteer */}
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
              <Users size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-brand-900">Volunteer</h3>
            <p className="mb-8 flex-1 text-gray-500 text-sm leading-relaxed">
              Join our global network of volunteers. From local community outreach to international deployments, your time makes a direct impact.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-brand-500 hover:text-accent-600 transition">
              Join the Team <ArrowRight size={16} />
            </Link>
          </div>

          {/* Partner */}
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
              <Briefcase size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-brand-900">Corporate Partner</h3>
            <p className="mb-8 flex-1 text-gray-500 text-sm leading-relaxed">
              Collaborate with us through CSR initiatives, employee matching programs, or by sponsoring a specific program.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-brand-500 hover:text-accent-600 transition">
              Partner With Us <ArrowRight size={16} />
            </Link>
          </div>

          {/* Donate */}
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500">
              <Heart size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-brand-900">Make a Donation</h3>
            <p className="mb-8 flex-1 text-gray-500 text-sm leading-relaxed">
              100% of your donation goes directly to our programs. Every dollar helps us provide food, medicine, and education.
            </p>
            <button className="inline-flex items-center gap-2 font-bold text-brand-500 hover:text-accent-600 transition">
              Donate Now <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>

      {/* Big Call to Action Banner */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 px-6 py-16 text-center shadow-2xl sm:px-16">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to make a difference?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-brand-100">
              Contact us today to learn more about how you can contribute to our mission.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-3.5 text-sm font-bold text-brand-950 transition hover:bg-white hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}