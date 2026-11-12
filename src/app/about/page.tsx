import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Heart, Globe2, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-brand-950 py-20 text-center px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          About <span className="text-accent-500">Borderless Care</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          We believe that compassion should not be restricted by borders, geography, or circumstance.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              Borderless Care Foundation was founded on a simple but powerful idea: that every human being deserves access to basic necessities, regardless of where they were born.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              What started as a small group of volunteers delivering medical supplies to a single village has grown into a global network of dedicated individuals, partners, and donors working together to create sustainable change.
            </p>
            <div className="flex gap-4">
              <Link
                href="/programs"
                className="flex items-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-500"
              >
                Explore Our Work <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
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
      <div className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900">Our Core Values</h2>
            <div className="mt-2 h-1 w-20 bg-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Value 1 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center transition hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2">Compassion First</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We treat every individual with dignity and empathy, listening to their needs before acting.
              </p>
            </div>

            {/* Value 2 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center transition hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-50 text-accent-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2">Total Transparency</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We are committed to showing exactly where every dollar goes and the impact it creates.
              </p>
            </div>

            {/* Value 3 */}
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100 text-center transition hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-500">
                <Globe2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-2">Global Perspective</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We collaborate with local leaders to ensure our solutions are culturally relevant and sustainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}