import Link from "next/link";
import { Heart, Users, Briefcase, ArrowRight } from "lucide-react";

export default function GetInvolved() {
  return (
    <div className="bg-[#F9FBF9] min-h-screen">
      {/* Page Header */}
      <div className="bg-[#113B1E] py-20 text-center px-4 border-b-4 border-[#228B22]">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Get <span className="text-[#4CBB17]">Involved</span>
        </h1>
        <p className="mt-4 text-lg text-green-50/90 max-w-2xl mx-auto leading-relaxed">
          There are many ways to support our mission. Whether you give your time, resources, or voice, you are helping us build a better world.
        </p>
      </div>

      {/* Ways to Help Grid */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

          {/* Volunteer */}
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-sm border border-[#228B22]/15 transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#228B22]/10 text-[#228B22]">
              <Users size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#113B1E]">Volunteer</h3>
            <p className="mb-8 flex-1 text-gray-700 text-base leading-relaxed">
              Join our global network of volunteers. From local community outreach to international deployments, your time makes a direct impact.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-[#228B22] hover:text-[#113B1E] transition">
              Join the Team <ArrowRight size={16} />
            </Link>
          </div>

          {/* Partner */}
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-sm border border-[#228B22]/15 transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4CBB17]/15 text-[#228B22]">
              <Briefcase size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#113B1E]">Corporate Partner</h3>
            <p className="mb-8 flex-1 text-gray-700 text-base leading-relaxed">
              Collaborate with us through CSR initiatives, employee matching programs, or by sponsoring a specific program.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-[#228B22] hover:text-[#113B1E] transition">
              Partner With Us <ArrowRight size={16} />
            </Link>
          </div>

          {/* Donate */}
          <div className="flex flex-col rounded-3xl bg-white p-8 shadow-sm border border-[#228B22]/15 transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#228B22]/10 text-[#228B22]">
              <Heart size={28} />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#113B1E]">Make a Donation</h3>
            <p className="mb-8 flex-1 text-gray-700 text-base leading-relaxed">
              100% of your donation goes directly to our programs. Every dollar helps us provide food, medicine, and education.
            </p>
            <button className="inline-flex items-center gap-2 font-bold text-[#228B22] hover:text-[#113B1E] transition">
              Donate Now <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>

      {/* Big Call to Action Banner */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#113B1E] px-6 py-16 text-center shadow-xl border-2 border-[#228B22] sm:px-16">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ready to make a difference?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-green-50/90 text-lg leading-relaxed">
              Contact us today to learn more about how you can contribute to our mission.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#4CBB17] px-8 py-3.5 text-sm font-extrabold text-[#0B2613] shadow-lg transition hover:bg-white hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}