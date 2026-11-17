import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Heart, Globe2, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#F9FBF9]">
      {/* Page Header */}
      <div className="bg-[#113B1E] py-20 text-center px-4 border-b-4 border-[#228B22]">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          About <span className="text-[#4CBB17]">Borderless Care</span>
        </h1>
        <p className="mt-4 text-lg text-green-50/90 max-w-2xl mx-auto leading-relaxed">
          We believe that compassion should not be restricted by borders, geography, or circumstance.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-[#228B22]/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#228B22] mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl font-bold text-[#113B1E] mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Borderless Care Foundation was founded on a simple but powerful idea: that every human being deserves access to basic necessities, regardless of where they were born.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              What started as a small group of volunteers delivering medical supplies to a single village has grown into a global network of dedicated individuals, partners, and donors working together to create sustainable change.
            </p>
            <div className="flex gap-4">
              <Link
                href="/programs"
                className="flex items-center gap-2 rounded-full bg-[#228B22] px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#113B1E]"
              >
                Explore Our Work <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-2 border-[#228B22]/20">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
              alt="Volunteers working together"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white py-20 px-6 border-t border-green-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#113B1E]">Our Core Values</h2>
            <div className="mt-3 h-1.5 w-20 bg-[#4CBB17] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Value 1 */}
            <div className="rounded-2xl bg-[#F9FBF9] p-8 shadow-sm border border-[#228B22]/15 text-center transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#228B22]/10 text-[#228B22]">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#113B1E] mb-2">Compassion First</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We treat every individual with dignity and empathy, listening to their needs before acting.
              </p>
            </div>

            {/* Value 2 */}
            <div className="rounded-2xl bg-[#F9FBF9] p-8 shadow-sm border border-[#228B22]/15 text-center transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4CBB17]/15 text-[#228B22]">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#113B1E] mb-2">Total Transparency</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We are committed to showing exactly where every dollar goes and the impact it creates.
              </p>
            </div>

            {/* Value 3 */}
            <div className="rounded-2xl bg-[#F9FBF9] p-8 shadow-sm border border-[#228B22]/15 text-center transition hover:-translate-y-1 hover:shadow-md hover:border-[#228B22]/40">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#228B22]/10 text-[#228B22]">
                <Globe2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#113B1E] mb-2">Global Perspective</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We collaborate with local leaders to ensure our solutions are culturally relevant and sustainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}